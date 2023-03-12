import AsyncStorage from '@react-native-async-storage/async-storage';

const WATCHLIST_KEY = 'watchlist';

export const addToWatchlist = async (id) => {
  try {
    const watchlist = await getWatchlist();

    // Only push unique movies
    if (id && !watchlist.includes(id)) {
      watchlist.push(id);
      await AsyncStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
      console.log(`Successfully added movie with id: ${id} to watchlist: `);
    }
  } catch (error) {
    console.error(`Error adding movie with id: ${id} to watchlist: `, error);
  }
};

export const removeFromWatchlist = async (id) => {
  try {
    const watchlist = await getWatchlist();
    const index = watchlist.indexOf(id);

    // Ensure we are not trying to remove a non-existent movie id.
    if (index > -1) {
      watchlist.splice(index, 1);
    }

    await AsyncStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
    console.log(
      `Successfully removed movie with id: ${id} from watchlist: `,
      watchlist
    );
  } catch (error) {
    console.error(`Error removing movie with id: ${id}: `, error);
  }
};

export const getWatchlist = async () => {
  try {
    const watchlist = await AsyncStorage.getItem(WATCHLIST_KEY);
    console.log('Successfully fetched watchlist:', watchlist);
    return watchlist != null ? JSON.parse(watchlist) : [];
  } catch (error) {
    console.error(`Error getting movies: `, error);
  }
};

export const isMovieInWatchlist = async (id) => {
  try {
    const watchlist = await getWatchlist();

    return watchlist.includes(id);
  } catch (error) {
    console.error(`Error checking if movie is in the watchlist: `, error);
  }
};
