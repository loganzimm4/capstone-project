require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Master.destroy_all
Padawan.destroy_all
Course.destroy_all


# ~ Masters ~

master1 = Master.create(name: 'Yoda', age: 812, midichlorian_count: 139000)
master2 = Master.create(name: 'Qui-Gon Jin', age: 42, midichlorian_count: 125000)
master3 = Master.create(name: 'Mace Windu', age: 36, midichlorian_count: 114000)
master4 = Master.create(name: 'Kit Fisto', age: 38, midichlorian_count: 119000)
master5 = Master.create(name: 'Shaak Ti', age: 32, midichlorian_count: 120000)
master6 = Master.create(name: 'Plo Koon', age: 44, midichlorian_count: 128000)
master7 = Master.create(name: 'Sifo-Dyas', age: 46, midichlorian_count: 131000)


# ~ Padawans ~

10.times do 
padawan = Padawan.create(
    name: Faker::Movies::StarWars.character,
    age: 6 + Random.rand(12),
    midichlorian_count: 7000 + Random.rand(30000),
    username: 'P@dawan',
    password: '1234')
end


# ~ Courses ~

course1 = Course.create(name: 'Force Training: Control', time: '0700', location: 'Coruscant', master_id: master1.id, padawan_id: Padawan.first.id)
course2 = Course.create(name: 'Force Training: Sense', time: '0900', location: 'Ilum', master_id: master3.id, padawan_id: Padawan.last.id)
course3 = Course.create(name: 'Force Training: Alter', time: '1100', location: 'Jedha', master_id: master5.id, padawan_id: Padawan.second.id)
course4 = Course.create(name: 'Lightsaber Training: Form I', time: '1200', location: 'Coruscant', master_id: master2.id, padawan_id: Padawan.third.id)
course5 = Course.create(name: 'Lightsaber Training: Form II', time: '1400', location: 'Coruscant', master_id: master7.id, padawan_id: Padawan.fourth.id)
course6 = Course.create(name: 'Lightsaber Training: Form III', time: '1400', location: 'Naboo', master_id: master4.id, padawan_id: Padawan.fifth.id)
course7 = Course.create(name: 'Lightsaber Training: Form IV', time: '1600', location: 'Endor', master_id: master5.id, padawan_id: Padawan.second_to_last.id)
course8 = Course.create(name: 'Lightsaber Training: Form V', time: '1600', location: 'Jedha', master_id: master6.id, padawan_id: Padawan.third_to_last.id)
# course9 = Course.create(name: 'Lightsaber Training: Form VI', time: '1800', location: 'Dathomir', master_id: master3.id, padawan_id: Padawan.id)
# course10 = Course.create(name: 'Lightsaber Training: Form VII', time: '1800', location: 'Tython', master_id: master1.id, padawan_id: Padawan.last.id)


