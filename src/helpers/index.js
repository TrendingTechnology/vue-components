function getRandomId(type) {
  return `${type}${parseInt(Math.random() * 100, 10)}`;
}

export default {
  getRandomId,
};
