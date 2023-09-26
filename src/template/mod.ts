import {
  cli,
  color,
  create_template_to_dir,
  is_running_error,
} from '../../lib/mod.ts'

const deno = new cli.Command()
  .description(color.bgCyan('deno 项目模板'))
  .action(async () => {
    const res = await create_template_to_dir('deno')
    res.match_err((e) => {
      if (is_running_error(e)) {
        console.log(e.message)
      } else {
        throw e
      }
    })
    console.log(color.green('操作完成✅'))
  })

const vue2_vite = new cli.Command()
  .description(color.bgGreen('vue2.7-vite 项目模板'))
  .action(async () => {
    const res = await create_template_to_dir('vue2-vite')
    res.match_err((e) => {
      if (is_running_error(e)) {
        console.log(e.message)
      } else {
        throw e
      }
    })
    console.log(color.green('操作完成✅'))
  })

export default new cli.Command()
  .description('各项目模板')
  .command('deno', deno)
  .command('vue2', vue2_vite)
