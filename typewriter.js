const typewriter = (sentence, timer) => {
  timer = 50;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer)
    timer += 50;
  }
  setTimeout(() => {
    process.stdout.write(`\n`);
  },timer)
};

typewriter("It's Britney Bitch");

