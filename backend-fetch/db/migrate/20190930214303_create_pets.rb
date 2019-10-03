class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :species
      t.string :breed
      t.string :gender
      t.integer :age
      t.binary :image
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
