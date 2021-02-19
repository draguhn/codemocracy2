import TopicItem from './TopicItem'

function TopicList({ topics, deleteTopic, voteTopic }) {
  return (<div>

    <div>
      {topics.sort((a, b) => a.score < b.score ? 1 : -1).map(topic => <TopicItem
        key={topic._id}
        id={topic._id}
        topic={topic}
        deleteTopic={deleteTopic}
        voteTopic={voteTopic}
      />)}
    </div>
  </div>)
}

export default TopicList