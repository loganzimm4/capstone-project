class CreateMasters < ActiveRecord::Migration[7.0]
  def change
    create_table :masters do |t|
      t.string :name
      t.integer :age
      t.integer :midichlorian_count

      t.timestamps
    end
  end
end
