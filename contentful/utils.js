export const parseContentfulData = (data) => {
  // Get assets relevant to our movies so that we can fetch them when we can provide the image / video url to the movies later.
  const assets = [];

  data.includes?.Asset?.forEach((asset) => {
    try {
      assets.push({ id: asset.sys.id, url: asset.fields.file.url });
    } catch (error) {
      console.error(
        `Error parsing asset with id: ${asset?.sys?.id}, error: ${error}`
      );
    }
  });

  // Get entries relevant to our movies so that we can fetch them when we can provide category titles to the movies later.
  const movies = [];

  data.items?.forEach((movie) => {
    try {
      const image = parseContentfulAsset(
        assets.find((asset) => asset.id === movie.fields.image.sys.id).url
      );

      const video = parseContentfulAsset(
        assets.find((asset) => asset.id === movie.fields.video.sys.id).url
      );

      movie = movies.push({
        category: movie.fields.category,
        description: movie.fields.description,
        id: movie.sys.id,
        title: movie.fields.title,
        image,
        video,
        year: movie.fields.year,
        rating: movie.fields.rating,
      });
    } catch (error) {
      console.error(
        `Error parsing movie with id: ${movie?.sys?.id}, error: ${error}`
      );
    }
  });
  return movies;
};

export const parseContentfulAsset = (asset) => {
  return 'https:' + asset;
};
