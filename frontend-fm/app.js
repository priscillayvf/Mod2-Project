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
    

        
        let flipCardBack = document.createElement('div')
        let flipCardFront = document.createElement('div')
        let flipCardInner = document.createElement('div')
        
        
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
        image.src = pet.image
console.log(pet)
    
    flipCardFront.append(image)
    flipCardBack.append(name, breed, gender, age)
    flipCardInner.append(flipCardBack, flipCardFront)    
    flipCard.append(flipCardInner)
    
    // cardContainer.append(image)
    // cardContainer.append(flipCardBack, flipCardFront)

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
