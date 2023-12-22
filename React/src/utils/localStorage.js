export const clocalStorage = (key) => {
  return {
    get: () => {
      const item = localStorage.getItem(key);
      return JSON.parse(item);
    },

    set: (value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },

    remove: () => {
      localStorage.removeItem(key);
    }
  };
};