import axios from 'axios'

// const baseURL = 'https://andfxx27-phonebook-api.herokuapp.com/rest/persons'
const alternativeBaseURL = 'http://localhost:3001/rest/people'

const getAll = () => {
  return axios.get(alternativeBaseURL)
}

const create = person => {
  return axios.post(alternativeBaseURL, person)
}

const deleteByID = id => {
  return axios.delete(`${alternativeBaseURL}/${id}`)
}

const updatePhoneNumber = (id, person) => {
  return axios.put(`${alternativeBaseURL}/${id}`, person)
}

const exported = {
  getAll,
  create,
  deleteByID,
  updatePhoneNumber
}

export default exported