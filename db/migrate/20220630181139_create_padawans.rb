class CreatePadawans < ActiveRecord::Migration[7.0]
  def change
    create_table :padawans do |t|
      t.string :name
      t.integer :age
      t.integer :midichlorian_count
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
