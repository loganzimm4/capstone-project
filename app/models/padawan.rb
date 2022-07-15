class Padawan < ApplicationRecord
    has_many :courses
    has_many :masters, through: :courses
    has_secure_password

    validates :name, presence: true 
    validates :midichlorian_count, numericality: {greater_than: 6999}
end
