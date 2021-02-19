const url = 'http://localhost:3001';

//FETCH DATA FROM DATA BASE
function fetchRequest(path, options) {
  return fetch(url + path, options)
    .then(res => res.status <= 400 ? res : Promise.reject())
    .then(res => res.status === 204 ? res : res.json())
    .catch(err => {
      console.log(`ERROR fetching ${path}`, err)
    })
}

function getTopics() {
  return fetchRequest('/topics');
}

function postTopic(body) {
  return fetchRequest('/topics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
}

function deleteTopic(id) {
  return fetchRequest(`/topics/${id}`, {
    method: 'DELETE',
  })
}

function voteTopic(id, direction) {
  return fetchRequest(`/topics/${id}/${direction}`, {
    method: 'PUT'
  })
}

export default { getTopics, postTopic, deleteTopic, voteTopic };




