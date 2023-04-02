import axios from 'axios';

// TODO:: talk to Mo to find better way to do this with .env? Keep in mind using expo.
const CONTENTFUL_SPACE_ID = 'inyc4jqsr0km';
const CONTENTFUL_CONTENT_DELIVERY_API_KEY =
  'AQXiW-jE9OjLQxzoaBbWaTF59EtX8jtJh-c21MySuro';

const CONTENTFUL_BASE_URL = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?content_type=movie`;
const headers = {
  Authorization: `Bearer ${CONTENTFUL_CONTENT_DELIVERY_API_KEY}`,
};

export const getContentfulData = async () => {
  try {
    const result = await axios.get(CONTENTFUL_BASE_URL, {
      headers,
    });
    const { movies, categories } = parseContentfulData(result.data);

    return {
      categories,
      movies,
    };
  } catch (error) {
    console.error('Error getting contentful data: ', error);
  }
};

export const getMovies = async () => {
  try {
    const result = await axios.get(CONTENTFUL_BASE_URL, {
      headers,
      params: {
        content_type: 'movie',
      },
    });

    return result.data;
  } catch (error) {
    console.error('Error getting movie data: ', error);
  }
};

// TODO:: test edge cases
export const parseContentfulData = (data) => {
  // console.log(
  //   '🚀 ~ file: contentful-client.js:85 ~ parseContentfulData ~ data:',
  //   JSON.stringify(data)
  // );
  // Get assets relevant to our movies so that we can fetch them when we can provide the image / video url to the movies later.
  const assets = data?.includes?.Asset.map((asset) => {
    try {
      return {
        id: asset.sys.id,
        url: asset.fields.file.url,
      };
    } catch (error) {
      console.error(
        `Error parsing asset with id: ${asset?.sys?.id}, error: ${error}`
      );
    }
  });

  console.log('🚀 ~ file: contentful-client.js:93 ~ assets ~ assets:', assets);

  // Get entries relevant to our movies so that we can fetch them when we can provide category titles to the movies later.
  return data?.items?.map((movie) => {
    console.log(
      '🚀 ~ file: contentful-client.js:128 ~ returndata?.items?.map ~ movie:',
      movie
    );
    try {
      return {
        category: movie.fields.category,
        description: movie.fields.description,
        id: movie.sys.id,
        image: assets.find((asset) => asset.id === movie.fields.image.sys.id),
        title: movie.fields.title,
        video: assets.find((asset) => asset.id === movie.fields.video.sys.id),
        year: movie.fields.year,
      };
    } catch (error) {
      console.error(
        `Error parsing movie with id: ${movie?.sys?.id}, error: ${error}`
      );
    }
  });
};
