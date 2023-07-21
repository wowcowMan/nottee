<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable import/extensions -->
<!-- eslint-disable import/no-unresolved -->
<script setup>
import { storeToRefs } from 'pinia';

import domToImage from '@/methods/domToImage.js';
import { useNotesStore } from '@/stores/notesStore.js';
import EditForm from '../components/icons/EditForm.vue';

// 引入noteStore
const store = useNotesStore();
const { isEdit, currentNote } = storeToRefs(store);

const saveAsImage = (name) => {
  const domElement = document.getElementById('note');

  // 使用 dom-to-image 將 DOM 元素轉換為 PNG 圖像
  domToImage.toPng(domElement)
    .then((dataUrl) => {
    // 創建 a 元素
      const link = document.createElement('a');
      link.href = dataUrl;

      // 設置下載屬性為您想要的圖片檔名
      link.download = `${name}.png`;

      // 將 a 元素添加到 DOM 中
      document.body.appendChild(link);

      // 觸發 a 元素的點擊事件，從而觸發自動下載
      link.click();

      // 移除 a 元素
      document.body.removeChild(link);
    })
    .catch((error) => {
    // 轉換過程中發生錯誤
      console.error('Error:', error);
    });
};

</script>

<!-- eslint-disable vue/no-export-in-script-setup -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    id="note"
    class="container"
    :class="{
      light: currentNote.roasted === '淺焙',
      medium: currentNote.roasted === '中焙',
      dark: currentNote.roasted === '深焙'
    }"
  >
    <div class="header">
      <router-link to="/">
        ←
      </router-link>
      <h3>{{ currentNote.title }}</h3>
      <div
        class="done-btn"
        @click="store.doneNote(currentNote)"
      >
        <input
          v-model="currentNote.isDone"
          type="checkbox"
        >
        <span />
      </div>
    </div>
    <div class="note-container">
      <div class="row row-2">
        <div class="note roasted">
          <p>{{ currentNote.roasted }}</p>
        </div>
        <div class="note grinder">
          <p>{{ currentNote.grinder }}<br>{{ currentNote.fine }}</p>
        </div>
      </div>
      <div class="row row-3">
        <div class="note dripper">
          <p>{{ currentNote.dripper }}</p>
        </div>
        <div class="note gram">
          <p>{{ currentNote.gram }}g</p>
        </div>
        <div class="note temperature">
          <p>{{ currentNote.temperature }}°c</p>
        </div>
      </div>
      <div class="row">
        <div class="note strategy">
          <div class="time">
            <p>T</p>
            <div class="parameter-wrap">
              <p
                v-for="(i, key) in currentNote.strategy"
                :key="key"
              >
                {{ i.time }}
              </p>
            </div>
          </div>
          <div class="water">
            <p>ml</p>
            <div class="parameter-wrap">
              <p
                v-for="(i, key) in currentNote.strategy"
                :key="key"
              >
                {{ i.water }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <button
        type="button"
        @click.prevent="isEdit = !isEdit, store.setTempNote()"
      >
        <img
          src="../assets/edit.svg"
          alt=""
        >
      </button>
      <button
        type="button"
        :disabled="!currentNote.isDone"
        @click.prevent="saveAsImage(currentNote.title)"
      >
        <img
          src="../assets/camara.svg"
          alt=""
        >
      </button>
      <button
        type="button"
        @click.prevent="store.removeNote(currentNote.title)"
      >
        <img
          src="../assets/delete.svg"
          alt=""
        >
      </button>
    </div>
    <div v-if="isEdit">
      <edit-form />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/done_btn.scss";
$light_roast: #C3B398;
$medium_roast: #987F71;
$dark_roast: #865634;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

.container.light {
  background: $light_roast;
}

.container.medium {
  background: $medium_roast;
}

.container.dark {
  background: $dark_roast;
}

.container {
  position: relative;
  background: #E7E7E7;
  padding: 1.5rem;
}

.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #000;
  margin-bottom: 3rem;

  h3 {
    width: 55%;
    font-weight: 500;
    color: transparent;
    text-align: center;
    line-height: 24px;
    background-color: rgba(0, 0, 0, .3);
    text-shadow: 1px 1px 1px rgba(255,255,255, .8);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }

  a {
    font-size: 2rem;
    border: none;
    background: none;
    color: rgba($color: #fff, $alpha: 0.6);
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, .5));
    line-height: 24px;

    &:hover {
      color: rgba($color: #fff, $alpha: 1);
      filter: drop-shadow(1px 1px 2px rgba(255, 255, 255, .5));
    }
  }
}

.note-container {
  .row {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: space-between;

    .note {
      width: 100%;
      background: rgba($color: #fff, $alpha: 0.8);
      border-radius: 1rem;
      color: #000;
      font-size: 1.5rem;
      box-shadow: -5px -5px 15px rgba($color: #fff, $alpha: 1) inset,
        5px 5px 15px rgba($color: #444444, $alpha: 0.45) inset;

      &:not(:last-child) {
        margin-right: 1.5rem;
      }
    }

    .dripper {
      font-size: 1.3rem;
    }
  }

  .row-2,
  .row-3 {
    .note {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      aspect-ratio: 1/1;
      text-align: center;
    }
  }

  .strategy {
    margin-bottom: 6rem;

    .time,
    .water {
      display: flex;

      p {
        width: 3.5rem;
        height: 3.5rem;
        line-height: 3.5rem;
        text-align: center;
        border-right: 1px solid #444444;
      }

      .parameter-wrap {
        width: 100%;

        p {
          display: inline-block;
          width: 3rem;
          font-size: 60%;
          line-height: 3.5rem;
          text-align: center;
        }
      }
    }

    .time {
      border-bottom: 1px solid #444444;
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
}</style>
