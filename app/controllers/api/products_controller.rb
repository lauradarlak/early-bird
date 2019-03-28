class Api::ProductsController < ApplicationController

  def show
    product = Product.find_by(id: params[:id])
    render json: product
  end

  def update
    product = Product.find_by(id: params[:id])
    product.update(product_params)
  end

  private

  def product_params
      params.require(:product).permit(:quantity)
    end

end
