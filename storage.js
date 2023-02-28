import AsyncStorage from '@react-native-async-storage/async-storage';

const WATCHLIST_KEY = 'watchlist';

export const addToWatchlist = async (id) => {
  try {
    const watchlist = await getWatchList();

    // Only push unique movies
    if (!(id in watchlist)) {
      console.log('🚀 ~ file: storage.js:11 ~ addToWatchlist ~ I PIUSH:');
      watchlist.push(id);
      await AsyncStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
      console.log(
        `🚀 ~ file: storage.js ~ addToWatchlist: successfully added movie with id: ${id} to watchlist: `,
        watchlist
      );
    }
  } catch (error) {
    console.error(`Error adding movie with id: ${id} to watchlist: `, error);
  }
};

export const removeFromWatchlist = async (id) => {
  try {
    const watchlist = await getWatchList();
    const index = watchlist.indexOf(id);

    // Ensure we are not trying to remove a non-existent movie id.
    if (index > -1) {
      watchlist.splice(index, 1);
    }

    await AsyncStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
    console.log(
      `🚀 ~ file: storage.js ~ addToWatchlist: successfully removed movie with id: ${id} from watchlist: `,
      watchlist
    );
  } catch (error) {
    console.error(`Error removing movie with id: ${id}: `, error);
  }
};

export const getWatchList = async () => {
  try {
    const watchlist = await AsyncStorage.getItem(WATCHLIST_KEY);
    console.log(
      '🚀 ~ file: storage.js:42 ~ getWatchList ~ watchlist:',
      watchlist
    );
    return watchlist != null ? JSON.parse(watchlist) : [];
  } catch (error) {
    console.error(`Error getting movies: `, error);
  }
};

export const isMovieInWatchlist = async (id) => {
  try {
    // TODO:: problem with in??
    const watchlist = await getWatchList();
    console.log('WATCH', watchlist, id);
    console.log(watchlist.indexOf(id) > -1);
    return watchlist.indexOf(id) > -1;
  } catch (error) {
    console.error(`Error checking if movie is in the watchlist: `, error);
  }
};
