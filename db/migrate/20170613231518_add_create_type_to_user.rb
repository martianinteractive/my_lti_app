class AddCreateTypeToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :create_method, :integer, default: 0
  end
end
