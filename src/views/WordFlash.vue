<template>
  <div>
    <div v-if="visible" class="ui message yellow">
      <i class="close icon" @click="visible = false"></i>
      <div class="header">📚 Word of the Day: <strong>{{ word.word }}</strong></div>
      <p><em>{{ word.definition }}</em></p>
      <p v-if="word.example"><strong>Example:</strong> {{ word.example }}</p>
      <button class="ui green button" @click="saveWord">Save</button>
      <button class="ui red button" @click="discardWord">Discard</button>
    </div>
    <button v-if="!visible" class="ui button" @click="visible = true">Show Word of the Day</button>
  </div>
</template>

<script>
import axios from 'axios';
import { api } from '../helpers/helpers';

export default {
  data() {
    return {
      word: {
        word: '',
        definition: '',
        example: ''
      },
      visible: true
    };
  },
  async mounted() {
    const res = await axios.get('https://random-word-api.herokuapp.com/word');
    const word = res.data[0];

    const dict = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const entry = dict.data[0];

    this.word.word = entry.word;
    this.word.definition = entry.meanings[0].definitions[0].definition;
    this.word.example = entry.meanings[0].definitions[0].example || '';
  },
  methods: {
    saveWord() {
      api.createWord({
        english: this.word.word,
        german: '',
        note: this.word.definition
      });
      this.visible = false;
    },
    discardWord() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.ui.message {
  animation: flash 0.5s ease-in-out;
}

@keyframes flash {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
