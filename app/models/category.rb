class Category < ApplicationRecord
  has_many :product_categories
  has_many :products, through: :product_categories

  include Slugify
  before_create :to_slug
end
