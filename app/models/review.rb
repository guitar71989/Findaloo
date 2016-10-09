class Review < ActiveRecord::Base
  validates :user_id, :loo_id, :body, :rating, presence: true
  validates :loo, uniqueness: { scope: :user }

  belongs_to :loo
  belongs_to :user

end
