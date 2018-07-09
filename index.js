/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const set1 = new Set(items);
  const str1 = [...set1];
  return str1;
};
module.exports = removeDuplicateItems;
