import { usage } from 'yargs';

export function main() {
  usage('Usage: foo bar').parse(process.argv);
}

main();
