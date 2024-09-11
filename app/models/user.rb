class User < ApplicationRecord
  validates :first_name, :last_name, :birthdate, :gender, :email, :phone, :subject, presence: true
  validates :phone, length: { minimum: 12, maximum: 12 }
end
