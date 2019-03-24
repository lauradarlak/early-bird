class CategorySerializer < ActiveModel::Serializer
  attributes :id, :slug
  has_many :products
end
