/* Type Definition */
type TSolved = null|boolean
interface IState {
  answer: string[],
  qaType: number|null
  msg: string|null
  randed: string[]
  selected: number|null
  solved: TSolved[]
  listSolved: TSolved[]
  listSelected: number|null
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
const listSolved: TSolved[] = solved

const state: IState = {
  answer,
  qaType: null,
  msg: null,
  randed,
  selected: null,
  solved,
  listSolved,
  listSelected: null,
}

export default state
