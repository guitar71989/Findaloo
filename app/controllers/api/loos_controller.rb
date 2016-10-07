class Api::LoosController < ApplicationController

  def index
    @loos = Loo.all;
    render :index
  end

end
