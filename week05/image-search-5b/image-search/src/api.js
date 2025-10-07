import axios from 'axios';

// when using axios get
// first argument is the url as a string
// second argument is an options object

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        // inside headers is where u pass ur ACCESS key
        headers: {
            Authorization: 'Client-ID k_WiDEdCLJ-qRhVAFvt_7fkdbssFG-Wes3-J6Qy9QPs',
        },
        params: { query: 'chickens' },
    });

    return searchImages
    console.log(response.data.results);
};

export default searchImages;
