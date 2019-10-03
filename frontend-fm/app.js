const body = document.body
const selectTag = document.querySelector('#selectTag')

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
        let flipCardFront = document.createElement('div')
        let flipCardInner = document.createElement('div')
        let flipCard = document.createElement('div')
        
        flipCardFront.className = 'flipCardFront'
        flipCardBack.className = "flipCardBack"
        flipCardInner.className = 'flipCardInner'
        
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
    
    flipCardFront.append(image)
    flipCardBack.append(name, breed, gender, age)
    flipCardInner.append(flipCardBack, flipCardFront)    
    flipCard.append(flipCardInner)
    cardContainer.append(flipCard)
    // cardContainer.append(image)
    // cardContainer.append(flipCardBack, flipCardFront)
body.appendChild(cardContainer)
})
 
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

<<<<<<< HEAD
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
=======
        div.append(h2, h3, p)
        body.appendChild(div)
        })
    })

function myFunction1() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }



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

>>>>>>> 16a63d2f50b6fdd5851fa1018f7bc182a96f48ac
