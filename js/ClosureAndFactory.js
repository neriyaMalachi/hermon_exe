// // Closure

// function createSpellFactory() {
//   let nextPower = 0;

//   return function makeSpell(name) {
//     nextPower++;
//     return function cast() {
//       console.log(`${name} level ${nextPower}!`);
//     };
//   };
// }

// const spellFactory = createSpellFactory();

// const fireball = spellFactory("fireball");
// fireball();

// const advancedFireball = spellFactory("adFireball");
// advancedFireball();

// const iceBlast = spellFactory("iceBlast");
// iceBlast();

// Factory

function createSession(username) {
  let token = generateToken();

 function generateToken() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";

  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    token += alphabet[randomIndex];
  }

  return token;
}

  return {
    getUsername() {
      return username;
    },
    getTokenPreview() {
      return token.slice(0, 4);
    },
    validateToken(t) {
      return t === token;
    },
    regenerateToken() {
      token = generateToken(16);
    },
  };
}

const s = createSession("neriya");
console.log(s.getUsername());
console.log(s.getTokenPreview());
console.log(s.validateToken("sUjk"));
s.regenerateToken();
console.log(s.getTokenPreview());
