class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :time, :location, :master_id, :padawan_id
end
