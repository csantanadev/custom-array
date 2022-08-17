class CustomArray {

    constructor(array) {

        if (!array) {
            throw new Error('Array required !')
        }

        if (typeof array !== 'object') {
            throw new Error('invalid Array !')
        }

        this.array = array
    }

    // Cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
    myFilter(callbackFunction) {

        const interno = []

        // varrendo cada elemento do meu array local
        this.array.forEach((value) => {

            // se o predicado retornou true adiciona no array de retorno 
            if (callbackFunction(value)) {
                interno.push(value)
            }

        })
        return interno
    }

    // Invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado. 
    myMap(callbackFunction) {

        const interno = []

        // varrendo cada elemento do meu array local
        this.array.forEach((value) => {

            // retorno o array transformado pela fn de callback
            interno.push(callbackFunction(value))

        })
        return interno
    }

    // Executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
    myReduce(callbackFunction, valorInitial) {

        // se eu nao mandar um valor inicial, o acumulador é o primeiro elemento e o valor é o segundo elemento
        // se eu mandar um valor inicial, o acumulador é o valor inicial, e o valor é o primeiro elemento do array
        let acum = 0
        let vl = valorInitial ? valorInitial : this.array[0]

        // varrendo cada elemento do meu array local
        this.array.forEach((value, index) => {

            if ((index > 0) || (valorInitial)) {

                // acumulo e passo a partir do primeiro retorno
                acum = callbackFunction(acum !== 0 ? acum : vl, value)
            }
        })

        return acum
    }

    // Executa uma dada função em cada elemento de um array.
    // Retorna para a cb o elemento, index e o proprio array.
    myForEach(callbackFunction) {

        let i = 0;

        for (let e of this.array) {
            callbackFunction(e, i, this.array)
            i++;
        }
    }

    // Retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. 
    // Caso contrario, undefined é retornado.
    myFind(callbackFunction) {

        for (let e of this.array) {

            if (callbackFunction(e)) {
                return e
            }
        }
        return undefined;
    }

    // Retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. 
    // Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.
    myFindIndex(callbackFunction) {

        let i = 0;
        for (let e of this.array) {

            if (callbackFunction(e)) {
                return i
            }
            i++;
        }
        return -1;
    }

    // Testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e 
    // retorna um valor true ou false.
    mySome(callbackFunction) {

        for (let e of this.array) {
            if (callbackFunction(e)) {
                return true
            }
        }
        return false;
    }

    // Determina se um array inclui um determinado valor, retornando true ou false conforme apropriado.
    myIncludes(param) {
        for (let e of this.array) {
            if (e === param) {
                return true
            }
        }
        return false;
    }

    // O primeiro elemento do array torna-se o último e o último elemento torna-se o primeiro.
    myReverse() {
        const interno = []

        for (let i = this.array.length - 1; i >= 0; i--) {
            interno.push(this.array[i])
        }
        return interno;
    }

}


// usando a classe
const meuArray = new CustomArray([1, 2, 3, 4, 5])

// filter
const apenasPares = meuArray.myFilter(value => value % 2 === 0)
console.log('filter -> ', apenasPares)

// map
const transformado = meuArray.myMap(value => value * 2)
console.log('map -> ', transformado)

// reduce
const somaTotalIniciandoCom10 = meuArray.myReduce((acum, value) => acum + value, 10)
console.log('reduce -> somaTotal passando valor inicial:', somaTotalIniciandoCom10)

const somaTotal = meuArray.myReduce((acum, value) => acum + value)
console.log('reduce -> somaTotal:', somaTotal)

// forEach
meuArray.myForEach((el, index, arr) => {
    console.log('foreach -> ', el, index, arr)
})

// find
const resultFind = meuArray.myFind(e => e > 3)
console.log('find -> ', resultFind)

// find
const resulFindIndex = meuArray.myFindIndex(e => e > 3)
console.log('findIndex -> ', resulFindIndex)

// some
const resultSome = meuArray.mySome(e => e > 3)
console.log('some -> ', resultSome)

// includes
const resultIncludes = meuArray.myIncludes(5)
console.log('includes -> ', resultIncludes)

// reverse
console.log('reverse -> ', meuArray.myReverse())

