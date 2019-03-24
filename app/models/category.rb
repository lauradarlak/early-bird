class Category < ApplicationRecord
  has_many :products, through: :products_categories
  has_many :products_categories

  include Slugify
  before_create :to_slug
end
