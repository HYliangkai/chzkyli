import { cli, color } from './lib/mod.ts'
import template from './src/template/mod.ts'
try {
  await new cli.CompletionsCommand()
    .name('chzkyli')
    .version('0.5.0')
    .description(color.green('chzky 命令行工具'))
    .command('template', template)
    .parse(Deno.args)
} catch (err) {
  console.log(color.red('❌运行出错❌'))
  console.log(err)
}
