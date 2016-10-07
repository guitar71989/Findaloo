json.array!(@loos) do |loo|
  json.id loo.id
  json.name loo.name
  json.address loo.address
  json.latitude loo.latitude
  json.longitude loo.longitude
  json.image_url loo.image.url
end
