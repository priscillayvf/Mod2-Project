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
        image: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46150166/2/?bust=1569977896&width=720'
    },
    {
        name: 'Luther',
        species: 'Cat',
        breed: 'Tabby',
        gender: 'Male',
        age: 3
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/35733473/2/?bust=1469123711&width=720"
    },
    {
        name: 'Mr. Kitty',
        species: 'Cat',
        breed: 'Russian Blue',
        gender: 'Male',
        age: 8
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45896475/1/?bust=1569715543&width=720"
    },
    {
        name: 'Palmer',
        species: 'Cat',
        breed: 'Tiger',
        gender: 'Male',
        age: 1
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45842966/3/?bust=1569966513&width=720"
    },
    {
        name: 'Armani',
        species: 'Cat',
        breed: 'Bombay',
        gender: 'Male',
        age: 5
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46116516/1/?bust=1569644738&width=720"
    },
    {
        name: 'Daisy',
        species: 'Cat',
        breed: 'Domestic Short Hair',
        gender: 'Female',
        age: 6
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46056075/1/?bust=1569104489&width=720"
    },
    {
        name: 'Autumn',
        species: 'Cat',
        breed: 'Russian Blue',
        gender: 'Female',
        age: 4
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44615498/1/?bust=1569682618&width=720"
    },
    {
        name: 'Chica',
        species: 'Cat',
        breed: 'Calico',
        gender: 'Female',
        age: 2
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45070364/5/?bust=1561384470&width=720"
    },
    {
        name: 'Stormy',
        species: 'Cat',
        breed: 'Persian',
        gender: 'Female',
        age: 10
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46153759/1/?bust=1570028362&width=720"
    },
    {
        name: 'Chanel',
        species: 'Cat',
        breed: 'Bombay',
        gender: 'Female',
        age: 5
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46116516/3/?bust=1569644744&width=720"
    },
    {
        name: 'Spot',
        species: 'Dog',
        breed: 'Akita',
        gender: 'Male',
        age: 4
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46110672/1/?bust=1569952626&width=720"
    },
    {
        name: 'Tiffany',
        species: 'Dog',
        breed: 'Brittany Spaniel',
        gender: 'Female',
        age: 4
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46091990/3/?bust=1569449929&width=720"
    },
    {
        name: 'Tifa',
        species: 'Dog',
        breed: 'Rottweiler Mix',
        gender: 'Female',
        age: 6
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45765521/3/?bust=1569369899&width=560"
    },
    {
        name: 'Pete',
        species: 'Dog',
        breed: 'Doberman Pinscher',
        gender: 'Male',
        age: 2
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45222018/1/?bust=1569369897&width=560"
    },
    {
        name: 'Wyatt',
        species: 'Dog',
        breed: 'Brittany Spaniel',
        gender: 'female',
        age: 5
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45182692/2/?bust=1569452628&width=720"
    },
    {
        name: 'Mocha',
        species: 'Dog',
        breed: 'Doberman Pinscher',
        gender: 'Male',
        age: 3
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45707526/1/?bust=1567363046&width=720"
    },
    {
        name: 'Jordan',
        species: 'Dog',
        breed: 'Greyhound Lab Mix',
        gender: 'Male',
        age: 5
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46150255/4/?bust=1569978399"
    },
    {
        name: 'Eleanor',
        species: 'Dog',
        breed: 'American Bulldog',
        gender: 'Female',
        age: 2
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45690979/1/?bust=1566482507&width=720"
    },
    {
        name: 'Bud',
        species: 'Dog',
        breed: 'Anatolian Shepherd',
        gender: 'Male',
        age: 7
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45690687/2/?bust=1566348185&width=720"
    },
    {
        name: 'Rigby',
        species: 'Dog',
        breed: 'Pit Bull Terrier Mix',
        gender: 'Female',
        age: 4
        image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45570268/5/?bust=1565457608"
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