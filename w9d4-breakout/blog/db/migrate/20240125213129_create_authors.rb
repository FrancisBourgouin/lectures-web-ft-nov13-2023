class CreateAuthors < ActiveRecord::Migration[7.0]
  def change
    create_table :authors do |t|
      t.string :name # object key, symbol, amount of methods
      t.string :email
      t.string :bio

      t.timestamps
    end
  end
end
