import axios from "axios";
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

const create = obj => {
  const req = axios.post(baseUrl, obj)
  return req.then(res => res.data)
}

const update = (id, obj) => {
  const req = axios.put(`${baseUrl}/${id}`, obj)
  return req.then(res => res.data)
}

export default {
  getAll,
  create,
  update
}