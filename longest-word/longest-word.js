/*https://coderbyte.com/editor/Longest%20Word:JavaScript*/

//1
function countAz(str) {
    let count = 0;
    let i = 0;
    while (i < str.length) {
      const wordLength = str[i].toLowerCase()
      if (wordLength >= 'a' && wordLength <= 'z') {
        count += 1
      }
      i += 1;
    }
    return count
  }
  
  
  function LongestWord(sen) { 
  
    const senArray = sen.split(' ');
    let longest = countAz(senArray[0]);
    let longestWord = senArray[0];
    for (let i = 1; i < senArray.length; i++) {
      if (countAz(senArray[i]) > longest) {
        longest = countAz(senArray[i]);
        longestWord = senArray[i]
      }
    }
  
    return longestWord; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));