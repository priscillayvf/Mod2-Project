const body = document.body
// const selectTag = document.querySelector('#selectTag')
const cardContainer = document.createElement('div')
const sFilter = document.querySelector("#species")
const aFilter = document.querySelector("#age")
const gFilter = document.querySelector("#gender")
const submit = document.querySelector("#submit")
let thePets = []
let sResult = ""
let aResult = ""
let gResult = ""


cardContainer.className = 'cardContainer'

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
  petFilter(thePets)
})




// function createCard(pets) {
//     // let flipCard = document.querySelector('#flipCard')
//     pets.forEach(pet => {
    

//         let flipCard = document.createElement('a')
//         let flipCardBack = document.createElement('div')
//         let flipCardFront = document.createElement('div')
//         let flipCardInner = document.createElement('div')
        
//         flipCard.href = `cats.html`

//         flipCardFront.className = 'flipCardFront'
//         flipCardBack.className = "flipCardBack"
//         flipCardInner.className = 'flipCardInner'
        
//         let name = document.createElement('h3')
//         let breed = document.createElement('p')
//         let gender = document.createElement('p')
//         let age = document.createElement('p')
//         let image = document.createElement('img')
        
//         name.innerText = pet.name
//         breed.innerText = pet.breed
//         gender.innerText = pet.gender
//         age.innerText =  ' Age: ' + pet.age
//         image.src = pet.image

// // console.log(pet)
    
//     flipCardFront.append(image)
//     flipCardBack.append(name, breed, age, gender)
//     flipCardInner.append(flipCardBack, flipCardFront)    
//     flipCard.append(flipCardInner)
//     cardContainer.append(flipCard)
//     body.append(cardContainer)
    
// })
 
// }


function petFilter(pets){
  pets.filter(pet => pet.species == sResult).forEach(pet => {

    body.innerHTML = ""

    let flipCard = document.createElement('a')
    let flipCardBack = document.createElement('div')
    let flipCardFront = document.createElement('div')
    let flipCardInner = document.createElement('div')
    
    // flipCard.href = `cats.html`

    flipCardFront.className = 'flipCardFront'
    flipCardBack.className = "flipCardBack"
    flipCardInner.className = 'flipCardInner'
    

    let name = document.createElement('h3')
    let breed = document.createElement('p')
    let gender = document.createElement('p')
    let age = document.createElement('p')
    let image = document.createElement('img')
      

    if (pet.gender.includes(gResult)) {
      if(aResult == "young" && pet.age < 4) {
        name.innerText = pet.name
        breed.innerText = pet.breed
        gender.innerText = pet.gender
        age.innerText =  ' Age: ' + pet.age
        image.src = pet.image
        flipCardBack.append(name, breed, age, gender)
      }
      else if (aResult == "adult" &&  4 < pet.age < 7) {
        name.innerText = pet.name
        breed.innerText = pet.breed
        gender.innerText = pet.gender
        age.innerText =  ' Age: ' + pet.age
        image.src = pet.image
        flipCardBack.append(name, breed, age, gender)
      }
      else {
        name.innerText = pet.name
        breed.innerText = pet.breed
        gender.innerText = pet.gender
        age.innerText =  ' Age: ' + pet.age
        image.src = pet.image
        flipCardBack.append(name, breed, age, gender)
      }

    }


    flipCardFront.append(image)
    flipCardInner.append(flipCardBack, flipCardFront)    
    flipCard.append(flipCardInner)
    cardContainer.append(flipCard)

  
  })
  body.append(cardContainer)
}



function allPets(pets){
  thePets = pets
}


// fetch('http://localhost:3000/pets')
// .then(response => response.json())
// .then(pets => createCard(pets))
   

fetch('http://localhost:3000/pets')
.then(response => response.json())
.then(result => allPets(result))
   



