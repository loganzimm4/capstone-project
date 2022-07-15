class Master < ApplicationRecord
    has_many :courses
    has_many :padawans, through: :courses 

    validates :name, presence: true
    validates :midichlorian_count, presence: true, numericality: {greater_than: 69999}
    validates :age, numericality: {greater_than_or_equal_to: 30}
end
