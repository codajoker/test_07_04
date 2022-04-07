import axios from 'axios';
axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1';
export function APIGet() {
  return axios.get('/users?page=1&count=6');
}

// export function APIGet() {}

// export function APIGet() {}
