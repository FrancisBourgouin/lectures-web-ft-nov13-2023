class CreateMaps < ActiveRecord::Migration[7.0]
  def change
    create_table :maps do |t|
      t.string :title
      t.string :latitude
      t.string :longitude

      t.timestamps
    end
  end
end
