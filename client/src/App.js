import './App.css';
import { useState, useEffect } from 'react';
import TopicList from './components/TopicList'
import ApiService from './components/ApiService';
import TopicForm from './components/TopicForm';

function App() {

  const [topics, setTopics] = useState([]);

  // hola

  // useEffect(() => {
  //   fetch('http://localhost:3001/topics')
  //   .then(res => res.json())
  //   .then(topics => setTopics(topics))
  // }, [])

  useEffect(() => {
    ApiService.getTopics()
      .then((topics) => setTopics(topics))
  }, [])

  const createTopic = (body) => {
    ApiService.postTopic(body)
      .then(topic => {
        setTopics(prevTopics => [...prevTopics, topic])
      })
  }

  const deleteTopic = (id) => {
    ApiService.deleteTopic(id)
      .then(() => {
        setTopics(topics => topics.filter(topic => topic._id !== id))
      })
  }

  const voteTopic = (id, direction) => {
    ApiService.voteTopic(id, direction)
      .then((updatedTopic) => {
        setTopics(topics => {
          const index = topics.findIndex(topic => topic._id === updatedTopic._id)
          const copyOfTopics = [...topics];
          copyOfTopics.splice(index, 1, updatedTopic)
          return copyOfTopics
        })
      })
  }

  return (
    <div>
      <TopicForm createTopic={createTopic} />
      <TopicList
        topics={topics}
        deleteTopic={deleteTopic}
        voteTopic={voteTopic}
      />
    </div>
  );
}

export default App;
