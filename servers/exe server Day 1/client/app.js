async function getData() {
  const name = "neriya malachi";
  const res = await fetch(`http://localhost:8000/greet`,{
    headers:{
      "token":"qqq",
      "Content-Type":" application/json"
    }
  });
  const data = await res.json();
  console.log(data);
}
getData()