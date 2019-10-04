const body = document.body
// const selectTag = document.querySelector('#selectTag')
// const flipCard = document.querySelector("#flipCard")
const form = document.querySelector(".forms")
const sFilter = document.querySelector("#species")
const aFilter = document.querySelector("#age")
const gFilter = document.querySelector("#gender")
const submit = document.querySelector("#submit")
const header = document.querySelector(".header")





let thePets = []
let sResult = ""
let aResult = ""
let gResult = ""

function allPets(pets){
  thePets = pets
}

fetch('http://localhost:3000/pets')
.then(response => response.json())
.then(pets => createCard(pets))


sFilter.addEventListener("change", (filter) => {
  sResult = filter.target.value
})

aFilter.addEventListener("change", (filter) => {
  aResult = filter.target.value
})

gFilter.addEventListener("change", (filter) => {
  gResult = filter.target.value
})

submit.addEventListener("click", event => {
  event.preventDefault()
  fetch('http://localhost:3000/pets')
  .then(response => response.json())
  .then(result => petFilter(result))
})




function createCard(pets) {
  const cardContainer = document.createElement('div')
  cardContainer.className = 'cardContainer'

    pets.forEach(pet => {
    
        // let flipCardBack = document.createElement('div')
        // let flipCardFront = document.createElement('div')
        // let flipCardInner = document.createElement('div')
        
        // //flipCard.href = `cats.html`

        // flipCardFront.className = 'flipCardFront'
        // flipCardBack.className = "flipCardBack"
        // flipCardInner.className = 'flipCardInner'
        let name = document.createElement('h3')
        let breed = document.createElement('p')
        let gender = document.createElement('p')
        let age = document.createElement('p')
        let image = document.createElement('img')
        let flipCard = document.createElement("div")
        let flipCardBack = document.createElement('div')
        let flipCardFront = document.createElement('div')
        let flipCardInner = document.createElement('div')

        flipCardFront.className = 'flipCardFront'
        flipCardBack.className = "flipCardBack"
        flipCardInner.className = 'flipCardInner'
        flipCard.classList.add("flipCard")
        name.innerText = pet.name
        breed.innerText = pet.breed
        gender.innerText = pet.gender
        age.innerText =  ' Age: ' + pet.age
        image.src = pet.image

      
        flipCardFront.appendChild(image)
        flipCardBack.append(name, breed, age, gender)
        flipCardInner.append(flipCardBack, flipCardFront)    
        flipCard.appendChild(flipCardInner)
        cardContainer.append(flipCard)
        body.append(cardContainer)

      
    
  })
}


function petFilter(pets){
  body.innerHTML = ""



  let genAge = ""
  const cardContainer = document.createElement('div')
  cardContainer.className = 'cardContainer'

  pets.filter(pet => pet.species == sResult).filter(pet => pet.gender.includes(gResult)).forEach(pet => {
    
    // flipCard.href = `cats.html`
    let flipCard = document.createElement("div")
    let flipCardBack = document.createElement('div')
    let flipCardFront = document.createElement('div')
    let flipCardInner = document.createElement('div')
  
    flipCard.innerHTML = ""
    flipCardBack.innerHTML = ""
    flipCardFront.innerHTML = ""
    flipCardInner.innerHTML = ""
    
    let name = document.createElement('h3')
    let breed = document.createElement('p')
    let gender = document.createElement('p')
    let age = document.createElement('p')
    let image = document.createElement('img')

    flipCardFront.className = 'flipCardFront'
    flipCardBack.className = "flipCardBack"
    flipCardInner.className = 'flipCardInner'
    flipCard.classList.add("flipCard")
    
    if (pet.age < 4) {
      genAge = "young"
    }
    else if (4 < pet.age && pet.age < 8) {
      genAge = "adult"
    }
    else {
      genAge = "senior"
    }

    if (aResult == genAge) {
      name.innerText = pet.name
      breed.innerText = pet.breed
      gender.innerText = pet.gender
      age.innerText =  ' Age: ' + pet.age
      image.src = pet.image
      flipCardBack.append(name, breed, age, gender)
      flipCardFront.appendChild(image)
      flipCardInner.append(flipCardBack, flipCardFront)    
      flipCard.append(flipCardInner)
      cardContainer.append(flipCard)
    }

  })
  body.append(header, form, cardContainer)
  
}
   



