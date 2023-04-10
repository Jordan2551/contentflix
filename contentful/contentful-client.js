import axios from 'axios';
import { parseContentfulData } from './utils';

// TODO:: talk to Mo to find better way to do this with .env? Keep in mind using expo.
const CONTENTFUL_SPACE_ID = 'inyc4jqsr0km';
const CONTENTFUL_ACCESS_TOKEN = 'AQXiW-jE9OjLQxzoaBbWaTF59EtX8jtJh-c21MySuro';

export const getContentfulData = async () => {
  const result = await axios.get(
    `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=movie`
  );

  const movies = parseContentfulData(result.data);
  return movies;
};
