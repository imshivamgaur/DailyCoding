function* numberGenerator() {
  // yield 1
  // yield 2
  // yield 3
  for (let i = 0; i < 1000; i++) {
    yield i + 1;
  }
}

let gen = numberGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
