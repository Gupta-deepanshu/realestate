import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

  export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '7138011f25msh43aa34bfb98af02p12f952jsn744b49ebd9dd',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data;
  }