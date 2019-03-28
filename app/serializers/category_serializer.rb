class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :image
  has_many :products
end
