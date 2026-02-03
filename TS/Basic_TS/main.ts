function greet(name: string): void {
  console.log("Hello " + name);
}

function add(a: number, b: number): number {
  return a + b;
}

greet("TypeScript");
console.log("Sum:", add(5, 7));


// npm init -y
// npm i -D typescript ts-node @types/node
// npx tsc --init
// npx ts-node main.ts
