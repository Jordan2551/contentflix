import AsyncStorage from '@react-native-async-storage/async-storage';

const WATCHLIST_KEY = 'watchlist';

export const addToWatchlist = async (id) => {
  try {
    const watchList = await getWatchList();

    // Only push unique movies
    if (watchList.indexOf(id) === -1) {
      watchList.push(id);
    }

    await AsyncStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchList));

    console.log(
      `🚀 ~ file: storage.js ~ addToWatchlist: successfully added movie with id: ${id} to watchlist`
    );
  } catch (error) {
    console.error(`Error adding movie with id: ${id} to watchlist: `, error);
  }
};

export const removeFromWatchlist = async (id) => {
  try {
    const watchList = getWatchList();
    const index = watchList.indexOf(id);

    // Ensure we are not trying to remove a non-existent movie id.
    if (index > -1) {
      watchList.splice(index, 1);
    }

    await AsyncStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchList));
  } catch (error) {
    console.error(`Error removing movie with id: ${id}: `, error);
  }
};

export const getWatchList = async () => {
  try {
    const watchlist = await AsyncStorage.getItem(WATCHLIST_KEY);
    return watchlist != null ? JSON.parse(watchlist) : [];
  } catch (error) {
    console.error(`Error getting movies: `, error);
  }
};
