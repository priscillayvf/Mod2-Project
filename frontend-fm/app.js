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
