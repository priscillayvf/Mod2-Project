# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Pet.destroy_all

user1 = User.create(name: "User1")


user1.pets.create([
    {
        name: 'Varric',
        species: 'Cat',
        breed: 'Domestic Short Hair',
        gender: 'Male',
        age: 1,
        image: 
    },
    {
        name: 'Luther',
        species: 'Cat',
        breed: 'Tabby',
        gender: 'Male',
        age: 3,
        image:
    },
    {
        name: 'Mr. Kitty',
        species: 'Cat',
        breed: 'Russian Blue',
        gender: 'Male',
        age: 8,
        image:
    },
    {
        name: 'Palmer',
        species: 'Cat',
        breed: 'Tiger',
        gender: 'Male',
        age: 1,
        image:
    },
    {
        name: 'Armani',
        species: 'Cat',
        breed: 'Bombay',
        gender: 'Male',
        age: 5,
        image:
    },
    {
        name: 'Daisy',
        species: 'Cat',
        breed: 'Domestic Short Hair',
        gender: 'Female',
        age: 6,
        image:
    },
    {
        name: 'Autumn',
        species: 'Cat',
        breed: 'Russian Blue',
        gender: 'Female',
        age: 4,
        image:
    },
    {
        name: 'Chica',
        species: 'Cat',
        breed: 'Calico',
        gender: 'Female',
        age: 2,
        image:
    },
    {
        name: 'Stormy',
        species: 'Cat',
        breed: 'Persian',
        gender: 'Female',
        age: 10,
        image:
    },
    {
        name: 'Chanel',
        species: 'Cat',
        breed: 'Bombay',
        gender: 'Female',
        age: 5,
        image:
    },
    {
        name: 'Spot',
        species: 'Dog',
        breed: 'Akita',
        gender: 'Male',
        age: 4,
        image:
    },
    {
        name: 'Tiffany',
        species: 'Dog',
        breed: 'Spaniel',
        gender: 'Female',
        age: 4,
        image:
    },
    {
        name: 'Tifa',
        species: 'Dog',
        breed: 'Rottweiler Mix',
        gender: 'Female',
        age: 6,
        image:
    },
    {
        name: 'Pete',
        species: 'Dog',
        breed: 'Doberman Pinscher',
        gender: 'Male',
        age: 2,
        image:
    },
    {
        name: 'Wyatt',
        species: 'Dog',
        breed: 'Spaniel',
        gender: 'female',
        age: 5,
        image:
    },
    {
        name: 'Mocha',
        species: 'Dog',
        breed: 'Doberman Pinscher',
        gender: 'Male',
        age: 3,
        image:
    },
    {
        name: 'Aspen',
        species: 'Dog',
        breed: 'Shepherd Mix',
        gender: 'Male',
        age: 5,
        image:
    },
    {
        name: 'Eleanor',
        species: 'Dog',
        breed: 'American Bulldog',
        gender: 'Female',
        age: 2,
        image:
    },
    {
        name: 'Bud',
        species: 'Dog',
        breed: 'Shepherd',
        gender: 'Male',
        age: 7,
        image:
    },
    {
        name: 'Rigby',
        species: 'Dog',
        breed: 'Pit Bull Terrier Mix',
        gender: 'Female',
        age: 4,
        image:
    }
])






# varric = Pet.create(
#     name: 'Varric',
#     species: 'Cat',
#     breed: 'Domestic Short Hair',
#     gender: 'Male',
#     age: 1,
#     user: user1
# )
# luther = Pet.create(
#     name: 'Luther',
#     species: 'Cat',
#     breed: 'Tabby',
#     gender: 'Male',
#     age: 3
# )

# mrkitty = Pet.create(
#     name: 'Mr. Kitty',
#     species: 'Cat',
#     breed: 'Russian Blue',
#     gender: 'Male',
#     age: 8
# )
# palmer = Pet.create(
#     name: 'Palmer',
#     species: 'Cat',
#     breed: 'Tiger',
#     gender: 'Male',
#     age: 1
# )
# daisy = Pet.create(
#     name: 'Daisy',
#     species: 'Cat',
#     breed: 'Domestic Short Hair',
#     gender: 'Female',
#     age: 6
# )
# autumn = Pet.create(
#     name: 'Autumn',
#     species: 'Cat',
#     breed: 'Russian Blue',
#     gender: 'Female',
#     age: 4
# )
# chica = Pet.create(
#     name: 'Chica',
#     species: 'Cat',
#     breed: 'Calico',
#     gender: 'Female',
#     age: 2
# )
# stormy = Pet.create(
#     name: 'Stormy',
#     species: 'Cat',
#     breed: 'Persian',
#     gender: 'Female',
#     age: 10
# )
# armani = Pet.create(
#     name: 'Armani',
#     species: 'Cat',
#     breed: 'Bombay',
#     gender: 'Male',
#     age: 5
# )
# chanel = Pet.create(
#     name: 'Chanel',
#     species: 'Cat',
#     breed: 'Bombay',
#     gender: 'Female',
#     age: 5
# )