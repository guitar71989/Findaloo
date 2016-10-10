class Api::LoosController < ApplicationController

  def index
    @loos = bounds ? Loo.in_bounds(bounds) : Loo.all
    @review_count = @loo
    render :index
  end

  def show
    @loo = Loo.find(params[:id])
    @current_user_review = (@current_user.nil?) ? "" : @current_user.reviews.where(loo_id: @loo.id)
    @other_users_reviews = @loo.other_users_reviews(current_user)
    render :show
  end

  def bounds
    params[:bounds]
  end

end
