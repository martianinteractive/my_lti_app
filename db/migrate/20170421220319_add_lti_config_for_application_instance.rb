class AddLtiConfigForApplicationInstance < ActiveRecord::Migration[5.1]
  def change
    add_column :application_instances, :lti_config, :jsonb
  end
end
