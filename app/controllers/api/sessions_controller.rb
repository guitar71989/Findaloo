class Api::SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if user
      log_in(user)
      render json: user
    else
      render json: "User does not exist", status: 422
    end
  end

  def destroy
    if current_user
      log_out
      render json: {}
    else
      render json: "User does not exist", status: 404
    end
  end

end
