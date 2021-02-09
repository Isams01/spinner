const printChar = (char, duration) => {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, duration);
};

printChar('|', 100);
printChar('/', 300);
printChar('-', 500);
printChar('\\', 700);
printChar('|', 900);
printChar('/', 1100);
printChar('-', 1300);
printChar('\\', 1500);
printChar('|', 1700);
