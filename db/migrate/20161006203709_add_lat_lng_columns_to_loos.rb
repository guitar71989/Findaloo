class AddLatLngColumnsToLoos < ActiveRecord::Migration
  def change
    add_column :loos, :latitude, :float, null: false
    add_column :loos, :longitude, :float, null: false
  end
end
