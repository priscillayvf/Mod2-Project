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
        age: 1
    },
    {
        name: 'Luther',
        species: 'Cat',
        breed: 'Tabby',
        gender: 'Male',
        age: 3
    },
    {
        name: 'Mr. Kitty',
        species: 'Cat',
        breed: 'Russian Blue',
        gender: 'Male',
        age: 8
    },
    {
        name: 'Palmer',
        species: 'Cat',
        breed: 'Tiger',
        gender: 'Male',
        age: 1
    },
    {
        name: 'Armani',
        species: 'Cat',
        breed: 'Bombay',
        gender: 'Male',
        age: 5
    },
    {
        name: 'Daisy',
        species: 'Cat',
        breed: 'Domestic Short Hair',
        gender: 'Female',
        age: 6
    },
    {
        name: 'Autumn',
        species: 'Cat',
        breed: 'Russian Blue',
        gender: 'Female',
        age: 4
    },
    {
        name: 'Chica',
        species: 'Cat',
        breed: 'Calico',
        gender: 'Female',
        age: 2
    },
    {
        name: 'Stormy',
        species: 'Cat',
        breed: 'Persian',
        gender: 'Female',
        age: 10
    },
    {
        name: 'Chanel',
        species: 'Cat',
        breed: 'Bombay',
        gender: 'Female',
        age: 5
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