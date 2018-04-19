class AddApplicationInstanceCounter < ActiveRecord::Migration[5.1]
  def change
    add_column :applications, :application_instances_count, :integer
  end
end
