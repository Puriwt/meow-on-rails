class User < ApplicationRecord
  validates :first_name, :last_name, :birthdate, :gender, :email, :phone, :subject, presence: true
  validates :phone, length: { minimum: 12, maximum: 12 }
  validate :valid_birthdate
  validate :valid_email

  def valid_birthdate
    if birthdate.present? && birthdate > Date.today
      errors.add(:birthdate, "can't be in the future")
    end
  end

  def valid_email
    if email.present? && !email.match?(/\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i)
      errors.add(:email, "is incorrect")
    end
  end

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