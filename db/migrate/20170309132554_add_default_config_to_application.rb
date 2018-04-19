class AddDefaultConfigToApplication < ActiveRecord::Migration[5.1]
  def change
    add_column :applications, :default_config, :jsonb, default: {}
    add_column :application_instances, :config, :jsonb, default: {}
  end
end
