const wordSearch = (letters, word) => {
  // If there is no array being entered
  if (letters === undefined) {
    return undefined;
  }
  
  // If the array is empty
  if (letters.length === 0) {
    return 'empty array';
  }
  
  // Diagonal string check
  let lowest = letters.length;
  if (lowest > letters[0].length) lowest = letters[0].length;
  let diagString = "";
  for (let i = 0; i < lowest; i++) {
    diagString += letters[i][i];
    if (diagString.includes(word)) return true;
  }

  // Horizontally joins the characters in the array then checks each if they match word
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const h of horizontalJoin) {
    if (h.includes(word)) return true;
  }

  // Horizontally flips joins the characters in the array then checks each if they match word
  const reverseHorizontalJoin = letters.map(ls => ls.reverse().join(''));
  for (const r of reverseHorizontalJoin) {
    if (r.includes(word)) return true;
  }

  // Makes an array with i nested arrays inside
  let verticalArray = [];
  for (let i = 0; i < letters[0].length; i++) {
    verticalArray.push([]);
  }
  
  // Vertical => Horizontal / Horizontal => Vertical
  for (let row = 0; row < letters.length; row++) {
    for (let column = 0; column < letters[row].length; column++) {
      // Transposes the x and y values from letters into verticalArray
      verticalArray[column][row] = letters[row][column];
    }
  }
  
  // Vertically flips joins the characters in the array then checks each if they match word
  const verticalJoin = verticalArray.map(ls => ls.join(''));
  for (const v of verticalJoin) {
    if (v.includes(word)) return true;
  }

  // Vertically flips joins the characters in the array then checks each if they match word
  const reverseVerticalJoin = verticalArray.map(ls => ls.reverse().join(''));
  for (const u of reverseVerticalJoin) {
    if (u.includes(word)) return true;
  }

  // Makes sure to return false if nothing above happened
  return false;
};

module.exports = wordSearch;