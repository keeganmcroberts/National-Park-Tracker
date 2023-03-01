class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :comment
      t.string :user_id
      t.string :parkCode

      t.timestamps
    end
  end
end
