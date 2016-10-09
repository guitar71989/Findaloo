json.extract! @loo, :id, :name, :address, :latitude, :longitude
json.image_url asset_url(@loo.image.url)
