import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Auth from 'atomic-canvas/libs/components/canvas_authentication';
import canvasRequest from 'atomic-canvas/libs/action';
import { listQuizzesInCourse } from 'atomic-canvas/libs/constants/quizzes';
import { listUsersInCourseUsers } from 'atomic-canvas/libs/constants/courses';

import assets from '../libs/assets';
import Selector from './content_item_select/selector';

const select = state => ({
  canvasAuthRequired: state.settings.canvas_auth_required,
  ltiMessageType: state.settings.lti_message_type,
  lmsCourseId: state.settings.lms_course_id,
  quizzes: state.quizzes,
  students: state.students,
});

export class Home extends React.Component {

  static propTypes = {
    canvasAuthRequired: PropTypes.bool,
    ltiMessageType: PropTypes.string,
    canvasRequest: PropTypes.func.isRequired,
    lmsCourseId: PropTypes.string,
  };

  componentDidMount() {
    if (!this.props.canvasAuthRequired) {
      // Example Canvas API call
      this.props.canvasRequest(listQuizzesInCourse, { course_id: this.props.lmsCourseId });
      this.props.canvasRequest(listUsersInCourseUsers, { course_id: this.props.lmsCourseId }, { enrollment_type: 'student' });
    }
  }

  renderQuizzes() {
    if (!this.props.quizzes) {
      return null;
    }

    return this.props.quizzes.map((quiz) => {
      return (
        <li key={`quiz_${quiz.id}`}>
          <a target="_top" href={`${quiz.html_url}`}>
            {quiz.title}
          </a>
        </li>
      );
    });
  }

  renderStudents() {
    if (!this.props.students) {
      return null;
    }

    return this.props.students.map((student) => {
      return (
        <li key={`student_${student.id}`}>
          <a target="_top" href={`${student.html_url}`}>
            {student.name}
          </a>
        </li>
      );
    });
  }

  render() {
    const img = assets('./images/atomicjolt.jpg');

    if (this.props.ltiMessageType === 'ContentItemSelectionRequest') {
      return <Selector />;
    }

    return (
      <div>
        <img src={img} alt="Atomic Jolt Logo" />
        <hr />
        { this.props.canvasAuthRequired ? <Auth /> : null }
        <ul>
          { this.renderQuizzes() }
        </ul>
        <ul>
          { this.renderStudents() }
        </ul>
      </div>
    );
  }

}

export default connect(select, { canvasRequest })(Home);
