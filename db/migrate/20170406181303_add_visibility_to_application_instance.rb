class AddVisibilityToApplicationInstance < ActiveRecord::Migration[5.1]
  def change
    add_column :application_instances, :visibility, :integer, default: 0
  end
end
