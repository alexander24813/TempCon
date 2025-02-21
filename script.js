const temp =document.getElementById("temp");
const fc =document.getElementById("C");
const ff =document.getElementById("f");
const fk =document.getElementById("k");
const tc =document.getElementById("tC");
const tf =document.getElementById("tf");
const tk =document.getElementById("tk");
const submit =document.getElementById("submit");
const fromtxt =document.getElementById("bfr");
const totxt =document.getElementById("aft");


 submit.onclick = function(){
    let t=temp.value
   
   if(fc.checked){
    fromtxt.textContent= t+"°C";
       if(tf.checked){
        totxt.textContent=(temp.value*9/5+32).toFixed(2)+"°F";
     }  else if(tk.checked) {
         totxt.textContent=(temp.value+273).toFixed(2)+"K";
     }  else {
        window.alert("Please try Again");

     }
   }
   if(fk.checked){
    fromtxt.textContent= t+"K";
       if(tc.checked){
        totxt.textContent=(temp.value-273).toFixed(2)+"°C";
     }  else if(tf.checked) {
         totxt.textContent=((temp.value-273)*9/5+32).toFixed(2)+"K";
     }  else {
        window.alert("Please try Again");

     }
   }
   if(ff.checked){
    fromtxt.textContent= t+"°F";
       if(tc.checked){
        totxt.textContent=((temp.value-32)*5/9).toFixed(2)+"°C";
     }  else if(tk.checked) {
         totxt.textContent=((temp.value-32)*5/9+273).toFixed(2)+"K";
     }  else {
        window.alert("Please try Again");

     }
   }
        

    




 }