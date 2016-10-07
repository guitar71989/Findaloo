json.array!(@loos) do |loo|
  json.name loo.name
  json.address loo.address
  json.image_url loo.image.url
end
