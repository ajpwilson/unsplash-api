import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c3a4a586df6c4aad4ec85761523e09b1ac6935e151912caafc5d31ec41cb4674'
  }
});