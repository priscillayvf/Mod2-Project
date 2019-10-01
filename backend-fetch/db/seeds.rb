# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'
require 'json'








api_endpoint = 'https://api.petfinder.com/v2/oauth2/token'
request_headers = { headers: { 'user-key' => 'fY8CaH6eolnujPQ5BjHmsNqQDmqCqichEt0z8FmRcuOqF4jywT' } }



api = Apicalypse.new(api_endpoint, request_headers)