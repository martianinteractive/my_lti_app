class AddToAuthentications < ActiveRecord::Migration[5.1]
  def change
    add_column :authentications, :lti_user_id, :string
    add_index :authentications, :lti_user_id
  end
end
