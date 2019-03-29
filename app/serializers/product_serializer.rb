class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :farmer, :farmer_id, :image

  def farmer
    object.farmer.name
  end
end
