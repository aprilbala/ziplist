/* Code for E27 for ICS 314
 * By: April Bala
 * 09/18/2017
 */

const charList = ['z', 'y', 'x'];
const numList = [1, 2, 3];

function zipList(list1, list2) {
  const resultList = [];
  for (let i = 0; i < list1.length; i++) {
    resultList.push(list1[i], list2[i]);
  }
  return resultList;
}

console.log(zipList(charList, numList));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(charList, numList));
