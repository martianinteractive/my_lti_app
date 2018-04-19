class AddSecretToSite < ActiveRecord::Migration[5.1]
  def change
    add_column :sites, :secret, :string
  end
end
