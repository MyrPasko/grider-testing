import * as React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';


it('should shows a comment box', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  // Looks inside the div and checks to see if the CommentBox is in there
  // console.log(div.innerHTML);

  // This is a bad example. We don't need to test inner secret logic of the CommentBox or CommentList
  // But their appearance ONLY !!!!
  expect(div.innerHTML).toContain('Comment Box');

  ReactDOM.unmountComponentAtNode(div);  // Clean memory from unnecessary objects.
});
