const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
const spinnerReps = 2;
let delay = 0;

for (let i = 0; i < spinnerReps; i++) {
  for (let frame of spinner) {
    setTimeout(() => {
      process.stdout.write(frame);
    }, delay);
    delay += 200;
  }
}
setTimeout(() => {
  process.stdout.write('\n');
}, delay + 100);