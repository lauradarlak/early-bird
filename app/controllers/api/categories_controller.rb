class Api::CategoriesController < ApplicationController

  def index
    render json: Category.all
  end

  def show
    render json: Category.find_by(slug: params[:slug])
  end

end
