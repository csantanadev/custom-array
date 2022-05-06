class CustomArray {

    constructor(array) {

        if (!array) {
            throw new Error('Array requiried !')
        }

        if (typeof array !== 'object') {
            throw new Error('invalid Array !')
        }

        this.array = array
    }

    filter(callbackFunction) {

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

    map(callbackFunction) {

        const interno = []

        // varrendo cada elemento do meu array local
        this.array.forEach((value) => {

            // retorno o array transformado pela fn de callback
            interno.push(callbackFunction(value))

        })
        return interno
    }

    reduce(callbackFunction, valorInitial) {

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

}

// usando a classe
const meuArray = new CustomArray([1, 2, 3, 4, 5])

// filter
const apenasPares = meuArray.filter(value => value % 2 === 0)
console.log(apenasPares)

// map
const transformado = meuArray.map(value => value * 2)
console.log(transformado) 

// reduce
const somaTotalIniciandoCom10 = meuArray.reduce((acum, value) => acum + value, 10)
console.log('somaTotal passando valor inicial:', somaTotalIniciandoCom10)

const somaTotal = meuArray.reduce((acum, value) => acum + value)
console.log('somaTotal:', somaTotal)
