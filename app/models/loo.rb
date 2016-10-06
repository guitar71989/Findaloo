class Loo < ActiveRecord::Base
  validates :name, :address, presence: true

end
