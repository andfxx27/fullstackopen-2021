import axios from 'axios'

const baseURL = 'https://sheltered-reef-55888.herokuapp.com/rest/notes'

const getAll = () => {
  // Both .get and .then from axios returns a promise
  const request = axios.get(baseURL)
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  }
  return request.then(response => response.data.concat(nonExisting))
}

const create = newObject => {
  const request = axios.post(baseURL, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject)
  return request.then(response => response.data)
}

const exported = {
  getAll,
  create,
  update
}

export default exported