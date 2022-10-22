import { add, sub } from './op';

async function main(): Promise<void> {
  const addResult = add(1, 2);
  const subResult = sub(1, 2);

  // eslint-disable-next-line no-console
  console.log(`1+1=${addResult}, 1-2=${subResult}`);
}

main().then();
