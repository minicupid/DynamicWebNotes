import axios from 'axios';

// when using axios get
// first argument is the url as a string
// second argument is an options object

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        // do not publish ur api key
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
        },
        params: { query: term },
    });

    console.log(response.data.results);
    return response.data.results;
};

export default searchImages;
