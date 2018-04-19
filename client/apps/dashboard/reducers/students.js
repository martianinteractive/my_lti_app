import _ from 'lodash';

import { listUsersInCourseUsers } from 'atomic-canvas/libs/constants/courses';
import { DONE } from 'atomic-fuel/libs/constants/wrapper';

const initialState = [];

export default (state = initialState, action) => {

  switch (action.type) {

    case `${listUsersInCourseUsers.type}${DONE}`:
      return _.concat(state, action.payload);

    default:
      return state;
  }
};
