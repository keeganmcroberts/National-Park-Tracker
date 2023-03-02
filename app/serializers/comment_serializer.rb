class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :parkCode
  has_one :user


  # def comments_object
  #   self.object..map do |each_comment|
  #     {"commenthaaha": each_comment.comment,  "parkCode": each_comment.parkCode }
  #   end
  # end

end


# "user": each_comment.user,
