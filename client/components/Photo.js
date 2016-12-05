import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';

// class Photo extends React.Component {
const Photo = React.createClass({

  handleSubmitCaption(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const caption = this.refs.caption.value;
    // this.props.addCaption(postId, caption, this.props.posts.findIndex(obj => obj.code == postId));
    this.props.addCaption(postId, caption, this.props.i);
  },

  render() {

    const { post, i, comments } = this.props;

    var caption = (post.caption) ?
      (
        <p className='caption'>{post.caption}
          <button className="remove-comment"
            onClick={this.props.removeCaption.bind(null, this.props.params.postId, i)}>
            &times;
              </button>
        </p>
      )
      : (
        <Form inline className='comment-form' ref="captionForm" onSubmit={this.handleSubmitCaption}>
          <FormGroup controlId="formInlineName">
            <input type="text" ref="caption" placeholder="Caption" />
          </FormGroup>
          <input type="submit" hidden />
        </Form>
      )

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className="grid-photo" />
          </Link>

          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes}
              className="likes-heart">{post.likes}</span>
          </CSSTransitionGroup>

          <CSSTransitionGroup
            transitionName="boo"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.boos}
              className="boo">{post.boos}</span>
          </CSSTransitionGroup>

        </div>

        <figcaption>

          {caption}

          <div className="control-buttons">
            <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {post.likes}</button>
            <button onClick={this.props.incrementBoo.bind(null, i)} className="fa fa-thumbs-down" style={{ fontSize: '16px' }}> {post.boos}</button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>

      </figure>
    )
  }
});
// }

export default Photo;
