class Api::CategoriesController < ApplicationController

  def index
    render json: Category.all
  end

  def show
    @category = Category.find_by(slug: params[:slug])
    render json: @category
  end

end
