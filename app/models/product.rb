class Product < ApplicationRecord
  belongs_to :farmer
  has_many :product_categories
  has_many :categories, through: :product_categories
end
