class Api::LoosController < ApplicationController

  def index
    @loos = bounds ? Loo.in_bounds(bounds) : Loo.all
    render :index
  end

  def show
    @loo = Loo.find(params[:id])
    render :show
  end

  def bounds
    params[:bounds]
  end

end
