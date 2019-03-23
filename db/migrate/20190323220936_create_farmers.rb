class CreateFarmers < ActiveRecord::Migration[5.2]
  def change
    create_table :farmers do |t|
      t.string :name
      t.text :desc

      t.timestamps
    end
  end
end