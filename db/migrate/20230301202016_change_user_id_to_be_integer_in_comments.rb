class ChangeUserIdToBeIntegerInComments < ActiveRecord::Migration[6.1]
  def change
    change_column :comments, :user_id, :integer
  end
end
