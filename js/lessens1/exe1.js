async function getFact() {
  const res = await fetch("https://catfact.ninja");
  
  const data = await res.json();
 return data;
}

let data = await getFact();
console.log(data);
