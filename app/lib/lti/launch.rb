module Lti
  class Launch

    def self.params(oauth_consumer_key = "aconsumerkey", oauth_consumer_secret = "secret", options = {})
      raise "launch_url is a required parameter" unless options["launch_url"]
      # keys in params must be strings
      params = {
        "resource_link_id" => "120988f929-274612",
        "resource_link_title" => "Pearson",
        "resource_link_description" => "Pearson LTI Tests",
        "user_id" => "1234",
        "roles" => "Instructor",
        "lis_person_name_full" => "Pearson",
        "lis_person_name_family" => "Inc",
        "lis_person_name_given" => "",
        "lis_person_contact_email_primary" => "pearson@example.com",
        "lis_person_sourced_id" => "pearson.com:user",
        "context_id" => "456434513",
        "context_title" => "Great Job",
        "context_label" => "GJ182",
        "lis_outcome_service_url" => "http://www.imsglobal.org/developers/BLTI/tool_consumer_outcome.php",
        "lis_result_sourcedid" => "feb-123-456-2929::28883",
        "tool_consumer_instance_guid" => "lmsng.school.edu",
        "tool_consumer_instance_description" => "University of School (LMSng)",
        "oauth_callback" => "about:blank",
        "ext_submit" => "Press to Launch",
      }.merge(options)

      launch_request = IMS::LTI::Models::Messages::BasicLTILaunchRequest.new(params)
      launch_request.oauth_consumer_key = oauth_consumer_key
      launch_request.signed_post_params(oauth_consumer_secret)
    end

  end
end
