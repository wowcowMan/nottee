<!-- eslint-disable no-plusplus -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable import/extensions -->
<!-- eslint-disable import/no-unresolved -->
<script setup>
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useNotesStore } from '@/stores/notesStore.js';

// 引入noteStore
const store = useNotesStore();
const { tempNote } = storeToRefs(store);

// 根據斷水次數增減strategy數量
function editStrategy(num) {
  tempNote.value.strategy = [];
  for (let i = 1; i <= num; i++) {
    tempNote.value.strategy.push({});
  }
  tempNote.value.strategy.unshift({ time: '0s', water: '0g' });
}
// 監聽segmente更動strategy
watch(() => tempNote.value.segment, (newValue) => {
  if (newValue >= 0) {
    editStrategy(newValue);
  }
});
</script>

<!-- eslint-disable vue/no-export-in-script-setup -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="edit-container animate__animated animate__slideInUp animate__faster">
    <form class="note-form" @submit.prevent="store.updateNote()">
      <div class="header">
        <input
          v-model="tempNote.title"
          type="text"
        >
      </div>
      <div class="row row-2">
        <div class="note roasted">
          <span>焙度</span>
          <div class="roast-select">
            <label>
              <input
                v-model="tempNote.roasted"
                type="radio"
                name="label"
                value="淺焙"
              >
              <span class="round button">淺焙</span>
            </label>
            <label>
              <input
                v-model="tempNote.roasted"
                type="radio"
                name="label"
                value="中焙"
              >
              <span class="round button">中焙</span>
            </label>
            <label>
              <input
                v-model="tempNote.roasted"
                type="radio"
                name="label"
                value="深焙"
              >
              <span class="round button">深焙</span>
            </label>
          </div>
        </div>
        <div class="note grinder">
          <label for="grinder">磨豆機</label>
          <input
            id="grinder"
            v-model="tempNote.grinder"
            type="text"
          >
          <label for="fine">刻度</label>
          <input
            id="fine"
            v-model="tempNote.fine"
            type="text"
          >
        </div>
      </div>
      <div class="row row-3">
        <div class="note dripper">
          <label for="dripper">濾杯</label>
          <input
            id="dripper"
            v-model="tempNote.dripper"
            type="text"
          >
        </div>
        <div class="note gram">
          <label for="gram">粉量</label>
          <input
            id="gram"
            v-model="tempNote.gram"
            type="number"
            placeholder="g"
          >
        </div>
        <div class="note temperature">
          <label for="temperature">水溫</label>
          <input
            id="temperature"
            v-model="tempNote.temperature"
            type="number"
            placeholder="°c"
          >
        </div>
      </div>
      <div class="row">
        <div class="note strategy">
          <div class="segment-wrap">
            <label for="segment">注水次數</label>
            <div class="segment-input">
              <button type="button" :disabled="tempNote.segment===1"
                      @click="tempNote.segment--">-
              </button>
              <input
                id="segment"
                v-model="tempNote.segment"
                type="number"
                min="1"
                placeholder="次"
              >
              <button type="button"
                      @click="tempNote.segment++">+
              </button>
            </div>
          </div>
          <div class="time">
            <p>T</p>
            <div class="parameter-wrap">
              <p v-for="(i,key) in tempNote.strategy" :key="key"
                :class="{start:key===0, finish:key===tempNote.strategy.length-1}">
                <input v-model="i.time">
              </p>
            </div>
          </div>
          <div class="water">
            <p>ml</p>
            <div class="parameter-wrap">
              <p v-for="(i,key) in tempNote.strategy" :key="key">
                <input v-model="tempNote.strategy[key].water">
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-group">
        <button type="submit">
          <img
            src="@/assets/ok.svg"
            alt=""
          >
        </button>
        <button
          type="button"
          @click.prevent="store.cancelEdit"
        >
          <img
            src="@/assets/cancel.svg"
            alt=""
          >
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  input, button{
    border: none;
    border-radius: 0.3rem;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
}
.edit-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  padding: 1.5rem;
  background: #E7E7E7;
}

.note-form {
  .header{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3.5rem;
    input{
      display: block;
      height: 2rem;
      font-size: 1.3rem;
      text-align: center;
      margin-right: 0.3rem;
    }
  }
  .row {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: space-between;
    .note {
      width: 100%;
      background: #6B6663;
      border-radius: 1rem;
      color: #fff;
      font-size: 1.5rem;
      box-shadow: 5px 5px 15px #878787;

      &:not(:last-child) {
        margin-right: 1.5rem;
      }
    }
  }
  .row-2, .row-3{
    .note{
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      aspect-ratio: 1/1;
      text-align: center;
      label {
      display: block;
      font-size: 1rem;
      margin-bottom: 0.2rem;
      }
      input{
        display: block;
        width: 100%;
        height: 1.5rem;
        margin-bottom: 0.5rem;
        text-align: center;
      }
    }
  }
}
.roasted {
  .roast-select {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin-top: 0.8rem;
    label {
      height: 2.5rem;
      &:not(:last-child) {
        margin-right: 0.2rem;
      }
      input[type="radio"] {
        display: none;
      }
      input:checked+.button {
        background: #24272B;
        color: #fff;
        cursor: default;
      }
      .button {
        display: block;
        background: #fff;
        color: #333;
        width: 2.5rem;
        height: 2.5rem;
        font-size: 0.8rem;
        line-height: 2.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        &:hover {
          background: #bbb;
          color: #fff;
        }
      }
    }
  }
}

.strategy {
  margin-bottom: 6rem;
  .segment-wrap{
    margin: 0.5rem 0 1rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    label{
      // border: 1px solid red;
      display: block;
      width: 2rem;
      margin-right: 0.7rem;
      font-size: 0.5rem;
      text-align: center;
    }
    .segment-input{
      background: #fff;
      padding: 0 0.5rem;
      border-radius: 0.3rem;
      display: flex;
      align-items: center;
      input{
        width: 3rem;
        height: 2rem;
        margin: 0 0.5rem;
        background: #fff;
        text-align: center;
      }
      button{
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.3rem;
        color: #000;
        &:disabled{
          color: #b3b3b3;
        }
      }
    }

  }
  .time, .water {
    display: flex;
    p {
      width: 3.5rem;
      height: 3.5rem;
      line-height: 3.5rem;
      text-align: center;
      border-right: 1px solid #fff;
      margin-right: 0.2rem;
    }
    .parameter-wrap{
      display: flex;
      align-items: center;
      width: 100%;
      p{
        margin-right: 0.2rem;
        border: none;
        width: 3rem;
        height: 3rem;
        input{
          display: block;
          width: 100%;
          height: 100%;
          font-size: 60%;
          line-height: 3.5rem;
          text-align: center;
        }
      }
    }
  }
  .time {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    .parameter-wrap .start,
      .parameter-wrap .finish{
        position: relative;
        &:after{
          content: '開始';
          position: absolute;
          top: -1.4rem;
          left: 0.2rem;
          right: 0.2rem;
          display: block;
          height: 1.1rem;
          background: #24272B;
          border-radius: 0.5rem 0.5rem 0 0;
          line-height: 1rem;
          font-size: 0.5rem;
          color: #fff;
        }
      }
      .parameter-wrap .finish{
        &:after{
          content: '結束';
        }
      }
  }
}

.btn-group {
  display: flex;
  justify-content: space-between;
  padding: 0 4.5rem;

  button {
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 50%;
    background: #6B6663;
    transition: .3s ease;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(0.4);
    }

    &:disabled {
      background: rgba($color: #fff, $alpha: 0.5);
    }
    &:hover {
      background: #24272B;
    }
  }
}
</style>
