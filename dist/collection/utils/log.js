export const warning = (value, ...args) => {
  if (!value) {
    console.warn(...args);
  }
};
