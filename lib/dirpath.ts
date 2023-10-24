import { Err, Ok, Option, option, Result } from './FP/lib/mod.ts'

type Path = { __dirname: Option<string>; __filename: Option<string> }
/** 获取当前脚本文件所在的路径 */
export const dir_path = (): Result<Path, string> => {
  const url = new URL(import.meta.url)
  if (url.protocol === 'file:') {
    return Ok({
      __dirname: option(url.pathname.split('/').slice(0, -1).join('/')),
      __filename: option(url.pathname.split('/').at(-1)),
    })
  } else {
    return Err('No Local documents')
  }
}
