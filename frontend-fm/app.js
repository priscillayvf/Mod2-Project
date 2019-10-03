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

function createCard(pets) {
    let flipCard = document.querySelector('#flipCard')
    pets.forEach(pet => {
    

        let cardContainer = document.createElement('div')
        let flipCardBack = document.createElement('div')
        flipCardBack.className = "flipCardBack"
        let flipCardFront = document.createElement('div')
        flipCardFront.className = 'flipCardFront'
        
        let name = document.createElement('h1')
        let breed = document.createElement('p')
        let gender = document.createElement('p')
        let age = document.createElement('p')
        let image = document.createElement('img')
        
        name.innerText = pet.name
        breed.innerText = pet.breed
        gender.innerText = pet.gender
        age.innerText = pet.age
        image = pet.image
console.log(pet)
    cardContainer.append(name, breed, gender, age, image, flipCardBack, flipCardFront)
    // cardContainer.append(image)
    // cardContainer.append(flipCardBack, flipCardFront)
})
 body.appendChild(cardContainer)
}

fetch('http://localhost:3000/pets')
.then(response => response.json())
.then(pets => createCard(pets))
    // pets.forEach(pet => {
    //     let flipCardInner = document.createElement('div')
    //     document.querySelector(".flipCardInner")
        
    //     let flipCardFront = document.createElement('div')
    //     document.querySelector(".flipCardFront")
        
    //     let image = document.createElement("img")
    //     image.src = pet.image
        
    //     let flipCardBack = document.createElement('div')
    //     document.querySelector(".flipCardBack")
        
    //     let name = document.createElement('p')
    //     name.innerText = ('Name:' + pet.name)
        
    //     let gender = document.createElement('p')
    //     gender.innerText = ('Gender:' + pet.gender)
        
    //     let age = document.createElement('p')
    //     age.innerText = ('Age:' + pet.age)

    //     let breed = document.createElement('p')
    //     breed.innerText = ('Breed:' + pet.breed)
    
    //     let flipCard = document.createElement('div')
    //     document.querySelector(".flipCard")

    //     flipCardBack.append(name, gender, age, breed)
    //     flipCardInner.append(flipCardFront, flipCardBack)
    //     flipCard.append(flipCardInner)

    //     body.append(flipCard)
//     })
// );


// fetch('http://localhost:3000/pets')
//     .then(response => response.json())
//     .then(pets => {
//        pets.forEach(pet => {
//             <div class="flipCard" id='flipCard'>
//                 <div class="flipCardInner" id='flipCardInner'>
//                     <div class="flipCardFront" id='flipCardFront'>
//                         <img src=`${pet.image}` alt="Avatar" style="width:400px;height:300px;">
//                     </div>
//                         <div class="flipCardBack" id='flipCardBack'>
//                             <h1 id='name'>${pet.name}</h1>
//                             <p id='breed'>${pet.breed}</p>
//                             <p id='gender'>${pet.gender}</p>
//                             <p id='age'>${pet.age}</p>
//                         </div>
//                 </div>
//             </div>
//         body.append(flipCard, flipCardInner, flipCardFront, flipCardBack)
//         })
//     })