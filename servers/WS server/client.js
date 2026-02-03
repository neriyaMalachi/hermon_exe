import WebSocket from "ws";
import readline from "readline";

const ws = new WebSocket("ws://localhost:8080");
// process.stdin  אומר תחכה לקלט כל הזמן ממש כמו לעשות while(true) {}
// ולמה זה לא קורה בקוד רגיל?
// בגלל שאין לו מאזינים אז הוא נופל אבל במקרא שלנו יש לו מאזין שזה WS אז לכן הוא תמיד מאזין
const rl = readline.createInterface(process.stdin, process.stdout);


function printMenu() {
      console.log(`
    ========= MENU =========
    1) Say Hello
    2) Get Server Time
    3) Demo Message
    4) Get Fake Data
    5) Ping Server
    6) Exit
    ========================
    `);
}

function ask() {
  rl.question("Choose 1-6: ", (answer) => {
    const choice = Number(answer);

    if (!Number.isInteger(choice)) {
      console.log(" Please enter a number");
      return ask();
    }

    ws.send(JSON.stringify({ type: "menu", choice }));
  });
}

// חיבור לשרת
ws.on("open", () => {
  console.log(" Connected to server");
  printMenu();
  ask();
});

// קבלת הודעה מהשרת
ws.on("message", (data) => {
  const msg = JSON.parse(data.toString());
  console.log("Server:", msg.message);

  if (msg.close) {
    rl.close();
    ws.close();
    return;
  }

  printMenu();
  ask();
});

// סגירה
ws.on("close", () => {
  console.log(" Connection closed");
  rl.close();
});

// שגיאה
ws.on("error", (err) => {
  console.log(" WS error:", err.message);
});
