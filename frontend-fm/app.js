const body = document.body


fetch('https://localhost:3000/pets')
    .then(response => response.json())
    .then(animals => {
        animals.forEach(animal => {
            let div = document.createElement('div')
            let type = document.createElement('p')

            type.innerText = `${animal.species}`

            div.append(type)
            document.append(div)
        })
    })