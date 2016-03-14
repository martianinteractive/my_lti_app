//
// Sections
//
// List course sections
// Returns the list of sections for this course.
//
// API Docs: https://canvas.instructure.com/doc/api/sections.html
// API Url: courses/{course_id}/sections
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_course_sections, {course_id}, query);
export const list_course_sections = { type: "LIST_COURSE_SECTIONS", method: "get", reducer: 'sections'};

// Create course section
// Creates a new section for this course.
//
// API Docs: https://canvas.instructure.com/doc/api/sections.html
// API Url: courses/{course_id}/sections
//
// Example:
// const query = {
//   course_section[name]
//   course_section[sis_section_id]
//   course_section[start_at]
//   course_section[end_at]
//   course_section[restrict_enrollments_to_section_dates]
//   enable_sis_reactivation
// }
// return canvasRequest(create_course_section, {course_id}, query);
export const create_course_section = { type: "CREATE_COURSE_SECTION", method: "post", reducer: 'sections'};

// Cross-list a Section
// Move the Section to another course.  The new course may be in a different account (department),
// but must belong to the same root account (institution).
//
// API Docs: https://canvas.instructure.com/doc/api/sections.html
// API Url: sections/{id}/crosslist/{new_course_id}
//
// Example:
// return canvasRequest(cross_list_section, {id, new_course_id});
export const cross_list_section = { type: "CROSS_LIST_SECTION", method: "post", reducer: 'sections'};

// De-cross-list a Section
// Undo cross-listing of a Section, returning it to its original course.
//
// API Docs: https://canvas.instructure.com/doc/api/sections.html
// API Url: sections/{id}/crosslist
//
// Example:
// return canvasRequest(de_cross_list_section, {id});
export const de_cross_list_section = { type: "DE_CROSS_LIST_SECTION", method: "delete", reducer: 'sections'};

// Edit a section
// Modify an existing section.  See the documentation for {api:SectionsController#create create API action}.
//
// API Docs: https://canvas.instructure.com/doc/api/sections.html
// API Url: sections/{id}
//
// Example:
// return canvasRequest(edit_section, {id});
export const edit_section = { type: "EDIT_SECTION", method: "put", reducer: 'sections'};

// Get section information
// Gets details about a specific section
//
// API Docs: https://canvas.instructure.com/doc/api/sections.html
// API Url: courses/{course_id}/sections/{id}
//
// Example:
// return canvasRequest(get_section_information_courses, {course_id, id});
export const get_section_information_courses = { type: "GET_SECTION_INFORMATION_COURSES", method: "get", reducer: 'sections'};

// Get section information
// Gets details about a specific section
//
// API Docs: https://canvas.instructure.com/doc/api/sections.html
// API Url: sections/{id}
//
// Example:
// return canvasRequest(get_section_information_sections, {id});
export const get_section_information_sections = { type: "GET_SECTION_INFORMATION_SECTIONS", method: "get", reducer: 'sections'};

// Delete a section
// Delete an existing section.  Returns the former Section.
//
// API Docs: https://canvas.instructure.com/doc/api/sections.html
// API Url: sections/{id}
//
// Example:
// return canvasRequest(delete_section, {id});
export const delete_section = { type: "DELETE_SECTION", method: "delete", reducer: 'sections'};