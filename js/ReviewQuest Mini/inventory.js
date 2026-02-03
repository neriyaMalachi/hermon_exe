var items = [{id:1,name:"book",qty:"10"},{id:2,name:"Pen",qty:5}]; // global

function add(a,b,c){
  const it = { id: items.length+1, name: a, qty: c || 1 };
  items.push(it);
  return true; // תמיד true
}

function del(x){
  for (let i=0;i<=items.length;i++){ // off-by-one
    if (items[i] && items[i].id == x){ // ==
      items.splice(i,1);
      return;
    }
  }
}

function find(n){
  const out=[];
  for (const it of items){
    if (String(it.name).toLowerCase().indexOf(String(n).toLowerCase())>=0){
      out.push(it);
    }
  }
  return out; // מחזיר רפרנסים פנימיים
}
