export class RunningError extends Error {
  constructor(msg: string) {
    super(msg)
  }
}
export const is_running_error = (val: unknown): val is RunningError => {
  return val instanceof RunningError
}
