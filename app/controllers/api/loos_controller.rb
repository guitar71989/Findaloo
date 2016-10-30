class Api::LoosController < ApplicationController

  def index
    @loos = bounds ? Loo.by_params(bounds, starValue) : Loo.all
    @loos = @loos.includes(:reviews)
    render :index
  end

  def create
  @loo = Loo.new(loo_params)
    if @loo.save
      render :show
    else
      render @loo.errors.full_messages, status: 422
    end
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

  def starValue
    params[:starValue].to_i
  end

end
