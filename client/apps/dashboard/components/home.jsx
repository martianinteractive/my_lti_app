import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Auth from 'atomic-canvas/libs/components/canvas_authentication';
import canvasRequest from 'atomic-canvas/libs/action';
import { listQuizzesInCourse } from 'atomic-canvas/libs/constants/quizzes';

import assets from '../libs/assets';
import Selector from './content_item_select/selector';

const select = state => ({
  canvasAuthRequired: state.settings.canvas_auth_required,
  ltiMessageType: state.settings.lti_message_type,
  lmsCourseId: state.settings.lms_course_id,
  quizzes: state.quizzes,
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
      </div>
    );
  }

}

export default connect(select, { canvasRequest })(Home);
