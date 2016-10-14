# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Loo.delete_all
User.delete_all

loo1 = Loo.create!(name: "Bryant Park", address: "West 42nd Street between Fifth Avenue & Sixth Avenue, New York, NY 10036", latitude: 40.7535965, longitude: -73.9854213,image: File.open('app/assets/images/bryant_park.jpg'))
loo2 = Loo.create!(name: "Apple Store", address: "103 Prince Street, New York, New York 10012", image: File.open('app/assets/images/apple_store.jpg'))
loo3 = Loo.create!(name: "David Rubenstein Atrium at Lincoln Center", address: "61 West 62nd Street between Broadway and Columbus Avenue, New York New York, 10023", image: File.open('app/assets/images/lincoln_center.jpg'))
loo4 = Loo.create!(name: "Barnes & Noble", address: "555 5th Ave, New York, New York, 10017", image: File.open('app/assets/images/barnes_and_noble.jpg'))
loo5 = Loo.create!(name: "Time Warner Center", address: "10 Columbus Circle at 59th Street Hell\'s Kitchen", image: File.open('app/assets/images/time_warner.jpg'))
loo6 = Loo.create!(name: "Crate and Barrel", address: "611 Broadway between Bleecker and Houston", image: File.open('app/assets/images/crate_barrel.jpg'))
loo7 = Loo.create!(name: "Bloomingdales", address: "1000 3rd Avenue between 59th and 60th, New York, New York, 10022", image: File.open('app/assets/images/W.jpg'))
loo8 = Loo.create!(name: "W New York", address: "201 Park Ave S, New York, NY 10003", image: File.open('app/assets/images/bloomingdales.jpg'))
loo9 = Loo.create!(name: "Port Authority", address: "42nd Street and 8th Avenue", image: File.open('app/assets/images/port_authority.jpg'))
loo10 = Loo.create!(name: "Prospect Park", address: "Prospect Park, Brooklyn, New York", image: File.open('app/assets/images/prospect_park.jpg'))


user1 = User.create!(username: "Guest User", password: "password", image: File.open('app/assets/images/default.png'))
user2 = User.create!(username: "Jerry Seinfeld", password: "password", image: File.open('app/assets/images/jerry_seinfeld.jpg'))
user3 = User.create!(username: "Michael Corleone", password: "password", image: File.open('app/assets/images/al_pacino.jpg'))
user4 = User.create!(username: "Annie Hall", password: "password", image: File.open('app/assets/images/diane_keaton.jpg'))
user5 = User.create!(username: "George Constanza", password: "password", image: File.open('app/assets/images/george_costanza.jpg'))
user6 = User.create!(username: "Elaine Bennis", password: "password", image: File.open('app/assets/images/julia_louie_dreyfus.jpg'))
user7 = User.create!(username: "Lucy Ricardo", password: "password", image: File.open('app/assets/images/lucille_ball.jpg'))
user8 = User.create!(username: "Woody Allen", password: "password", image: File.open('app/assets/images/woody_allen.jpg'))

review1 = Review.create!(user_id: user4.id,
                        loo_id: loo1.id, body: "The restrooms here are GORGEOUS, boasting marble sinks, fresh potted flowers, mosaic-tiled toilets, high ceilings with crown-molding.",
                        rating: 5)

review2 = Review.create!(user_id: user2.id,
                        loo_id: loo1.id,
                        body: "They\'re incredibly clean—Bryant Park employs a full-time attendant to make sure the plebians aren\'t leaving wet paper towels and offending smells behind (for long)",
                        rating: 5)

review3 = Review.create!(user_id: user5.id,
                        loo_id: loo2.id,
                        body: "Highly recommended, super-clean and technologically outfitted.",
                        rating: 5)

review4 = Review.create!(user_id: user7.id,
                        loo_id: loo2.id,
                        body: "The bathroom was great, but the store was so crowded. I\'d go again, but not during rush hour or on the weekends.",
                        rating: 3)

review5 = Review.create!(user_id: user8.id,
                        loo_id: loo3.id,
                        body: "Bathrooms here are free and spotless, and no one will give you a shifty look when you waltz in.",
                        rating: 3)


review6 = Review.create!(user_id: user6.id,
                        loo_id: loo3.id,
                        body: "There\'s free Wifi throughout the Atrium, so you can tweet on the toilet data-free if you so choose.",
                        rating: 4)

review7 = Review.create!(user_id: user2.id,
                        loo_id: loo4.id,
                        body: "The Barnes & Noble on Upper West Side was my bathroom savior for years before it shuttered, but this one still remains and boasts excellent restrooms for those in need.",
                        rating: 5)

review8 = Review.create!(user_id: user7.id,
                        loo_id: loo4.id,
                        body: "The cleanliness of this bathroom is really hit or miss - depending on what day of the week you go - earlier in the week is much cleaner",
                        rating: 2)


review8 = Review.create!(user_id: user6.id,
                        loo_id: loo5.id,
                        body: "The restrooms at this schmancy Columbus Circle shopping center are my personal favorites, probably because I spent so much babysitting money at the Sephora here post-bathroom in my teen years.",
                        rating: 4)

review9 = Review.create!(user_id: user3.id,
                        loo_id: loo5.id,
                        body: "These bathrooms are hidden away on the fourth floor, great for making nefarious plans.",
                        rating: 5)

review10 = Review.create!(user_id: user2.id,
                          loo_id: loo6.id,
                          body: "Lest you think Crate & Barrel is filled with nothing but $2,000 sofas, it turns out the SoHo/Greenwich Village store\'s got a pretty sweet, super-clean public restroom on the second floor.",
                          rating: 5)

review11 = Review.create!(user_id: user8.id,
                          loo_id: loo6.id,
                          body: "Though salespeople at many bathroom-boasting stores will glare at you when you make a beeline for the toilet and then flee without buying anything, no one at Crate & Barrel seems to care if you relieve yourself without purchasing a decorative throw pillow.",
                          rating: 5)

review12 = Review.create!(user_id: user5.id,
                          loo_id: loo7.id, body: "There are outlets if you need to charge your phone for a spell.",
                          rating: 4)

review13 = Review.create!(user_id: user6.id,
                          loo_id: loo7.id,
                          body: "The UES bathrooms are SPOTLESS, sweet-smelling, boast individual stalls, and occasionally offer nifty lotions in the ladies\' room.",
                          rating: 5)

review14 = Review.create!(user_id: user4.id,
                          loo_id: loo8.id,
                          body: "The key to using a hotel bathroom is to stroll in like you own the place and make a home in a stall, no questions asked.",
                          rating: 3)

review15 = Review.create!(user_id: user8.id,
                          loo_id: loo8.id,
                          body: "Restrooms here are less trafficked than those in coffee shops and bars, and you don\'t have to purchase a drink to avoid any employee-driven side-eye room.",
                          rating: 4)

review16 = Review.create!(user_id: user3.id,
                          loo_id: loo9.id,
                          body: "I had a terrible experience in this bathroom - lots of creeps hanging around. Never again.",
                          rating: 1)

review17 = Review.create!(user_id: user1.id,
                          loo_id: loo9.id,
                          body: "Bathroom looked well designed but super dirty!",
                          rating: 2)

review18 = Review.create!(user_id: user6.id,
                          loo_id: loo9.id,
                          body: "I was taking a stroll in the park with Jerry and Kramer, and when I tried to use the bathroom, it was so disgusting!!!",
                          rating: 1)

review19 = Review.create!(user_id: user8.id,
                          loo_id: loo9.id,
                          body: "I never leave the city, but when I do, this is my go to bathroom!",
                          rating: 5)
