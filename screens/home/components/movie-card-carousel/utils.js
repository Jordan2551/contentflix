
export const getMoviesByCategories = (movies) => {
    const result = {};

    movies.forEach(movie => {
        if(movie.category in result){
            result[movie.category].push(movie);
        }
        else{
            result[movie.category] = [movie];
        }
    });

    return result;
}
