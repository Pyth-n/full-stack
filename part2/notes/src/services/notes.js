import axios from "axios";
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => axios.get(baseUrl)

const create = obj => axios.post(baseUrl, obj)

const update = (id, obj) => axios.put(`${baseUrl}/${id}`, obj)

export default {
  getAll: getAll,
  create: create,
  update: update
}