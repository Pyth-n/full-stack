import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

const create = (obj) => {
  const req = axios.post(baseUrl, obj)
  return req.then(res => res.data)
}

const del = id => {
  const req = axios.delete(`${baseUrl}/${id}`)
  return req.then(res => res.data)
}

export default {
  getAll,
  create,
  del
}