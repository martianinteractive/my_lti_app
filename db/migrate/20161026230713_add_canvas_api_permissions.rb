class AddCanvasApiPermissions < ActiveRecord::Migration[5.1]
  def change
    add_column :lti_applications, :canvas_api_permissions, :text
  end
end
