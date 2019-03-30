/* Type Definition */
export type TSolved = null|boolean
export type TIndex = number|null
interface IFieldState {
  num: number
  answer: string
}
export interface IState {
  answer: string[],
  qaType: TIndex
  msg: string|null
  randed: string[]
  selected: TIndex
  solved: TSolved[]
  listSolved: TSolved[]
  listSelected: TIndex,
  fieldState: IFieldState | null
}

/* initialize Value */
const answer: string[] = require('@/assets/data/Answer.json')
const randed: string[] = (() => {
  const list: string[] = answer.slice()
  const temp: string[] = []
  while (list.length) {
    const len: number = list.length
    const idx: number = ~~(Math.random() * len)
    const pop: string[] = list.splice(idx, 1)
    temp.push(pop[0])
  }
  return temp
})();
const solved: TSolved[] = answer.map(() => null)
const listSolved: TSolved[] = solved.slice()

const state: IState = {
  answer,
  qaType: null,
  msg: null,
  randed,
  selected: null,
  solved,
  listSolved,
  listSelected: null,
  fieldState: null,
}

export default state
