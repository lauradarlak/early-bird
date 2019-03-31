class Api::ProductsController < ApplicationController

  def index
    render json: Product.all
  end

  def show
    product = Product.find_by(id: params[:id])
    render json: product
  end

  def update
    product = Product.find_by(id: params[:id])
    if product.update(product_params)
      render json: product
    else
      render json: { message: product.errors }, status: 400
    end
  end

  private

  def product_params
      params.require(:product).permit(:quantity)
    end

end
