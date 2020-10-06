import axios from 'axios';

const url = 'https://api.github.com/search';

export default {
  getUser: (term, filter) => axios.get(`${url}/${filter}?q=${term}`)
    .then((response) => response.data),
};
