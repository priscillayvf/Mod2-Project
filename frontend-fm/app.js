const body = document.body




function createCards(pets){
    pets.forEach(pet => {
        let div = document.createElement('div')
        let name = document.createElement('h2')
        // let species = document.createElement('p')
        let breed = document.createElement('p')
        let gender = document.createElement('h3')
        let age = document.createElement('h3')

        name.innerText = pet.name
        breed.innerText = pet.breed
        gender.innerText = `${pet.gender}`
        age.innerText = `${pet.age}`

        div.append(name, breed, gender, age)
        body.appendChild(div)

    })

}


fetch('http://localhost:3000/pets')
    .then(response => response.json())
    .then(createCards)
