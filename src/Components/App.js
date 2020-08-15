import * as React from 'react';
import CommentList from './CommentList';
import CommentBox from './CommentBox';

const App = props => {

  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  );
};

export default App;
