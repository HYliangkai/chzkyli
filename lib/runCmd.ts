import { Err, Ok, Result } from './FP/lib/mod.ts'
export const run_cmd = (cmd: string): Result<Uint8Array, Uint8Array> => {
  const cmds = cmd.trim().split(' ').map((item) => item.trim())
  const CMD = new Deno.Command(cmds[0], {
    args: [...cmds.slice(1)],
  })
  const res = CMD.outputSync()
  return res.success ? Ok(res.stdout) : Err(res.stderr)
}
