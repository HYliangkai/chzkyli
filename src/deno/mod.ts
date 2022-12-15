import { Command } from 'command/mod.ts';
import { min_initialization } from './initialization.ts';
export default await new Command()
  .option('-i, --init ', '最小化deno项目初始化', {
    action: () => {
      min_initialization();
    },
  })
  .description('deno plugins cli');
