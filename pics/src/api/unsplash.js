import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID uDg4KbZPZ7i4hfM8pumZlSJiLF5-TxA90FsB4TzNha8'
  }
});