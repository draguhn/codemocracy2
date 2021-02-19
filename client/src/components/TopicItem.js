

function TopicItem({ topic, deleteTopic, voteTopic, id }) {
  return (

    <div className='topic'>
      <div className='topic__vote'>
        <button className='vote__btn' onClick={() => voteTopic(id, 'up')}>
          <span role='img' aria-label='vote-up'>👍</span>
        </button>
        <div className='vote__score'>{topic.score}</div>
        <button className='vote__btn' onClick={() => voteTopic(id, 'down')}>
          <span role='img' aria-label='vote-down'>👎</span>
        </button>
      </div>
      <div className='topic__content'>
        <h3 className='content__title'>{topic.title}</h3>
        <p className='content__date'>{topic.published_at}</p>
      </div>
      <div className='topic__delete'>
        <button className='delete__btn' onClick={() => deleteTopic(id)}>
          <span role='img' aria-label='trash'>🗑</span>
        </button>
      </div>
    </div>
  )
}

export default TopicItem