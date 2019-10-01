const body = document.body

// fetch("https://localhost:3000/pets")
//     .then(response => response.json())
//     .then(response => console.log(response))


// fetch('https://localhost:3001/pets')
//     .then(response => response.json())
//     .then(animals => {
//         animals.forEach(animal => {
//             let div = document.createElement('div')
//             let type = document.createElement('p')

//             type.innerText = `${animal.species}`

//             div.append(type)
//             body.append(div)
//         })
//     })


fetch('http://localhost:3000/pets')
    .then(response => response.json())
    .then(pets => {
        
        pets.forEach(pet => {
            let div = document.createElement('div')
            let h2 = document.createElement('h2')
            let h3 = document.createElement('h3')
            let p = document.createElement('p')
        
            h2.innerText = pet.name
            h3.innerText = pet.breed
            p.innerText = pet.gender
        

        div.append(h2, h3, p)
        body.appendChild(div)
        })
    })