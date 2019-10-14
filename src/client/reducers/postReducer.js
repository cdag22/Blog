import actions from '../actions';

export default function postReducer (posts = [], action) {
  let postsCopy = posts.slice();
  const index = action && action.post ? action.post.number : postsCopy.length - 1;

  switch(action.type) {
    case actions.CREATE_POST:
      
      postsCopy.push(action.post);
      return postsCopy.map((post) => {
        return {
          ...post,
          isDisabled: true,
        };
      });
    case actions.EDIT_POST:
      postsCopy[index].isDisabled = false;
      return postsCopy;
    case actions.UPDATE_POST:
      postsCopy[index] = action.post;
      postsCopy[index].isDisabled = true;
      return postsCopy;
    case actions.DELETE_POST:
      postsCopy.splice(index, 1);
      return postsCopy.map((post, i) => {
        return {
          title: post.title,
          body: post.body,
          number: i,
          isDisabled: post.isDisabled,
        };
      });
    default:
      return posts;
  }
};