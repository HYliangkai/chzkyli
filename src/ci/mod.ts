import { cli, result } from '../../lib/mod.ts'
export default new cli.Command()
  .arguments('<dir>')
  .description('授予脚本文件775权限并增加文件标识')
  .action((_res, dir: string) => {
    result(() => {
      const pth = dir
      //打开文件并进行更改
      Deno.chmodSync(pth, 0o775)
      //读写文件并加上 #! deno run
      const file_arr = Deno.readTextFileSync(pth).split('\n')
      file_arr.at(0)?.includes('#!') ? null : file_arr.unshift('#! deno run')
      Deno.writeTextFileSync(pth, file_arr.join('\n'))
      console.log('🚀授权成功')
    }).unwrap_or_else(() => {
      console.log('运行出错,请重试❌')
    })
  })
