class AddAttachmentIconToLoos < ActiveRecord::Migration
  def self.up
    change_table :loos do |t|
      t.attachment :icon
    end
  end

  def self.down
    remove_attachment :loos, :icon
  end
end
