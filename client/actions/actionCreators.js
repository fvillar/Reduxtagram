// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

export function incrementBoo(index) {
  return {
    type: 'INCREMENT_BOO',
    index
  }
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment

export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}

export function removeCaption(postId, i) {
  return {
    type: 'REMOVE_CAPTION',
    i,
    postId
  }
}

export function addCaption(postId, caption, i) {
  return {
    type: 'ADD_CAPTION',
    postId,
    caption,
    i
  }
}

// export function loadCoursesSuccess(courses) {
//    return { 
//      type: types.LOAD_COURSES_SUCCESS, 
//      courses 
//  };
// }
// const base = 'http://app.viomedia.com/courses';

// export function loadCourses() {
//    return function (dispatch) {

//        dispatch(beginAjaxCall());

//        axios.get(base + '/api/courses')
//            .then(function (response) {
//                dispatch(loadCoursesSuccess(response.data));
//            })
//            .catch(function (response) {
//            });
//    };
// }
