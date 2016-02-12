export default {
	// [Search account domains)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_domain_lookups.search)
	// Api Url: /api/v1/accounts/search
	// return canvasRequest(CanvasConstants.SEARCH_ACCOUNT_DOMAINS, {}, query);
	SEARCH_ACCOUNT_DOMAINS: Network.GET,

	// [Index of active global notification for the user)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_notifications.user_index)
	// Api Url: /api/v1/accounts/:account_id/users/:user_id/account_notifications
	// return canvasRequest(CanvasConstants.INDEX_OF_ACTIVE_GLOBAL_NOTIFICATION_FOR_THE_USER, {account_id:, user_id:}, query);
	INDEX_OF_ACTIVE_GLOBAL_NOTIFICATION_FOR_THE_USER: Network.GET,

	// [Close notification for user)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_notifications.user_close_notification)
	// Api Url: /api/v1/accounts/:account_id/users/:user_id/account_notifications/:id
	// return canvasRequest(CanvasConstants.CLOSE_NOTIFICATION_FOR_USER, {account_id:, user_id:, id:}, query);
	CLOSE_NOTIFICATION_FOR_USER: Network.DELETE,

	// [Create a global notification)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_notifications.create)
	// Api Url: /api/v1/accounts/:account_id/account_notifications
	// return canvasRequest(CanvasConstants.CREATE_A_GLOBAL_NOTIFICATION, {account_id:}, query);
	CREATE_A_GLOBAL_NOTIFICATION: Network.POST,

	// [List Available Reports)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_reports.available_reports)
	// Api Url: /api/v1/accounts/:account_id/reports
	// return canvasRequest(CanvasConstants.LIST_AVAILABLE_REPORTS, {account_id:}, query);
	LIST_AVAILABLE_REPORTS: Network.GET,

	// [Start a Report)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_reports.create)
	// Api Url: /api/v1/accounts/:account_id/reports/:report
	// return canvasRequest(CanvasConstants.START_A_REPORT, {account_id:, report:}, query);
	START_A_REPORT: Network.POST,

	// [Index of Reports)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_reports.index)
	// Api Url: /api/v1/accounts/:account_id/reports/:report
	// return canvasRequest(CanvasConstants.INDEX_OF_REPORTS, {account_id:, report:}, query);
	INDEX_OF_REPORTS: Network.GET,

	// [Status of a Report)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_reports.show)
	// Api Url: /api/v1/accounts/:account_id/reports/:report/:id
	// return canvasRequest(CanvasConstants.STATUS_OF_A_REPORT, {account_id:, report:, id:}, query);
	STATUS_OF_A_REPORT: Network.GET,

	// [Delete a Report)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_reports.destroy)
	// Api Url: /api/v1/accounts/:account_id/reports/:report/:id
	// return canvasRequest(CanvasConstants.DELETE_A_REPORT, {account_id:, report:, id:}, query);
	DELETE_A_REPORT: Network.DELETE,

	// [List accounts)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.index)
	// Api Url: /api/v1/accounts
	// return canvasRequest(CanvasConstants.LIST_ACCOUNTS, {}, query);
	LIST_ACCOUNTS: Network.GET,

	// [List accounts for course admins)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.course_accounts)
	// Api Url: /api/v1/course_accounts
	// return canvasRequest(CanvasConstants.LIST_ACCOUNTS_FOR_COURSE_ADMINS, {}, query);
	LIST_ACCOUNTS_FOR_COURSE_ADMINS: Network.GET,

	// [Get a single account)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.show)
	// Api Url: /api/v1/accounts/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_ACCOUNT, {id:}, query);
	GET_A_SINGLE_ACCOUNT: Network.GET,

	// [Get the sub-accounts of an account)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.sub_accounts)
	// Api Url: /api/v1/accounts/:account_id/sub_accounts
	// return canvasRequest(CanvasConstants.GET_THE_SUB_ACCOUNTS_OF_AN_ACCOUNT, {account_id:}, query);
	GET_THE_SUB_ACCOUNTS_OF_AN_ACCOUNT: Network.GET,

	// [List active courses in an account)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.courses_api)
	// Api Url: /api/v1/accounts/:account_id/courses
	// return canvasRequest(CanvasConstants.LIST_ACTIVE_COURSES_IN_AN_ACCOUNT, {account_id:}, query);
	LIST_ACTIVE_COURSES_IN_AN_ACCOUNT: Network.GET,

	// [Update an account)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.update)
	// Api Url: /api/v1/accounts/:id
	// return canvasRequest(CanvasConstants.UPDATE_AN_ACCOUNT, {id:}, query);
	UPDATE_AN_ACCOUNT: Network.PUT,

	// [Delete a user from the root account)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.remove_user)
	// Api Url: /api/v1/accounts/:account_id/users/:user_id
	// return canvasRequest(CanvasConstants.DELETE_A_USER_FROM_THE_ROOT_ACCOUNT, {account_id:, user_id:}, query);
	DELETE_A_USER_FROM_THE_ROOT_ACCOUNT: Network.DELETE,

	// [Create a new sub-account)](https://canvas.instructure.com/doc/api/all_resources.html#method.sub_accounts.create)
	// Api Url: /api/v1/accounts/:account_id/sub_accounts
	// return canvasRequest(CanvasConstants.CREATE_A_NEW_SUB_ACCOUNT, {account_id:}, query);
	CREATE_A_NEW_SUB_ACCOUNT: Network.POST,

	// [Make an account admin)](https://canvas.instructure.com/doc/api/all_resources.html#method.admins.create)
	// Api Url: /api/v1/accounts/:account_id/admins
	// return canvasRequest(CanvasConstants.MAKE_AN_ACCOUNT_ADMIN, {account_id:}, query);
	MAKE_AN_ACCOUNT_ADMIN: Network.POST,

	// [Remove account admin)](https://canvas.instructure.com/doc/api/all_resources.html#method.admins.destroy)
	// Api Url: /api/v1/accounts/:account_id/admins/:user_id
	// return canvasRequest(CanvasConstants.REMOVE_ACCOUNT_ADMIN, {account_id:, user_id:}, query);
	REMOVE_ACCOUNT_ADMIN: Network.DELETE,

	// [List account admins)](https://canvas.instructure.com/doc/api/all_resources.html#method.admins.index)
	// Api Url: /api/v1/accounts/:account_id/admins
	// return canvasRequest(CanvasConstants.LIST_ACCOUNT_ADMINS, {account_id:}, query);
	LIST_ACCOUNT_ADMINS: Network.GET,

	// [Get department-level participation data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_participation)
	// Api Url: /api/v1/accounts/:account_id/analytics/terms/:term_id/activity
	// return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA, {account_id:, term_id:}, query);
	GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA: Network.GET,

	// [Get department-level participation data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_participation)
	// Api Url: /api/v1/accounts/:account_id/analytics/current/activity
	// return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA_BY_CURRENT, {account_id:}, query);
	GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA_BY_CURRENT: Network.GET,

	// [Get department-level participation data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_participation)
	// Api Url: /api/v1/accounts/:account_id/analytics/completed/activity
	// return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA_BY_COMPLETED, {account_id:}, query);
	GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA_BY_COMPLETED: Network.GET,

	// [Get department-level grade data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_grades)
	// Api Url: /api/v1/accounts/:account_id/analytics/terms/:term_id/grades
	// return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_GRADE_DATA, {account_id:, term_id:}, query);
	GET_DEPARTMENT_LEVEL_GRADE_DATA: Network.GET,

	// [Get department-level grade data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_grades)
	// Api Url: /api/v1/accounts/:account_id/analytics/current/grades
	// return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_GRADE_DATA_BY_CURRENT, {account_id:}, query);
	GET_DEPARTMENT_LEVEL_GRADE_DATA_BY_CURRENT: Network.GET,

	// [Get department-level grade data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_grades)
	// Api Url: /api/v1/accounts/:account_id/analytics/completed/grades
	// return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_GRADE_DATA_BY_COMPLETED, {account_id:}, query);
	GET_DEPARTMENT_LEVEL_GRADE_DATA_BY_COMPLETED: Network.GET,

	// [Get department-level statistics)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_statistics)
	// Api Url: /api/v1/accounts/:account_id/analytics/terms/:term_id/statistics
	// return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_STATISTICS, {account_id:, term_id:}, query);
	GET_DEPARTMENT_LEVEL_STATISTICS: Network.GET,

	// [Get department-level statistics)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_statistics)
	// Api Url: /api/v1/accounts/:account_id/analytics/current/statistics
	// return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_STATISTICS_BY_CURRENT, {account_id:}, query);
	GET_DEPARTMENT_LEVEL_STATISTICS_BY_CURRENT: Network.GET,

	// [Get department-level statistics)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_statistics)
	// Api Url: /api/v1/accounts/:account_id/analytics/completed/statistics
	// return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_STATISTICS_BY_COMPLETED, {account_id:}, query);
	GET_DEPARTMENT_LEVEL_STATISTICS_BY_COMPLETED: Network.GET,

	// [Get course-level participation data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.course_participation)
	// Api Url: /api/v1/courses/:course_id/analytics/activity
	// return canvasRequest(CanvasConstants.GET_COURSE_LEVEL_PARTICIPATION_DATA, {course_id:}, query);
	GET_COURSE_LEVEL_PARTICIPATION_DATA: Network.GET,

	// [Get course-level assignment data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.course_assignments)
	// Api Url: /api/v1/courses/:course_id/analytics/assignments
	// return canvasRequest(CanvasConstants.GET_COURSE_LEVEL_ASSIGNMENT_DATA, {course_id:}, query);
	GET_COURSE_LEVEL_ASSIGNMENT_DATA: Network.GET,

	// [Get course-level student summary data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.course_student_summaries)
	// Api Url: /api/v1/courses/:course_id/analytics/student_summaries
	// return canvasRequest(CanvasConstants.GET_COURSE_LEVEL_STUDENT_SUMMARY_DATA, {course_id:}, query);
	GET_COURSE_LEVEL_STUDENT_SUMMARY_DATA: Network.GET,

	// [Get user-in-a-course-level participation data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.student_in_course_participation)
	// Api Url: /api/v1/courses/:course_id/analytics/users/:student_id/activity
	// return canvasRequest(CanvasConstants.GET_USER_IN_A_COURSE_LEVEL_PARTICIPATION_DATA, {course_id:, student_id:}, query);
	GET_USER_IN_A_COURSE_LEVEL_PARTICIPATION_DATA: Network.GET,

	// [Get user-in-a-course-level assignment data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.student_in_course_assignments)
	// Api Url: /api/v1/courses/:course_id/analytics/users/:student_id/assignments
	// return canvasRequest(CanvasConstants.GET_USER_IN_A_COURSE_LEVEL_ASSIGNMENT_DATA, {course_id:, student_id:}, query);
	GET_USER_IN_A_COURSE_LEVEL_ASSIGNMENT_DATA: Network.GET,

	// [Get user-in-a-course-level messaging data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.student_in_course_messaging)
	// Api Url: /api/v1/courses/:course_id/analytics/users/:student_id/communication
	// return canvasRequest(CanvasConstants.GET_USER_IN_A_COURSE_LEVEL_MESSAGING_DATA, {course_id:, student_id:}, query);
	GET_USER_IN_A_COURSE_LEVEL_MESSAGING_DATA: Network.GET,

	// [List external feeds)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.index)
	// Api Url: /api/v1/courses/:course_id/external_feeds
	// return canvasRequest(CanvasConstants.LIST_EXTERNAL_FEEDS, {course_id:}, query);
	LIST_EXTERNAL_FEEDS: Network.GET,

	// [List external feeds)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.index)
	// Api Url: /api/v1/groups/:group_id/external_feeds
	// return canvasRequest(CanvasConstants.LIST_EXTERNAL_FEEDS_BY_GROUPS_AND_GROUP, {group_id:}, query);
	LIST_EXTERNAL_FEEDS_BY_GROUPS_AND_GROUP: Network.GET,

	// [Create an external feed)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.create)
	// Api Url: /api/v1/courses/:course_id/external_feeds
	// return canvasRequest(CanvasConstants.CREATE_AN_EXTERNAL_FEED, {course_id:}, query);
	CREATE_AN_EXTERNAL_FEED: Network.POST,

	// [Create an external feed)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.create)
	// Api Url: /api/v1/groups/:group_id/external_feeds
	// return canvasRequest(CanvasConstants.CREATE_AN_EXTERNAL_FEED_BY_GROUPS_AND_GROUP, {group_id:}, query);
	CREATE_AN_EXTERNAL_FEED_BY_GROUPS_AND_GROUP: Network.POST,

	// [Delete an external feed)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.destroy)
	// Api Url: /api/v1/courses/:course_id/external_feeds/:external_feed_id
	// return canvasRequest(CanvasConstants.DELETE_AN_EXTERNAL_FEED, {course_id:, external_feed_id:}, query);
	DELETE_AN_EXTERNAL_FEED: Network.DELETE,

	// [Delete an external feed)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.destroy)
	// Api Url: /api/v1/groups/:group_id/external_feeds/:external_feed_id
	// return canvasRequest(CanvasConstants.DELETE_AN_EXTERNAL_FEED_BY_GROUPS_AND_GROUP, {group_id:, external_feed_id:}, query);
	DELETE_AN_EXTERNAL_FEED_BY_GROUPS_AND_GROUP: Network.DELETE,

	// [List appointment groups)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.index)
	// Api Url: /api/v1/appointment_groups
	// return canvasRequest(CanvasConstants.LIST_APPOINTMENT_GROUPS, {}, query);
	LIST_APPOINTMENT_GROUPS: Network.GET,

	// [Create an appointment group)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.create)
	// Api Url: /api/v1/appointment_groups
	// return canvasRequest(CanvasConstants.CREATE_AN_APPOINTMENT_GROUP, {}, query);
	CREATE_AN_APPOINTMENT_GROUP: Network.POST,

	// [Get a single appointment group)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.show)
	// Api Url: /api/v1/appointment_groups/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_APPOINTMENT_GROUP, {id:}, query);
	GET_A_SINGLE_APPOINTMENT_GROUP: Network.GET,

	// [Update an appointment group)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.update)
	// Api Url: /api/v1/appointment_groups/:id
	// return canvasRequest(CanvasConstants.UPDATE_AN_APPOINTMENT_GROUP, {id:}, query);
	UPDATE_AN_APPOINTMENT_GROUP: Network.PUT,

	// [Delete an appointment group)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.destroy)
	// Api Url: /api/v1/appointment_groups/:id
	// return canvasRequest(CanvasConstants.DELETE_AN_APPOINTMENT_GROUP, {id:}, query);
	DELETE_AN_APPOINTMENT_GROUP: Network.DELETE,

	// [List user participants)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.users)
	// Api Url: /api/v1/appointment_groups/:id/users
	// return canvasRequest(CanvasConstants.LIST_USER_PARTICIPANTS, {id:}, query);
	LIST_USER_PARTICIPANTS: Network.GET,

	// [List student group participants)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.groups)
	// Api Url: /api/v1/appointment_groups/:id/groups
	// return canvasRequest(CanvasConstants.LIST_STUDENT_GROUP_PARTICIPANTS, {id:}, query);
	LIST_STUDENT_GROUP_PARTICIPANTS: Network.GET,

	// [List assignment groups)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups.index)
	// Api Url: /api/v1/courses/:course_id/assignment_groups
	// return canvasRequest(CanvasConstants.LIST_ASSIGNMENT_GROUPS, {course_id:}, query);
	LIST_ASSIGNMENT_GROUPS: Network.GET,

	// [Get an Assignment Group)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups_api.show)
	// Api Url: /api/v1/courses/:course_id/assignment_groups/:assignment_group_id
	// return canvasRequest(CanvasConstants.GET_AN_ASSIGNMENT_GROUP, {course_id:, assignment_group_id:}, query);
	GET_AN_ASSIGNMENT_GROUP: Network.GET,

	// [Create an Assignment Group)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups_api.create)
	// Api Url: /api/v1/courses/:course_id/assignment_groups
	// return canvasRequest(CanvasConstants.CREATE_AN_ASSIGNMENT_GROUP, {course_id:}, query);
	CREATE_AN_ASSIGNMENT_GROUP: Network.POST,

	// [Edit an Assignment Group)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups_api.update)
	// Api Url: /api/v1/courses/:course_id/assignment_groups/:assignment_group_id
	// return canvasRequest(CanvasConstants.EDIT_AN_ASSIGNMENT_GROUP, {course_id:, assignment_group_id:}, query);
	EDIT_AN_ASSIGNMENT_GROUP: Network.PUT,

	// [Destroy an Assignment Group)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups_api.destroy)
	// Api Url: /api/v1/courses/:course_id/assignment_groups/:assignment_group_id
	// return canvasRequest(CanvasConstants.DESTROY_AN_ASSIGNMENT_GROUP, {course_id:, assignment_group_id:}, query);
	DESTROY_AN_ASSIGNMENT_GROUP: Network.DELETE,

	// [Delete an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments.destroy)
	// Api Url: /api/v1/courses/:course_id/assignments/:id
	// return canvasRequest(CanvasConstants.DELETE_AN_ASSIGNMENT, {course_id:, id:}, query);
	DELETE_AN_ASSIGNMENT: Network.DELETE,

	// [List assignments)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.index)
	// Api Url: /api/v1/courses/:course_id/assignments
	// return canvasRequest(CanvasConstants.LIST_ASSIGNMENTS, {course_id:}, query);
	LIST_ASSIGNMENTS: Network.GET,

	// [List assignments for user)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.user_index)
	// Api Url: /api/v1/users/:user_id/courses/:course_id/assignments
	// return canvasRequest(CanvasConstants.LIST_ASSIGNMENTS_FOR_USER, {user_id:, course_id:}, query);
	LIST_ASSIGNMENTS_FOR_USER: Network.GET,

	// [Get a single assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.show)
	// Api Url: /api/v1/courses/:course_id/assignments/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_ASSIGNMENT, {course_id:, id:}, query);
	GET_A_SINGLE_ASSIGNMENT: Network.GET,

	// [Create an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.create)
	// Api Url: /api/v1/courses/:course_id/assignments
	// return canvasRequest(CanvasConstants.CREATE_AN_ASSIGNMENT, {course_id:}, query);
	CREATE_AN_ASSIGNMENT: Network.POST,

	// [Edit an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.update)
	// Api Url: /api/v1/courses/:course_id/assignments/:id
	// return canvasRequest(CanvasConstants.EDIT_AN_ASSIGNMENT, {course_id:, id:}, query);
	EDIT_AN_ASSIGNMENT: Network.PUT,

	// [List assignment overrides)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.index)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/overrides
	// return canvasRequest(CanvasConstants.LIST_ASSIGNMENT_OVERRIDES, {course_id:, assignment_id:}, query);
	LIST_ASSIGNMENT_OVERRIDES: Network.GET,

	// [Get a single assignment override)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.show)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/overrides/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_ASSIGNMENT_OVERRIDE, {course_id:, assignment_id:, id:}, query);
	GET_A_SINGLE_ASSIGNMENT_OVERRIDE: Network.GET,

	// [Redirect to the assignment override for a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.group_alias)
	// Api Url: /api/v1/groups/:group_id/assignments/:assignment_id/override
	// return canvasRequest(CanvasConstants.REDIRECT_TO_THE_ASSIGNMENT_OVERRIDE_FOR_A_GROUP, {group_id:, assignment_id:}, query);
	REDIRECT_TO_THE_ASSIGNMENT_OVERRIDE_FOR_A_GROUP: Network.GET,

	// [Redirect to the assignment override for a section)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.section_alias)
	// Api Url: /api/v1/sections/:course_section_id/assignments/:assignment_id/override
	// return canvasRequest(CanvasConstants.REDIRECT_TO_THE_ASSIGNMENT_OVERRIDE_FOR_A_SECTION, {course_section_id:, assignment_id:}, query);
	REDIRECT_TO_THE_ASSIGNMENT_OVERRIDE_FOR_A_SECTION: Network.GET,

	// [Create an assignment override)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.create)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/overrides
	// return canvasRequest(CanvasConstants.CREATE_AN_ASSIGNMENT_OVERRIDE, {course_id:, assignment_id:}, query);
	CREATE_AN_ASSIGNMENT_OVERRIDE: Network.POST,

	// [Update an assignment override)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.update)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/overrides/:id
	// return canvasRequest(CanvasConstants.UPDATE_AN_ASSIGNMENT_OVERRIDE, {course_id:, assignment_id:, id:}, query);
	UPDATE_AN_ASSIGNMENT_OVERRIDE: Network.PUT,

	// [Delete an assignment override)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.destroy)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/overrides/:id
	// return canvasRequest(CanvasConstants.DELETE_AN_ASSIGNMENT_OVERRIDE, {course_id:, assignment_id:, id:}, query);
	DELETE_AN_ASSIGNMENT_OVERRIDE: Network.DELETE,

	// [List authentication providers)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.index)
	// Api Url: /api/v1/accounts/:account_id/authentication_providers
	// return canvasRequest(CanvasConstants.LIST_AUTHENTICATION_PROVIDERS, {account_id:}, query);
	LIST_AUTHENTICATION_PROVIDERS: Network.GET,

	// [List authentication providers)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.index)
	// Api Url: /api/v1/accounts/:account_id/account_authorization_configs
	// return canvasRequest(CanvasConstants.LIST_AUTHENTICATION_PROVIDERS_BY_ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:}, query);
	LIST_AUTHENTICATION_PROVIDERS_BY_ACCOUNT_AUTHORIZATION_CONFIGS: Network.GET,

	// [Add authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.create)
	// Api Url: /api/v1/accounts/:account_id/authentication_providers
	// return canvasRequest(CanvasConstants.ADD_AUTHENTICATION_PROVIDER, {account_id:}, query);
	ADD_AUTHENTICATION_PROVIDER: Network.POST,

	// [Add authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.create)
	// Api Url: /api/v1/accounts/:account_id/account_authorization_configs
	// return canvasRequest(CanvasConstants.ADD_AUTHENTICATION_PROVIDER_BY_ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:}, query);
	ADD_AUTHENTICATION_PROVIDER_BY_ACCOUNT_AUTHORIZATION_CONFIGS: Network.POST,

	// [Update authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.update)
	// Api Url: /api/v1/accounts/:account_id/authentication_providers/:id
	// return canvasRequest(CanvasConstants.UPDATE_AUTHENTICATION_PROVIDER, {account_id:, id:}, query);
	UPDATE_AUTHENTICATION_PROVIDER: Network.PUT,

	// [Update authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.update)
	// Api Url: /api/v1/accounts/:account_id/account_authorization_configs/:id
	// return canvasRequest(CanvasConstants.UPDATE_AUTHENTICATION_PROVIDER_BY_ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:, id:}, query);
	UPDATE_AUTHENTICATION_PROVIDER_BY_ACCOUNT_AUTHORIZATION_CONFIGS: Network.PUT,

	// [Get authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.show)
	// Api Url: /api/v1/accounts/:account_id/authentication_providers/:id
	// return canvasRequest(CanvasConstants.GET_AUTHENTICATION_PROVIDER, {account_id:, id:}, query);
	GET_AUTHENTICATION_PROVIDER: Network.GET,

	// [Get authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.show)
	// Api Url: /api/v1/accounts/:account_id/account_authorization_configs/:id
	// return canvasRequest(CanvasConstants.GET_AUTHENTICATION_PROVIDER_BY_ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:, id:}, query);
	GET_AUTHENTICATION_PROVIDER_BY_ACCOUNT_AUTHORIZATION_CONFIGS: Network.GET,

	// [Delete authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.destroy)
	// Api Url: /api/v1/accounts/:account_id/authentication_providers/:id
	// return canvasRequest(CanvasConstants.DELETE_AUTHENTICATION_PROVIDER, {account_id:, id:}, query);
	DELETE_AUTHENTICATION_PROVIDER: Network.DELETE,

	// [Delete authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.destroy)
	// Api Url: /api/v1/accounts/:account_id/account_authorization_configs/:id
	// return canvasRequest(CanvasConstants.DELETE_AUTHENTICATION_PROVIDER_BY_ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:, id:}, query);
	DELETE_AUTHENTICATION_PROVIDER_BY_ACCOUNT_AUTHORIZATION_CONFIGS: Network.DELETE,

	// [GET discovery url _Deprecated_[2015-05-08])](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.show_discovery_url)
	// Api Url: /api/v1/accounts/:account_id/account_authorization_configs/discovery_url
	// return canvasRequest(CanvasConstants.GET_DISCOVERY_URL__DEPRECATED_____________, {account_id:}, query);
	GET_DISCOVERY_URL__DEPRECATED_____________: Network.GET,

	// [Set discovery url _Deprecated_[2015-05-08])](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.update_discovery_url)
	// Api Url: /api/v1/accounts/:account_id/account_authorization_configs/discovery_url
	// return canvasRequest(CanvasConstants.SET_DISCOVERY_URL__DEPRECATED_____________, {account_id:}, query);
	SET_DISCOVERY_URL__DEPRECATED_____________: Network.PUT,

	// [Delete discovery url _Deprecated_[2015-05-08])](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.destroy_discovery_url)
	// Api Url: /api/v1/accounts/:account_id/account_authorization_configs/discovery_url
	// return canvasRequest(CanvasConstants.DELETE_DISCOVERY_URL__DEPRECATED_____________, {account_id:}, query);
	DELETE_DISCOVERY_URL__DEPRECATED_____________: Network.DELETE,

	// [show account auth settings)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.show_sso_settings)
	// Api Url: /api/v1/accounts/:account_id/sso_settings
	// return canvasRequest(CanvasConstants.SHOW_ACCOUNT_AUTH_SETTINGS, {account_id:}, query);
	SHOW_ACCOUNT_AUTH_SETTINGS: Network.GET,

	// [update account auth settings)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.update_sso_settings)
	// Api Url: /api/v1/accounts/:account_id/sso_settings
	// return canvasRequest(CanvasConstants.UPDATE_ACCOUNT_AUTH_SETTINGS, {account_id:}, query);
	UPDATE_ACCOUNT_AUTH_SETTINGS: Network.PUT,

	// [Query by login.)](https://canvas.instructure.com/doc/api/all_resources.html#method.authentication_audit_api.for_login)
	// Api Url: /api/v1/audit/authentication/logins/:login_id
	// return canvasRequest(CanvasConstants.QUERY_BY_LOGIN_, {login_id:}, query);
	QUERY_BY_LOGIN_: Network.GET,

	// [Query by account.)](https://canvas.instructure.com/doc/api/all_resources.html#method.authentication_audit_api.for_account)
	// Api Url: /api/v1/audit/authentication/accounts/:account_id
	// return canvasRequest(CanvasConstants.QUERY_BY_ACCOUNT_, {account_id:}, query);
	QUERY_BY_ACCOUNT_: Network.GET,

	// [Query by user.)](https://canvas.instructure.com/doc/api/all_resources.html#method.authentication_audit_api.for_user)
	// Api Url: /api/v1/audit/authentication/users/:user_id
	// return canvasRequest(CanvasConstants.QUERY_BY_USER_, {user_id:}, query);
	QUERY_BY_USER_: Network.GET,

	// [List bookmarks)](https://canvas.instructure.com/doc/api/all_resources.html#method.bookmarks/bookmarks.index)
	// Api Url: /api/v1/users/self/bookmarks(/.json)(.:format)
	// return canvasRequest(CanvasConstants.LIST_BOOKMARKS, {}, query);
	LIST_BOOKMARKS: Network.GET,

	// [Create bookmark)](https://canvas.instructure.com/doc/api/all_resources.html#method.bookmarks/bookmarks.create)
	// Api Url: /api/v1/users/self/bookmarks
	// return canvasRequest(CanvasConstants.CREATE_BOOKMARK, {}, query);
	CREATE_BOOKMARK: Network.POST,

	// [Get bookmark)](https://canvas.instructure.com/doc/api/all_resources.html#method.bookmarks/bookmarks.show)
	// Api Url: /api/v1/users/self/bookmarks/:id
	// return canvasRequest(CanvasConstants.GET_BOOKMARK, {id:}, query);
	GET_BOOKMARK: Network.GET,

	// [Update bookmark)](https://canvas.instructure.com/doc/api/all_resources.html#method.bookmarks/bookmarks.update)
	// Api Url: /api/v1/users/self/bookmarks/:id
	// return canvasRequest(CanvasConstants.UPDATE_BOOKMARK, {id:}, query);
	UPDATE_BOOKMARK: Network.PUT,

	// [Delete bookmark)](https://canvas.instructure.com/doc/api/all_resources.html#method.bookmarks/bookmarks.destroy)
	// Api Url: /api/v1/users/self/bookmarks/:id
	// return canvasRequest(CanvasConstants.DELETE_BOOKMARK, {id:}, query);
	DELETE_BOOKMARK: Network.DELETE,

	// [List calendar events)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.index)
	// Api Url: /api/v1/calendar_events
	// return canvasRequest(CanvasConstants.LIST_CALENDAR_EVENTS, {}, query);
	LIST_CALENDAR_EVENTS: Network.GET,

	// [List calendar events for a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.user_index)
	// Api Url: /api/v1/users/:user_id/calendar_events
	// return canvasRequest(CanvasConstants.LIST_CALENDAR_EVENTS_FOR_A_USER, {user_id:}, query);
	LIST_CALENDAR_EVENTS_FOR_A_USER: Network.GET,

	// [Create a calendar event)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.create)
	// Api Url: /api/v1/calendar_events
	// return canvasRequest(CanvasConstants.CREATE_A_CALENDAR_EVENT, {}, query);
	CREATE_A_CALENDAR_EVENT: Network.POST,

	// [Get a single calendar event or assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.show)
	// Api Url: /api/v1/calendar_events/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_CALENDAR_EVENT_OR_ASSIGNMENT, {id:}, query);
	GET_A_SINGLE_CALENDAR_EVENT_OR_ASSIGNMENT: Network.GET,

	// [Reserve a time slot)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.reserve)
	// Api Url: /api/v1/calendar_events/:id/reservations
	// return canvasRequest(CanvasConstants.RESERVE_A_TIME_SLOT, {id:}, query);
	RESERVE_A_TIME_SLOT: Network.POST,

	// [Reserve a time slot)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.reserve)
	// Api Url: /api/v1/calendar_events/:id/reservations/:participant_id
	// return canvasRequest(CanvasConstants.RESERVE_A_TIME_SLOT_BY_PARTICIPANT, {id:, participant_id:}, query);
	RESERVE_A_TIME_SLOT_BY_PARTICIPANT: Network.POST,

	// [Update a calendar event)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.update)
	// Api Url: /api/v1/calendar_events/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_CALENDAR_EVENT, {id:}, query);
	UPDATE_A_CALENDAR_EVENT: Network.PUT,

	// [Delete a calendar event)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.destroy)
	// Api Url: /api/v1/calendar_events/:id
	// return canvasRequest(CanvasConstants.DELETE_A_CALENDAR_EVENT, {id:}, query);
	DELETE_A_CALENDAR_EVENT: Network.DELETE,

	// [List members of a collaboration.)](https://canvas.instructure.com/doc/api/all_resources.html#method.collaborations.members)
	// Api Url: /api/v1/collaborations/:id/members
	// return canvasRequest(CanvasConstants.LIST_MEMBERS_OF_A_COLLABORATION_, {id:}, query);
	LIST_MEMBERS_OF_A_COLLABORATION_: Network.GET,

	// [List of CommMessages for a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.comm_messages_api.index)
	// Api Url: /api/v1/comm_messages
	// return canvasRequest(CanvasConstants.LIST_OF_COMMMESSAGES_FOR_A_USER, {}, query);
	LIST_OF_COMMMESSAGES_FOR_A_USER: Network.GET,

	// [List user communication channels)](https://canvas.instructure.com/doc/api/all_resources.html#method.communication_channels.index)
	// Api Url: /api/v1/users/:user_id/communication_channels
	// return canvasRequest(CanvasConstants.LIST_USER_COMMUNICATION_CHANNELS, {user_id:}, query);
	LIST_USER_COMMUNICATION_CHANNELS: Network.GET,

	// [Create a communication channel)](https://canvas.instructure.com/doc/api/all_resources.html#method.communication_channels.create)
	// Api Url: /api/v1/users/:user_id/communication_channels
	// return canvasRequest(CanvasConstants.CREATE_A_COMMUNICATION_CHANNEL, {user_id:}, query);
	CREATE_A_COMMUNICATION_CHANNEL: Network.POST,

	// [Delete a communication channel)](https://canvas.instructure.com/doc/api/all_resources.html#method.communication_channels.destroy)
	// Api Url: /api/v1/users/:user_id/communication_channels/:id
	// return canvasRequest(CanvasConstants.DELETE_A_COMMUNICATION_CHANNEL, {user_id:, id:}, query);
	DELETE_A_COMMUNICATION_CHANNEL: Network.DELETE,

	// [Delete a communication channel)](https://canvas.instructure.com/doc/api/all_resources.html#method.communication_channels.destroy)
	// Api Url: /api/v1/users/:user_id/communication_channels/:type/:address
	// return canvasRequest(CanvasConstants.DELETE_A_COMMUNICATION_CHANNEL_BY_TYPE_AND_ADDRESS, {user_id:, type:, address:}, query);
	DELETE_A_COMMUNICATION_CHANNEL_BY_TYPE_AND_ADDRESS: Network.DELETE,

	// [List conferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.conferences.index)
	// Api Url: /api/v1/courses/:course_id/conferences
	// return canvasRequest(CanvasConstants.LIST_CONFERENCES, {course_id:}, query);
	LIST_CONFERENCES: Network.GET,

	// [List conferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.conferences.index)
	// Api Url: /api/v1/groups/:group_id/conferences
	// return canvasRequest(CanvasConstants.LIST_CONFERENCES_BY_GROUPS_AND_GROUP, {group_id:}, query);
	LIST_CONFERENCES_BY_GROUPS_AND_GROUP: Network.GET,

	// [List content exports)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.index)
	// Api Url: /api/v1/courses/:course_id/content_exports
	// return canvasRequest(CanvasConstants.LIST_CONTENT_EXPORTS, {course_id:}, query);
	LIST_CONTENT_EXPORTS: Network.GET,

	// [List content exports)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.index)
	// Api Url: /api/v1/groups/:group_id/content_exports
	// return canvasRequest(CanvasConstants.LIST_CONTENT_EXPORTS_BY_GROUPS_AND_GROUP, {group_id:}, query);
	LIST_CONTENT_EXPORTS_BY_GROUPS_AND_GROUP: Network.GET,

	// [List content exports)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.index)
	// Api Url: /api/v1/users/:user_id/content_exports
	// return canvasRequest(CanvasConstants.LIST_CONTENT_EXPORTS_BY_USERS_AND_USER, {user_id:}, query);
	LIST_CONTENT_EXPORTS_BY_USERS_AND_USER: Network.GET,

	// [Show content export)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.show)
	// Api Url: /api/v1/courses/:course_id/content_exports/:id
	// return canvasRequest(CanvasConstants.SHOW_CONTENT_EXPORT, {course_id:, id:}, query);
	SHOW_CONTENT_EXPORT: Network.GET,

	// [Show content export)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.show)
	// Api Url: /api/v1/groups/:group_id/content_exports/:id
	// return canvasRequest(CanvasConstants.SHOW_CONTENT_EXPORT_BY_GROUPS_AND_GROUP, {group_id:, id:}, query);
	SHOW_CONTENT_EXPORT_BY_GROUPS_AND_GROUP: Network.GET,

	// [Show content export)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.show)
	// Api Url: /api/v1/users/:user_id/content_exports/:id
	// return canvasRequest(CanvasConstants.SHOW_CONTENT_EXPORT_BY_USERS_AND_USER, {user_id:, id:}, query);
	SHOW_CONTENT_EXPORT_BY_USERS_AND_USER: Network.GET,

	// [Export content)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.create)
	// Api Url: /api/v1/courses/:course_id/content_exports
	// return canvasRequest(CanvasConstants.EXPORT_CONTENT, {course_id:}, query);
	EXPORT_CONTENT: Network.POST,

	// [Export content)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.create)
	// Api Url: /api/v1/groups/:group_id/content_exports
	// return canvasRequest(CanvasConstants.EXPORT_CONTENT_BY_GROUPS_AND_GROUP, {group_id:}, query);
	EXPORT_CONTENT_BY_GROUPS_AND_GROUP: Network.POST,

	// [Export content)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.create)
	// Api Url: /api/v1/users/:user_id/content_exports
	// return canvasRequest(CanvasConstants.EXPORT_CONTENT_BY_USERS_AND_USER, {user_id:}, query);
	EXPORT_CONTENT_BY_USERS_AND_USER: Network.POST,

	// [List migration issues)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.index)
	// Api Url: /api/v1/accounts/:account_id/content_migrations/:content_migration_id/migration_issues
	// return canvasRequest(CanvasConstants.LIST_MIGRATION_ISSUES, {account_id:, content_migration_id:}, query);
	LIST_MIGRATION_ISSUES: Network.GET,

	// [List migration issues)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.index)
	// Api Url: /api/v1/courses/:course_id/content_migrations/:content_migration_id/migration_issues
	// return canvasRequest(CanvasConstants.LIST_MIGRATION_ISSUES_BY_COURSES_AND_COURSE, {course_id:, content_migration_id:}, query);
	LIST_MIGRATION_ISSUES_BY_COURSES_AND_COURSE: Network.GET,

	// [List migration issues)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.index)
	// Api Url: /api/v1/groups/:group_id/content_migrations/:content_migration_id/migration_issues
	// return canvasRequest(CanvasConstants.LIST_MIGRATION_ISSUES_BY_GROUPS_AND_GROUP, {group_id:, content_migration_id:}, query);
	LIST_MIGRATION_ISSUES_BY_GROUPS_AND_GROUP: Network.GET,

	// [List migration issues)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.index)
	// Api Url: /api/v1/users/:user_id/content_migrations/:content_migration_id/migration_issues
	// return canvasRequest(CanvasConstants.LIST_MIGRATION_ISSUES_BY_USERS_AND_USER, {user_id:, content_migration_id:}, query);
	LIST_MIGRATION_ISSUES_BY_USERS_AND_USER: Network.GET,

	// [Get a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.show)
	// Api Url: /api/v1/accounts/:account_id/content_migrations/:content_migration_id/migration_issues/:id
	// return canvasRequest(CanvasConstants.GET_A_MIGRATION_ISSUE, {account_id:, content_migration_id:, id:}, query);
	GET_A_MIGRATION_ISSUE: Network.GET,

	// [Get a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.show)
	// Api Url: /api/v1/courses/:course_id/content_migrations/:content_migration_id/migration_issues/:id
	// return canvasRequest(CanvasConstants.GET_A_MIGRATION_ISSUE_BY_COURSES_AND_COURSE, {course_id:, content_migration_id:, id:}, query);
	GET_A_MIGRATION_ISSUE_BY_COURSES_AND_COURSE: Network.GET,

	// [Get a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.show)
	// Api Url: /api/v1/groups/:group_id/content_migrations/:content_migration_id/migration_issues/:id
	// return canvasRequest(CanvasConstants.GET_A_MIGRATION_ISSUE_BY_GROUPS_AND_GROUP, {group_id:, content_migration_id:, id:}, query);
	GET_A_MIGRATION_ISSUE_BY_GROUPS_AND_GROUP: Network.GET,

	// [Get a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.show)
	// Api Url: /api/v1/users/:user_id/content_migrations/:content_migration_id/migration_issues/:id
	// return canvasRequest(CanvasConstants.GET_A_MIGRATION_ISSUE_BY_USERS_AND_USER, {user_id:, content_migration_id:, id:}, query);
	GET_A_MIGRATION_ISSUE_BY_USERS_AND_USER: Network.GET,

	// [Update a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.update)
	// Api Url: /api/v1/accounts/:account_id/content_migrations/:content_migration_id/migration_issues/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_MIGRATION_ISSUE, {account_id:, content_migration_id:, id:}, query);
	UPDATE_A_MIGRATION_ISSUE: Network.PUT,

	// [Update a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.update)
	// Api Url: /api/v1/courses/:course_id/content_migrations/:content_migration_id/migration_issues/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_MIGRATION_ISSUE_BY_COURSES_AND_COURSE, {course_id:, content_migration_id:, id:}, query);
	UPDATE_A_MIGRATION_ISSUE_BY_COURSES_AND_COURSE: Network.PUT,

	// [Update a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.update)
	// Api Url: /api/v1/groups/:group_id/content_migrations/:content_migration_id/migration_issues/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_MIGRATION_ISSUE_BY_GROUPS_AND_GROUP, {group_id:, content_migration_id:, id:}, query);
	UPDATE_A_MIGRATION_ISSUE_BY_GROUPS_AND_GROUP: Network.PUT,

	// [Update a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.update)
	// Api Url: /api/v1/users/:user_id/content_migrations/:content_migration_id/migration_issues/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_MIGRATION_ISSUE_BY_USERS_AND_USER, {user_id:, content_migration_id:, id:}, query);
	UPDATE_A_MIGRATION_ISSUE_BY_USERS_AND_USER: Network.PUT,

	// [List content migrations)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.index)
	// Api Url: /api/v1/accounts/:account_id/content_migrations
	// return canvasRequest(CanvasConstants.LIST_CONTENT_MIGRATIONS, {account_id:}, query);
	LIST_CONTENT_MIGRATIONS: Network.GET,

	// [List content migrations)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.index)
	// Api Url: /api/v1/courses/:course_id/content_migrations
	// return canvasRequest(CanvasConstants.LIST_CONTENT_MIGRATIONS_BY_COURSES_AND_COURSE, {course_id:}, query);
	LIST_CONTENT_MIGRATIONS_BY_COURSES_AND_COURSE: Network.GET,

	// [List content migrations)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.index)
	// Api Url: /api/v1/groups/:group_id/content_migrations
	// return canvasRequest(CanvasConstants.LIST_CONTENT_MIGRATIONS_BY_GROUPS_AND_GROUP, {group_id:}, query);
	LIST_CONTENT_MIGRATIONS_BY_GROUPS_AND_GROUP: Network.GET,

	// [List content migrations)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.index)
	// Api Url: /api/v1/users/:user_id/content_migrations
	// return canvasRequest(CanvasConstants.LIST_CONTENT_MIGRATIONS_BY_USERS_AND_USER, {user_id:}, query);
	LIST_CONTENT_MIGRATIONS_BY_USERS_AND_USER: Network.GET,

	// [Get a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.show)
	// Api Url: /api/v1/accounts/:account_id/content_migrations/:id
	// return canvasRequest(CanvasConstants.GET_A_CONTENT_MIGRATION, {account_id:, id:}, query);
	GET_A_CONTENT_MIGRATION: Network.GET,

	// [Get a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.show)
	// Api Url: /api/v1/courses/:course_id/content_migrations/:id
	// return canvasRequest(CanvasConstants.GET_A_CONTENT_MIGRATION_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
	GET_A_CONTENT_MIGRATION_BY_COURSES_AND_COURSE: Network.GET,

	// [Get a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.show)
	// Api Url: /api/v1/groups/:group_id/content_migrations/:id
	// return canvasRequest(CanvasConstants.GET_A_CONTENT_MIGRATION_BY_GROUPS_AND_GROUP, {group_id:, id:}, query);
	GET_A_CONTENT_MIGRATION_BY_GROUPS_AND_GROUP: Network.GET,

	// [Get a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.show)
	// Api Url: /api/v1/users/:user_id/content_migrations/:id
	// return canvasRequest(CanvasConstants.GET_A_CONTENT_MIGRATION_BY_USERS_AND_USER, {user_id:, id:}, query);
	GET_A_CONTENT_MIGRATION_BY_USERS_AND_USER: Network.GET,

	// [Create a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.create)
	// Api Url: /api/v1/accounts/:account_id/content_migrations
	// return canvasRequest(CanvasConstants.CREATE_A_CONTENT_MIGRATION, {account_id:}, query);
	CREATE_A_CONTENT_MIGRATION: Network.POST,

	// [Create a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.create)
	// Api Url: /api/v1/courses/:course_id/content_migrations
	// return canvasRequest(CanvasConstants.CREATE_A_CONTENT_MIGRATION_BY_COURSES_AND_COURSE, {course_id:}, query);
	CREATE_A_CONTENT_MIGRATION_BY_COURSES_AND_COURSE: Network.POST,

	// [Create a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.create)
	// Api Url: /api/v1/groups/:group_id/content_migrations
	// return canvasRequest(CanvasConstants.CREATE_A_CONTENT_MIGRATION_BY_GROUPS_AND_GROUP, {group_id:}, query);
	CREATE_A_CONTENT_MIGRATION_BY_GROUPS_AND_GROUP: Network.POST,

	// [Create a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.create)
	// Api Url: /api/v1/users/:user_id/content_migrations
	// return canvasRequest(CanvasConstants.CREATE_A_CONTENT_MIGRATION_BY_USERS_AND_USER, {user_id:}, query);
	CREATE_A_CONTENT_MIGRATION_BY_USERS_AND_USER: Network.POST,

	// [Update a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.update)
	// Api Url: /api/v1/accounts/:account_id/content_migrations/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_CONTENT_MIGRATION, {account_id:, id:}, query);
	UPDATE_A_CONTENT_MIGRATION: Network.PUT,

	// [Update a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.update)
	// Api Url: /api/v1/courses/:course_id/content_migrations/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_CONTENT_MIGRATION_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
	UPDATE_A_CONTENT_MIGRATION_BY_COURSES_AND_COURSE: Network.PUT,

	// [Update a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.update)
	// Api Url: /api/v1/groups/:group_id/content_migrations/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_CONTENT_MIGRATION_BY_GROUPS_AND_GROUP, {group_id:, id:}, query);
	UPDATE_A_CONTENT_MIGRATION_BY_GROUPS_AND_GROUP: Network.PUT,

	// [Update a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.update)
	// Api Url: /api/v1/users/:user_id/content_migrations/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_CONTENT_MIGRATION_BY_USERS_AND_USER, {user_id:, id:}, query);
	UPDATE_A_CONTENT_MIGRATION_BY_USERS_AND_USER: Network.PUT,

	// [List Migration Systems)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.available_migrators)
	// Api Url: /api/v1/accounts/:account_id/content_migrations/migrators
	// return canvasRequest(CanvasConstants.LIST_MIGRATION_SYSTEMS, {account_id:}, query);
	LIST_MIGRATION_SYSTEMS: Network.GET,

	// [List Migration Systems)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.available_migrators)
	// Api Url: /api/v1/courses/:course_id/content_migrations/migrators
	// return canvasRequest(CanvasConstants.LIST_MIGRATION_SYSTEMS_BY_COURSES_AND_COURSE, {course_id:}, query);
	LIST_MIGRATION_SYSTEMS_BY_COURSES_AND_COURSE: Network.GET,

	// [List Migration Systems)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.available_migrators)
	// Api Url: /api/v1/groups/:group_id/content_migrations/migrators
	// return canvasRequest(CanvasConstants.LIST_MIGRATION_SYSTEMS_BY_GROUPS_AND_GROUP, {group_id:}, query);
	LIST_MIGRATION_SYSTEMS_BY_GROUPS_AND_GROUP: Network.GET,

	// [List Migration Systems)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.available_migrators)
	// Api Url: /api/v1/users/:user_id/content_migrations/migrators
	// return canvasRequest(CanvasConstants.LIST_MIGRATION_SYSTEMS_BY_USERS_AND_USER, {user_id:}, query);
	LIST_MIGRATION_SYSTEMS_BY_USERS_AND_USER: Network.GET,

	// [List conversations)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.index)
	// Api Url: /api/v1/conversations
	// return canvasRequest(CanvasConstants.LIST_CONVERSATIONS, {}, query);
	LIST_CONVERSATIONS: Network.GET,

	// [Create a conversation)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.create)
	// Api Url: /api/v1/conversations
	// return canvasRequest(CanvasConstants.CREATE_A_CONVERSATION, {}, query);
	CREATE_A_CONVERSATION: Network.POST,

	// [Get running batches)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.batches)
	// Api Url: /api/v1/conversations/batches
	// return canvasRequest(CanvasConstants.GET_RUNNING_BATCHES, {}, query);
	GET_RUNNING_BATCHES: Network.GET,

	// [Get a single conversation)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.show)
	// Api Url: /api/v1/conversations/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_CONVERSATION, {id:}, query);
	GET_A_SINGLE_CONVERSATION: Network.GET,

	// [Edit a conversation)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.update)
	// Api Url: /api/v1/conversations/:id
	// return canvasRequest(CanvasConstants.EDIT_A_CONVERSATION, {id:}, query);
	EDIT_A_CONVERSATION: Network.PUT,

	// [Mark all as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.mark_all_as_read)
	// Api Url: /api/v1/conversations/mark_all_as_read
	// return canvasRequest(CanvasConstants.MARK_ALL_AS_READ, {}, query);
	MARK_ALL_AS_READ: Network.POST,

	// [Delete a conversation)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.destroy)
	// Api Url: /api/v1/conversations/:id
	// return canvasRequest(CanvasConstants.DELETE_A_CONVERSATION, {id:}, query);
	DELETE_A_CONVERSATION: Network.DELETE,

	// [Add recipients)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.add_recipients)
	// Api Url: /api/v1/conversations/:id/add_recipients
	// return canvasRequest(CanvasConstants.ADD_RECIPIENTS, {id:}, query);
	ADD_RECIPIENTS: Network.POST,

	// [Add a message)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.add_message)
	// Api Url: /api/v1/conversations/:id/add_message
	// return canvasRequest(CanvasConstants.ADD_A_MESSAGE, {id:}, query);
	ADD_A_MESSAGE: Network.POST,

	// [Delete a message)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.remove_messages)
	// Api Url: /api/v1/conversations/:id/remove_messages
	// return canvasRequest(CanvasConstants.DELETE_A_MESSAGE, {id:}, query);
	DELETE_A_MESSAGE: Network.POST,

	// [Batch update conversations)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.batch_update)
	// Api Url: /api/v1/conversations
	// return canvasRequest(CanvasConstants.BATCH_UPDATE_CONVERSATIONS, {}, query);
	BATCH_UPDATE_CONVERSATIONS: Network.PUT,

	// [Find recipients)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.find_recipients)
	// Api Url: /api/v1/conversations/find_recipients
	// return canvasRequest(CanvasConstants.FIND_RECIPIENTS, {}, query);
	FIND_RECIPIENTS: Network.GET,

	// [Unread count)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.unread_count)
	// Api Url: /api/v1/conversations/unread_count
	// return canvasRequest(CanvasConstants.UNREAD_COUNT, {}, query);
	UNREAD_COUNT: Network.GET,

	// [Query by course.)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_audit_api.for_course)
	// Api Url: /api/v1/audit/course/courses/:course_id
	// return canvasRequest(CanvasConstants.QUERY_BY_COURSE_, {course_id:}, query);
	QUERY_BY_COURSE_: Network.GET,

	// [Set extensions for student quiz submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/course_quiz_extensions.create)
	// Api Url: /api/v1/courses/:course_id/quiz_extensions
	// return canvasRequest(CanvasConstants.SET_EXTENSIONS_FOR_STUDENT_QUIZ_SUBMISSIONS, {course_id:}, query);
	SET_EXTENSIONS_FOR_STUDENT_QUIZ_SUBMISSIONS: Network.POST,

	// [List your courses)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.index)
	// Api Url: /api/v1/courses
	// return canvasRequest(CanvasConstants.LIST_YOUR_COURSES, {}, query);
	LIST_YOUR_COURSES: Network.GET,

	// [List courses for a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.user_index)
	// Api Url: /api/v1/users/:user_id/courses
	// return canvasRequest(CanvasConstants.LIST_COURSES_FOR_A_USER, {user_id:}, query);
	LIST_COURSES_FOR_A_USER: Network.GET,

	// [Create a new course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.create)
	// Api Url: /api/v1/accounts/:account_id/courses
	// return canvasRequest(CanvasConstants.CREATE_A_NEW_COURSE, {account_id:}, query);
	CREATE_A_NEW_COURSE: Network.POST,

	// [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.create_file)
	// Api Url: /api/v1/courses/:course_id/files
	// return canvasRequest(CanvasConstants.UPLOAD_A_FILE, {course_id:}, query);
	UPLOAD_A_FILE: Network.POST,

	// [List students)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.students)
	// Api Url: /api/v1/courses/:course_id/students
	// return canvasRequest(CanvasConstants.LIST_STUDENTS, {course_id:}, query);
	LIST_STUDENTS: Network.GET,

	// [List users in course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.users)
	// Api Url: /api/v1/courses/:course_id/users
	// return canvasRequest(CanvasConstants.LIST_USERS_IN_COURSE, {course_id:}, query);
	LIST_USERS_IN_COURSE: Network.GET,

	// [List users in course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.users)
	// Api Url: /api/v1/courses/:course_id/search_users
	// return canvasRequest(CanvasConstants.LIST_USERS_IN_COURSE_BY_SEARCH_USERS, {course_id:}, query);
	LIST_USERS_IN_COURSE_BY_SEARCH_USERS: Network.GET,

	// [List recently logged in students)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.recent_students)
	// Api Url: /api/v1/courses/:course_id/recent_students
	// return canvasRequest(CanvasConstants.LIST_RECENTLY_LOGGED_IN_STUDENTS, {course_id:}, query);
	LIST_RECENTLY_LOGGED_IN_STUDENTS: Network.GET,

	// [Get single user)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.user)
	// Api Url: /api/v1/courses/:course_id/users/:id
	// return canvasRequest(CanvasConstants.GET_SINGLE_USER, {course_id:, id:}, query);
	GET_SINGLE_USER: Network.GET,

	// [Preview processed html)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.preview_html)
	// Api Url: /api/v1/courses/:course_id/preview_html
	// return canvasRequest(CanvasConstants.PREVIEW_PROCESSED_HTML, {course_id:}, query);
	PREVIEW_PROCESSED_HTML: Network.POST,

	// [Course activity stream)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.activity_stream)
	// Api Url: /api/v1/courses/:course_id/activity_stream
	// return canvasRequest(CanvasConstants.COURSE_ACTIVITY_STREAM, {course_id:}, query);
	COURSE_ACTIVITY_STREAM: Network.GET,

	// [Course activity stream summary)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.activity_stream_summary)
	// Api Url: /api/v1/courses/:course_id/activity_stream/summary
	// return canvasRequest(CanvasConstants.COURSE_ACTIVITY_STREAM_SUMMARY, {course_id:}, query);
	COURSE_ACTIVITY_STREAM_SUMMARY: Network.GET,

	// [Course TODO items)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.todo_items)
	// Api Url: /api/v1/courses/:course_id/todo
	// return canvasRequest(CanvasConstants.COURSE_TODO_ITEMS, {course_id:}, query);
	COURSE_TODO_ITEMS: Network.GET,

	// [Conclude a course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.destroy)
	// Api Url: /api/v1/courses/:id
	// return canvasRequest(CanvasConstants.CONCLUDE_A_COURSE, {id:}, query);
	CONCLUDE_A_COURSE: Network.DELETE,

	// [Get course settings)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.settings)
	// Api Url: /api/v1/courses/:course_id/settings
	// return canvasRequest(CanvasConstants.GET_COURSE_SETTINGS, {course_id:}, query);
	GET_COURSE_SETTINGS: Network.GET,

	// [Update course settings)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.update_settings)
	// Api Url: /api/v1/courses/:course_id/settings
	// return canvasRequest(CanvasConstants.UPDATE_COURSE_SETTINGS, {course_id:}, query);
	UPDATE_COURSE_SETTINGS: Network.PUT,

	// [Get a single course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.show)
	// Api Url: /api/v1/courses/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_COURSE, {id:}, query);
	GET_A_SINGLE_COURSE: Network.GET,

	// [Get a single course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.show)
	// Api Url: /api/v1/accounts/:account_id/courses/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_COURSE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
	GET_A_SINGLE_COURSE_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

	// [Update a course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.update)
	// Api Url: /api/v1/courses/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_COURSE, {id:}, query);
	UPDATE_A_COURSE: Network.PUT,

	// [Update courses)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.batch_update)
	// Api Url: /api/v1/accounts/:account_id/courses
	// return canvasRequest(CanvasConstants.UPDATE_COURSES, {account_id:}, query);
	UPDATE_COURSES: Network.PUT,

	// [Reset a course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.reset_content)
	// Api Url: /api/v1/courses/:course_id/reset_content
	// return canvasRequest(CanvasConstants.RESET_A_COURSE, {course_id:}, query);
	RESET_A_COURSE: Network.POST,

	// [Get course copy status)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_imports.copy_course_status)
	// Api Url: /api/v1/courses/:course_id/course_copy/:id
	// return canvasRequest(CanvasConstants.GET_COURSE_COPY_STATUS, {course_id:, id:}, query);
	GET_COURSE_COPY_STATUS: Network.GET,

	// [Copy course content)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_imports.copy_course_content)
	// Api Url: /api/v1/courses/:course_id/course_copy
	// return canvasRequest(CanvasConstants.COPY_COURSE_CONTENT, {course_id:}, query);
	COPY_COURSE_CONTENT: Network.POST,

	// [List custom gradebook columns)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_columns_api.index)
	// Api Url: /api/v1/courses/:course_id/custom_gradebook_columns
	// return canvasRequest(CanvasConstants.LIST_CUSTOM_GRADEBOOK_COLUMNS, {course_id:}, query);
	LIST_CUSTOM_GRADEBOOK_COLUMNS: Network.GET,

	// [Create a custom gradebook column)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_columns_api.create)
	// Api Url: /api/v1/courses/:course_id/custom_gradebook_columns
	// return canvasRequest(CanvasConstants.CREATE_A_CUSTOM_GRADEBOOK_COLUMN, {course_id:}, query);
	CREATE_A_CUSTOM_GRADEBOOK_COLUMN: Network.POST,

	// [Update a custom gradebook column)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_columns_api.update)
	// Api Url: /api/v1/courses/:course_id/custom_gradebook_columns/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_CUSTOM_GRADEBOOK_COLUMN, {course_id:, id:}, query);
	UPDATE_A_CUSTOM_GRADEBOOK_COLUMN: Network.PUT,

	// [Delete a custom gradebook column)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_columns_api.destroy)
	// Api Url: /api/v1/courses/:course_id/custom_gradebook_columns/:id
	// return canvasRequest(CanvasConstants.DELETE_A_CUSTOM_GRADEBOOK_COLUMN, {course_id:, id:}, query);
	DELETE_A_CUSTOM_GRADEBOOK_COLUMN: Network.DELETE,

	// [Reorder custom columns)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_columns_api.reorder)
	// Api Url: /api/v1/courses/:course_id/custom_gradebook_columns/reorder
	// return canvasRequest(CanvasConstants.REORDER_CUSTOM_COLUMNS, {course_id:}, query);
	REORDER_CUSTOM_COLUMNS: Network.POST,

	// [List entries for a column)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_column_data_api.index)
	// Api Url: /api/v1/courses/:course_id/custom_gradebook_columns/:id/data
	// return canvasRequest(CanvasConstants.LIST_ENTRIES_FOR_A_COLUMN, {course_id:, id:}, query);
	LIST_ENTRIES_FOR_A_COLUMN: Network.GET,

	// [Update column data)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_column_data_api.update)
	// Api Url: /api/v1/courses/:course_id/custom_gradebook_columns/:id/data/:user_id
	// return canvasRequest(CanvasConstants.UPDATE_COLUMN_DATA, {course_id:, id:, user_id:}, query);
	UPDATE_COLUMN_DATA: Network.PUT,

	// [List discussion topics)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.index)
	// Api Url: /api/v1/courses/:course_id/discussion_topics
	// return canvasRequest(CanvasConstants.LIST_DISCUSSION_TOPICS, {course_id:}, query);
	LIST_DISCUSSION_TOPICS: Network.GET,

	// [List discussion topics)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.index)
	// Api Url: /api/v1/groups/:group_id/discussion_topics
	// return canvasRequest(CanvasConstants.LIST_DISCUSSION_TOPICS_BY_GROUPS_AND_GROUP, {group_id:}, query);
	LIST_DISCUSSION_TOPICS_BY_GROUPS_AND_GROUP: Network.GET,

	// [Create a new discussion topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.create)
	// Api Url: /api/v1/courses/:course_id/discussion_topics
	// return canvasRequest(CanvasConstants.CREATE_A_NEW_DISCUSSION_TOPIC, {course_id:}, query);
	CREATE_A_NEW_DISCUSSION_TOPIC: Network.POST,

	// [Create a new discussion topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.create)
	// Api Url: /api/v1/groups/:group_id/discussion_topics
	// return canvasRequest(CanvasConstants.CREATE_A_NEW_DISCUSSION_TOPIC_BY_GROUPS_AND_GROUP, {group_id:}, query);
	CREATE_A_NEW_DISCUSSION_TOPIC_BY_GROUPS_AND_GROUP: Network.POST,

	// [Update a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.update)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id
	// return canvasRequest(CanvasConstants.UPDATE_A_TOPIC, {course_id:, topic_id:}, query);
	UPDATE_A_TOPIC: Network.PUT,

	// [Update a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.update)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id
	// return canvasRequest(CanvasConstants.UPDATE_A_TOPIC_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
	UPDATE_A_TOPIC_BY_GROUPS_AND_GROUP: Network.PUT,

	// [Delete a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.destroy)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id
	// return canvasRequest(CanvasConstants.DELETE_A_TOPIC, {course_id:, topic_id:}, query);
	DELETE_A_TOPIC: Network.DELETE,

	// [Delete a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.destroy)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id
	// return canvasRequest(CanvasConstants.DELETE_A_TOPIC_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
	DELETE_A_TOPIC_BY_GROUPS_AND_GROUP: Network.DELETE,

	// [Reorder pinned topics)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.reorder)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/reorder
	// return canvasRequest(CanvasConstants.REORDER_PINNED_TOPICS, {course_id:}, query);
	REORDER_PINNED_TOPICS: Network.POST,

	// [Reorder pinned topics)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.reorder)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/reorder
	// return canvasRequest(CanvasConstants.REORDER_PINNED_TOPICS_BY_GROUPS_AND_GROUP, {group_id:}, query);
	REORDER_PINNED_TOPICS_BY_GROUPS_AND_GROUP: Network.POST,

	// [Update an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_entries.update)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:id
	// return canvasRequest(CanvasConstants.UPDATE_AN_ENTRY, {course_id:, topic_id:, id:}, query);
	UPDATE_AN_ENTRY: Network.PUT,

	// [Update an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_entries.update)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:id
	// return canvasRequest(CanvasConstants.UPDATE_AN_ENTRY_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, id:}, query);
	UPDATE_AN_ENTRY_BY_GROUPS_AND_GROUP: Network.PUT,

	// [Delete an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_entries.destroy)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:id
	// return canvasRequest(CanvasConstants.DELETE_AN_ENTRY, {course_id:, topic_id:, id:}, query);
	DELETE_AN_ENTRY: Network.DELETE,

	// [Delete an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_entries.destroy)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:id
	// return canvasRequest(CanvasConstants.DELETE_AN_ENTRY_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, id:}, query);
	DELETE_AN_ENTRY_BY_GROUPS_AND_GROUP: Network.DELETE,

	// [Get a single topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.show)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_TOPIC, {course_id:, topic_id:}, query);
	GET_A_SINGLE_TOPIC: Network.GET,

	// [Get a single topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.show)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_TOPIC_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
	GET_A_SINGLE_TOPIC_BY_GROUPS_AND_GROUP: Network.GET,

	// [Get the full topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.view)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/view
	// return canvasRequest(CanvasConstants.GET_THE_FULL_TOPIC, {course_id:, topic_id:}, query);
	GET_THE_FULL_TOPIC: Network.GET,

	// [Get the full topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.view)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/view
	// return canvasRequest(CanvasConstants.GET_THE_FULL_TOPIC_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
	GET_THE_FULL_TOPIC_BY_GROUPS_AND_GROUP: Network.GET,

	// [Post an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.add_entry)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries
	// return canvasRequest(CanvasConstants.POST_AN_ENTRY, {course_id:, topic_id:}, query);
	POST_AN_ENTRY: Network.POST,

	// [Post an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.add_entry)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries
	// return canvasRequest(CanvasConstants.POST_AN_ENTRY_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
	POST_AN_ENTRY_BY_GROUPS_AND_GROUP: Network.POST,

	// [List topic entries)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.entries)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries
	// return canvasRequest(CanvasConstants.LIST_TOPIC_ENTRIES, {course_id:, topic_id:}, query);
	LIST_TOPIC_ENTRIES: Network.GET,

	// [List topic entries)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.entries)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries
	// return canvasRequest(CanvasConstants.LIST_TOPIC_ENTRIES_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
	LIST_TOPIC_ENTRIES_BY_GROUPS_AND_GROUP: Network.GET,

	// [Post a reply)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.add_reply)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/replies
	// return canvasRequest(CanvasConstants.POST_A_REPLY, {course_id:, topic_id:, entry_id:}, query);
	POST_A_REPLY: Network.POST,

	// [Post a reply)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.add_reply)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/replies
	// return canvasRequest(CanvasConstants.POST_A_REPLY_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, entry_id:}, query);
	POST_A_REPLY_BY_GROUPS_AND_GROUP: Network.POST,

	// [List entry replies)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.replies)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/replies
	// return canvasRequest(CanvasConstants.LIST_ENTRY_REPLIES, {course_id:, topic_id:, entry_id:}, query);
	LIST_ENTRY_REPLIES: Network.GET,

	// [List entry replies)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.replies)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/replies
	// return canvasRequest(CanvasConstants.LIST_ENTRY_REPLIES_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, entry_id:}, query);
	LIST_ENTRY_REPLIES_BY_GROUPS_AND_GROUP: Network.GET,

	// [List entries)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.entry_list)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entry_list
	// return canvasRequest(CanvasConstants.LIST_ENTRIES, {course_id:, topic_id:}, query);
	LIST_ENTRIES: Network.GET,

	// [List entries)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.entry_list)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entry_list
	// return canvasRequest(CanvasConstants.LIST_ENTRIES_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
	LIST_ENTRIES_BY_GROUPS_AND_GROUP: Network.GET,

	// [Mark topic as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_topic_read)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/read
	// return canvasRequest(CanvasConstants.MARK_TOPIC_AS_READ, {course_id:, topic_id:}, query);
	MARK_TOPIC_AS_READ: Network.PUT,

	// [Mark topic as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_topic_read)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/read
	// return canvasRequest(CanvasConstants.MARK_TOPIC_AS_READ_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
	MARK_TOPIC_AS_READ_BY_GROUPS_AND_GROUP: Network.PUT,

	// [Mark topic as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_topic_unread)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/read
	// return canvasRequest(CanvasConstants.MARK_TOPIC_AS_UNREAD, {course_id:, topic_id:}, query);
	MARK_TOPIC_AS_UNREAD: Network.DELETE,

	// [Mark topic as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_topic_unread)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/read
	// return canvasRequest(CanvasConstants.MARK_TOPIC_AS_UNREAD_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
	MARK_TOPIC_AS_UNREAD_BY_GROUPS_AND_GROUP: Network.DELETE,

	// [Mark all entries as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_all_read)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/read_all
	// return canvasRequest(CanvasConstants.MARK_ALL_ENTRIES_AS_READ, {course_id:, topic_id:}, query);
	MARK_ALL_ENTRIES_AS_READ: Network.PUT,

	// [Mark all entries as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_all_read)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/read_all
	// return canvasRequest(CanvasConstants.MARK_ALL_ENTRIES_AS_READ_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
	MARK_ALL_ENTRIES_AS_READ_BY_GROUPS_AND_GROUP: Network.PUT,

	// [Mark all entries as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_all_unread)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/read_all
	// return canvasRequest(CanvasConstants.MARK_ALL_ENTRIES_AS_UNREAD, {course_id:, topic_id:}, query);
	MARK_ALL_ENTRIES_AS_UNREAD: Network.DELETE,

	// [Mark all entries as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_all_unread)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/read_all
	// return canvasRequest(CanvasConstants.MARK_ALL_ENTRIES_AS_UNREAD_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
	MARK_ALL_ENTRIES_AS_UNREAD_BY_GROUPS_AND_GROUP: Network.DELETE,

	// [Mark entry as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_entry_read)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/read
	// return canvasRequest(CanvasConstants.MARK_ENTRY_AS_READ, {course_id:, topic_id:, entry_id:}, query);
	MARK_ENTRY_AS_READ: Network.PUT,

	// [Mark entry as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_entry_read)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/read
	// return canvasRequest(CanvasConstants.MARK_ENTRY_AS_READ_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, entry_id:}, query);
	MARK_ENTRY_AS_READ_BY_GROUPS_AND_GROUP: Network.PUT,

	// [Mark entry as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_entry_unread)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/read
	// return canvasRequest(CanvasConstants.MARK_ENTRY_AS_UNREAD, {course_id:, topic_id:, entry_id:}, query);
	MARK_ENTRY_AS_UNREAD: Network.DELETE,

	// [Mark entry as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_entry_unread)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/read
	// return canvasRequest(CanvasConstants.MARK_ENTRY_AS_UNREAD_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, entry_id:}, query);
	MARK_ENTRY_AS_UNREAD_BY_GROUPS_AND_GROUP: Network.DELETE,

	// [Rate entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.rate_entry)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/rating
	// return canvasRequest(CanvasConstants.RATE_ENTRY, {course_id:, topic_id:, entry_id:}, query);
	RATE_ENTRY: Network.POST,

	// [Rate entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.rate_entry)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/rating
	// return canvasRequest(CanvasConstants.RATE_ENTRY_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, entry_id:}, query);
	RATE_ENTRY_BY_GROUPS_AND_GROUP: Network.POST,

	// [Subscribe to a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.subscribe_topic)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/subscribed
	// return canvasRequest(CanvasConstants.SUBSCRIBE_TO_A_TOPIC, {course_id:, topic_id:}, query);
	SUBSCRIBE_TO_A_TOPIC: Network.PUT,

	// [Subscribe to a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.subscribe_topic)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/subscribed
	// return canvasRequest(CanvasConstants.SUBSCRIBE_TO_A_TOPIC_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
	SUBSCRIBE_TO_A_TOPIC_BY_GROUPS_AND_GROUP: Network.PUT,

	// [Unsubscribe from a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.unsubscribe_topic)
	// Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/subscribed
	// return canvasRequest(CanvasConstants.UNSUBSCRIBE_FROM_A_TOPIC, {course_id:, topic_id:}, query);
	UNSUBSCRIBE_FROM_A_TOPIC: Network.DELETE,

	// [Unsubscribe from a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.unsubscribe_topic)
	// Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/subscribed
	// return canvasRequest(CanvasConstants.UNSUBSCRIBE_FROM_A_TOPIC_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
	UNSUBSCRIBE_FROM_A_TOPIC_BY_GROUPS_AND_GROUP: Network.DELETE,

	// [Create enrollment term)](https://canvas.instructure.com/doc/api/all_resources.html#method.terms.create)
	// Api Url: /api/v1/accounts/:account_id/terms
	// return canvasRequest(CanvasConstants.CREATE_ENROLLMENT_TERM, {account_id:}, query);
	CREATE_ENROLLMENT_TERM: Network.POST,

	// [Update enrollment term)](https://canvas.instructure.com/doc/api/all_resources.html#method.terms.update)
	// Api Url: /api/v1/accounts/:account_id/terms/:id
	// return canvasRequest(CanvasConstants.UPDATE_ENROLLMENT_TERM, {account_id:, id:}, query);
	UPDATE_ENROLLMENT_TERM: Network.PUT,

	// [Delete enrollment term)](https://canvas.instructure.com/doc/api/all_resources.html#method.terms.destroy)
	// Api Url: /api/v1/accounts/:account_id/terms/:id
	// return canvasRequest(CanvasConstants.DELETE_ENROLLMENT_TERM, {account_id:, id:}, query);
	DELETE_ENROLLMENT_TERM: Network.DELETE,

	// [List enrollment terms)](https://canvas.instructure.com/doc/api/all_resources.html#method.terms_api.index)
	// Api Url: /api/v1/accounts/:account_id/terms
	// return canvasRequest(CanvasConstants.LIST_ENROLLMENT_TERMS, {account_id:}, query);
	LIST_ENROLLMENT_TERMS: Network.GET,

	// [List enrollments)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.index)
	// Api Url: /api/v1/courses/:course_id/enrollments
	// return canvasRequest(CanvasConstants.LIST_ENROLLMENTS, {course_id:}, query);
	LIST_ENROLLMENTS: Network.GET,

	// [List enrollments)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.index)
	// Api Url: /api/v1/sections/:section_id/enrollments
	// return canvasRequest(CanvasConstants.LIST_ENROLLMENTS_BY_SECTIONS_AND_SECTION, {section_id:}, query);
	LIST_ENROLLMENTS_BY_SECTIONS_AND_SECTION: Network.GET,

	// [List enrollments)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.index)
	// Api Url: /api/v1/users/:user_id/enrollments
	// return canvasRequest(CanvasConstants.LIST_ENROLLMENTS_BY_USERS_AND_USER, {user_id:}, query);
	LIST_ENROLLMENTS_BY_USERS_AND_USER: Network.GET,

	// [Enrollment by ID)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.show)
	// Api Url: /api/v1/accounts/:account_id/enrollments/:id
	// return canvasRequest(CanvasConstants.ENROLLMENT_BY_ID, {account_id:, id:}, query);
	ENROLLMENT_BY_ID: Network.GET,

	// [Enroll a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.create)
	// Api Url: /api/v1/courses/:course_id/enrollments
	// return canvasRequest(CanvasConstants.ENROLL_A_USER, {course_id:}, query);
	ENROLL_A_USER: Network.POST,

	// [Enroll a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.create)
	// Api Url: /api/v1/sections/:section_id/enrollments
	// return canvasRequest(CanvasConstants.ENROLL_A_USER_BY_SECTIONS_AND_SECTION, {section_id:}, query);
	ENROLL_A_USER_BY_SECTIONS_AND_SECTION: Network.POST,

	// [Conclude or inactivate an enrollment)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.destroy)
	// Api Url: /api/v1/courses/:course_id/enrollments/:id
	// return canvasRequest(CanvasConstants.CONCLUDE_OR_INACTIVATE_AN_ENROLLMENT, {course_id:, id:}, query);
	CONCLUDE_OR_INACTIVATE_AN_ENROLLMENT: Network.DELETE,

	// [Re-activate an enrollment)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.reactivate)
	// Api Url: /api/v1/courses/:course_id/enrollments/:id/reactivate
	// return canvasRequest(CanvasConstants.RE_ACTIVATE_AN_ENROLLMENT, {course_id:, id:}, query);
	RE_ACTIVATE_AN_ENROLLMENT: Network.PUT,

	// [Create Error Report)](https://canvas.instructure.com/doc/api/all_resources.html#method.errors.create)
	// Api Url: /api/v1/error_reports
	// return canvasRequest(CanvasConstants.CREATE_ERROR_REPORT, {}, query);
	CREATE_ERROR_REPORT: Network.POST,

	// [List external tools)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.index)
	// Api Url: /api/v1/courses/:course_id/external_tools
	// return canvasRequest(CanvasConstants.LIST_EXTERNAL_TOOLS, {course_id:}, query);
	LIST_EXTERNAL_TOOLS: Network.GET,

	// [List external tools)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.index)
	// Api Url: /api/v1/accounts/:account_id/external_tools
	// return canvasRequest(CanvasConstants.LIST_EXTERNAL_TOOLS_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
	LIST_EXTERNAL_TOOLS_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

	// [Get a sessionless launch url for an external tool.)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.generate_sessionless_launch)
	// Api Url: /api/v1/courses/:course_id/external_tools/sessionless_launch
	// return canvasRequest(CanvasConstants.GET_A_SESSIONLESS_LAUNCH_URL_FOR_AN_EXTERNAL_TOOL_, {course_id:}, query);
	GET_A_SESSIONLESS_LAUNCH_URL_FOR_AN_EXTERNAL_TOOL_: Network.GET,

	// [Get a sessionless launch url for an external tool.)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.generate_sessionless_launch)
	// Api Url: /api/v1/accounts/:account_id/external_tools/sessionless_launch
	// return canvasRequest(CanvasConstants.GET_A_SESSIONLESS_LAUNCH_URL_FOR_AN_EXTERNAL_TOOL__BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
	GET_A_SESSIONLESS_LAUNCH_URL_FOR_AN_EXTERNAL_TOOL__BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

	// [Get a single external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.show)
	// Api Url: /api/v1/courses/:course_id/external_tools/:external_tool_id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_EXTERNAL_TOOL, {course_id:, external_tool_id:}, query);
	GET_A_SINGLE_EXTERNAL_TOOL: Network.GET,

	// [Get a single external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.show)
	// Api Url: /api/v1/accounts/:account_id/external_tools/:external_tool_id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_EXTERNAL_TOOL_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, external_tool_id:}, query);
	GET_A_SINGLE_EXTERNAL_TOOL_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

	// [Create an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.create)
	// Api Url: /api/v1/courses/:course_id/external_tools
	// return canvasRequest(CanvasConstants.CREATE_AN_EXTERNAL_TOOL, {course_id:}, query);
	CREATE_AN_EXTERNAL_TOOL: Network.POST,

	// [Create an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.create)
	// Api Url: /api/v1/accounts/:account_id/external_tools
	// return canvasRequest(CanvasConstants.CREATE_AN_EXTERNAL_TOOL_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
	CREATE_AN_EXTERNAL_TOOL_BY_ACCOUNTS_AND_ACCOUNT: Network.POST,

	// [Edit an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.update)
	// Api Url: /api/v1/courses/:course_id/external_tools/:external_tool_id
	// return canvasRequest(CanvasConstants.EDIT_AN_EXTERNAL_TOOL, {course_id:, external_tool_id:}, query);
	EDIT_AN_EXTERNAL_TOOL: Network.PUT,

	// [Edit an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.update)
	// Api Url: /api/v1/accounts/:account_id/external_tools/:external_tool_id
	// return canvasRequest(CanvasConstants.EDIT_AN_EXTERNAL_TOOL_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, external_tool_id:}, query);
	EDIT_AN_EXTERNAL_TOOL_BY_ACCOUNTS_AND_ACCOUNT: Network.PUT,

	// [Delete an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.destroy)
	// Api Url: /api/v1/courses/:course_id/external_tools/:external_tool_id
	// return canvasRequest(CanvasConstants.DELETE_AN_EXTERNAL_TOOL, {course_id:, external_tool_id:}, query);
	DELETE_AN_EXTERNAL_TOOL: Network.DELETE,

	// [Delete an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.destroy)
	// Api Url: /api/v1/accounts/:account_id/external_tools/:external_tool_id
	// return canvasRequest(CanvasConstants.DELETE_AN_EXTERNAL_TOOL_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, external_tool_id:}, query);
	DELETE_AN_EXTERNAL_TOOL_BY_ACCOUNTS_AND_ACCOUNT: Network.DELETE,

	// [List favorite courses)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.list_favorite_courses)
	// Api Url: /api/v1/users/self/favorites/courses
	// return canvasRequest(CanvasConstants.LIST_FAVORITE_COURSES, {}, query);
	LIST_FAVORITE_COURSES: Network.GET,

	// [List favorite groups)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.list_favorite_groups)
	// Api Url: /api/v1/users/self/favorites/groups
	// return canvasRequest(CanvasConstants.LIST_FAVORITE_GROUPS, {}, query);
	LIST_FAVORITE_GROUPS: Network.GET,

	// [Add course to favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.add_favorite_course)
	// Api Url: /api/v1/users/self/favorites/courses/:id
	// return canvasRequest(CanvasConstants.ADD_COURSE_TO_FAVORITES, {id:}, query);
	ADD_COURSE_TO_FAVORITES: Network.POST,

	// [Add group to favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.add_favorite_groups)
	// Api Url: /api/v1/users/self/favorites/groups/:id
	// return canvasRequest(CanvasConstants.ADD_GROUP_TO_FAVORITES, {id:}, query);
	ADD_GROUP_TO_FAVORITES: Network.POST,

	// [Remove course from favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.remove_favorite_course)
	// Api Url: /api/v1/users/self/favorites/courses/:id
	// return canvasRequest(CanvasConstants.REMOVE_COURSE_FROM_FAVORITES, {id:}, query);
	REMOVE_COURSE_FROM_FAVORITES: Network.DELETE,

	// [Remove group from favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.remove_favorite_groups)
	// Api Url: /api/v1/users/self/favorites/groups/:id
	// return canvasRequest(CanvasConstants.REMOVE_GROUP_FROM_FAVORITES, {id:}, query);
	REMOVE_GROUP_FROM_FAVORITES: Network.DELETE,

	// [Reset course favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.reset_course_favorites)
	// Api Url: /api/v1/users/self/favorites/courses
	// return canvasRequest(CanvasConstants.RESET_COURSE_FAVORITES, {}, query);
	RESET_COURSE_FAVORITES: Network.DELETE,

	// [Reset group favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.reset_groups_favorites)
	// Api Url: /api/v1/users/self/favorites/groups
	// return canvasRequest(CanvasConstants.RESET_GROUP_FAVORITES, {}, query);
	RESET_GROUP_FAVORITES: Network.DELETE,

	// [List features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.index)
	// Api Url: /api/v1/courses/:course_id/features
	// return canvasRequest(CanvasConstants.LIST_FEATURES, {course_id:}, query);
	LIST_FEATURES: Network.GET,

	// [List features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.index)
	// Api Url: /api/v1/accounts/:account_id/features
	// return canvasRequest(CanvasConstants.LIST_FEATURES_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
	LIST_FEATURES_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

	// [List features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.index)
	// Api Url: /api/v1/users/:user_id/features
	// return canvasRequest(CanvasConstants.LIST_FEATURES_BY_USERS_AND_USER, {user_id:}, query);
	LIST_FEATURES_BY_USERS_AND_USER: Network.GET,

	// [List enabled features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.enabled_features)
	// Api Url: /api/v1/courses/:course_id/features/enabled
	// return canvasRequest(CanvasConstants.LIST_ENABLED_FEATURES, {course_id:}, query);
	LIST_ENABLED_FEATURES: Network.GET,

	// [List enabled features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.enabled_features)
	// Api Url: /api/v1/accounts/:account_id/features/enabled
	// return canvasRequest(CanvasConstants.LIST_ENABLED_FEATURES_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
	LIST_ENABLED_FEATURES_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

	// [List enabled features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.enabled_features)
	// Api Url: /api/v1/users/:user_id/features/enabled
	// return canvasRequest(CanvasConstants.LIST_ENABLED_FEATURES_BY_USERS_AND_USER, {user_id:}, query);
	LIST_ENABLED_FEATURES_BY_USERS_AND_USER: Network.GET,

	// [Get feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.show)
	// Api Url: /api/v1/courses/:course_id/features/flags/:feature
	// return canvasRequest(CanvasConstants.GET_FEATURE_FLAG, {course_id:, feature:}, query);
	GET_FEATURE_FLAG: Network.GET,

	// [Get feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.show)
	// Api Url: /api/v1/accounts/:account_id/features/flags/:feature
	// return canvasRequest(CanvasConstants.GET_FEATURE_FLAG_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, feature:}, query);
	GET_FEATURE_FLAG_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

	// [Get feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.show)
	// Api Url: /api/v1/users/:user_id/features/flags/:feature
	// return canvasRequest(CanvasConstants.GET_FEATURE_FLAG_BY_USERS_AND_USER, {user_id:, feature:}, query);
	GET_FEATURE_FLAG_BY_USERS_AND_USER: Network.GET,

	// [Set feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.update)
	// Api Url: /api/v1/courses/:course_id/features/flags/:feature
	// return canvasRequest(CanvasConstants.SET_FEATURE_FLAG, {course_id:, feature:}, query);
	SET_FEATURE_FLAG: Network.PUT,

	// [Set feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.update)
	// Api Url: /api/v1/accounts/:account_id/features/flags/:feature
	// return canvasRequest(CanvasConstants.SET_FEATURE_FLAG_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, feature:}, query);
	SET_FEATURE_FLAG_BY_ACCOUNTS_AND_ACCOUNT: Network.PUT,

	// [Set feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.update)
	// Api Url: /api/v1/users/:user_id/features/flags/:feature
	// return canvasRequest(CanvasConstants.SET_FEATURE_FLAG_BY_USERS_AND_USER, {user_id:, feature:}, query);
	SET_FEATURE_FLAG_BY_USERS_AND_USER: Network.PUT,

	// [Remove feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.delete)
	// Api Url: /api/v1/courses/:course_id/features/flags/:feature
	// return canvasRequest(CanvasConstants.REMOVE_FEATURE_FLAG, {course_id:, feature:}, query);
	REMOVE_FEATURE_FLAG: Network.DELETE,

	// [Remove feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.delete)
	// Api Url: /api/v1/accounts/:account_id/features/flags/:feature
	// return canvasRequest(CanvasConstants.REMOVE_FEATURE_FLAG_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, feature:}, query);
	REMOVE_FEATURE_FLAG_BY_ACCOUNTS_AND_ACCOUNT: Network.DELETE,

	// [Remove feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.delete)
	// Api Url: /api/v1/users/:user_id/features/flags/:feature
	// return canvasRequest(CanvasConstants.REMOVE_FEATURE_FLAG_BY_USERS_AND_USER, {user_id:, feature:}, query);
	REMOVE_FEATURE_FLAG_BY_USERS_AND_USER: Network.DELETE,

	// [Get quota information)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_quota)
	// Api Url: /api/v1/courses/:course_id/files/quota
	// return canvasRequest(CanvasConstants.GET_QUOTA_INFORMATION, {course_id:}, query);
	GET_QUOTA_INFORMATION: Network.GET,

	// [Get quota information)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_quota)
	// Api Url: /api/v1/groups/:group_id/files/quota
	// return canvasRequest(CanvasConstants.GET_QUOTA_INFORMATION_BY_GROUPS_AND_GROUP, {group_id:}, query);
	GET_QUOTA_INFORMATION_BY_GROUPS_AND_GROUP: Network.GET,

	// [Get quota information)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_quota)
	// Api Url: /api/v1/users/:user_id/files/quota
	// return canvasRequest(CanvasConstants.GET_QUOTA_INFORMATION_BY_USERS_AND_USER, {user_id:}, query);
	GET_QUOTA_INFORMATION_BY_USERS_AND_USER: Network.GET,

	// [List files)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_index)
	// Api Url: /api/v1/courses/:course_id/files
	// return canvasRequest(CanvasConstants.LIST_FILES, {course_id:}, query);
	LIST_FILES: Network.GET,

	// [List files)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_index)
	// Api Url: /api/v1/users/:user_id/files
	// return canvasRequest(CanvasConstants.LIST_FILES_BY_USERS_AND_USER, {user_id:}, query);
	LIST_FILES_BY_USERS_AND_USER: Network.GET,

	// [List files)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_index)
	// Api Url: /api/v1/groups/:group_id/files
	// return canvasRequest(CanvasConstants.LIST_FILES_BY_GROUPS_AND_GROUP, {group_id:}, query);
	LIST_FILES_BY_GROUPS_AND_GROUP: Network.GET,

	// [List files)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_index)
	// Api Url: /api/v1/folders/:id/files
	// return canvasRequest(CanvasConstants.LIST_FILES_BY_FOLDERS_AND_ID, {id:}, query);
	LIST_FILES_BY_FOLDERS_AND_ID: Network.GET,

	// [Get quota information)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.public_url)
	// Api Url: /api/v1/files/:id/public_url
	// return canvasRequest(CanvasConstants.GET_QUOTA_INFORMATION, {id:}, query);
	GET_QUOTA_INFORMATION: Network.GET,

	// [Get file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_show)
	// Api Url: /api/v1/files/:id
	// return canvasRequest(CanvasConstants.GET_FILE, {id:}, query);
	GET_FILE: Network.GET,

	// [Get file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_show)
	// Api Url: /api/v1/courses/:course_id/files/:id
	// return canvasRequest(CanvasConstants.GET_FILE_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
	GET_FILE_BY_COURSES_AND_COURSE: Network.GET,

	// [Get file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_show)
	// Api Url: /api/v1/groups/:group_id/files/:id
	// return canvasRequest(CanvasConstants.GET_FILE_BY_GROUPS_AND_GROUP, {group_id:, id:}, query);
	GET_FILE_BY_GROUPS_AND_GROUP: Network.GET,

	// [Get file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_show)
	// Api Url: /api/v1/users/:user_id/files/:id
	// return canvasRequest(CanvasConstants.GET_FILE_BY_USERS_AND_USER, {user_id:, id:}, query);
	GET_FILE_BY_USERS_AND_USER: Network.GET,

	// [Update file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_update)
	// Api Url: /api/v1/files/:id
	// return canvasRequest(CanvasConstants.UPDATE_FILE, {id:}, query);
	UPDATE_FILE: Network.PUT,

	// [Delete file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.destroy)
	// Api Url: /api/v1/files/:id
	// return canvasRequest(CanvasConstants.DELETE_FILE, {id:}, query);
	DELETE_FILE: Network.DELETE,

	// [List folders)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.api_index)
	// Api Url: /api/v1/folders/:id/folders
	// return canvasRequest(CanvasConstants.LIST_FOLDERS, {id:}, query);
	LIST_FOLDERS: Network.GET,

	// [List all folders)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.list_all_folders)
	// Api Url: /api/v1/courses/:course_id/folders
	// return canvasRequest(CanvasConstants.LIST_ALL_FOLDERS, {course_id:}, query);
	LIST_ALL_FOLDERS: Network.GET,

	// [List all folders)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.list_all_folders)
	// Api Url: /api/v1/users/:user_id/folders
	// return canvasRequest(CanvasConstants.LIST_ALL_FOLDERS_BY_USERS_AND_USER, {user_id:}, query);
	LIST_ALL_FOLDERS_BY_USERS_AND_USER: Network.GET,

	// [List all folders)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.list_all_folders)
	// Api Url: /api/v1/groups/:group_id/folders
	// return canvasRequest(CanvasConstants.LIST_ALL_FOLDERS_BY_GROUPS_AND_GROUP, {group_id:}, query);
	LIST_ALL_FOLDERS_BY_GROUPS_AND_GROUP: Network.GET,

	// [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
	// Api Url: /api/v1/courses/:course_id/folders/by_path/*full_path
	// return canvasRequest(CanvasConstants.RESOLVE_PATH, {course_id:}, query);
	RESOLVE_PATH: Network.GET,

	// [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
	// Api Url: /api/v1/courses/:course_id/folders/by_path
	// return canvasRequest(CanvasConstants.RESOLVE_PATH, {course_id:}, query);
	RESOLVE_PATH: Network.GET,

	// [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
	// Api Url: /api/v1/users/:user_id/folders/by_path/*full_path
	// return canvasRequest(CanvasConstants.RESOLVE_PATH_BY_USERS_AND_USER, {user_id:}, query);
	RESOLVE_PATH_BY_USERS_AND_USER: Network.GET,

	// [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
	// Api Url: /api/v1/users/:user_id/folders/by_path
	// return canvasRequest(CanvasConstants.RESOLVE_PATH_BY_USERS_AND_USER, {user_id:}, query);
	RESOLVE_PATH_BY_USERS_AND_USER: Network.GET,

	// [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
	// Api Url: /api/v1/groups/:group_id/folders/by_path/*full_path
	// return canvasRequest(CanvasConstants.RESOLVE_PATH_BY_GROUPS_AND_GROUP, {group_id:}, query);
	RESOLVE_PATH_BY_GROUPS_AND_GROUP: Network.GET,

	// [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
	// Api Url: /api/v1/groups/:group_id/folders/by_path
	// return canvasRequest(CanvasConstants.RESOLVE_PATH_BY_GROUPS_AND_GROUP, {group_id:}, query);
	RESOLVE_PATH_BY_GROUPS_AND_GROUP: Network.GET,

	// [Get folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.show)
	// Api Url: /api/v1/courses/:course_id/folders/:id
	// return canvasRequest(CanvasConstants.GET_FOLDER, {course_id:, id:}, query);
	GET_FOLDER: Network.GET,

	// [Get folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.show)
	// Api Url: /api/v1/users/:user_id/folders/:id
	// return canvasRequest(CanvasConstants.GET_FOLDER_BY_USERS_AND_USER, {user_id:, id:}, query);
	GET_FOLDER_BY_USERS_AND_USER: Network.GET,

	// [Get folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.show)
	// Api Url: /api/v1/groups/:group_id/folders/:id
	// return canvasRequest(CanvasConstants.GET_FOLDER_BY_GROUPS_AND_GROUP, {group_id:, id:}, query);
	GET_FOLDER_BY_GROUPS_AND_GROUP: Network.GET,

	// [Get folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.show)
	// Api Url: /api/v1/folders/:id
	// return canvasRequest(CanvasConstants.GET_FOLDER, {id:}, query);
	GET_FOLDER: Network.GET,

	// [Update folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.update)
	// Api Url: /api/v1/folders/:id
	// return canvasRequest(CanvasConstants.UPDATE_FOLDER, {id:}, query);
	UPDATE_FOLDER: Network.PUT,

	// [Create folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.create)
	// Api Url: /api/v1/courses/:course_id/folders
	// return canvasRequest(CanvasConstants.CREATE_FOLDER, {course_id:}, query);
	CREATE_FOLDER: Network.POST,

	// [Create folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.create)
	// Api Url: /api/v1/users/:user_id/folders
	// return canvasRequest(CanvasConstants.CREATE_FOLDER_BY_USERS_AND_USER, {user_id:}, query);
	CREATE_FOLDER_BY_USERS_AND_USER: Network.POST,

	// [Create folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.create)
	// Api Url: /api/v1/groups/:group_id/folders
	// return canvasRequest(CanvasConstants.CREATE_FOLDER_BY_GROUPS_AND_GROUP, {group_id:}, query);
	CREATE_FOLDER_BY_GROUPS_AND_GROUP: Network.POST,

	// [Create folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.create)
	// Api Url: /api/v1/folders/:folder_id/folders
	// return canvasRequest(CanvasConstants.CREATE_FOLDER_BY_FOLDER, {folder_id:}, query);
	CREATE_FOLDER_BY_FOLDER: Network.POST,

	// [Delete folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.api_destroy)
	// Api Url: /api/v1/folders/:id
	// return canvasRequest(CanvasConstants.DELETE_FOLDER, {id:}, query);
	DELETE_FOLDER: Network.DELETE,

	// [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.create_file)
	// Api Url: /api/v1/folders/:folder_id/files
	// return canvasRequest(CanvasConstants.UPLOAD_A_FILE, {folder_id:}, query);
	UPLOAD_A_FILE: Network.POST,

	// [Copy a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.copy_file)
	// Api Url: /api/v1/folders/:dest_folder_id/copy_file
	// return canvasRequest(CanvasConstants.COPY_A_FILE, {dest_folder_id:}, query);
	COPY_A_FILE: Network.POST,

	// [Copy a folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.copy_folder)
	// Api Url: /api/v1/folders/:dest_folder_id/copy_folder
	// return canvasRequest(CanvasConstants.COPY_A_FOLDER, {dest_folder_id:}, query);
	COPY_A_FOLDER: Network.POST,

	// [Set usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.set_usage_rights)
	// Api Url: /api/v1/courses/:course_id/usage_rights
	// return canvasRequest(CanvasConstants.SET_USAGE_RIGHTS, {course_id:}, query);
	SET_USAGE_RIGHTS: Network.PUT,

	// [Set usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.set_usage_rights)
	// Api Url: /api/v1/groups/:group_id/usage_rights
	// return canvasRequest(CanvasConstants.SET_USAGE_RIGHTS_BY_GROUPS_AND_GROUP, {group_id:}, query);
	SET_USAGE_RIGHTS_BY_GROUPS_AND_GROUP: Network.PUT,

	// [Set usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.set_usage_rights)
	// Api Url: /api/v1/users/:user_id/usage_rights
	// return canvasRequest(CanvasConstants.SET_USAGE_RIGHTS_BY_USERS_AND_USER, {user_id:}, query);
	SET_USAGE_RIGHTS_BY_USERS_AND_USER: Network.PUT,

	// [Remove usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.remove_usage_rights)
	// Api Url: /api/v1/courses/:course_id/usage_rights
	// return canvasRequest(CanvasConstants.REMOVE_USAGE_RIGHTS, {course_id:}, query);
	REMOVE_USAGE_RIGHTS: Network.DELETE,

	// [Remove usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.remove_usage_rights)
	// Api Url: /api/v1/groups/:group_id/usage_rights
	// return canvasRequest(CanvasConstants.REMOVE_USAGE_RIGHTS_BY_GROUPS_AND_GROUP, {group_id:}, query);
	REMOVE_USAGE_RIGHTS_BY_GROUPS_AND_GROUP: Network.DELETE,

	// [Remove usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.remove_usage_rights)
	// Api Url: /api/v1/users/:user_id/usage_rights
	// return canvasRequest(CanvasConstants.REMOVE_USAGE_RIGHTS_BY_USERS_AND_USER, {user_id:}, query);
	REMOVE_USAGE_RIGHTS_BY_USERS_AND_USER: Network.DELETE,

	// [List licenses)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.licenses)
	// Api Url: /api/v1/courses/:course_id/content_licenses
	// return canvasRequest(CanvasConstants.LIST_LICENSES, {course_id:}, query);
	LIST_LICENSES: Network.GET,

	// [List licenses)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.licenses)
	// Api Url: /api/v1/groups/:group_id/content_licenses
	// return canvasRequest(CanvasConstants.LIST_LICENSES_BY_GROUPS_AND_GROUP, {group_id:}, query);
	LIST_LICENSES_BY_GROUPS_AND_GROUP: Network.GET,

	// [List licenses)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.licenses)
	// Api Url: /api/v1/users/:user_id/content_licenses
	// return canvasRequest(CanvasConstants.LIST_LICENSES_BY_USERS_AND_USER, {user_id:}, query);
	LIST_LICENSES_BY_USERS_AND_USER: Network.GET,

	// [Query by assignment.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grade_change_audit_api.for_assignment)
	// Api Url: /api/v1/audit/grade_change/assignments/:assignment_id
	// return canvasRequest(CanvasConstants.QUERY_BY_ASSIGNMENT_, {assignment_id:}, query);
	QUERY_BY_ASSIGNMENT_: Network.GET,

	// [Query by course.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grade_change_audit_api.for_course)
	// Api Url: /api/v1/audit/grade_change/courses/:course_id
	// return canvasRequest(CanvasConstants.QUERY_BY_COURSE_, {course_id:}, query);
	QUERY_BY_COURSE_: Network.GET,

	// [Query by student.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grade_change_audit_api.for_student)
	// Api Url: /api/v1/audit/grade_change/students/:student_id
	// return canvasRequest(CanvasConstants.QUERY_BY_STUDENT_, {student_id:}, query);
	QUERY_BY_STUDENT_: Network.GET,

	// [Query by grader.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grade_change_audit_api.for_grader)
	// Api Url: /api/v1/audit/grade_change/graders/:grader_id
	// return canvasRequest(CanvasConstants.QUERY_BY_GRADER_, {grader_id:}, query);
	QUERY_BY_GRADER_: Network.GET,

	// [Days in gradebook history for this course)](https://canvas.instructure.com/doc/api/all_resources.html#method.gradebook_history_api.days)
	// Api Url: /api/v1/courses/:course_id/gradebook_history/days
	// return canvasRequest(CanvasConstants.DAYS_IN_GRADEBOOK_HISTORY_FOR_THIS_COURSE, {course_id:}, query);
	DAYS_IN_GRADEBOOK_HISTORY_FOR_THIS_COURSE: Network.GET,

	// [Details for a given date in gradebook history for this course)](https://canvas.instructure.com/doc/api/all_resources.html#method.gradebook_history_api.day_details)
	// Api Url: /api/v1/courses/:course_id/gradebook_history/:date
	// return canvasRequest(CanvasConstants.DETAILS_FOR_A_GIVEN_DATE_IN_GRADEBOOK_HISTORY_FOR_THIS_COURSE, {course_id:, date:}, query);
	DETAILS_FOR_A_GIVEN_DATE_IN_GRADEBOOK_HISTORY_FOR_THIS_COURSE: Network.GET,

	// [Lists submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.gradebook_history_api.submissions)
	// Api Url: /api/v1/courses/:course_id/gradebook_history/:date/graders/:grader_id/assignments/:assignment_id/submissions
	// return canvasRequest(CanvasConstants.LISTS_SUBMISSIONS, {course_id:, date:, grader_id:, assignment_id:}, query);
	LISTS_SUBMISSIONS: Network.GET,

	// [List uncollated submission versions)](https://canvas.instructure.com/doc/api/all_resources.html#method.gradebook_history_api.feed)
	// Api Url: /api/v1/courses/:course_id/gradebook_history/feed
	// return canvasRequest(CanvasConstants.LIST_UNCOLLATED_SUBMISSION_VERSIONS, {course_id:}, query);
	LIST_UNCOLLATED_SUBMISSION_VERSIONS: Network.GET,

	// [List grading periods)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.index)
	// Api Url: /api/v1/courses/:course_id/grading_periods
	// return canvasRequest(CanvasConstants.LIST_GRADING_PERIODS, {course_id:}, query);
	LIST_GRADING_PERIODS: Network.GET,

	// [List grading periods)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.index)
	// Api Url: /api/v1/accounts/:account_id/grading_periods
	// return canvasRequest(CanvasConstants.LIST_GRADING_PERIODS_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
	LIST_GRADING_PERIODS_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

	// [Get a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.show)
	// Api Url: /api/v1/courses/:course_id/grading_periods/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_GRADING_PERIOD, {course_id:, id:}, query);
	GET_A_SINGLE_GRADING_PERIOD: Network.GET,

	// [Get a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.show)
	// Api Url: /api/v1/accounts/:account_id/grading_periods/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_GRADING_PERIOD_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
	GET_A_SINGLE_GRADING_PERIOD_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

	// [Create a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.create)
	// Api Url: /api/v1/courses/:course_id/grading_periods
	// return canvasRequest(CanvasConstants.CREATE_A_SINGLE_GRADING_PERIOD, {course_id:}, query);
	CREATE_A_SINGLE_GRADING_PERIOD: Network.POST,

	// [Create a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.create)
	// Api Url: /api/v1/accounts/:account_id/grading_periods
	// return canvasRequest(CanvasConstants.CREATE_A_SINGLE_GRADING_PERIOD_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
	CREATE_A_SINGLE_GRADING_PERIOD_BY_ACCOUNTS_AND_ACCOUNT: Network.POST,

	// [Update a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.update)
	// Api Url: /api/v1/courses/:course_id/grading_periods/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_SINGLE_GRADING_PERIOD, {course_id:, id:}, query);
	UPDATE_A_SINGLE_GRADING_PERIOD: Network.PUT,

	// [Update a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.update)
	// Api Url: /api/v1/accounts/:account_id/grading_periods/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_SINGLE_GRADING_PERIOD_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
	UPDATE_A_SINGLE_GRADING_PERIOD_BY_ACCOUNTS_AND_ACCOUNT: Network.PUT,

	// [Delete a grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.destroy)
	// Api Url: /api/v1/courses/:course_id/grading_periods/:id
	// return canvasRequest(CanvasConstants.DELETE_A_GRADING_PERIOD, {course_id:, id:}, query);
	DELETE_A_GRADING_PERIOD: Network.DELETE,

	// [Delete a grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.destroy)
	// Api Url: /api/v1/accounts/:account_id/grading_periods/:id
	// return canvasRequest(CanvasConstants.DELETE_A_GRADING_PERIOD_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
	DELETE_A_GRADING_PERIOD_BY_ACCOUNTS_AND_ACCOUNT: Network.DELETE,

	// [Create a new grading standard)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_standards_api.create)
	// Api Url: /api/v1/accounts/:account_id/grading_standards
	// return canvasRequest(CanvasConstants.CREATE_A_NEW_GRADING_STANDARD, {account_id:}, query);
	CREATE_A_NEW_GRADING_STANDARD: Network.POST,

	// [Create a new grading standard)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_standards_api.create)
	// Api Url: /api/v1/courses/:course_id/grading_standards
	// return canvasRequest(CanvasConstants.CREATE_A_NEW_GRADING_STANDARD_BY_COURSES_AND_COURSE, {course_id:}, query);
	CREATE_A_NEW_GRADING_STANDARD_BY_COURSES_AND_COURSE: Network.POST,

	// [List the grading standards available in a context.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_standards_api.context_index)
	// Api Url: /api/v1/courses/:course_id/grading_standards
	// return canvasRequest(CanvasConstants.LIST_THE_GRADING_STANDARDS_AVAILABLE_IN_A_CONTEXT_, {course_id:}, query);
	LIST_THE_GRADING_STANDARDS_AVAILABLE_IN_A_CONTEXT_: Network.GET,

	// [List the grading standards available in a context.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_standards_api.context_index)
	// Api Url: /api/v1/accounts/:account_id/grading_standards
	// return canvasRequest(CanvasConstants.LIST_THE_GRADING_STANDARDS_AVAILABLE_IN_A_CONTEXT__BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
	LIST_THE_GRADING_STANDARDS_AVAILABLE_IN_A_CONTEXT__BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

	// [List group categories for a context)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.index)
	// Api Url: /api/v1/accounts/:account_id/group_categories
	// return canvasRequest(CanvasConstants.LIST_GROUP_CATEGORIES_FOR_A_CONTEXT, {account_id:}, query);
	LIST_GROUP_CATEGORIES_FOR_A_CONTEXT: Network.GET,

	// [List group categories for a context)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.index)
	// Api Url: /api/v1/courses/:course_id/group_categories
	// return canvasRequest(CanvasConstants.LIST_GROUP_CATEGORIES_FOR_A_CONTEXT_BY_COURSES_AND_COURSE, {course_id:}, query);
	LIST_GROUP_CATEGORIES_FOR_A_CONTEXT_BY_COURSES_AND_COURSE: Network.GET,

	// [Get a single group category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.show)
	// Api Url: /api/v1/group_categories/:group_category_id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_GROUP_CATEGORY, {group_category_id:}, query);
	GET_A_SINGLE_GROUP_CATEGORY: Network.GET,

	// [Create a Group Category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.create)
	// Api Url: /api/v1/accounts/:account_id/group_categories
	// return canvasRequest(CanvasConstants.CREATE_A_GROUP_CATEGORY, {account_id:}, query);
	CREATE_A_GROUP_CATEGORY: Network.POST,

	// [Create a Group Category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.create)
	// Api Url: /api/v1/courses/:course_id/group_categories
	// return canvasRequest(CanvasConstants.CREATE_A_GROUP_CATEGORY_BY_COURSES_AND_COURSE, {course_id:}, query);
	CREATE_A_GROUP_CATEGORY_BY_COURSES_AND_COURSE: Network.POST,

	// [Update a Group Category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.update)
	// Api Url: /api/v1/group_categories/:group_category_id
	// return canvasRequest(CanvasConstants.UPDATE_A_GROUP_CATEGORY, {group_category_id:}, query);
	UPDATE_A_GROUP_CATEGORY: Network.PUT,

	// [Delete a Group Category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.destroy)
	// Api Url: /api/v1/group_categories/:group_category_id
	// return canvasRequest(CanvasConstants.DELETE_A_GROUP_CATEGORY, {group_category_id:}, query);
	DELETE_A_GROUP_CATEGORY: Network.DELETE,

	// [List groups in group category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.groups)
	// Api Url: /api/v1/group_categories/:group_category_id/groups
	// return canvasRequest(CanvasConstants.LIST_GROUPS_IN_GROUP_CATEGORY, {group_category_id:}, query);
	LIST_GROUPS_IN_GROUP_CATEGORY: Network.GET,

	// [List users in group category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.users)
	// Api Url: /api/v1/group_categories/:group_category_id/users
	// return canvasRequest(CanvasConstants.LIST_USERS_IN_GROUP_CATEGORY, {group_category_id:}, query);
	LIST_USERS_IN_GROUP_CATEGORY: Network.GET,

	// [Assign unassigned members)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.assign_unassigned_members)
	// Api Url: /api/v1/group_categories/:group_category_id/assign_unassigned_members
	// return canvasRequest(CanvasConstants.ASSIGN_UNASSIGNED_MEMBERS, {group_category_id:}, query);
	ASSIGN_UNASSIGNED_MEMBERS: Network.POST,

	// [List your groups)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.index)
	// Api Url: /api/v1/users/self/groups
	// return canvasRequest(CanvasConstants.LIST_YOUR_GROUPS, {}, query);
	LIST_YOUR_GROUPS: Network.GET,

	// [List the groups available in a context.)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.context_index)
	// Api Url: /api/v1/accounts/:account_id/groups
	// return canvasRequest(CanvasConstants.LIST_THE_GROUPS_AVAILABLE_IN_A_CONTEXT_, {account_id:}, query);
	LIST_THE_GROUPS_AVAILABLE_IN_A_CONTEXT_: Network.GET,

	// [List the groups available in a context.)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.context_index)
	// Api Url: /api/v1/courses/:course_id/groups
	// return canvasRequest(CanvasConstants.LIST_THE_GROUPS_AVAILABLE_IN_A_CONTEXT__BY_COURSES_AND_COURSE, {course_id:}, query);
	LIST_THE_GROUPS_AVAILABLE_IN_A_CONTEXT__BY_COURSES_AND_COURSE: Network.GET,

	// [Get a single group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.show)
	// Api Url: /api/v1/groups/:group_id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_GROUP, {group_id:}, query);
	GET_A_SINGLE_GROUP: Network.GET,

	// [Create a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.create)
	// Api Url: /api/v1/groups
	// return canvasRequest(CanvasConstants.CREATE_A_GROUP, {}, query);
	CREATE_A_GROUP: Network.POST,

	// [Create a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.create)
	// Api Url: /api/v1/group_categories/:group_category_id/groups
	// return canvasRequest(CanvasConstants.CREATE_A_GROUP_BY_GROUP_CATEGORIES_AND_GROUP_CATEGORY, {group_category_id:}, query);
	CREATE_A_GROUP_BY_GROUP_CATEGORIES_AND_GROUP_CATEGORY: Network.POST,

	// [Edit a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.update)
	// Api Url: /api/v1/groups/:group_id
	// return canvasRequest(CanvasConstants.EDIT_A_GROUP, {group_id:}, query);
	EDIT_A_GROUP: Network.PUT,

	// [Delete a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.destroy)
	// Api Url: /api/v1/groups/:group_id
	// return canvasRequest(CanvasConstants.DELETE_A_GROUP, {group_id:}, query);
	DELETE_A_GROUP: Network.DELETE,

	// [Invite others to a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.invite)
	// Api Url: /api/v1/groups/:group_id/invite
	// return canvasRequest(CanvasConstants.INVITE_OTHERS_TO_A_GROUP, {group_id:}, query);
	INVITE_OTHERS_TO_A_GROUP: Network.POST,

	// [List group's users)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.users)
	// Api Url: /api/v1/groups/:group_id/users
	// return canvasRequest(CanvasConstants.LIST_GROUP_S_USERS, {group_id:}, query);
	LIST_GROUP_S_USERS: Network.GET,

	// [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.create_file)
	// Api Url: /api/v1/groups/:group_id/files
	// return canvasRequest(CanvasConstants.UPLOAD_A_FILE, {group_id:}, query);
	UPLOAD_A_FILE: Network.POST,

	// [Preview processed html)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.preview_html)
	// Api Url: /api/v1/groups/:group_id/preview_html
	// return canvasRequest(CanvasConstants.PREVIEW_PROCESSED_HTML, {group_id:}, query);
	PREVIEW_PROCESSED_HTML: Network.POST,

	// [Group activity stream)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.activity_stream)
	// Api Url: /api/v1/groups/:group_id/activity_stream
	// return canvasRequest(CanvasConstants.GROUP_ACTIVITY_STREAM, {group_id:}, query);
	GROUP_ACTIVITY_STREAM: Network.GET,

	// [Group activity stream summary)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.activity_stream_summary)
	// Api Url: /api/v1/groups/:group_id/activity_stream/summary
	// return canvasRequest(CanvasConstants.GROUP_ACTIVITY_STREAM_SUMMARY, {group_id:}, query);
	GROUP_ACTIVITY_STREAM_SUMMARY: Network.GET,

	// [List group memberships)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.index)
	// Api Url: /api/v1/groups/:group_id/memberships
	// return canvasRequest(CanvasConstants.LIST_GROUP_MEMBERSHIPS, {group_id:}, query);
	LIST_GROUP_MEMBERSHIPS: Network.GET,

	// [Get a single group membership)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.show)
	// Api Url: /api/v1/groups/:group_id/memberships/:membership_id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_GROUP_MEMBERSHIP, {group_id:, membership_id:}, query);
	GET_A_SINGLE_GROUP_MEMBERSHIP: Network.GET,

	// [Get a single group membership)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.show)
	// Api Url: /api/v1/groups/:group_id/users/:user_id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_GROUP_MEMBERSHIP_BY_USERS_AND_USER, {group_id:, user_id:}, query);
	GET_A_SINGLE_GROUP_MEMBERSHIP_BY_USERS_AND_USER: Network.GET,

	// [Create a membership)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.create)
	// Api Url: /api/v1/groups/:group_id/memberships
	// return canvasRequest(CanvasConstants.CREATE_A_MEMBERSHIP, {group_id:}, query);
	CREATE_A_MEMBERSHIP: Network.POST,

	// [Update a membership)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.update)
	// Api Url: /api/v1/groups/:group_id/memberships/:membership_id
	// return canvasRequest(CanvasConstants.UPDATE_A_MEMBERSHIP, {group_id:, membership_id:}, query);
	UPDATE_A_MEMBERSHIP: Network.PUT,

	// [Update a membership)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.update)
	// Api Url: /api/v1/groups/:group_id/users/:user_id
	// return canvasRequest(CanvasConstants.UPDATE_A_MEMBERSHIP_BY_USERS_AND_USER, {group_id:, user_id:}, query);
	UPDATE_A_MEMBERSHIP_BY_USERS_AND_USER: Network.PUT,

	// [Leave a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.destroy)
	// Api Url: /api/v1/groups/:group_id/memberships/:membership_id
	// return canvasRequest(CanvasConstants.LEAVE_A_GROUP, {group_id:, membership_id:}, query);
	LEAVE_A_GROUP: Network.DELETE,

	// [Leave a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.destroy)
	// Api Url: /api/v1/groups/:group_id/users/:user_id
	// return canvasRequest(CanvasConstants.LEAVE_A_GROUP_BY_USERS_AND_USER, {group_id:, user_id:}, query);
	LEAVE_A_GROUP_BY_USERS_AND_USER: Network.DELETE,

	// [Create JWT)](https://canvas.instructure.com/doc/api/all_resources.html#method.jwts.create)
	// Api Url: /api/v1/jwts
	// return canvasRequest(CanvasConstants.CREATE_JWT, {}, query);
	CREATE_JWT: Network.POST,

	// [Create live assessment results)](https://canvas.instructure.com/doc/api/all_resources.html#method.live_assessments/results.create)
	// Api Url: /api/v1/courses/:course_id/live_assessments/:assessment_id/results
	// return canvasRequest(CanvasConstants.CREATE_LIVE_ASSESSMENT_RESULTS, {course_id:, assessment_id:}, query);
	CREATE_LIVE_ASSESSMENT_RESULTS: Network.POST,

	// [List live assessment results)](https://canvas.instructure.com/doc/api/all_resources.html#method.live_assessments/results.index)
	// Api Url: /api/v1/courses/:course_id/live_assessments/:assessment_id/results
	// return canvasRequest(CanvasConstants.LIST_LIVE_ASSESSMENT_RESULTS, {course_id:, assessment_id:}, query);
	LIST_LIVE_ASSESSMENT_RESULTS: Network.GET,

	// [Create or find a live assessment)](https://canvas.instructure.com/doc/api/all_resources.html#method.live_assessments/assessments.create)
	// Api Url: /api/v1/courses/:course_id/live_assessments
	// return canvasRequest(CanvasConstants.CREATE_OR_FIND_A_LIVE_ASSESSMENT, {course_id:}, query);
	CREATE_OR_FIND_A_LIVE_ASSESSMENT: Network.POST,

	// [List live assessments)](https://canvas.instructure.com/doc/api/all_resources.html#method.live_assessments/assessments.index)
	// Api Url: /api/v1/courses/:course_id/live_assessments
	// return canvasRequest(CanvasConstants.LIST_LIVE_ASSESSMENTS, {course_id:}, query);
	LIST_LIVE_ASSESSMENTS: Network.GET,

	// [List user logins)](https://canvas.instructure.com/doc/api/all_resources.html#method.pseudonyms.index)
	// Api Url: /api/v1/accounts/:account_id/logins
	// return canvasRequest(CanvasConstants.LIST_USER_LOGINS, {account_id:}, query);
	LIST_USER_LOGINS: Network.GET,

	// [List user logins)](https://canvas.instructure.com/doc/api/all_resources.html#method.pseudonyms.index)
	// Api Url: /api/v1/users/:user_id/logins
	// return canvasRequest(CanvasConstants.LIST_USER_LOGINS_BY_USERS_AND_USER, {user_id:}, query);
	LIST_USER_LOGINS_BY_USERS_AND_USER: Network.GET,

	// [Create a user login)](https://canvas.instructure.com/doc/api/all_resources.html#method.pseudonyms.create)
	// Api Url: /api/v1/accounts/:account_id/logins
	// return canvasRequest(CanvasConstants.CREATE_A_USER_LOGIN, {account_id:}, query);
	CREATE_A_USER_LOGIN: Network.POST,

	// [Edit a user login)](https://canvas.instructure.com/doc/api/all_resources.html#method.pseudonyms.update)
	// Api Url: /api/v1/accounts/:account_id/logins/:id
	// return canvasRequest(CanvasConstants.EDIT_A_USER_LOGIN, {account_id:, id:}, query);
	EDIT_A_USER_LOGIN: Network.PUT,

	// [Delete a user login)](https://canvas.instructure.com/doc/api/all_resources.html#method.pseudonyms.destroy)
	// Api Url: /api/v1/users/:user_id/logins/:id
	// return canvasRequest(CanvasConstants.DELETE_A_USER_LOGIN, {user_id:, id:}, query);
	DELETE_A_USER_LOGIN: Network.DELETE,

	// [List students selected for moderation)](https://canvas.instructure.com/doc/api/all_resources.html#method.moderation_set.index)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/moderated_students
	// return canvasRequest(CanvasConstants.LIST_STUDENTS_SELECTED_FOR_MODERATION, {course_id:, assignment_id:}, query);
	LIST_STUDENTS_SELECTED_FOR_MODERATION: Network.GET,

	// [Select students for moderation)](https://canvas.instructure.com/doc/api/all_resources.html#method.moderation_set.create)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/moderated_students
	// return canvasRequest(CanvasConstants.SELECT_STUDENTS_FOR_MODERATION, {course_id:, assignment_id:}, query);
	SELECT_STUDENTS_FOR_MODERATION: Network.POST,

	// [Show provisional grade status for a student)](https://canvas.instructure.com/doc/api/all_resources.html#method.provisional_grades.status)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/provisional_grades/status
	// return canvasRequest(CanvasConstants.SHOW_PROVISIONAL_GRADE_STATUS_FOR_A_STUDENT, {course_id:, assignment_id:}, query);
	SHOW_PROVISIONAL_GRADE_STATUS_FOR_A_STUDENT: Network.GET,

	// [Select provisional grade)](https://canvas.instructure.com/doc/api/all_resources.html#method.provisional_grades.select)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/provisional_grades/:provisional_grade_id/select
	// return canvasRequest(CanvasConstants.SELECT_PROVISIONAL_GRADE, {course_id:, assignment_id:, provisional_grade_id:}, query);
	SELECT_PROVISIONAL_GRADE: Network.PUT,

	// [Copy provisional grade)](https://canvas.instructure.com/doc/api/all_resources.html#method.provisional_grades.copy_to_final_mark)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/provisional_grades/:provisional_grade_id/copy_to_final_mark
	// return canvasRequest(CanvasConstants.COPY_PROVISIONAL_GRADE, {course_id:, assignment_id:, provisional_grade_id:}, query);
	COPY_PROVISIONAL_GRADE: Network.POST,

	// [Publish provisional grades for an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.provisional_grades.publish)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/provisional_grades/publish
	// return canvasRequest(CanvasConstants.PUBLISH_PROVISIONAL_GRADES_FOR_AN_ASSIGNMENT, {course_id:, assignment_id:}, query);
	PUBLISH_PROVISIONAL_GRADES_FOR_AN_ASSIGNMENT: Network.POST,

	// [List modules)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.index)
	// Api Url: /api/v1/courses/:course_id/modules
	// return canvasRequest(CanvasConstants.LIST_MODULES, {course_id:}, query);
	LIST_MODULES: Network.GET,

	// [Show module)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.show)
	// Api Url: /api/v1/courses/:course_id/modules/:id
	// return canvasRequest(CanvasConstants.SHOW_MODULE, {course_id:, id:}, query);
	SHOW_MODULE: Network.GET,

	// [Create a module)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.create)
	// Api Url: /api/v1/courses/:course_id/modules
	// return canvasRequest(CanvasConstants.CREATE_A_MODULE, {course_id:}, query);
	CREATE_A_MODULE: Network.POST,

	// [Update a module)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.update)
	// Api Url: /api/v1/courses/:course_id/modules/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_MODULE, {course_id:, id:}, query);
	UPDATE_A_MODULE: Network.PUT,

	// [Delete module)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.destroy)
	// Api Url: /api/v1/courses/:course_id/modules/:id
	// return canvasRequest(CanvasConstants.DELETE_MODULE, {course_id:, id:}, query);
	DELETE_MODULE: Network.DELETE,

	// [Re-lock module progressions)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.relock)
	// Api Url: /api/v1/courses/:course_id/modules/:id/relock
	// return canvasRequest(CanvasConstants.RE_LOCK_MODULE_PROGRESSIONS, {course_id:, id:}, query);
	RE_LOCK_MODULE_PROGRESSIONS: Network.PUT,

	// [List module items)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.index)
	// Api Url: /api/v1/courses/:course_id/modules/:module_id/items
	// return canvasRequest(CanvasConstants.LIST_MODULE_ITEMS, {course_id:, module_id:}, query);
	LIST_MODULE_ITEMS: Network.GET,

	// [Show module item)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.show)
	// Api Url: /api/v1/courses/:course_id/modules/:module_id/items/:id
	// return canvasRequest(CanvasConstants.SHOW_MODULE_ITEM, {course_id:, module_id:, id:}, query);
	SHOW_MODULE_ITEM: Network.GET,

	// [Create a module item)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.create)
	// Api Url: /api/v1/courses/:course_id/modules/:module_id/items
	// return canvasRequest(CanvasConstants.CREATE_A_MODULE_ITEM, {course_id:, module_id:}, query);
	CREATE_A_MODULE_ITEM: Network.POST,

	// [Update a module item)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.update)
	// Api Url: /api/v1/courses/:course_id/modules/:module_id/items/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_MODULE_ITEM, {course_id:, module_id:, id:}, query);
	UPDATE_A_MODULE_ITEM: Network.PUT,

	// [Delete module item)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.destroy)
	// Api Url: /api/v1/courses/:course_id/modules/:module_id/items/:id
	// return canvasRequest(CanvasConstants.DELETE_MODULE_ITEM, {course_id:, module_id:, id:}, query);
	DELETE_MODULE_ITEM: Network.DELETE,

	// [Mark module item as done/not done)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.mark_as_done)
	// Api Url: /api/v1/courses/:course_id/modules/:module_id/items/:id/done
	// return canvasRequest(CanvasConstants.MARK_MODULE_ITEM_AS_DONE_NOT_DONE, {course_id:, module_id:, id:}, query);
	MARK_MODULE_ITEM_AS_DONE_NOT_DONE: Network.PUT,

	// [Get module item sequence)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.item_sequence)
	// Api Url: /api/v1/courses/:course_id/module_item_sequence
	// return canvasRequest(CanvasConstants.GET_MODULE_ITEM_SEQUENCE, {course_id:}, query);
	GET_MODULE_ITEM_SEQUENCE: Network.GET,

	// [Mark module item read)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.mark_item_read)
	// Api Url: /api/v1/courses/:course_id/modules/:module_id/items/:id/mark_read
	// return canvasRequest(CanvasConstants.MARK_MODULE_ITEM_READ, {course_id:, module_id:, id:}, query);
	MARK_MODULE_ITEM_READ: Network.POST,

	// [List preferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.index)
	// Api Url: /api/v1/users/:user_id/communication_channels/:communication_channel_id/notification_preferences
	// return canvasRequest(CanvasConstants.LIST_PREFERENCES, {user_id:, communication_channel_id:}, query);
	LIST_PREFERENCES: Network.GET,

	// [List preferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.index)
	// Api Url: /api/v1/users/:user_id/communication_channels/:type/:address/notification_preferences
	// return canvasRequest(CanvasConstants.LIST_PREFERENCES_BY_TYPE_AND_ADDRESS, {user_id:, type:, address:}, query);
	LIST_PREFERENCES_BY_TYPE_AND_ADDRESS: Network.GET,

	// [List of preference categories)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.category_index)
	// Api Url: /api/v1/users/:user_id/communication_channels/:communication_channel_id/notification_preference_categories
	// return canvasRequest(CanvasConstants.LIST_OF_PREFERENCE_CATEGORIES, {user_id:, communication_channel_id:}, query);
	LIST_OF_PREFERENCE_CATEGORIES: Network.GET,

	// [Get a preference)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.show)
	// Api Url: /api/v1/users/:user_id/communication_channels/:communication_channel_id/notification_preferences/:notification
	// return canvasRequest(CanvasConstants.GET_A_PREFERENCE, {user_id:, communication_channel_id:, notification:}, query);
	GET_A_PREFERENCE: Network.GET,

	// [Get a preference)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.show)
	// Api Url: /api/v1/users/:user_id/communication_channels/:type/:address/notification_preferences/:notification
	// return canvasRequest(CanvasConstants.GET_A_PREFERENCE_BY_TYPE_AND_ADDRESS, {user_id:, type:, address:, notification:}, query);
	GET_A_PREFERENCE_BY_TYPE_AND_ADDRESS: Network.GET,

	// [Update a preference)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.update)
	// Api Url: /api/v1/users/self/communication_channels/:communication_channel_id/notification_preferences/:notification
	// return canvasRequest(CanvasConstants.UPDATE_A_PREFERENCE, {communication_channel_id:, notification:}, query);
	UPDATE_A_PREFERENCE: Network.PUT,

	// [Update a preference)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.update)
	// Api Url: /api/v1/users/self/communication_channels/:type/:address/notification_preferences/:notification
	// return canvasRequest(CanvasConstants.UPDATE_A_PREFERENCE_BY_TYPE_AND_ADDRESS, {type:, address:, notification:}, query);
	UPDATE_A_PREFERENCE_BY_TYPE_AND_ADDRESS: Network.PUT,

	// [Update preferences by category)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.update_preferences_by_category)
	// Api Url: /api/v1/users/self/communication_channels/:communication_channel_id/notification_preference_categories/:category
	// return canvasRequest(CanvasConstants.UPDATE_PREFERENCES_BY_CATEGORY, {communication_channel_id:, category:}, query);
	UPDATE_PREFERENCES_BY_CATEGORY: Network.PUT,

	// [Update multiple preferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.update_all)
	// Api Url: /api/v1/users/self/communication_channels/:communication_channel_id/notification_preferences
	// return canvasRequest(CanvasConstants.UPDATE_MULTIPLE_PREFERENCES, {communication_channel_id:}, query);
	UPDATE_MULTIPLE_PREFERENCES: Network.PUT,

	// [Update multiple preferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.update_all)
	// Api Url: /api/v1/users/self/communication_channels/:type/:address/notification_preferences
	// return canvasRequest(CanvasConstants.UPDATE_MULTIPLE_PREFERENCES_BY_TYPE_AND_ADDRESS, {type:, address:}, query);
	UPDATE_MULTIPLE_PREFERENCES_BY_TYPE_AND_ADDRESS: Network.PUT,

	// [Redirect to root outcome group for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.redirect)
	// Api Url: /api/v1/global/root_outcome_group
	// return canvasRequest(CanvasConstants.REDIRECT_TO_ROOT_OUTCOME_GROUP_FOR_CONTEXT, {}, query);
	REDIRECT_TO_ROOT_OUTCOME_GROUP_FOR_CONTEXT: Network.GET,

	// [Redirect to root outcome group for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.redirect)
	// Api Url: /api/v1/accounts/:account_id/root_outcome_group
	// return canvasRequest(CanvasConstants.REDIRECT_TO_ROOT_OUTCOME_GROUP_FOR_CONTEXT_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
	REDIRECT_TO_ROOT_OUTCOME_GROUP_FOR_CONTEXT_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

	// [Redirect to root outcome group for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.redirect)
	// Api Url: /api/v1/courses/:course_id/root_outcome_group
	// return canvasRequest(CanvasConstants.REDIRECT_TO_ROOT_OUTCOME_GROUP_FOR_CONTEXT_BY_COURSES_AND_COURSE, {course_id:}, query);
	REDIRECT_TO_ROOT_OUTCOME_GROUP_FOR_CONTEXT_BY_COURSES_AND_COURSE: Network.GET,

	// [Get all outcome groups for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.index)
	// Api Url: /api/v1/accounts/:account_id/outcome_groups
	// return canvasRequest(CanvasConstants.GET_ALL_OUTCOME_GROUPS_FOR_CONTEXT, {account_id:}, query);
	GET_ALL_OUTCOME_GROUPS_FOR_CONTEXT: Network.GET,

	// [Get all outcome groups for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.index)
	// Api Url: /api/v1/courses/:course_id/outcome_groups
	// return canvasRequest(CanvasConstants.GET_ALL_OUTCOME_GROUPS_FOR_CONTEXT_BY_COURSES_AND_COURSE, {course_id:}, query);
	GET_ALL_OUTCOME_GROUPS_FOR_CONTEXT_BY_COURSES_AND_COURSE: Network.GET,

	// [Get all outcome links for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link_index)
	// Api Url: /api/v1/accounts/:account_id/outcome_group_links
	// return canvasRequest(CanvasConstants.GET_ALL_OUTCOME_LINKS_FOR_CONTEXT, {account_id:}, query);
	GET_ALL_OUTCOME_LINKS_FOR_CONTEXT: Network.GET,

	// [Get all outcome links for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link_index)
	// Api Url: /api/v1/courses/:course_id/outcome_group_links
	// return canvasRequest(CanvasConstants.GET_ALL_OUTCOME_LINKS_FOR_CONTEXT_BY_COURSES_AND_COURSE, {course_id:}, query);
	GET_ALL_OUTCOME_LINKS_FOR_CONTEXT_BY_COURSES_AND_COURSE: Network.GET,

	// [Show an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.show)
	// Api Url: /api/v1/global/outcome_groups/:id
	// return canvasRequest(CanvasConstants.SHOW_AN_OUTCOME_GROUP, {id:}, query);
	SHOW_AN_OUTCOME_GROUP: Network.GET,

	// [Show an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.show)
	// Api Url: /api/v1/accounts/:account_id/outcome_groups/:id
	// return canvasRequest(CanvasConstants.SHOW_AN_OUTCOME_GROUP_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
	SHOW_AN_OUTCOME_GROUP_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

	// [Show an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.show)
	// Api Url: /api/v1/courses/:course_id/outcome_groups/:id
	// return canvasRequest(CanvasConstants.SHOW_AN_OUTCOME_GROUP_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
	SHOW_AN_OUTCOME_GROUP_BY_COURSES_AND_COURSE: Network.GET,

	// [Update an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.update)
	// Api Url: /api/v1/global/outcome_groups/:id
	// return canvasRequest(CanvasConstants.UPDATE_AN_OUTCOME_GROUP, {id:}, query);
	UPDATE_AN_OUTCOME_GROUP: Network.PUT,

	// [Update an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.update)
	// Api Url: /api/v1/accounts/:account_id/outcome_groups/:id
	// return canvasRequest(CanvasConstants.UPDATE_AN_OUTCOME_GROUP_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
	UPDATE_AN_OUTCOME_GROUP_BY_ACCOUNTS_AND_ACCOUNT: Network.PUT,

	// [Update an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.update)
	// Api Url: /api/v1/courses/:course_id/outcome_groups/:id
	// return canvasRequest(CanvasConstants.UPDATE_AN_OUTCOME_GROUP_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
	UPDATE_AN_OUTCOME_GROUP_BY_COURSES_AND_COURSE: Network.PUT,

	// [Delete an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.destroy)
	// Api Url: /api/v1/global/outcome_groups/:id
	// return canvasRequest(CanvasConstants.DELETE_AN_OUTCOME_GROUP, {id:}, query);
	DELETE_AN_OUTCOME_GROUP: Network.DELETE,

	// [Delete an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.destroy)
	// Api Url: /api/v1/accounts/:account_id/outcome_groups/:id
	// return canvasRequest(CanvasConstants.DELETE_AN_OUTCOME_GROUP_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
	DELETE_AN_OUTCOME_GROUP_BY_ACCOUNTS_AND_ACCOUNT: Network.DELETE,

	// [Delete an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.destroy)
	// Api Url: /api/v1/courses/:course_id/outcome_groups/:id
	// return canvasRequest(CanvasConstants.DELETE_AN_OUTCOME_GROUP_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
	DELETE_AN_OUTCOME_GROUP_BY_COURSES_AND_COURSE: Network.DELETE,

	// [List linked outcomes)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.outcomes)
	// Api Url: /api/v1/global/outcome_groups/:id/outcomes
	// return canvasRequest(CanvasConstants.LIST_LINKED_OUTCOMES, {id:}, query);
	LIST_LINKED_OUTCOMES: Network.GET,

	// [List linked outcomes)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.outcomes)
	// Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/outcomes
	// return canvasRequest(CanvasConstants.LIST_LINKED_OUTCOMES_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
	LIST_LINKED_OUTCOMES_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

	// [List linked outcomes)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.outcomes)
	// Api Url: /api/v1/courses/:course_id/outcome_groups/:id/outcomes
	// return canvasRequest(CanvasConstants.LIST_LINKED_OUTCOMES_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
	LIST_LINKED_OUTCOMES_BY_COURSES_AND_COURSE: Network.GET,

	// [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
	// Api Url: /api/v1/global/outcome_groups/:id/outcomes
	// return canvasRequest(CanvasConstants.CREATE_LINK_AN_OUTCOME, {id:}, query);
	CREATE_LINK_AN_OUTCOME: Network.POST,

	// [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
	// Api Url: /api/v1/global/outcome_groups/:id/outcomes/:outcome_id
	// return canvasRequest(CanvasConstants.CREATE_LINK_AN_OUTCOME_BY_OUTCOME, {id:, outcome_id:}, query);
	CREATE_LINK_AN_OUTCOME_BY_OUTCOME: Network.PUT,

	// [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
	// Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/outcomes
	// return canvasRequest(CanvasConstants.CREATE_LINK_AN_OUTCOME_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
	CREATE_LINK_AN_OUTCOME_BY_ACCOUNTS_AND_ACCOUNT: Network.POST,

	// [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
	// Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/outcomes/:outcome_id
	// return canvasRequest(CanvasConstants.CREATE_LINK_AN_OUTCOME_BY_ACCOUNTS_AND_ACCOUNT_AND_OUTCOME, {account_id:, id:, outcome_id:}, query);
	CREATE_LINK_AN_OUTCOME_BY_ACCOUNTS_AND_ACCOUNT_AND_OUTCOME: Network.PUT,

	// [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
	// Api Url: /api/v1/courses/:course_id/outcome_groups/:id/outcomes
	// return canvasRequest(CanvasConstants.CREATE_LINK_AN_OUTCOME_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
	CREATE_LINK_AN_OUTCOME_BY_COURSES_AND_COURSE: Network.POST,

	// [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
	// Api Url: /api/v1/courses/:course_id/outcome_groups/:id/outcomes/:outcome_id
	// return canvasRequest(CanvasConstants.CREATE_LINK_AN_OUTCOME_BY_COURSES_AND_COURSE_AND_OUTCOME, {course_id:, id:, outcome_id:}, query);
	CREATE_LINK_AN_OUTCOME_BY_COURSES_AND_COURSE_AND_OUTCOME: Network.PUT,

	// [Unlink an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.unlink)
	// Api Url: /api/v1/global/outcome_groups/:id/outcomes/:outcome_id
	// return canvasRequest(CanvasConstants.UNLINK_AN_OUTCOME, {id:, outcome_id:}, query);
	UNLINK_AN_OUTCOME: Network.DELETE,

	// [Unlink an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.unlink)
	// Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/outcomes/:outcome_id
	// return canvasRequest(CanvasConstants.UNLINK_AN_OUTCOME_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:, outcome_id:}, query);
	UNLINK_AN_OUTCOME_BY_ACCOUNTS_AND_ACCOUNT: Network.DELETE,

	// [Unlink an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.unlink)
	// Api Url: /api/v1/courses/:course_id/outcome_groups/:id/outcomes/:outcome_id
	// return canvasRequest(CanvasConstants.UNLINK_AN_OUTCOME_BY_COURSES_AND_COURSE, {course_id:, id:, outcome_id:}, query);
	UNLINK_AN_OUTCOME_BY_COURSES_AND_COURSE: Network.DELETE,

	// [List subgroups)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.subgroups)
	// Api Url: /api/v1/global/outcome_groups/:id/subgroups
	// return canvasRequest(CanvasConstants.LIST_SUBGROUPS, {id:}, query);
	LIST_SUBGROUPS: Network.GET,

	// [List subgroups)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.subgroups)
	// Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/subgroups
	// return canvasRequest(CanvasConstants.LIST_SUBGROUPS_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
	LIST_SUBGROUPS_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

	// [List subgroups)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.subgroups)
	// Api Url: /api/v1/courses/:course_id/outcome_groups/:id/subgroups
	// return canvasRequest(CanvasConstants.LIST_SUBGROUPS_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
	LIST_SUBGROUPS_BY_COURSES_AND_COURSE: Network.GET,

	// [Create a subgroup)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.create)
	// Api Url: /api/v1/global/outcome_groups/:id/subgroups
	// return canvasRequest(CanvasConstants.CREATE_A_SUBGROUP, {id:}, query);
	CREATE_A_SUBGROUP: Network.POST,

	// [Create a subgroup)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.create)
	// Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/subgroups
	// return canvasRequest(CanvasConstants.CREATE_A_SUBGROUP_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
	CREATE_A_SUBGROUP_BY_ACCOUNTS_AND_ACCOUNT: Network.POST,

	// [Create a subgroup)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.create)
	// Api Url: /api/v1/courses/:course_id/outcome_groups/:id/subgroups
	// return canvasRequest(CanvasConstants.CREATE_A_SUBGROUP_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
	CREATE_A_SUBGROUP_BY_COURSES_AND_COURSE: Network.POST,

	// [Import an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.import)
	// Api Url: /api/v1/global/outcome_groups/:id/import
	// return canvasRequest(CanvasConstants.IMPORT_AN_OUTCOME_GROUP, {id:}, query);
	IMPORT_AN_OUTCOME_GROUP: Network.POST,

	// [Import an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.import)
	// Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/import
	// return canvasRequest(CanvasConstants.IMPORT_AN_OUTCOME_GROUP_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
	IMPORT_AN_OUTCOME_GROUP_BY_ACCOUNTS_AND_ACCOUNT: Network.POST,

	// [Import an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.import)
	// Api Url: /api/v1/courses/:course_id/outcome_groups/:id/import
	// return canvasRequest(CanvasConstants.IMPORT_AN_OUTCOME_GROUP_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
	IMPORT_AN_OUTCOME_GROUP_BY_COURSES_AND_COURSE: Network.POST,

	// [Get outcome results)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_results.index)
	// Api Url: /api/v1/courses/:course_id/outcome_results
	// return canvasRequest(CanvasConstants.GET_OUTCOME_RESULTS, {course_id:}, query);
	GET_OUTCOME_RESULTS: Network.GET,

	// [Get outcome result rollups)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_results.rollups)
	// Api Url: /api/v1/courses/:course_id/outcome_rollups
	// return canvasRequest(CanvasConstants.GET_OUTCOME_RESULT_ROLLUPS, {course_id:}, query);
	GET_OUTCOME_RESULT_ROLLUPS: Network.GET,

	// [Show an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcomes_api.show)
	// Api Url: /api/v1/outcomes/:id
	// return canvasRequest(CanvasConstants.SHOW_AN_OUTCOME, {id:}, query);
	SHOW_AN_OUTCOME: Network.GET,

	// [Update an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcomes_api.update)
	// Api Url: /api/v1/outcomes/:id
	// return canvasRequest(CanvasConstants.UPDATE_AN_OUTCOME, {id:}, query);
	UPDATE_AN_OUTCOME: Network.PUT,

	// [Show front page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_front_page)
	// Api Url: /api/v1/courses/:course_id/front_page
	// return canvasRequest(CanvasConstants.SHOW_FRONT_PAGE, {course_id:}, query);
	SHOW_FRONT_PAGE: Network.GET,

	// [Show front page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_front_page)
	// Api Url: /api/v1/groups/:group_id/front_page
	// return canvasRequest(CanvasConstants.SHOW_FRONT_PAGE_BY_GROUPS_AND_GROUP, {group_id:}, query);
	SHOW_FRONT_PAGE_BY_GROUPS_AND_GROUP: Network.GET,

	// [Update/create front page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.update_front_page)
	// Api Url: /api/v1/courses/:course_id/front_page
	// return canvasRequest(CanvasConstants.UPDATE_CREATE_FRONT_PAGE, {course_id:}, query);
	UPDATE_CREATE_FRONT_PAGE: Network.PUT,

	// [Update/create front page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.update_front_page)
	// Api Url: /api/v1/groups/:group_id/front_page
	// return canvasRequest(CanvasConstants.UPDATE_CREATE_FRONT_PAGE_BY_GROUPS_AND_GROUP, {group_id:}, query);
	UPDATE_CREATE_FRONT_PAGE_BY_GROUPS_AND_GROUP: Network.PUT,

	// [List pages)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.index)
	// Api Url: /api/v1/courses/:course_id/pages
	// return canvasRequest(CanvasConstants.LIST_PAGES, {course_id:}, query);
	LIST_PAGES: Network.GET,

	// [List pages)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.index)
	// Api Url: /api/v1/groups/:group_id/pages
	// return canvasRequest(CanvasConstants.LIST_PAGES_BY_GROUPS_AND_GROUP, {group_id:}, query);
	LIST_PAGES_BY_GROUPS_AND_GROUP: Network.GET,

	// [Create page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.create)
	// Api Url: /api/v1/courses/:course_id/pages
	// return canvasRequest(CanvasConstants.CREATE_PAGE, {course_id:}, query);
	CREATE_PAGE: Network.POST,

	// [Create page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.create)
	// Api Url: /api/v1/groups/:group_id/pages
	// return canvasRequest(CanvasConstants.CREATE_PAGE_BY_GROUPS_AND_GROUP, {group_id:}, query);
	CREATE_PAGE_BY_GROUPS_AND_GROUP: Network.POST,

	// [Show page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show)
	// Api Url: /api/v1/courses/:course_id/pages/:url
	// return canvasRequest(CanvasConstants.SHOW_PAGE, {course_id:, url:}, query);
	SHOW_PAGE: Network.GET,

	// [Show page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show)
	// Api Url: /api/v1/groups/:group_id/pages/:url
	// return canvasRequest(CanvasConstants.SHOW_PAGE_BY_GROUPS_AND_GROUP, {group_id:, url:}, query);
	SHOW_PAGE_BY_GROUPS_AND_GROUP: Network.GET,

	// [Update/create page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.update)
	// Api Url: /api/v1/courses/:course_id/pages/:url
	// return canvasRequest(CanvasConstants.UPDATE_CREATE_PAGE, {course_id:, url:}, query);
	UPDATE_CREATE_PAGE: Network.PUT,

	// [Update/create page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.update)
	// Api Url: /api/v1/groups/:group_id/pages/:url
	// return canvasRequest(CanvasConstants.UPDATE_CREATE_PAGE_BY_GROUPS_AND_GROUP, {group_id:, url:}, query);
	UPDATE_CREATE_PAGE_BY_GROUPS_AND_GROUP: Network.PUT,

	// [Delete page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.destroy)
	// Api Url: /api/v1/courses/:course_id/pages/:url
	// return canvasRequest(CanvasConstants.DELETE_PAGE, {course_id:, url:}, query);
	DELETE_PAGE: Network.DELETE,

	// [Delete page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.destroy)
	// Api Url: /api/v1/groups/:group_id/pages/:url
	// return canvasRequest(CanvasConstants.DELETE_PAGE_BY_GROUPS_AND_GROUP, {group_id:, url:}, query);
	DELETE_PAGE_BY_GROUPS_AND_GROUP: Network.DELETE,

	// [List revisions)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.revisions)
	// Api Url: /api/v1/courses/:course_id/pages/:url/revisions
	// return canvasRequest(CanvasConstants.LIST_REVISIONS, {course_id:, url:}, query);
	LIST_REVISIONS: Network.GET,

	// [List revisions)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.revisions)
	// Api Url: /api/v1/groups/:group_id/pages/:url/revisions
	// return canvasRequest(CanvasConstants.LIST_REVISIONS_BY_GROUPS_AND_GROUP, {group_id:, url:}, query);
	LIST_REVISIONS_BY_GROUPS_AND_GROUP: Network.GET,

	// [Show revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_revision)
	// Api Url: /api/v1/courses/:course_id/pages/:url/revisions/latest
	// return canvasRequest(CanvasConstants.SHOW_REVISION, {course_id:, url:}, query);
	SHOW_REVISION: Network.GET,

	// [Show revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_revision)
	// Api Url: /api/v1/groups/:group_id/pages/:url/revisions/latest
	// return canvasRequest(CanvasConstants.SHOW_REVISION_BY_GROUPS_AND_GROUP, {group_id:, url:}, query);
	SHOW_REVISION_BY_GROUPS_AND_GROUP: Network.GET,

	// [Show revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_revision)
	// Api Url: /api/v1/courses/:course_id/pages/:url/revisions/:revision_id
	// return canvasRequest(CanvasConstants.SHOW_REVISION_BY_REVISION, {course_id:, url:, revision_id:}, query);
	SHOW_REVISION_BY_REVISION: Network.GET,

	// [Show revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_revision)
	// Api Url: /api/v1/groups/:group_id/pages/:url/revisions/:revision_id
	// return canvasRequest(CanvasConstants.SHOW_REVISION_BY_GROUPS_AND_GROUP_AND_REVISION, {group_id:, url:, revision_id:}, query);
	SHOW_REVISION_BY_GROUPS_AND_GROUP_AND_REVISION: Network.GET,

	// [Revert to revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.revert)
	// Api Url: /api/v1/courses/:course_id/pages/:url/revisions/:revision_id
	// return canvasRequest(CanvasConstants.REVERT_TO_REVISION, {course_id:, url:, revision_id:}, query);
	REVERT_TO_REVISION: Network.POST,

	// [Revert to revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.revert)
	// Api Url: /api/v1/groups/:group_id/pages/:url/revisions/:revision_id
	// return canvasRequest(CanvasConstants.REVERT_TO_REVISION_BY_GROUPS_AND_GROUP, {group_id:, url:, revision_id:}, query);
	REVERT_TO_REVISION_BY_GROUPS_AND_GROUP: Network.POST,

	// [Get all Peer Reviews)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.index)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/peer_reviews
	// return canvasRequest(CanvasConstants.GET_ALL_PEER_REVIEWS, {course_id:, assignment_id:}, query);
	GET_ALL_PEER_REVIEWS: Network.GET,

	// [Get all Peer Reviews)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.index)
	// Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/peer_reviews
	// return canvasRequest(CanvasConstants.GET_ALL_PEER_REVIEWS_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:}, query);
	GET_ALL_PEER_REVIEWS_BY_SECTIONS_AND_SECTION: Network.GET,

	// [Get all Peer Reviews)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.index)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
	// return canvasRequest(CanvasConstants.GET_ALL_PEER_REVIEWS_BY_SUBMISSIONS_AND_SUBMISSION, {course_id:, assignment_id:, submission_id:}, query);
	GET_ALL_PEER_REVIEWS_BY_SUBMISSIONS_AND_SUBMISSION: Network.GET,

	// [Get all Peer Reviews)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.index)
	// Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
	// return canvasRequest(CanvasConstants.GET_ALL_PEER_REVIEWS_BY_SECTIONS_AND_SECTION_AND_SUBMISSIONS_AND_SUBMISSION, {section_id:, assignment_id:, submission_id:}, query);
	GET_ALL_PEER_REVIEWS_BY_SECTIONS_AND_SECTION_AND_SUBMISSIONS_AND_SUBMISSION: Network.GET,

	// [Create Peer Review)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.create)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
	// return canvasRequest(CanvasConstants.CREATE_PEER_REVIEW, {course_id:, assignment_id:, submission_id:}, query);
	CREATE_PEER_REVIEW: Network.POST,

	// [Create Peer Review)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.create)
	// Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
	// return canvasRequest(CanvasConstants.CREATE_PEER_REVIEW_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, submission_id:}, query);
	CREATE_PEER_REVIEW_BY_SECTIONS_AND_SECTION: Network.POST,

	// [Create Peer Review)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.destroy)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
	// return canvasRequest(CanvasConstants.CREATE_PEER_REVIEW, {course_id:, assignment_id:, submission_id:}, query);
	CREATE_PEER_REVIEW: Network.DELETE,

	// [Create Peer Review)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.destroy)
	// Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
	// return canvasRequest(CanvasConstants.CREATE_PEER_REVIEW_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, submission_id:}, query);
	CREATE_PEER_REVIEW_BY_SECTIONS_AND_SECTION: Network.DELETE,

	// [List poll sessions for a poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.index)
	// Api Url: /api/v1/polls/:poll_id/poll_sessions
	// return canvasRequest(CanvasConstants.LIST_POLL_SESSIONS_FOR_A_POLL, {poll_id:}, query);
	LIST_POLL_SESSIONS_FOR_A_POLL: Network.GET,

	// [Get the results for a single poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.show)
	// Api Url: /api/v1/polls/:poll_id/poll_sessions/:id
	// return canvasRequest(CanvasConstants.GET_THE_RESULTS_FOR_A_SINGLE_POLL_SESSION, {poll_id:, id:}, query);
	GET_THE_RESULTS_FOR_A_SINGLE_POLL_SESSION: Network.GET,

	// [Create a single poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.create)
	// Api Url: /api/v1/polls/:poll_id/poll_sessions
	// return canvasRequest(CanvasConstants.CREATE_A_SINGLE_POLL_SESSION, {poll_id:}, query);
	CREATE_A_SINGLE_POLL_SESSION: Network.POST,

	// [Update a single poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.update)
	// Api Url: /api/v1/polls/:poll_id/poll_sessions/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_SINGLE_POLL_SESSION, {poll_id:, id:}, query);
	UPDATE_A_SINGLE_POLL_SESSION: Network.PUT,

	// [Delete a poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.destroy)
	// Api Url: /api/v1/polls/:poll_id/poll_sessions/:id
	// return canvasRequest(CanvasConstants.DELETE_A_POLL_SESSION, {poll_id:, id:}, query);
	DELETE_A_POLL_SESSION: Network.DELETE,

	// [Open a poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.open)
	// Api Url: /api/v1/polls/:poll_id/poll_sessions/:id/open
	// return canvasRequest(CanvasConstants.OPEN_A_POLL_SESSION, {poll_id:, id:}, query);
	OPEN_A_POLL_SESSION: Network.GET,

	// [Close an opened poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.close)
	// Api Url: /api/v1/polls/:poll_id/poll_sessions/:id/close
	// return canvasRequest(CanvasConstants.CLOSE_AN_OPENED_POLL_SESSION, {poll_id:, id:}, query);
	CLOSE_AN_OPENED_POLL_SESSION: Network.GET,

	// [List opened poll sessions)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.opened)
	// Api Url: /api/v1/poll_sessions/opened
	// return canvasRequest(CanvasConstants.LIST_OPENED_POLL_SESSIONS, {}, query);
	LIST_OPENED_POLL_SESSIONS: Network.GET,

	// [List closed poll sessions)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.closed)
	// Api Url: /api/v1/poll_sessions/closed
	// return canvasRequest(CanvasConstants.LIST_CLOSED_POLL_SESSIONS, {}, query);
	LIST_CLOSED_POLL_SESSIONS: Network.GET,

	// [List poll choices in a poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_choices.index)
	// Api Url: /api/v1/polls/:poll_id/poll_choices
	// return canvasRequest(CanvasConstants.LIST_POLL_CHOICES_IN_A_POLL, {poll_id:}, query);
	LIST_POLL_CHOICES_IN_A_POLL: Network.GET,

	// [Get a single poll choice)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_choices.show)
	// Api Url: /api/v1/polls/:poll_id/poll_choices/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_POLL_CHOICE, {poll_id:, id:}, query);
	GET_A_SINGLE_POLL_CHOICE: Network.GET,

	// [Create a single poll choice)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_choices.create)
	// Api Url: /api/v1/polls/:poll_id/poll_choices
	// return canvasRequest(CanvasConstants.CREATE_A_SINGLE_POLL_CHOICE, {poll_id:}, query);
	CREATE_A_SINGLE_POLL_CHOICE: Network.POST,

	// [Update a single poll choice)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_choices.update)
	// Api Url: /api/v1/polls/:poll_id/poll_choices/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_SINGLE_POLL_CHOICE, {poll_id:, id:}, query);
	UPDATE_A_SINGLE_POLL_CHOICE: Network.PUT,

	// [Delete a poll choice)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_choices.destroy)
	// Api Url: /api/v1/polls/:poll_id/poll_choices/:id
	// return canvasRequest(CanvasConstants.DELETE_A_POLL_CHOICE, {poll_id:, id:}, query);
	DELETE_A_POLL_CHOICE: Network.DELETE,

	// [Get a single poll submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_submissions.show)
	// Api Url: /api/v1/polls/:poll_id/poll_sessions/:poll_session_id/poll_submissions/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_POLL_SUBMISSION, {poll_id:, poll_session_id:, id:}, query);
	GET_A_SINGLE_POLL_SUBMISSION: Network.GET,

	// [Create a single poll submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_submissions.create)
	// Api Url: /api/v1/polls/:poll_id/poll_sessions/:poll_session_id/poll_submissions
	// return canvasRequest(CanvasConstants.CREATE_A_SINGLE_POLL_SUBMISSION, {poll_id:, poll_session_id:}, query);
	CREATE_A_SINGLE_POLL_SUBMISSION: Network.POST,

	// [List polls)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/polls.index)
	// Api Url: /api/v1/polls
	// return canvasRequest(CanvasConstants.LIST_POLLS, {}, query);
	LIST_POLLS: Network.GET,

	// [Get a single poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/polls.show)
	// Api Url: /api/v1/polls/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_POLL, {id:}, query);
	GET_A_SINGLE_POLL: Network.GET,

	// [Create a single poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/polls.create)
	// Api Url: /api/v1/polls
	// return canvasRequest(CanvasConstants.CREATE_A_SINGLE_POLL, {}, query);
	CREATE_A_SINGLE_POLL: Network.POST,

	// [Update a single poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/polls.update)
	// Api Url: /api/v1/polls/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_SINGLE_POLL, {id:}, query);
	UPDATE_A_SINGLE_POLL: Network.PUT,

	// [Delete a poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/polls.destroy)
	// Api Url: /api/v1/polls/:id
	// return canvasRequest(CanvasConstants.DELETE_A_POLL, {id:}, query);
	DELETE_A_POLL: Network.DELETE,

	// [Query progress)](https://canvas.instructure.com/doc/api/all_resources.html#method.progress.show)
	// Api Url: /api/v1/progress/:id
	// return canvasRequest(CanvasConstants.QUERY_PROGRESS, {id:}, query);
	QUERY_PROGRESS: Network.GET,

	// [Retrieve assignment-overridden dates for quizzes)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_assignment_overrides.index)
	// Api Url: /api/v1/courses/:course_id/quizzes/assignment_overrides
	// return canvasRequest(CanvasConstants.RETRIEVE_ASSIGNMENT_OVERRIDDEN_DATES_FOR_QUIZZES, {course_id:}, query);
	RETRIEVE_ASSIGNMENT_OVERRIDDEN_DATES_FOR_QUIZZES: Network.GET,

	// [Set extensions for student quiz submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_extensions.create)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/extensions
	// return canvasRequest(CanvasConstants.SET_EXTENSIONS_FOR_STUDENT_QUIZ_SUBMISSIONS, {course_id:, quiz_id:}, query);
	SET_EXTENSIONS_FOR_STUDENT_QUIZ_SUBMISSIONS: Network.POST,

	// [Get available quiz IP filters.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_ip_filters.index)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/ip_filters
	// return canvasRequest(CanvasConstants.GET_AVAILABLE_QUIZ_IP_FILTERS_, {course_id:, quiz_id:}, query);
	GET_AVAILABLE_QUIZ_IP_FILTERS_: Network.GET,

	// [Get a single quiz group)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_groups.show)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/groups/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_QUIZ_GROUP, {course_id:, quiz_id:, id:}, query);
	GET_A_SINGLE_QUIZ_GROUP: Network.GET,

	// [Create a question group)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_groups.create)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/groups
	// return canvasRequest(CanvasConstants.CREATE_A_QUESTION_GROUP, {course_id:, quiz_id:}, query);
	CREATE_A_QUESTION_GROUP: Network.POST,

	// [Update a question group)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_groups.update)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/groups/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_QUESTION_GROUP, {course_id:, quiz_id:, id:}, query);
	UPDATE_A_QUESTION_GROUP: Network.PUT,

	// [Delete a question group)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_groups.destroy)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/groups/:id
	// return canvasRequest(CanvasConstants.DELETE_A_QUESTION_GROUP, {course_id:, quiz_id:, id:}, query);
	DELETE_A_QUESTION_GROUP: Network.DELETE,

	// [Reorder question groups)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_groups.reorder)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/groups/:id/reorder
	// return canvasRequest(CanvasConstants.REORDER_QUESTION_GROUPS, {course_id:, quiz_id:, id:}, query);
	REORDER_QUESTION_GROUPS: Network.POST,

	// [List questions in a quiz or a submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_questions.index)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/questions
	// return canvasRequest(CanvasConstants.LIST_QUESTIONS_IN_A_QUIZ_OR_A_SUBMISSION, {course_id:, quiz_id:}, query);
	LIST_QUESTIONS_IN_A_QUIZ_OR_A_SUBMISSION: Network.GET,

	// [Get a single quiz question)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_questions.show)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/questions/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_QUIZ_QUESTION, {course_id:, quiz_id:, id:}, query);
	GET_A_SINGLE_QUIZ_QUESTION: Network.GET,

	// [Create a single quiz question)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_questions.create)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/questions
	// return canvasRequest(CanvasConstants.CREATE_A_SINGLE_QUIZ_QUESTION, {course_id:, quiz_id:}, query);
	CREATE_A_SINGLE_QUIZ_QUESTION: Network.POST,

	// [Update an existing quiz question)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_questions.update)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/questions/:id
	// return canvasRequest(CanvasConstants.UPDATE_AN_EXISTING_QUIZ_QUESTION, {course_id:, quiz_id:, id:}, query);
	UPDATE_AN_EXISTING_QUIZ_QUESTION: Network.PUT,

	// [Delete a quiz question)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_questions.destroy)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/questions/:id
	// return canvasRequest(CanvasConstants.DELETE_A_QUIZ_QUESTION, {course_id:, quiz_id:, id:}, query);
	DELETE_A_QUIZ_QUESTION: Network.DELETE,

	// [Retrieve all quiz reports)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_reports.index)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/reports
	// return canvasRequest(CanvasConstants.RETRIEVE_ALL_QUIZ_REPORTS, {course_id:, quiz_id:}, query);
	RETRIEVE_ALL_QUIZ_REPORTS: Network.GET,

	// [Create a quiz report)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_reports.create)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/reports
	// return canvasRequest(CanvasConstants.CREATE_A_QUIZ_REPORT, {course_id:, quiz_id:}, query);
	CREATE_A_QUIZ_REPORT: Network.POST,

	// [Get a quiz report)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_reports.show)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/reports/:id
	// return canvasRequest(CanvasConstants.GET_A_QUIZ_REPORT, {course_id:, quiz_id:, id:}, query);
	GET_A_QUIZ_REPORT: Network.GET,

	// [Abort the generation of a report, or remove a previously generated one)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_reports.abort)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/reports/:id
	// return canvasRequest(CanvasConstants.ABORT_THE_GENERATION_OF_A_REPORT__OR_REMOVE_A_PREVIOUSLY_GENERATED_ONE, {course_id:, quiz_id:, id:}, query);
	ABORT_THE_GENERATION_OF_A_REPORT__OR_REMOVE_A_PREVIOUSLY_GENERATED_ONE: Network.DELETE,

	// [Fetching the latest quiz statistics)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_statistics.index)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/statistics
	// return canvasRequest(CanvasConstants.FETCHING_THE_LATEST_QUIZ_STATISTICS, {course_id:, quiz_id:}, query);
	FETCHING_THE_LATEST_QUIZ_STATISTICS: Network.GET,

	// [Submit captured events)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_events_api.create)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id/events
	// return canvasRequest(CanvasConstants.SUBMIT_CAPTURED_EVENTS, {course_id:, quiz_id:, id:}, query);
	SUBMIT_CAPTURED_EVENTS: Network.POST,

	// [Retrieve captured events)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_events_api.index)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id/events
	// return canvasRequest(CanvasConstants.RETRIEVE_CAPTURED_EVENTS, {course_id:, quiz_id:, id:}, query);
	RETRIEVE_CAPTURED_EVENTS: Network.GET,

	// [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_files.create)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/self/files
	// return canvasRequest(CanvasConstants.UPLOAD_A_FILE, {course_id:, quiz_id:}, query);
	UPLOAD_A_FILE: Network.POST,

	// [Get all quiz submission questions.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_questions.index)
	// Api Url: /api/v1/quiz_submissions/:quiz_submission_id/questions
	// return canvasRequest(CanvasConstants.GET_ALL_QUIZ_SUBMISSION_QUESTIONS_, {quiz_submission_id:}, query);
	GET_ALL_QUIZ_SUBMISSION_QUESTIONS_: Network.GET,

	// [Answering questions)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_questions.answer)
	// Api Url: /api/v1/quiz_submissions/:quiz_submission_id/questions
	// return canvasRequest(CanvasConstants.ANSWERING_QUESTIONS, {quiz_submission_id:}, query);
	ANSWERING_QUESTIONS: Network.POST,

	// [Flagging a question.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_questions.flag)
	// Api Url: /api/v1/quiz_submissions/:quiz_submission_id/questions/:id/flag
	// return canvasRequest(CanvasConstants.FLAGGING_A_QUESTION_, {quiz_submission_id:, id:}, query);
	FLAGGING_A_QUESTION_: Network.PUT,

	// [Unflagging a question.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_questions.unflag)
	// Api Url: /api/v1/quiz_submissions/:quiz_submission_id/questions/:id/unflag
	// return canvasRequest(CanvasConstants.UNFLAGGING_A_QUESTION_, {quiz_submission_id:, id:}, query);
	UNFLAGGING_A_QUESTION_: Network.PUT,

	// [Send a message to unsubmitted or submitted users for the quiz)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_users.message)
	// Api Url: /api/v1/courses/:course_id/quizzes/:id/submission_users/message
	// return canvasRequest(CanvasConstants.SEND_A_MESSAGE_TO_UNSUBMITTED_OR_SUBMITTED_USERS_FOR_THE_QUIZ, {course_id:, id:}, query);
	SEND_A_MESSAGE_TO_UNSUBMITTED_OR_SUBMITTED_USERS_FOR_THE_QUIZ: Network.POST,

	// [Get all quiz submissions.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.index)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions
	// return canvasRequest(CanvasConstants.GET_ALL_QUIZ_SUBMISSIONS_, {course_id:, quiz_id:}, query);
	GET_ALL_QUIZ_SUBMISSIONS_: Network.GET,

	// [Get a single quiz submission.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.show)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_QUIZ_SUBMISSION_, {course_id:, quiz_id:, id:}, query);
	GET_A_SINGLE_QUIZ_SUBMISSION_: Network.GET,

	// [Create the quiz submission (start a quiz-taking session))](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.create)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions
	// return canvasRequest(CanvasConstants.CREATE_THE_QUIZ_SUBMISSION__START_A_QUIZ_TAKING_SESSION_, {course_id:, quiz_id:}, query);
	CREATE_THE_QUIZ_SUBMISSION__START_A_QUIZ_TAKING_SESSION_: Network.POST,

	// [Update student question scores and comments.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.update)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id
	// return canvasRequest(CanvasConstants.UPDATE_STUDENT_QUESTION_SCORES_AND_COMMENTS_, {course_id:, quiz_id:, id:}, query);
	UPDATE_STUDENT_QUESTION_SCORES_AND_COMMENTS_: Network.PUT,

	// [Complete the quiz submission (turn it in).)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.complete)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id/complete
	// return canvasRequest(CanvasConstants.COMPLETE_THE_QUIZ_SUBMISSION__TURN_IT_IN__, {course_id:, quiz_id:, id:}, query);
	COMPLETE_THE_QUIZ_SUBMISSION__TURN_IT_IN__: Network.POST,

	// [Get current quiz submission times.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.time)
	// Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id/time
	// return canvasRequest(CanvasConstants.GET_CURRENT_QUIZ_SUBMISSION_TIMES_, {course_id:, quiz_id:, id:}, query);
	GET_CURRENT_QUIZ_SUBMISSION_TIMES_: Network.GET,

	// [List quizzes in a course)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.index)
	// Api Url: /api/v1/courses/:course_id/quizzes
	// return canvasRequest(CanvasConstants.LIST_QUIZZES_IN_A_COURSE, {course_id:}, query);
	LIST_QUIZZES_IN_A_COURSE: Network.GET,

	// [Get a single quiz)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.show)
	// Api Url: /api/v1/courses/:course_id/quizzes/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_QUIZ, {course_id:, id:}, query);
	GET_A_SINGLE_QUIZ: Network.GET,

	// [Create a quiz)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.create)
	// Api Url: /api/v1/courses/:course_id/quizzes
	// return canvasRequest(CanvasConstants.CREATE_A_QUIZ, {course_id:}, query);
	CREATE_A_QUIZ: Network.POST,

	// [Edit a quiz)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.update)
	// Api Url: /api/v1/courses/:course_id/quizzes/:id
	// return canvasRequest(CanvasConstants.EDIT_A_QUIZ, {course_id:, id:}, query);
	EDIT_A_QUIZ: Network.PUT,

	// [Delete a quiz)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.destroy)
	// Api Url: /api/v1/courses/:course_id/quizzes/:id
	// return canvasRequest(CanvasConstants.DELETE_A_QUIZ, {course_id:, id:}, query);
	DELETE_A_QUIZ: Network.DELETE,

	// [Reorder quiz items)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.reorder)
	// Api Url: /api/v1/courses/:course_id/quizzes/:id/reorder
	// return canvasRequest(CanvasConstants.REORDER_QUIZ_ITEMS, {course_id:, id:}, query);
	REORDER_QUIZ_ITEMS: Network.POST,

	// [Validate quiz access code)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.validate_access_code)
	// Api Url: /api/v1/courses/:course_id/quizzes/:id/validate_access_code
	// return canvasRequest(CanvasConstants.VALIDATE_QUIZ_ACCESS_CODE, {course_id:, id:}, query);
	VALIDATE_QUIZ_ACCESS_CODE: Network.POST,

	// [List roles)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.api_index)
	// Api Url: /api/v1/accounts/:account_id/roles
	// return canvasRequest(CanvasConstants.LIST_ROLES, {account_id:}, query);
	LIST_ROLES: Network.GET,

	// [Get a single role)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.show)
	// Api Url: /api/v1/accounts/:account_id/roles/:id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_ROLE, {account_id:, id:}, query);
	GET_A_SINGLE_ROLE: Network.GET,

	// [Create a new role)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.add_role)
	// Api Url: /api/v1/accounts/:account_id/roles
	// return canvasRequest(CanvasConstants.CREATE_A_NEW_ROLE, {account_id:}, query);
	CREATE_A_NEW_ROLE: Network.POST,

	// [Deactivate a role)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.remove_role)
	// Api Url: /api/v1/accounts/:account_id/roles/:id
	// return canvasRequest(CanvasConstants.DEACTIVATE_A_ROLE, {account_id:, id:}, query);
	DEACTIVATE_A_ROLE: Network.DELETE,

	// [Activate a role)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.activate_role)
	// Api Url: /api/v1/accounts/:account_id/roles/:id/activate
	// return canvasRequest(CanvasConstants.ACTIVATE_A_ROLE, {account_id:, id:}, query);
	ACTIVATE_A_ROLE: Network.POST,

	// [Update a role)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.update)
	// Api Url: /api/v1/accounts/:account_id/roles/:id
	// return canvasRequest(CanvasConstants.UPDATE_A_ROLE, {account_id:, id:}, query);
	UPDATE_A_ROLE: Network.PUT,

	// [Get SIS import list)](https://canvas.instructure.com/doc/api/all_resources.html#method.sis_imports_api.index)
	// Api Url: /api/v1/accounts/:account_id/sis_imports
	// return canvasRequest(CanvasConstants.GET_SIS_IMPORT_LIST, {account_id:}, query);
	GET_SIS_IMPORT_LIST: Network.GET,

	// [Import SIS data)](https://canvas.instructure.com/doc/api/all_resources.html#method.sis_imports_api.create)
	// Api Url: /api/v1/accounts/:account_id/sis_imports
	// return canvasRequest(CanvasConstants.IMPORT_SIS_DATA, {account_id:}, query);
	IMPORT_SIS_DATA: Network.POST,

	// [Get SIS import status)](https://canvas.instructure.com/doc/api/all_resources.html#method.sis_imports_api.show)
	// Api Url: /api/v1/accounts/:account_id/sis_imports/:id
	// return canvasRequest(CanvasConstants.GET_SIS_IMPORT_STATUS, {account_id:, id:}, query);
	GET_SIS_IMPORT_STATUS: Network.GET,

	// [Retrieve assignments enabled for grade export to SIS)](https://canvas.instructure.com/doc/api/all_resources.html#method.sis_api.sis_assignments)
	// Api Url: /api/sis/accounts/:account_id/assignments
	// return canvasRequest(CanvasConstants.RETRIEVE_ASSIGNMENTS_ENABLED_FOR_GRADE_EXPORT_TO_SIS, {account_id:}, query);
	RETRIEVE_ASSIGNMENTS_ENABLED_FOR_GRADE_EXPORT_TO_SIS: Network.GET,

	// [Retrieve assignments enabled for grade export to SIS)](https://canvas.instructure.com/doc/api/all_resources.html#method.sis_api.sis_assignments)
	// Api Url: /api/sis/courses/:course_id/assignments
	// return canvasRequest(CanvasConstants.RETRIEVE_ASSIGNMENTS_ENABLED_FOR_GRADE_EXPORT_TO_SIS_BY_COURSES_AND_COURSE, {course_id:}, query);
	RETRIEVE_ASSIGNMENTS_ENABLED_FOR_GRADE_EXPORT_TO_SIS_BY_COURSES_AND_COURSE: Network.GET,

	// [Find recipients)](https://canvas.instructure.com/doc/api/all_resources.html#method.search.recipients)
	// Api Url: /api/v1/conversations/find_recipients
	// return canvasRequest(CanvasConstants.FIND_RECIPIENTS, {}, query);
	FIND_RECIPIENTS: Network.GET,

	// [Find recipients)](https://canvas.instructure.com/doc/api/all_resources.html#method.search.recipients)
	// Api Url: /api/v1/search/recipients
	// return canvasRequest(CanvasConstants.FIND_RECIPIENTS_BY_SEARCH_AND_RECIPIENTS, {}, query);
	FIND_RECIPIENTS_BY_SEARCH_AND_RECIPIENTS: Network.GET,

	// [List all courses)](https://canvas.instructure.com/doc/api/all_resources.html#method.search.all_courses)
	// Api Url: /api/v1/search/all_courses
	// return canvasRequest(CanvasConstants.LIST_ALL_COURSES, {}, query);
	LIST_ALL_COURSES: Network.GET,

	// [List course sections)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.index)
	// Api Url: /api/v1/courses/:course_id/sections
	// return canvasRequest(CanvasConstants.LIST_COURSE_SECTIONS, {course_id:}, query);
	LIST_COURSE_SECTIONS: Network.GET,

	// [Create course section)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.create)
	// Api Url: /api/v1/courses/:course_id/sections
	// return canvasRequest(CanvasConstants.CREATE_COURSE_SECTION, {course_id:}, query);
	CREATE_COURSE_SECTION: Network.POST,

	// [Cross-list a Section)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.crosslist)
	// Api Url: /api/v1/sections/:id/crosslist/:new_course_id
	// return canvasRequest(CanvasConstants.CROSS_LIST_A_SECTION, {id:, new_course_id:}, query);
	CROSS_LIST_A_SECTION: Network.POST,

	// [De-cross-list a Section)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.uncrosslist)
	// Api Url: /api/v1/sections/:id/crosslist
	// return canvasRequest(CanvasConstants.DE_CROSS_LIST_A_SECTION, {id:}, query);
	DE_CROSS_LIST_A_SECTION: Network.DELETE,

	// [Edit a section)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.update)
	// Api Url: /api/v1/sections/:id
	// return canvasRequest(CanvasConstants.EDIT_A_SECTION, {id:}, query);
	EDIT_A_SECTION: Network.PUT,

	// [Get section information)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.show)
	// Api Url: /api/v1/courses/:course_id/sections/:id
	// return canvasRequest(CanvasConstants.GET_SECTION_INFORMATION, {course_id:, id:}, query);
	GET_SECTION_INFORMATION: Network.GET,

	// [Get section information)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.show)
	// Api Url: /api/v1/sections/:id
	// return canvasRequest(CanvasConstants.GET_SECTION_INFORMATION, {id:}, query);
	GET_SECTION_INFORMATION: Network.GET,

	// [Delete a section)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.destroy)
	// Api Url: /api/v1/sections/:id
	// return canvasRequest(CanvasConstants.DELETE_A_SECTION, {id:}, query);
	DELETE_A_SECTION: Network.DELETE,

	// [Get Kaltura config)](https://canvas.instructure.com/doc/api/all_resources.html#method.services_api.show_kaltura_config)
	// Api Url: /api/v1/services/kaltura
	// return canvasRequest(CanvasConstants.GET_KALTURA_CONFIG, {}, query);
	GET_KALTURA_CONFIG: Network.GET,

	// [Start Kaltura session)](https://canvas.instructure.com/doc/api/all_resources.html#method.services_api.start_kaltura_session)
	// Api Url: /api/v1/services/kaltura_session
	// return canvasRequest(CanvasConstants.START_KALTURA_SESSION, {}, query);
	START_KALTURA_SESSION: Network.POST,

	// [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.submission_comments_api.create_file)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id/comments/files
	// return canvasRequest(CanvasConstants.UPLOAD_A_FILE, {course_id:, assignment_id:, user_id:}, query);
	UPLOAD_A_FILE: Network.POST,

	// [Submit an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions.create)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions
	// return canvasRequest(CanvasConstants.SUBMIT_AN_ASSIGNMENT, {course_id:, assignment_id:}, query);
	SUBMIT_AN_ASSIGNMENT: Network.POST,

	// [Submit an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions.create)
	// Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions
	// return canvasRequest(CanvasConstants.SUBMIT_AN_ASSIGNMENT_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:}, query);
	SUBMIT_AN_ASSIGNMENT_BY_SECTIONS_AND_SECTION: Network.POST,

	// [List assignment submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.index)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions
	// return canvasRequest(CanvasConstants.LIST_ASSIGNMENT_SUBMISSIONS, {course_id:, assignment_id:}, query);
	LIST_ASSIGNMENT_SUBMISSIONS: Network.GET,

	// [List assignment submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.index)
	// Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions
	// return canvasRequest(CanvasConstants.LIST_ASSIGNMENT_SUBMISSIONS_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:}, query);
	LIST_ASSIGNMENT_SUBMISSIONS_BY_SECTIONS_AND_SECTION: Network.GET,

	// [List submissions for multiple assignments)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.for_students)
	// Api Url: /api/v1/courses/:course_id/students/submissions
	// return canvasRequest(CanvasConstants.LIST_SUBMISSIONS_FOR_MULTIPLE_ASSIGNMENTS, {course_id:}, query);
	LIST_SUBMISSIONS_FOR_MULTIPLE_ASSIGNMENTS: Network.GET,

	// [List submissions for multiple assignments)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.for_students)
	// Api Url: /api/v1/sections/:section_id/students/submissions
	// return canvasRequest(CanvasConstants.LIST_SUBMISSIONS_FOR_MULTIPLE_ASSIGNMENTS_BY_SECTIONS_AND_SECTION, {section_id:}, query);
	LIST_SUBMISSIONS_FOR_MULTIPLE_ASSIGNMENTS_BY_SECTIONS_AND_SECTION: Network.GET,

	// [Get a single submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.show)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_SUBMISSION, {course_id:, assignment_id:, user_id:}, query);
	GET_A_SINGLE_SUBMISSION: Network.GET,

	// [Get a single submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.show)
	// Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id
	// return canvasRequest(CanvasConstants.GET_A_SINGLE_SUBMISSION_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, user_id:}, query);
	GET_A_SINGLE_SUBMISSION_BY_SECTIONS_AND_SECTION: Network.GET,

	// [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.create_file)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id/files
	// return canvasRequest(CanvasConstants.UPLOAD_A_FILE, {course_id:, assignment_id:, user_id:}, query);
	UPLOAD_A_FILE: Network.POST,

	// [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.create_file)
	// Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id/files
	// return canvasRequest(CanvasConstants.UPLOAD_A_FILE_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, user_id:}, query);
	UPLOAD_A_FILE_BY_SECTIONS_AND_SECTION: Network.POST,

	// [Grade or comment on a submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.update)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id
	// return canvasRequest(CanvasConstants.GRADE_OR_COMMENT_ON_A_SUBMISSION, {course_id:, assignment_id:, user_id:}, query);
	GRADE_OR_COMMENT_ON_A_SUBMISSION: Network.PUT,

	// [Grade or comment on a submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.update)
	// Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id
	// return canvasRequest(CanvasConstants.GRADE_OR_COMMENT_ON_A_SUBMISSION_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, user_id:}, query);
	GRADE_OR_COMMENT_ON_A_SUBMISSION_BY_SECTIONS_AND_SECTION: Network.PUT,

	// [List gradeable students)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.gradeable_students)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/gradeable_students
	// return canvasRequest(CanvasConstants.LIST_GRADEABLE_STUDENTS, {course_id:, assignment_id:}, query);
	LIST_GRADEABLE_STUDENTS: Network.GET,

	// [Grade or comment on multiple submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.bulk_update)
	// Api Url: /api/v1/courses/:course_id/submissions/update_grades
	// return canvasRequest(CanvasConstants.GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS, {course_id:}, query);
	GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS: Network.POST,

	// [Grade or comment on multiple submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.bulk_update)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/update_grades
	// return canvasRequest(CanvasConstants.GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_BY_ASSIGNMENTS_AND_ASSIGNMENT, {course_id:, assignment_id:}, query);
	GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_BY_ASSIGNMENTS_AND_ASSIGNMENT: Network.POST,

	// [Grade or comment on multiple submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.bulk_update)
	// Api Url: /api/v1/sections/:section_id/submissions/update_grades
	// return canvasRequest(CanvasConstants.GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_BY_SECTIONS_AND_SECTION, {section_id:}, query);
	GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_BY_SECTIONS_AND_SECTION: Network.POST,

	// [Grade or comment on multiple submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.bulk_update)
	// Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/update_grades
	// return canvasRequest(CanvasConstants.GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_BY_SECTIONS_AND_SECTION_AND_ASSIGNMENTS_AND_ASSIGNMENT, {section_id:, assignment_id:}, query);
	GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_BY_SECTIONS_AND_SECTION_AND_ASSIGNMENTS_AND_ASSIGNMENT: Network.POST,

	// [Mark submission as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.mark_submission_read)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id/read
	// return canvasRequest(CanvasConstants.MARK_SUBMISSION_AS_READ, {course_id:, assignment_id:, user_id:}, query);
	MARK_SUBMISSION_AS_READ: Network.PUT,

	// [Mark submission as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.mark_submission_read)
	// Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id/read
	// return canvasRequest(CanvasConstants.MARK_SUBMISSION_AS_READ_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, user_id:}, query);
	MARK_SUBMISSION_AS_READ_BY_SECTIONS_AND_SECTION: Network.PUT,

	// [Mark submission as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.mark_submission_unread)
	// Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id/read
	// return canvasRequest(CanvasConstants.MARK_SUBMISSION_AS_UNREAD, {course_id:, assignment_id:, user_id:}, query);
	MARK_SUBMISSION_AS_UNREAD: Network.DELETE,

	// [Mark submission as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.mark_submission_unread)
	// Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id/read
	// return canvasRequest(CanvasConstants.MARK_SUBMISSION_AS_UNREAD_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, user_id:}, query);
	MARK_SUBMISSION_AS_UNREAD_BY_SECTIONS_AND_SECTION: Network.DELETE,

	// [List available tabs for a course or group)](https://canvas.instructure.com/doc/api/all_resources.html#method.tabs.index)
	// Api Url: /api/v1/courses/:course_id/tabs
	// return canvasRequest(CanvasConstants.LIST_AVAILABLE_TABS_FOR_A_COURSE_OR_GROUP, {course_id:}, query);
	LIST_AVAILABLE_TABS_FOR_A_COURSE_OR_GROUP: Network.GET,

	// [List available tabs for a course or group)](https://canvas.instructure.com/doc/api/all_resources.html#method.tabs.index)
	// Api Url: /api/v1/groups/:group_id/tabs
	// return canvasRequest(CanvasConstants.LIST_AVAILABLE_TABS_FOR_A_COURSE_OR_GROUP_BY_GROUPS_AND_GROUP, {group_id:}, query);
	LIST_AVAILABLE_TABS_FOR_A_COURSE_OR_GROUP_BY_GROUPS_AND_GROUP: Network.GET,

	// [Update a tab for a course)](https://canvas.instructure.com/doc/api/all_resources.html#method.tabs.update)
	// Api Url: /api/v1/courses/:course_id/tabs/:tab_id
	// return canvasRequest(CanvasConstants.UPDATE_A_TAB_FOR_A_COURSE, {course_id:, tab_id:}, query);
	UPDATE_A_TAB_FOR_A_COURSE: Network.PUT,

	// [List observees)](https://canvas.instructure.com/doc/api/all_resources.html#method.user_observees.index)
	// Api Url: /api/v1/users/:user_id/observees
	// return canvasRequest(CanvasConstants.LIST_OBSERVEES, {user_id:}, query);
	LIST_OBSERVEES: Network.GET,

	// [Add an observee with credentials)](https://canvas.instructure.com/doc/api/all_resources.html#method.user_observees.create)
	// Api Url: /api/v1/users/:user_id/observees
	// return canvasRequest(CanvasConstants.ADD_AN_OBSERVEE_WITH_CREDENTIALS, {user_id:}, query);
	ADD_AN_OBSERVEE_WITH_CREDENTIALS: Network.POST,

	// [Show an observee)](https://canvas.instructure.com/doc/api/all_resources.html#method.user_observees.show)
	// Api Url: /api/v1/users/:user_id/observees/:observee_id
	// return canvasRequest(CanvasConstants.SHOW_AN_OBSERVEE, {user_id:, observee_id:}, query);
	SHOW_AN_OBSERVEE: Network.GET,

	// [Add an observee)](https://canvas.instructure.com/doc/api/all_resources.html#method.user_observees.update)
	// Api Url: /api/v1/users/:user_id/observees/:observee_id
	// return canvasRequest(CanvasConstants.ADD_AN_OBSERVEE, {user_id:, observee_id:}, query);
	ADD_AN_OBSERVEE: Network.PUT,

	// [Remove an observee)](https://canvas.instructure.com/doc/api/all_resources.html#method.user_observees.destroy)
	// Api Url: /api/v1/users/:user_id/observees/:observee_id
	// return canvasRequest(CanvasConstants.REMOVE_AN_OBSERVEE, {user_id:, observee_id:}, query);
	REMOVE_AN_OBSERVEE: Network.DELETE,

	// [List users in account)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.index)
	// Api Url: /api/v1/accounts/:account_id/users
	// return canvasRequest(CanvasConstants.LIST_USERS_IN_ACCOUNT, {account_id:}, query);
	LIST_USERS_IN_ACCOUNT: Network.GET,

	// [List the activity stream)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.activity_stream)
	// Api Url: /api/v1/users/self/activity_stream
	// return canvasRequest(CanvasConstants.LIST_THE_ACTIVITY_STREAM, {}, query);
	LIST_THE_ACTIVITY_STREAM: Network.GET,

	// [List the activity stream)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.activity_stream)
	// Api Url: /api/v1/users/activity_stream
	// return canvasRequest(CanvasConstants.LIST_THE_ACTIVITY_STREAM, {}, query);
	LIST_THE_ACTIVITY_STREAM: Network.GET,

	// [Activity stream summary)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.activity_stream_summary)
	// Api Url: /api/v1/users/self/activity_stream/summary
	// return canvasRequest(CanvasConstants.ACTIVITY_STREAM_SUMMARY, {}, query);
	ACTIVITY_STREAM_SUMMARY: Network.GET,

	// [List the TODO items)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.todo_items)
	// Api Url: /api/v1/users/self/todo
	// return canvasRequest(CanvasConstants.LIST_THE_TODO_ITEMS, {}, query);
	LIST_THE_TODO_ITEMS: Network.GET,

	// [List upcoming assignments, calendar events)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.upcoming_events)
	// Api Url: /api/v1/users/self/upcoming_events
	// return canvasRequest(CanvasConstants.LIST_UPCOMING_ASSIGNMENTS__CALENDAR_EVENTS, {}, query);
	LIST_UPCOMING_ASSIGNMENTS__CALENDAR_EVENTS: Network.GET,

	// [List Missing Submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.missing_submissions)
	// Api Url: /api/v1/users/:user_id/missing_submissions
	// return canvasRequest(CanvasConstants.LIST_MISSING_SUBMISSIONS, {user_id:}, query);
	LIST_MISSING_SUBMISSIONS: Network.GET,

	// [Hide a stream item)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.ignore_stream_item)
	// Api Url: /api/v1/users/self/activity_stream/:id
	// return canvasRequest(CanvasConstants.HIDE_A_STREAM_ITEM, {id:}, query);
	HIDE_A_STREAM_ITEM: Network.DELETE,

	// [Hide all stream items)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.ignore_all_stream_items)
	// Api Url: /api/v1/users/self/activity_stream
	// return canvasRequest(CanvasConstants.HIDE_ALL_STREAM_ITEMS, {}, query);
	HIDE_ALL_STREAM_ITEMS: Network.DELETE,

	// [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.create_file)
	// Api Url: /api/v1/users/:user_id/files
	// return canvasRequest(CanvasConstants.UPLOAD_A_FILE, {user_id:}, query);
	UPLOAD_A_FILE: Network.POST,

	// [Show user details)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.api_show)
	// Api Url: /api/v1/users/:id
	// return canvasRequest(CanvasConstants.SHOW_USER_DETAILS, {id:}, query);
	SHOW_USER_DETAILS: Network.GET,

	// [Create a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.create)
	// Api Url: /api/v1/accounts/:account_id/users
	// return canvasRequest(CanvasConstants.CREATE_A_USER, {account_id:}, query);
	CREATE_A_USER: Network.POST,

	// [Self register a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.create_self_registered_user)
	// Api Url: /api/v1/accounts/:account_id/self_registration
	// return canvasRequest(CanvasConstants.SELF_REGISTER_A_USER, {account_id:}, query);
	SELF_REGISTER_A_USER: Network.POST,

	// [Update user settings.)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.settings)
	// Api Url: /api/v1/users/:id/settings
	// return canvasRequest(CanvasConstants.UPDATE_USER_SETTINGS_, {id:}, query);
	UPDATE_USER_SETTINGS_: Network.GET,

	// [Update user settings.)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.settings)
	// Api Url: /api/v1/users/:id/settings
	// return canvasRequest(CanvasConstants.UPDATE_USER_SETTINGS_, {id:}, query);
	UPDATE_USER_SETTINGS_: Network.PUT,

	// [Get custom colors)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.get_custom_colors)
	// Api Url: /api/v1/users/:id/colors
	// return canvasRequest(CanvasConstants.GET_CUSTOM_COLORS, {id:}, query);
	GET_CUSTOM_COLORS: Network.GET,

	// [Get custom color)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.get_custom_color)
	// Api Url: /api/v1/users/:id/colors/:asset_string
	// return canvasRequest(CanvasConstants.GET_CUSTOM_COLOR, {id:, asset_string:}, query);
	GET_CUSTOM_COLOR: Network.GET,

	// [Update custom color)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.set_custom_color)
	// Api Url: /api/v1/users/:id/colors/:asset_string
	// return canvasRequest(CanvasConstants.UPDATE_CUSTOM_COLOR, {id:, asset_string:}, query);
	UPDATE_CUSTOM_COLOR: Network.PUT,

	// [Edit a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.update)
	// Api Url: /api/v1/users/:id
	// return canvasRequest(CanvasConstants.EDIT_A_USER, {id:}, query);
	EDIT_A_USER: Network.PUT,

	// [Merge user into another user)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.merge_into)
	// Api Url: /api/v1/users/:id/merge_into/:destination_user_id
	// return canvasRequest(CanvasConstants.MERGE_USER_INTO_ANOTHER_USER, {id:, destination_user_id:}, query);
	MERGE_USER_INTO_ANOTHER_USER: Network.PUT,

	// [Merge user into another user)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.merge_into)
	// Api Url: /api/v1/users/:id/merge_into/accounts/:destination_account_id/users/:destination_user_id
	// return canvasRequest(CanvasConstants.MERGE_USER_INTO_ANOTHER_USER_BY_ACCOUNTS_AND_DESTINATION_ACCOUNT, {id:, destination_account_id:, destination_user_id:}, query);
	MERGE_USER_INTO_ANOTHER_USER_BY_ACCOUNTS_AND_DESTINATION_ACCOUNT: Network.PUT,

	// [Get user profile)](https://canvas.instructure.com/doc/api/all_resources.html#method.profile.settings)
	// Api Url: /api/v1/users/:user_id/profile
	// return canvasRequest(CanvasConstants.GET_USER_PROFILE, {user_id:}, query);
	GET_USER_PROFILE: Network.GET,

	// [List avatar options)](https://canvas.instructure.com/doc/api/all_resources.html#method.profile.profile_pics)
	// Api Url: /api/v1/users/:user_id/avatars
	// return canvasRequest(CanvasConstants.LIST_AVATAR_OPTIONS, {user_id:}, query);
	LIST_AVATAR_OPTIONS: Network.GET,

	// [List user page views)](https://canvas.instructure.com/doc/api/all_resources.html#method.page_views.index)
	// Api Url: /api/v1/users/:user_id/page_views
	// return canvasRequest(CanvasConstants.LIST_USER_PAGE_VIEWS, {user_id:}, query);
	LIST_USER_PAGE_VIEWS: Network.GET,

	// [Store custom data)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_data.set_data)
	// Api Url: /api/v1/users/:user_id/custom_data(/*scope)
	// return canvasRequest(CanvasConstants.STORE_CUSTOM_DATA, {user_id:}, query);
	STORE_CUSTOM_DATA: Network.PUT,

	// [Load custom data)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_data.get_data)
	// Api Url: /api/v1/users/:user_id/custom_data(/*scope)
	// return canvasRequest(CanvasConstants.LOAD_CUSTOM_DATA, {user_id:}, query);
	LOAD_CUSTOM_DATA: Network.GET,

	// [Delete custom data)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_data.delete_data)
	// Api Url: /api/v1/users/:user_id/custom_data(/*scope)
	// return canvasRequest(CanvasConstants.DELETE_CUSTOM_DATA, {user_id:}, query);
	DELETE_CUSTOM_DATA: Network.DELETE,

	// [List course nicknames)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_nicknames.index)
	// Api Url: /api/v1/users/self/course_nicknames
	// return canvasRequest(CanvasConstants.LIST_COURSE_NICKNAMES, {}, query);
	LIST_COURSE_NICKNAMES: Network.GET,

	// [Get course nickname)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_nicknames.show)
	// Api Url: /api/v1/users/self/course_nicknames/:course_id
	// return canvasRequest(CanvasConstants.GET_COURSE_NICKNAME, {course_id:}, query);
	GET_COURSE_NICKNAME: Network.GET,

	// [Set course nickname)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_nicknames.update)
	// Api Url: /api/v1/users/self/course_nicknames/:course_id
	// return canvasRequest(CanvasConstants.SET_COURSE_NICKNAME, {course_id:}, query);
	SET_COURSE_NICKNAME: Network.PUT,

	// [Remove course nickname)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_nicknames.delete)
	// Api Url: /api/v1/users/self/course_nicknames/:course_id
	// return canvasRequest(CanvasConstants.REMOVE_COURSE_NICKNAME, {course_id:}, query);
	REMOVE_COURSE_NICKNAME: Network.DELETE,

	// [Clear course nicknames)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_nicknames.clear)
	// Api Url: /api/v1/users/self/course_nicknames
	// return canvasRequest(CanvasConstants.CLEAR_COURSE_NICKNAMES, {}, query);
	CLEAR_COURSE_NICKNAMES: Network.DELETE,

	// [Show ePub export)](https://canvas.instructure.com/doc/api/all_resources.html#method.epub_exports.show)
	// Api Url: /api/v1/courses/:course_id/epub_exports/:id
	// return canvasRequest(CanvasConstants.SHOW_EPUB_EXPORT, {course_id:, id:}, query);
	SHOW_EPUB_EXPORT: Network.GET,


};