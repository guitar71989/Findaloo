class AddUniqueIndexToReviews < ActiveRecord::Migration
  def change
    add_index :reviews, [:loo_id, :user_id], unique: true
  end
end
