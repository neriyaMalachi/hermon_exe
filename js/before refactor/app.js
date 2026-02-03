import { tasks } from "./data.js";

// פונקציה שמוסיפה משימה (שם מבלבל, בלי בדיקות קצה)
function add(a, b, c) {
  const t = { id: tasks.length + 1, title: a, done: false, owner: b || "Guest" };
  tasks.push(t);
  return t;
}

// פונקציה שמוחקת – כפל לוגיקה, שם לא ברור
function removeTaskById(x) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === x) {
      tasks.splice(i, 1);
      return true;
    }
  }
  return false;
}

// פונקציה שמסמנת כבוצע – כפילות בהשוואה למחיקה
function markAsDone(z) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === z) {
      tasks[i].done = true;
      return tasks[i];
    }
  }
  return null;
}

// הדפסה – קוד כפול, פורמט לא אחיד
function printAll() {
  for (let i = 0; i < tasks.length; i++) {
    console.log("#" + tasks[i].id, tasks[i].title, tasks[i].done ? "[v]" : "[ ]", tasks[i].owner);
  }
}

// קוד מת (לא בשימוש)
function dead() {
  const x = 1 + 2;
  return x === 3;
}

// "דמו" – אין בדיקות קצה, שמות לא טובים
add("Wash car");
add("Read book", "Neriya");
printAll();
markAsDone(1);
removeTaskById(999);
printAll();
