class AddAppInstDomain < ActiveRecord::Migration[5.1]
  def change
    add_column :lti_application_instances, :domain, :string, limit: 2048
  end
end
