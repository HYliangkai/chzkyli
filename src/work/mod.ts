import { cli, run_cmd } from '../../lib/mod.ts'

export default new cli.Command().description('开始工作').action(() => {
  run_cmd('code /Users/chzky/Code/work/owp-front/owp.code-workspace').map(
    (res) => {
      console.log('启动成功')
      return res
    },
  ).match_err(() => {
    console.log('启动失败')
  })
  run_cmd('open /Users/chzky/Code/work')
  run_cmd('open /Applications/WeChat.app')
})
