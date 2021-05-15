import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseURL)
}

const create = person => {
  return axios.post(baseURL, person)
}

const deleteByID = id => {
  return axios.delete(`${baseURL}/${id}`)
}

const updatePhoneNumber = (id, person) => {
  return axios.put(`${baseURL}/${id}`, person)
}

const exported = {
  getAll,
  create,
  deleteByID,
  updatePhoneNumber
}

export default exported