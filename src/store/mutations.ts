import { IState } from './state'
import Vue from 'vue'
import { cl } from '@/middleware/util'

interface IMatchSelect {
  selected: null | number
  msg: string | null
}

interface IAnswerSelect {
  num: number
  answer: string
}

interface IListSelect {
  listK: number
  v: string
}

const mutations: any = {
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
  setMsg (state: IState, msg: string): void {
    state.msg = msg
  },
  answerCheck (state: IState, num: number) {
    Vue.set(state.solved, num, true)
    Object.assign(state, { msg: null, fieldState: null })
  },
}

export default mutations
