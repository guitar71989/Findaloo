class Api::ReviewsController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      @loo = @review.loo
      render json: @review
    else
      render json: @review, status: 422
    end
  end

  def index
    @reviews = Review.all
    render 'api/reviews/index'
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render json: {}
  end

  def review_params
    params.require(:review).permit(:rating, :body, :loo_id)
  end

end
