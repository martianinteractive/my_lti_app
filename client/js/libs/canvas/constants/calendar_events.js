//
// Calendar Events
//
// List calendar events
// Retrieve the list of calendar events or assignments for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events
//
// Example:
// const query = {
//   type
//   start_date
//   end_date
//   undated
//   all_events
//   context_codes
//   excludes
// }
// return canvasRequest(list_calendar_events, {}, query);
export const list_calendar_events = { type: "LIST_CALENDAR_EVENTS", method: "get", reducer: 'calendar_events'};

// List calendar events for a user
// Retrieve the list of calendar events or assignments for the specified user.
// To view calendar events for a user other than yourself,
// you must either be an observer of that user or an administrator.
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: users/{user_id}/calendar_events
//
// Example:
// const query = {
//   type
//   start_date
//   end_date
//   undated
//   all_events
//   context_codes
//   excludes
// }
// return canvasRequest(list_calendar_events_for_user, {user_id}, query);
export const list_calendar_events_for_user = { type: "LIST_CALENDAR_EVENTS_FOR_USER", method: "get", reducer: 'calendar_events'};

// Create a calendar event
// Create and return a new calendar event
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events
//
// Example:
// const query = {
//   calendar_event[context_code] (required)
//   calendar_event[title]
//   calendar_event[description]
//   calendar_event[start_at]
//   calendar_event[end_at]
//   calendar_event[location_name]
//   calendar_event[location_address]
//   calendar_event[time_zone_edited]
//   calendar_event[child_event_data][X][start_at]
//   calendar_event[child_event_data][X][end_at]
//   calendar_event[child_event_data][X][context_code]
//   calendar_event[duplicate][count]
//   calendar_event[duplicate][interval]
//   calendar_event[duplicate][frequency]
//   calendar_event[duplicate][append_iterator]
// }
// return canvasRequest(create_calendar_event, {}, query);
export const create_calendar_event = { type: "CREATE_CALENDAR_EVENT", method: "post", reducer: 'calendar_events'};

// Get a single calendar event or assignment
// 
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events/{id}
//
// Example:
// return canvasRequest(get_single_calendar_event_or_assignment, {id});
export const get_single_calendar_event_or_assignment = { type: "GET_SINGLE_CALENDAR_EVENT_OR_ASSIGNMENT", method: "get", reducer: 'calendar_events'};

// Reserve a time slot
// Reserves a particular time slot and return the new reservation
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events/{id}/reservations
//
// Example:
// const query = {
//   participant_id
//   comments
//   cancel_existing
// }
// return canvasRequest(reserve_time_slot, {id}, query);
export const reserve_time_slot = { type: "RESERVE_TIME_SLOT", method: "post", reducer: 'calendar_events'};

// Reserve a time slot
// Reserves a particular time slot and return the new reservation
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events/{id}/reservations/{participant_id}
//
// Example:
// const query = {
//   comments
//   cancel_existing
// }
// return canvasRequest(reserve_time_slot_participant_id, {id, participant_id}, query);
export const reserve_time_slot_participant_id = { type: "RESERVE_TIME_SLOT_PARTICIPANT_ID", method: "post", reducer: 'calendar_events'};

// Update a calendar event
// Update and return a calendar event
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events/{id}
//
// Example:
// const query = {
//   calendar_event[context_code] (required)
//   calendar_event[title]
//   calendar_event[description]
//   calendar_event[start_at]
//   calendar_event[end_at]
//   calendar_event[location_name]
//   calendar_event[location_address]
//   calendar_event[time_zone_edited]
//   calendar_event[child_event_data][X][start_at]
//   calendar_event[child_event_data][X][end_at]
//   calendar_event[child_event_data][X][context_code]
// }
// return canvasRequest(update_calendar_event, {id}, query);
export const update_calendar_event = { type: "UPDATE_CALENDAR_EVENT", method: "put", reducer: 'calendar_events'};

// Delete a calendar event
// Delete an event from the calendar and return the deleted event
//
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events/{id}
//
// Example:
// const query = {
//   cancel_reason
// }
// return canvasRequest(delete_calendar_event, {id}, query);
export const delete_calendar_event = { type: "DELETE_CALENDAR_EVENT", method: "delete", reducer: 'calendar_events'};