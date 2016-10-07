class RemoveImageColumns < ActiveRecord::Migration
  def change
    remove_column :loos, :icon_file_name
    remove_column :loos, :icon_content_type
    remove_column :loos, :icon_file_size
    remove_column :loos, :icon_updated_at
  end
end
