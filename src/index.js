const btnEncode = document.getElementById ("btnCipherEncode");
btnEncode.addEventListener ("click", () => {
  let textSave = document.getElementById ("textUser").value;
  let numberSave = document.getElementById ("numberSecurity").value;
  let newText= textSave.toUpperCase();
  let numberOffset= parseInt(numberSave);
  // console.log(newText)

  let printEncode= window.cipher.encode(newText, numberOffset);
  document.getElementById ("boxTextEncode").innerHTML=printEncode;
  document.getElementById ("boxTextEncodeTwo").innerHTML = printEncode;
  
});


const btnDecode = document.getElementById ("btnCipherDecode");
btnDecode.addEventListener ("click", () => {
  let textSaveTwo = document.getElementById ("boxTextEncodeTwo").value;
  let numberSaveTwo = document.getElementById ("numberSecurityTwo").value;
  let newTextTwo= textSaveTwo.toUpperCase();
  let numberOffsetTwo= parseInt(numberSaveTwo);
  // console.log('newTextTwo',newTextTwo)

  let printDecode=window.cipher.decode(newTextTwo, numberOffsetTwo);
  document.getElementById ("boxTextDecode").innerHTML = printDecode;

});


const button = document.getElementById ("buttonSend");
button.addEventListener ("click", ()  =>  {
   alert("MENSAJE ENVIADO! Estamos en contacto");
   alert("Tienes un nuevo mensaje");
   document.getElementById ("root").style.display = "none";
   document.getElementById ("secondPage").style.display = "block";     
})


const buttonTwo = document.getElementById ("buttonAnswer");
buttonTwo.addEventListener ("click", ()  =>  {
   document.getElementById ("root").style.display = "block";
   document.getElementById ("secondPage").style.display = "none";
   document.getElementById("textUser").value = "";
   document.getElementById("boxTextEncode").value = "";
   location.reload();
})

