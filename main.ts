import { Command } from 'command/mod.ts';
import deno_command from './src/deno/mod.ts';
import other_command from './src/other/mod.ts';
await new Command()
  .name('chzkyil')
  .version('0.1.1')
  .description('Welcome  Chzky\'s Command Line Interface')
  .command('deno', deno_command)
  .command('other', other_command)
  .parse(Deno.args);
