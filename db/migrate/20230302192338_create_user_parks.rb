class CreateUserParks < ActiveRecord::Migration[6.1]
  def change
    create_table :user_parks do |t|
      t.integer :user_id
      t.string :parkCode
      t.boolean :liked

      t.timestamps
    end
  end
end
