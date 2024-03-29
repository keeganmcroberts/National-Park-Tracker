class User < ApplicationRecord
    has_secure_password

    has_many :comment
    has_many :user_parks

    validates :email, presence: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: "must be a valid email" }
    validates :email, uniqueness: true
end
