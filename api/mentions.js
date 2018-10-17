import axios from 'axios'

export const fetchMentions = () => {
  return axios.get('http://localhost:3000/mentionApi/alert')
}
