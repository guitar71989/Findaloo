class Loo < ActiveRecord::Base
  validates :name, :address, presence: true
  has_attached_file :image, default_url: "toilet_illustration.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :reviews

  geocoded_by :address
  after_initialize :geocode

  def self.in_bounds(bounds)
    self.where("latitude < ?", bounds[:northEast][:lat])
        .where("latitude > ?", bounds[:southWest][:lat])
        .where("longitude > ?", bounds[:southWest][:lng])
        .where("longitude < ?", bounds[:northEast][:lng])
  end

  def other_users_reviews(user)
    (user.nil?) ? reviews.all : reviews.where.not(user_id: user.id)
  end

  def review_avg
    (reviews.count === 0) ? 0 : reviews.sum(:rating) / reviews.count
  end

  def review_count
    (reviews.count == 1) ? "1 review" : "#{reviews.count} reviews"
  end

end
