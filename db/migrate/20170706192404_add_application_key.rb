class AddApplicationKey < ActiveRecord::Migration[5.1]
  def change
    add_column :applications, :key, :string
    add_index :applications, :key
  end
end
