import { MutationTree } from 'vuex'
import { IState, initState } from './state'
import Vue from 'vue'
import { cl } from '@/middleware/util'
interface IMatchSelect { selected: null | number,  msg: string | null }
interface IAnswerSelect { num: number,  answer: string }
interface IListSelect { listK: number,  v: string }
interface IFieldState { num: number,  answer: string }
const mutations: MutationTree<IState> = {
  matchSelect (state: IState, data: IMatchSelect): void {
    Object.assign(state, data)
  },
  answerSelect (state: IState, data: IAnswerSelect): void {
    const {num: k, answer: v} = data
    const idx = state.listSelected
    state.msg = ''
    if (idx !== null && state.randed[idx] === v) {
      Vue.set(state.solved, k, true)
      Vue.set(state.listSolved, idx, true)
      state.listSelected = null
    } else {
      state.msg = `${v} : 틀렸습니다`
    }
  },
  answerCheck (state: IState, num: number) {
    Vue.set(state.solved, num, true)
    Object.assign(state, { msg: null, fieldState: null, selected: null })
  },
  listSelect (state: IState, data: IListSelect): void {
    const { listK, v} = data
    const k = state.selected
    let listSelected = state.listSelected
    let msg = ''
    if (listK === listSelected) {
      listSelected = null
    } else {
      if (k === null) {
        msg = '주기율표와 원소를 같이 선택해주세요'
        listSelected = ~~listK
      } else if (state.answer[k] === v) {
        Vue.set(state.solved, k , true)
        Vue.set(state.listSolved, listK , true)
        listSelected = null
        state.selected = null
      } else {
        msg = `${v} : 틀렸습니다`
      }
    }
    Object.assign(state, {msg, listSelected})
  },
  listFilter (state: IState, answer: string): void {
    const listK: number = state.randed.findIndex((v: string) => v === answer)
    Vue.set(state.listSolved, listK , true)
  },
  inputSelect (state: IState, num: number) {
    state.fieldState = null
    state.selected = num
    state.msg = null
  },
  fieldSelect (state: IState, fieldState: IFieldState) {
    Object.assign(state, { fieldState, selected: ~~fieldState.num, msg: '원소기호와 원소이름을 입력해주세요' })
  },
  setMsg (state: IState, msg: string): void {
    state.msg = msg
  },
  setType (state: IState, qaType: number) {
    Object.assign(state, {...initState, qaType})
  },
  showAnswerToggle (state: IState) {
    state.showAnswer = !state.showAnswer
  },
}

export default mutations
