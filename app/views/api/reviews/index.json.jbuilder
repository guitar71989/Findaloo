json.array! @reviews do |review|
  json.reviewer review.user.username
  json.body review.body
  json.rating review.rating
  json.id review.id
end
