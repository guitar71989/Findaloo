json.extract! @loo, :id, :name, :address, :latitude, :longitude
json.image_url asset_url(@loo.image.url)

json.current_user_review @loo.reviews.find_by(user_id: current_user.id)

json.reviews @other_users_reviews do |review|
  json.id review.id
  json.author review.user.username
  json.body review.body
  json.rating review.rating
end
