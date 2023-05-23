import axios from 'axios';

export const checkId = async (id: String) => {
  try {
    const response = await axios.get('http://localhost:8888/check/id/' + id);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};

export const login = async (id: String, password: String) => {
    try {
      const response = await axios.post('http://localhost:8888/login', {id, password});
      return response.data;
    } catch (error) {
        console.log(error);
    }
 };