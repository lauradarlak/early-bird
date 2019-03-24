class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :farmer, :farmer_id

  def farmer
    object.farmer.name
  end
end
