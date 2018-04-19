import _ from 'lodash';

import { listQuizzesInCourse } from 'atomic-canvas/libs/constants/quizzes';
import { DONE } from 'atomic-fuel/libs/constants/wrapper';

const initialState = [];

export default (state = initialState, action) => {

  switch (action.type) {

    case `${listQuizzesInCourse.type}${DONE}`:
      return _.concat(state, action.payload);

    default:
      return state;
  }
};
