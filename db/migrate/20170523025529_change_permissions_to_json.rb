class ChangePermissionsToJson < ActiveRecord::Migration[5.1]
  def change
    remove_column :applications, :canvas_api_permissions
    add_column :applications, :canvas_api_permissions, :jsonb, default: {}
  end
end
