# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


  asian_green = Category.create(name: 'Asian Greens', image: "/category_images/bok_choy.svg")
  egg = Category.create(name: 'Eggs', image: "/category_images/eggs.svg")
  poultry = Category.create(name: 'Poultry', image: "/category_images/poultry.svg")
  flower = Category.create(name: 'Flowers', image: "/category_images/flowers.svg")
  mushroom = Category.create(name: 'Mushrooms', image: "/category_images/mushrooms.svg")

  sun_belly = Farmer.create(name: "Sunbelly Farm")
  wild_apple = Farmer.create(name: "Wild Apple Orchard")
  piggery = Farmer.create(name: "The Piggery")
  nook = Farmer.create(name: "Nook and Cranny")
  snow = Farmer.create(name: "Snow Farm")
  oles = Farmer.create(name: "Oles Farm")

  asian_green.products.create!(name: "Bok Choy", price: 5, farmer_id: 1, quantity: 32, image: "/product_images/bok_choy.svg")
  asian_green.products.create!(name: "Chinese Cabbage", price: 4, farmer_id: 4, quantity: 24, image: "/product_images/cabbage.svg")
  asian_green.products.create!(name: "Baby Bok Choy", price: 3, farmer_id: 1, quantity: 30, image: "/product_images/baby_bok_choy.svg")

  egg.products.create!(name: "Dozen Eggs", price: 4, farmer_id: 1, quantity: 20, image: "/product_images/eggs.svg")
  egg.products.create!(name: "Dozen Eggs", price: 5, farmer_id: 5, quantity: 15, image: "/product_images/eggs.svg")
  egg.products.create!(name: "Dozen Jumbo Eggs", price: 6, farmer_id: 6, quantity: 10, image: "/product_images/eggs.svg")
  egg.products.create!(name: "Dozen Eggs", price: 4, farmer_id: 6, quantity: 22, image: "/product_images/eggs.svg")
  egg.products.create!(name: "Dozen Eggs", price: 4, farmer_id: 2, quantity: 20, image: "/product_images/eggs.svg")

  poultry.products.create!(name: "Whole Chicken", price: 28, farmer_id: 1, quantity: 20, image: "/product_images/whole_chicken.svg")
  poultry.products.create!(name: "Whole Chicken", price: 26, farmer_id: 3, quantity: 10, image: "/product_images/whole_chicken.svg")
  poultry.products.create!(name: "Whole Chicken", price: 30, farmer_id: 5, quantity: 5, image: "/product_images/whole_chicken.svg")
  poultry.products.create!(name: "Whole Chicken", price: 28, farmer_id: 1, quantity: 20, image: "/product_images/whole_chicken.svg")
  poultry.products.create!(name: "Chicken Wings", price: 15, farmer_id: 2, quantity: 32, image: "/product_images/chicken_wing.svg")
  poultry.products.create!(name: "Whole Turkey", price: 37, farmer_id: 3, quantity: 20, image: "/product_images/whole_chicken.svg")

  flower.products.create!(name: "Simple Bouquet", price: 6, farmer_id: 2, quantity: 20, image: "/product_images/simple_bouquet.svg")
  flower.products.create!(name: "Large Bouquet", price: 8, farmer_id: 2, quantity: 20, image: "/category_images/flowers.svg")

  mushroom.products.create!(name: "Oyster", price: 8, farmer_id: 4, quantity: 12, image: "/product_images/oyster.svg")
  mushroom.products.create!(name: "Enoki", price: 8, farmer_id: 4, quantity: 12, image: "/product_images/enoki.svg")
  mushroom.products.create!(name: "Shiitake", price: 5, farmer_id: 1, quantity: 10, image: "/category_images/mushrooms.svg")
  mushroom.products.create!(name: "Shiitake", price: 4, farmer_id: 2, quantity: 9, image: "/category_images/mushrooms.svg")
