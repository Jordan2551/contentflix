import axios from 'axios';

const contentfulApi = 'https://cdn.contentful.com';

//TODO:: use .env
export const getContentfulEntries = async () => {
  const result = await axios.get(
    `${contentfulApi}/spaces/inyc4jqsr0km/environments/master/entries?`,
    {
      headers: {
        Authorization: `Bearer AQXiW-jE9OjLQxzoaBbWaTF59EtX8jtJh-c21MySuro`,
      },
    }
  );

  return result.data;
};

export default getContentfulEntries;
