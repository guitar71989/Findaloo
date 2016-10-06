class Api::LoosController < ApplicationController

  def index
    @loos = Loo.all;
    render json: @loos
  end

end
