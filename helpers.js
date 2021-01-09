
const generateRandomString = () => {
  return Math.random().toString(36).substr(2, 15);
}

module.exports = { generateRandomString };