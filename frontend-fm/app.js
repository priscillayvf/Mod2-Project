const body = document.body
const selectTag = document.querySelector('#selectTag')
const cardContainer = document.createElement('div')

cardContainer.className = 'cardContainer'

function createCard(pets) {
    //let flipCard = document.querySelector('#flipCard')
    pets.forEach(pet => {
    

        let flipCard = document.createElement('div')
        let flipCardBack = document.createElement('div')
        let flipCardFront = document.createElement('div')
        let flipCardInner = document.createElement('div')
        
        
        flipCardFront.className = 'flipCardFront'
        flipCardBack.className = "flipCardBack"
        flipCardInner.className = 'flipCardInner'
        
        let name = document.createElement('h2')
        let breed = document.createElement('p')
        let gender = document.createElement('p')
        let age = document.createElement('p')
        let image = document.createElement('img')
        
        name.innerText = pet.name
        breed.innerText = pet.breed
        gender.innerText = pet.gender
        age.innerText = 'Age: ' + pet.age
        image.src = pet.image
console.log(pet)
    
    flipCardFront.append(image)
    flipCardBack.append(name, breed, gender, age)
    flipCardInner.append(flipCardBack, flipCardFront)    
    flipCard.append(flipCardInner)
    cardContainer.append(flipCard)
    body.append(cardContainer)
  })
}

fetch('http://localhost:3000/pets')
.then(response => response.json())
.then(pets => createCard(pets))
