# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Loo.delete_all
User.delete_all

Loo.create(name: "Meg's Apt", address: "303 Greenwich Street, New York, New York")
Loo.create(name: "My Apt", address: "409 9th Street, Brooklyn, New York")
Loo.create(name: "Essex Apt", address: "141 Essex Street, New York, New York")
Loo.create(name: "Jacob's Apt", address: "500 Court Street, Brooklyn, New York")
Loo.create(name: "New York Port Authority", address: "New York Port Authority")

User.create(username: "Guest User", password: "password")
User.create(username: "sam", password: "password")
User.create(username: "meg", password: "password")
User.create(username: "ben", password: "password")
User.create(username: "stacey", password: "password")
User.create(username: "val", password: "password")
