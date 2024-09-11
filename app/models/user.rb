class User < ApplicationRecord
  validates :first_name, :last_name, :birthdate, :gender, :email, :phone, :subject, presence: true
  validates :phone, length: { minimum: 12, maximum: 12 }

  def self.search(query)
    if query.present?
      where('first_name LIKE ? OR last_name LIKE ? OR email LIKE ?', "%#{query}%", "%#{query}%", "%#{query}%")
    else
      all
    end
  end

  def full_name
    "#{first_name} #{last_name}"
  end
end
