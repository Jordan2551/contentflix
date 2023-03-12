import { createClient } from 'contentful';

client = createClient({
  space: 'inyc4jqsr0km',
  environment: 'master',
  accessToken: '',
});

// import { createClient } from 'contentful';

// const client = createClient({
//   space: 'inyc4jqsr0km',
//   environment: 'master', // defaults to 'master' if not set
//   accessToken: '',
// });

client
  .getEntry('uT6ltM1n61T1Ezg3zB5H1')
  .then((entry) => console.log(entry))
  .catch(console.error);
