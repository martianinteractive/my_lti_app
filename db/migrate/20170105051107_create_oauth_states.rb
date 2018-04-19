class CreateOauthStates < ActiveRecord::Migration[5.1]
  def change
    create_table :oauth_states do |t|
      t.string :state
      t.text :payload
      t.timestamps null: false
    end
    add_index :oauth_states, :state
  end
end
