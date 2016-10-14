class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password_digest, presence: {message: "Password can't be blank"}
  validates :password, length: { minimum: 6, allow_nil: true}


  has_attached_file :image,
          :storage => :s3,
          :bucket  => ENV['findaloo-dev']

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :reviews
  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
