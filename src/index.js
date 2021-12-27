import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import profile1 from './img/1.jpg';
import profile2 from './img/2.jpg';
import profile3 from './img/3.jpg';
import UserCard from './UserCard';

const App = () => {
  return (
    <div className='ui comments'>
      <UserCard>
        <SingleComment
          name='Sarah'
          date='Today at 5:00PM'
          words='Oh la la!'
          picture={profile1}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name='Mary'
          date='Today at 5:01PM'
          words='Amazing'
          picture={profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name='Alex'
          date='Today at 5:02PM'
          words='Miraculous'
          picture={profile3}
        />
      </UserCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
