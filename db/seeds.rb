# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Loo.delete_all
User.delete_all

loo1 = Loo.create!(name: "Meg's Apt", address: "303 Greenwich Street, New York, New York")
loo2 = Loo.create!(name: "My Apt", address: "409 9th Street, Brooklyn, New York")
loo3 = Loo.create!(name: "Essex Apt", address: "141 Essex Street, New York, New York")
loo4 = Loo.create!(name: "Jacob's Apt", address: "500 Court Street, Brooklyn, New York")
loo5 = Loo.create!(name: "New York Port Authority", address: "New York Port Authority")

user1 = User.create!(username: "Guest User", password: "password")
user2 = User.create!(username: "sam", password: "password")
user3 = User.create!(username: "meg", password: "password")
user4 = User.create!(username: "ben", password: "password")
user5 = User.create!(username: "stacey", password: "password")
user6 = User.create!(username: "val", password: "password")

review1 = Review.create!(user_id: user1.id, loo_id: loo1.id, body: "Review number 1", rating: 1)
review2 = Review.create!(user_id: user2.id, loo_id: loo2.id, body: "Review number 2", rating: 2)
review3 = Review.create!(user_id: user1.id, loo_id: loo2.id, body: "Review number 3", rating: 3)
