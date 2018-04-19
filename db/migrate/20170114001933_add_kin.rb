class AddKin < ActiveRecord::Migration[5.1]
  def change
    add_column :applications, :kind, :integer, default: 0
  end
end
