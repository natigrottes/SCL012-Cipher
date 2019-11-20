window.cipher = {
  encode: (newText,numberOffset) => {

let result= "";
for (let i=0; i < newText.length; i++) {
  let textEncode= newText.charCodeAt(i);
//  console.log (textEncode)
 
  if (textEncode >= 65 && textEncode <=90) {
   let characterAsciiEncode = (textEncode - 65 + numberOffset) % 26  + 65
   // console.log ('characterAsciiEncode',characterAsciiEncode)
    
   let textAsciiEncode = String.fromCharCode(characterAsciiEncode);
   // console.log('textAsciiEncode', textAsciiEncode)
   result += textAsciiEncode
   //  console.log (result)
  } else {
   result += String.fromCharCode(textEncode);
  }
        
 }  
 return result;    
},



decode: (newTextTwo, numberOffsetTwo) => {
let resultTwo= ""
for (let i=0; i < newTextTwo.length; i++){
  let textDecode= newTextTwo.charCodeAt(i);
    // console.log(textDecode)
  if (textDecode >= 65 && textDecode <=90) {
    let characterAsciiDecode = (textDecode - 90 - numberOffsetTwo) % 26  + 90
    // console.log ('characterAsciiDecode',characterAsciiDecode)
   let textAsciiDecode = String.fromCharCode(characterAsciiDecode);
    // console.log('textAsciiDecode', textAsciiDEcode)
    resultTwo += textAsciiDecode
    //  console.log (resultTwo)
  } else {
    resultTwo += String.fromCharCode(textDecode);
  }
  
   }
   return resultTwo;
  } 
   
};

