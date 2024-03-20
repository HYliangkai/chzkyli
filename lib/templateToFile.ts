import {color, dir, Err, fs, Ok, path, prompt, Result, RunningError} from './mod.ts'

const {__dirname} = dir.default(import.meta)
const input_project_name = async () => {
  let project_name: string
  loop_name: while (true) {
    project_name = await prompt.Input.prompt({
      message: `🚀 input your Project name:`,
      maxLength: 15,
    })
    if (project_name.length == 0) {
      console.log(color.red('❌ The project name cannot be empty.'))
      continue loop_name
    }
    //读取当前目录文件名
    const files = await Deno.readDir('./')
    for await (const file of files) {
      if (file.name == project_name) {
        console.log(color.red('❌ The project name already exists.'))
        continue loop_name
      }
    }
    break
  }
  return project_name
}

type TemplateType = 'deno' | 'vue2-vite' | 'html'
export const create_template_to_dir = async (
  template_dir_name: TemplateType,
  copy_finish_callback?: (path: string, name: string) => Promise<void> | void
): Promise<Result<boolean, RunningError>> => {
  const project_name = await input_project_name()
  const res = await fs
    .copy(path.join(__dirname, `../static/template/${template_dir_name}`), `./${project_name}`)
    .then(() => Ok(true))
    .catch(() => Err(new RunningError('❌ 项目创建失败,请重试')))
  if (res.is_err) return res

  if (copy_finish_callback) await copy_finish_callback(`./${project_name}`, project_name)

  const p = Deno.run({
    cmd: ['code', `./${project_name}`],
  })
  const pres = await p.status()
  return pres.success ? Ok(true) : Err(new RunningError('本地未找到code命令,请手动打开项目'))
}
