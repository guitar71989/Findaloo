# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Loo.delete_all
User.delete_all
Review.delete_all

require 'csv'

csv_text = File.read(Rails.root.join('lib','seeds', 'loo.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  l = Loo.new
  l.name = row['name']
  l.address = row['address']
  l.latitude = row['latitude']
  l.longitude = row['longitude']
  l.image = row['image']
  l.id = row['id']
  l.save
  puts "#{l.name}, #{l.address}"
end

puts "There are now #{Loo.count} rows in the loos table"

# csv_text = File.read(Rails.root.join('lib','seeds', 'user.csv'))
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.each do |row|
#   u = User.new
#   u.username = row['username']
#   u.password = row['password']
#   u.image = open(row['image'])
#   u.image.save
#   u.save!
#   puts "#{u.username}"
# end
#
# puts "There are now #{User.count} rows in the users table"


User.create!(id: 1, username: "Guest User", password: "password", image: File.open('app/assets/images/default.png'))
User.create!(id: 2, username: "Jerry Seinfeld", password: "password", image: File.open('app/assets/images/jerry_seinfeld.jpg'))
User.create!(id: 3, username: "Michael Corleone", password: "password", image: File.open('app/assets/images/al_pacino.jpg'))
User.create!(id: 4, username: "Annie Hall", password: "password", image: File.open('app/assets/images/diane_keaton.jpg'))
User.create!(id: 5, username: "George Constanza", password: "password", image: File.open('app/assets/images/george_costanza.jpg'))
User.create!(id: 6, username: "Elaine Bennis", password: "password", image: File.open('app/assets/images/julia_louie_dreyfus.jpg'))
User.create!(id: 7, username: "Lucy Ricardo", password: "password", image: File.open('app/assets/images/lucille_ball.jpg'))
User.create!(id: 8, username: "Woody Allen", password: "password", image: File.open('app/assets/images/woody_allen.jpg'))

review1 = Review.create!(user_id: 4,
                        loo_id: 1, body: "The restrooms here are GORGEOUS, boasting marble sinks, fresh potted flowers, mosaic-tiled toilets, high ceilings with crown-molding.",
                        rating: 5)

review2 = Review.create!(user_id: 2,
                        loo_id: 1,
                        body: "They\'re incredibly clean—NYPL employs a full-time attendant to make sure the plebians aren\'t leaving wet paper towels and offending smells behind (for long)",
                        rating: 5)

review3 = Review.create!(user_id: 5,
                        loo_id: 2,
                        body: "Highly recommended, super-clean and technologically outfitted.",
                        rating: 5)

review4 = Review.create!(user_id: 7,
                        loo_id: 2,
                        body: "The bathroom was great, but the store was so crowded. I\'d go again, but not during rush hour or on the weekends.",
                        rating: 3)

review5 = Review.create!(user_id: 8,
                        loo_id: 3,
                        body: "Bathrooms here are free and spotless, and no one will give you a shifty look when you waltz in.",
                        rating: 3)


review6 = Review.create!(user_id: 6,
                        loo_id: 3,
                        body: "There\'s free Wifi throughout the Atrium, so you can tweet on the toilet data-free if you so choose.",
                        rating: 4)

review7 = Review.create!(user_id: 2,
                        loo_id: 4,
                        body: "The Barnes & Noble on Upper West Side was my bathroom savior for years before it shuttered, but this one still remains and boasts excellent restrooms for those in need.",
                        rating: 5)

review8 = Review.create!(user_id: 7,
                        loo_id: 4,
                        body: "The cleanliness of this bathroom is really hit or miss - depending on what day of the week you go - earlier in the week is much cleaner",
                        rating: 2)


review8 = Review.create!(user_id: 6,
                        loo_id: 23,
                        body: "The restrooms at this schmancy Columbus Circle shopping center are my personal favorites, probably because I spent so much babysitting money at the Sephora here post-bathroom in my teen years.",
                        rating: 4)

review9 = Review.create!(user_id: 3,
                        loo_id: 27,
                        body: "These bathrooms are hidden away on the fourth floor, great for making nefarious plans.",
                        rating: 5)

review10 = Review.create!(user_id: 2,
                          loo_id: 24,
                          body: "Lest you think Crate & Barrel is filled with nothing but $2,000 sofas, it turns out the SoHo/Greenwich Village store\'s got a pretty sweet, super-clean public restroom on the second floor.",
                          rating: 5)

review11 = Review.create!(user_id: 8,
                          loo_id: 6,
                          body: "Though salespeople at many bathroom-boasting stores will glare at you when you make a beeline for the toilet and then flee without buying anything, no one at Crate & Barrel seems to care if you relieve yourself without purchasing a decorative throw pillow.",
                          rating: 5)

review12 = Review.create!(user_id: 5,
                          loo_id: 7, body: "There are outlets if you need to charge your phone for a spell.",
                          rating: 4)

review13 = Review.create!(user_id: 6,
                          loo_id: 7,
                          body: "The UES bathrooms are SPOTLESS, sweet-smelling, boast individual stalls, and occasionally offer nifty lotions in the ladies\' room.",
                          rating: 5)

review14 = Review.create!(user_id: 4,
                          loo_id: 26,
                          body: "The key to using a hotel bathroom is to stroll in like you own the place and make a home in a stall, no questions asked.",
                          rating: 3)

review15 = Review.create!(user_id: 8,
                          loo_id: 14,
                          body: "Restrooms here are less trafficked than those in coffee shops and bars, and you don\'t have to purchase a drink to avoid any employee-driven side-eye room.",
                          rating: 4)

review16 = Review.create!(user_id: 3,
                          loo_id: 9,
                          body: "I had a terrible experience in this bathroom - lots of creeps hanging around. Never again.",
                          rating: 1)

review17 = Review.create!(user_id: 1,
                          loo_id: 9,
                          body: "Bathroom looked well designed but super dirty!",
                          rating: 2)

review18 = Review.create!(user_id: 6,
                          loo_id: 9,
                          body: "I was taking a stroll in the park with Jerry and Kramer, and when I tried to use the bathroom, it was so disgusting!!!",
                          rating: 1)

review19 = Review.create!(user_id: 8,
                          loo_id: 28,
                          body: "I never leave the city, but when I do, this is my go to bathroom!",
                          rating: 5)
