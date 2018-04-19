class AddAuthenticationIndex < ActiveRecord::Migration[5.1]
  def change
    add_index :authentications, [ :uid, :provider, :provider_url ]
  end
end
