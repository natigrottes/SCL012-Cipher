const btnEncode = document.getElementById ("btnCipherEncode");
btnEncode.addEventListener ("click", () => {
  const textSave = document.getElementById ("textUser").value;
  const numberSave = document.getElementById ("numberSecurity").value;
  const newText= textSave.toUpperCase();
  const numberOffset= parseInt(numberSave);
  // console.log(newText)

  const printEncode= window.cipher.encode(newText, numberOffset);
  document.getElementById ("boxTextEncode").innerHTML=printEncode;
  document.getElementById ("boxTextEncodeTwo").innerHTML = printEncode;
  
});


const btnDecode = document.getElementById ("btnCipherDecode");
btnDecode.addEventListener ("click", () => {
  const textSaveTwo = document.getElementById ("boxTextEncodeTwo").value;
  const numberSaveTwo = document.getElementById ("numberSecurityTwo").value;
  const newTextTwo= textSaveTwo.toUpperCase();
  const numberOffsetTwo= parseInt(numberSaveTwo);
  // console.log('newTextTwo',newTextTwo)

  const printDecode=window.cipher.decode(newTextTwo, numberOffsetTwo);
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

