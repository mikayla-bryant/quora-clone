import React, { useState } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Popup from '../Popup/Popup';
import Post from '../Post';
import './Home.css';

/*We still need to finish styling the popup window and add the users Google pfp with a dropdown instead of the Sign out button */

const Home = (props) => {
  const [popupState, setPopupState] = useState(false);
  const [formValues, setFormValues] = useState({
    question: '',
  });
  const [posts, setPosts] = useState([
    {
      question: '',
      upvotesCount: 0,
      downvotesCount: 0,
      date: '',
    },
  ]);

  const togglePopup = (e) => {
    e.stopPropagation();
    if (e.target !== e.currentTarget) {
      return;
    }
    setPopupState(!popupState);
  };

  const addQuestion = (e) => {
    const { name, value } = e.target;
    setPosts([{ ...posts, [name]: value }]);
  };
  return (
    <div div className='home'>
      <NavigationBar
        togglePopup={togglePopup}
        currentUser={props.currentUser}
      />
      {popupState ? (
        <Popup togglePopup={togglePopup}>
          <p>Add Question</p>
          <div>
            <p>Tips on getting good answers quickly</p>
            <ul>
              <li>Make sure your question has not been asked already</li>
              <li>Keep your question short and to the point</li>
              <li>Double-check grammar and spelling</li>
            </ul>
          </div>
          <div className='question-ctnr'>
            <textarea placeholder='Start your question with "What", "How", "Why", etc.' />
          </div>
          <button onClick={togglePopup}>Cancel</button>
          <button onClick={addQuestion}>Add Question</button>
        </Popup>
      ) : null}
      {posts.map(() => {
        return <Post question={posts.question} />;
      })}
    </div>
  );
};

export default Home;
