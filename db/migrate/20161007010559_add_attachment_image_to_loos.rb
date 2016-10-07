class AddAttachmentImageToLoos < ActiveRecord::Migration
  def self.up
    change_table :loos do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :loos, :image
  end
end
