
function getData(){
    const value = document.getElementById("in")
   console.log(value.value);
   ( value.value)
  fetch("http://localhost:5000/data",{
    body:{
        value:value.value
    }
  }
    
  )
    .then(res => res.json())
    .then(data => console.log(data));
}