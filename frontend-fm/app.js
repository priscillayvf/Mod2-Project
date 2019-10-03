const body = document.body
const selectTag = document.querySelector('#selectTag')




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


  fetch('http://localhost:3000/pets')
  .then(response => response.json())
  .then(pet_data => displayPets(pet_data))





























// function createCards(pets){
//     pets.forEach(pet => {
//         let div = document.createElement('div')
//         let name = document.createElement('h2')
//         // let species = document.createElement('p')
//         let breed = document.createElement('p')
//         let gender = document.createElement('h3')
//         let age = document.createElement('h3')
//         let img = document.createElement('p')

//         name.innerText = pet.name
//         breed.innerText = pet.breed
//         gender.innerText = `${pet.gender}`
//         age.innerText = `${pet.age}`
//         img.innerHTML = pet.image

//         div.append(name, breed, gender, age, img)
//         body.appendChild(div)

//     })

// }


// fetch('http://localhost:3000/pets')
//     .then(response => response.json())
//     .then(createCards)




//     fetch('http://localhost:3000/pets')
//     .then(response => response.json())
//     .then(pets => {
        
//         pets.forEach(pet => {
//             <div class="flip-card" id='flip-card'>
//                 <div class="flip-card-inner" id='flip-card-inner'>
//                     <div class="flip-card-front" id='fip-card-front'>
//                         <img src=${pet.image} alt="Avatar" style="width:400px;height:300px;">
//                     </div>
//                         <div class="flip-card-back" id='flip-card-back'>
//                             <h1 id='name'>${pet.name}</h1>
//                             <p id='breed'>${pet.breed}</p>
//                             <p id='gender'>${pet.gender}</p>
//                             <p id='age'>${pet.age}</p>
//                         </div>
//                 </div>
//             </div>
//         div.append(flip-card, flip-card-inner)
//         })
//     })
