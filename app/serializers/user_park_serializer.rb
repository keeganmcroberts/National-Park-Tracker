class UserParkSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :parkCode, :liked
end
