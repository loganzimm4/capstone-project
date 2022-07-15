class Course < ApplicationRecord
    belongs_to :master
    belongs_to :padawan 

    validates :master_id, presence: true
    validates :time, presence: true
end
