class MakeLtiUserIdUnique < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :lti_user_id, unique: true
  end
end
