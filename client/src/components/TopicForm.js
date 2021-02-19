import { useState } from 'react'

function TopicForm({createTopic}) {

  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);
  const [name, setName] = useState('');

  const handleChangeTitle = (e) => {
    if (error) setError(false)
    setTitle(e.target.value)
  }
  const handleChangeName = (e) => {
    if (error) setError(false)
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    // e.preventDefault .... prevent. reloading the page
    e.preventDefault();
    if (title && name) {
      createTopic({title, name});
      console.log(name)
      setTitle('');
      setName('');
    } else setError(true)
  }

  return (<div>
    <form onSubmit={handleSubmit} className='form'>
      <input type='text' className='form__input' value={ title } onChange={handleChangeTitle}></input>
      <input type='text' className='form__input' value={ name } onChange={handleChangeName}></input>
      <button type='submit' className='form__submit'>Create Post</button>
    </form>
  </div>)
}

export default TopicForm