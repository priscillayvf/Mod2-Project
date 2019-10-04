


// function catCards(pets){
//     const cats = pets.filter(pet => pet.species == "cat")
//     return cats
//     // console.log(cats)
// }




function retrievePets() { //new function
    fetch('http://localhost:3000/pets')
    .then(response => response.json())
    .then(pet_data => displayPets(pet_data))
  
  
  const displayPets = (all_pets) => {
    const catList = document.getElementById('cat-list')
    catList.innerText = ' '
  
    all_pets.forEach(pet => {
      const catEntry = document.createElement('p')


      catEntry.innerText = `${pet.species} - ${pet.breed}`

      catList.append(catEntry)

    })
  }
}
retrievePets()


// fetch('http://localhost:3000/pets')
// .then(response => response.json())
// .then(pets => console.log(pets))

