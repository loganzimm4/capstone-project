class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :name
      t.integer :time
      t.string :location
      t.integer :master_id
      t.integer :padawan_id

      t.timestamps
    end
  end
end
