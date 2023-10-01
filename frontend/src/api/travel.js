import axios from 'axios';

export const getPlaceData = async (type) => {
  const options = {
    method: 'GET',
    url: `https://travel-advisor.p.rapidapi.com/${type}/list`, // Dynamic URL based on type
    params: {
      location_id: '293919',
      restaurant_tagcategory: '10591',
      restaurant_tagcategory_standalone: '10591',
      currency: 'USD',
      lunit: 'km',
      limit: '30',
      open_now: 'false',
      lang: 'en_US'
    },
    headers: {
      // 'X-RapidAPI-Key': 'd350f5f927mshc73843f22dc721ap1e388bjsn191177d349c8',
      // 'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
  
};
