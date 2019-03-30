<template>
  <table class="custom-table mb-4">
    <colgroup>
      <col width="10%" />
      <col />
      <col />
      <col />
      <col />
      <col />
      <col />
      <col />
      <col />
    </colgroup>
    <thead>
      <tr>
        <th scope="col">번호</th>
        <th scope="col" colspan="8"></th>
      </tr>
    </thead>
    <tbody ref="tbody">
      <tr>
        <td scope="row">1</td>
        <td :class="{active: selected === 0, solved: solved[0]}" :num="0" :answer="answer[0]">
          <span class="up">1</span>
            <span class="answer" v-html="answer[0].replace('/', enter)" />
          </td>
        <td colspan="6"></td>
        <td :class="{active: selected === 1, solved: solved[1]}" :num="1" :answer="answer[1]">
          <span class="up">2</span>
            <span class="answer" v-html="answer[1].replace('/', enter)" />
          </td>
      </tr>
      <tr>
        <td scope="row">2</td>
        <td :class="{active: selected === 2, solved: solved[2]}" :num="2" :answer="answer[2]">
          <span class="up">3</span>
            <span class="answer" v-html="answer[2].replace('/', enter)" />
          </td>
        <td :class="{active: selected === 3, solved: solved[3]}" :num="3" :answer="answer[3]">
          <span class="up">4</span>
            <span class="answer" v-html="answer[3].replace('/', enter)" />
          </td>
        <td class="table-active" :class="{active: selected === 4, solved: solved[4]}" :num="4" :answer="answer[4]">
          <span class="up">5</span>
            <span class="answer" v-html="answer[4].replace('/', enter)" />
          </td>
        <td :class="{active: selected === 5, solved: solved[5]}" :num="5" :answer="answer[5]">
          <span class="up">6</span>
            <span class="answer" v-html="answer[5].replace('/', enter)" />
          </td>
        <td :class="{active: selected === 6, solved: solved[6]}" :num="6" :answer="answer[6]">
          <span class="up">7</span>
            <span class="answer" v-html="answer[6].replace('/', enter)" />
          </td>
        <td :class="{active: selected === 7, solved: solved[7]}" :num="7" :answer="answer[7]">
          <span class="up">8</span>
            <span class="answer" v-html="answer[7].replace('/', enter)" />
          </td>
        <td :class="{active: selected === 8, solved: solved[8]}" :num="8" :answer="answer[8]">
          <span class="up">9</span>
            <span class="answer" v-html="answer[8].replace('/', enter)" />
          </td>
        <td :class="{active: selected === 9, solved: solved[9]}" :num="9" :answer="answer[9]">
          <span class="up">10</span>
            <span class="answer" v-html="answer[9].replace('/', enter)" />
          </td>
      </tr>
      <tr>
        <td scope="row">3</td>
        <td :class="{active: selected === 10, solved: solved[10]}" :num="10" :answer="answer[10]">
          <span class="up">11</span>
          <span class="answer" v-html="answer[10].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 11, solved: solved[11]}" :num="11" :answer="answer[11]">
          <span class="up">12</span>
          <span class="answer" v-html="answer[11].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 12, solved: solved[12]}" :num="12" :answer="answer[12]">
          <span class="up">13</span>
          <span class="answer" v-html="answer[12].replace('/', enter)" />
        </td>
        <td class="table-active" :class="{active: selected === 13, solved: solved[13]}" :num="13" :answer="answer[13]">
          <span class="up">14</span>
          <span class="answer" v-html="answer[13].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 14, solved: solved[14]}" :num="14" :answer="answer[14]">
          <span class="up">15</span>
          <span class="answer" v-html="answer[14].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 15, solved: solved[15]}" :num="15" :answer="answer[15]">
          <span class="up">16</span>
          <span class="answer" v-html="answer[15].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 16, solved: solved[16]}" :num="16" :answer="answer[16]">
          <span class="up">17</span>
          <span class="answer" v-html="answer[16].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 17, solved: solved[17]}" :num="17" :answer="answer[17]">
          <span class="up">18</span>
          <span class="answer" v-html="answer[17].replace('/', enter)" />
        </td>
      </tr>
      <tr>
        <td scope="row">4</td>
        <td :class="{active: selected === 18, solved: solved[18]}" :num="18" :answer="answer[18]">
          <span class="up">19</span>
          <span class="answer" v-html="answer[18].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 19, solved: solved[19]}" :num="19" :answer="answer[19]">
          <span class="up">20</span>
          <span class="answer" v-html="answer[19].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 20, solved: solved[20]}" :num="20" :answer="answer[20]">
          <span class="up">31</span>
          <span class="answer" v-html="answer[20].replace('/', enter)" />
        </td>
        <td class="table-active" :class="{active: selected === 21, solved: solved[21]}" :num="21" :answer="answer[21]">
          <span class="up">32</span>
          <span class="answer" v-html="answer[21].replace('/', enter)" />
        </td>
        <td class="table-active" :class="{active: selected === 22, solved: solved[22]}" :num="22" :answer="answer[22]">
          <span class="up">33</span>
          <span class="answer" v-html="answer[22].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 23, solved: solved[23]}" :num="23" :answer="answer[23]">
          <span class="up">34</span>
          <span class="answer" v-html="answer[23].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 24, solved: solved[24]}" :num="24" :answer="answer[24]">
          <span class="up">35</span>
          <span class="answer" v-html="answer[24].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 25, solved: solved[25]}" :num="25" :answer="answer[25]">
          <span class="up">36</span>
          <span class="answer" v-html="answer[25].replace('/', enter)" />
        </td>
      </tr>
      <tr>
        <td scope="row">5</td>
        <td :class="{active: selected === 26, solved: solved[26]}" :num="26" :answer="answer[26]">
          <span class="up">37</span>
          <span class="answer" v-html="answer[26].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 27, solved: solved[27]}" :num="27" :answer="answer[27]">
          <span class="up">38</span>
          <span class="answer" v-html="answer[27].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 28, solved: solved[28]}" :num="28" :answer="answer[28]">
          <span class="up">49</span>
          <span class="answer" v-html="answer[28].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 29, solved: solved[29]}" :num="29" :answer="answer[29]">
          <span class="up">50</span>
          <span class="answer" v-html="answer[29].replace('/', enter)" />
        </td>
        <td class="table-active" :class="{active: selected === 30, solved: solved[30]}" :num="30" :answer="answer[30]">
          <span class="up">51</span>
          <span class="answer" v-html="answer[30].replace('/', enter)" />
        </td>
        <td class="table-active" :class="{active: selected === 31, solved: solved[31]}" :num="31" :answer="answer[31]">
          <span class="up">52</span>
          <span class="answer" v-html="answer[31].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 32, solved: solved[32]}" :num="32" :answer="answer[32]">
          <span class="up">53</span>
          <span class="answer" v-html="answer[32].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 33, solved: solved[33]}" :num="33" :answer="answer[33]">
          <span class="up">54</span>
          <span class="answer" v-html="answer[33].replace('/', enter)" />
        </td>
      </tr>
      <tr>
        <td scope="row">6</td>
        <td :class="{active: selected === 34, solved: solved[34]}" :num="34" :answer="answer[34]">
          <span class="up">55</span>
          <span class="answer" v-html="answer[34].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 35, solved: solved[35]}" :num="35" :answer="answer[35]">
          <span class="up">56</span>
          <span class="answer" v-html="answer[35].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 36, solved: solved[36]}" :num="36" :answer="answer[36]">
          <span class="up">81</span>
          <span class="answer" v-html="answer[36].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 37, solved: solved[37]}" :num="37" :answer="answer[37]">
          <span class="up">82</span>
          <span class="answer" v-html="answer[37].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 38, solved: solved[38]}" :num="38" :answer="answer[38]">
          <span class="up">83</span>
          <span class="answer" v-html="answer[38].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 39, solved: solved[39]}" :num="39" :answer="answer[39]">
          <span class="up">84</span>
          <span class="answer" v-html="answer[39].replace('/', enter)" />
        </td>
        <td class="table-active" :class="{active: selected === 40, solved: solved[40]}" :num="40" :answer="answer[40]">
          <span class="up">85</span>
          <span class="answer" v-html="answer[40].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 41, solved: solved[41]}" :num="41" :answer="answer[41]">
          <span class="up">86</span>
          <span class="answer" v-html="answer[41].replace('/', enter)" />
        </td>
      </tr>
      <tr>
        <td scope="row">7</td>
        <td :class="{active: selected === 42, solved: solved[42]}" :num="42" :answer="answer[42]">
          <span class="up">87</span>
          <span class="answer" v-html="answer[42].replace('/', enter)" />
        </td>
        <td :class="{active: selected === 43, solved: solved[43]}" :num="43" :answer="answer[43]">
          <span class="up">88</span>
          <span class="answer" v-html="answer[43].replace('/', enter)" />
        </td>
        <td colspan="6"></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from 'vue'
import { TIndex, TSolved } from '@/store/state'
export default Vue.extend({
  data () {
    return {
      enter: '<br />',
    }
  },
  computed: {
    solved (): TSolved[] { return this.$store.state.solved },
    selected (): TIndex { return this.$store.state.selected },
    answer (): string[] { return this.$store.state.answer },
  },
  mounted () {
    this.$on('select', this.select)
    document.querySelectorAll<HTMLElement>('td[num]').forEach((v: any) => {
      const num = v.getAttribute('num')
      const answer = v.getAttribute('answer')
      v.onclick = (e: any) => { this.$emit('select', num, answer) }
    })
  },
  props: ['select'],
})
</script>
