class Loo < ActiveRecord::Base
  validates :name, :address, presence: true
  has_attached_file :image, default_url: "toilet_illustration.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  geocoded_by :address
  after_initialize :geocode

end
