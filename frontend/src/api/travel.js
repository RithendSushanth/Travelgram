// import axios from 'axios';

// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list'

// const options = {
//    params: {
//     location_id: '293919',
//     restaurant_tagcategory: '10591',
//     restaurant_tagcategory_standalone: '10591',
//     currency: 'USD',
//     lunit: 'km',
//     limit: '30',
//     open_now: 'false',
//     lang: 'en_US'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'e4db2f1325msh82cc5df33bc26aep107c92jsn19196e9e9a45',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// };
// // const options = {
// //     method: 'GET',
// //     url: 'https://booking-com.p.rapidapi.com/v2/hotels/details',
// //     params: {
// //       hotel_id: '1676161',
// //       currency: 'AED',
// //       locale: 'en-gb',
// //       checkout_date: '2023-09-28',
// //       checkin_date: '2023-09-27'
// //     },
// //     headers: {
// //       'X-RapidAPI-Key': 'e4db2f1325msh82cc5df33bc26aep107c92jsn19196e9e9a45',
// //       'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
// //     }
// //   };

// export const getPlaceData = async () => {
//     try {
//         const response = await axios.request(options);
//         console.log(response);
//         return response;
//     } catch (error) {
//         console.error(error);
//     }
// }


// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
//   params: {
//     query: 'eiffel tower',
//     lang: 'en_US',
//     units: 'km'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'e4db2f1325msh82cc5df33bc26aep107c92jsn19196e9e9a45',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// };

// export const getPlaceData = async () => {
// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
// }


// api/travel.js
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
      'X-RapidAPI-Key': 'e4db2f1325msh82cc5df33bc26aep107c92jsn19196e9e9a45',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
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
