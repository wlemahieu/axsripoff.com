export default () => {
  switch (import.meta.env.PROD) {
    case true:
      return '';
    default:
      return 'http://localhost:4444';
  }
};
