json.extract! @loo, :id, :name, :address, :latitude, :longitude
json.image_url asset_url(@loo.image.url)
json.reviews @loo.reviews.each do |review|
  json.author review.user.username
  json.body review.body
  json.rating review.rating
end
