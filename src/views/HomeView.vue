<template>
  <div class="container">
    <h1>NOTTEE</h1>
    <div class="sort-wrap">
      <button type="button" :class="{active:sort==='all'}"
      @click.prevent="sort = 'all'">全部</button>

      <button type="button" :class="{active:sort==='noFinish'}"
      @click.prevent="sort = 'noFinish'">未完成</button>

      <button type="button" :class="{active:sort==='finish'}"
      @click.prevent="sort = 'finish'">完成</button>
    </div>
    <ul class="list-container">
      <li class="list-item add"
          @click="add=!add, store.setTempNote()">
        <span><img src="../assets/plus.svg" alt="add"></span>
      </li>
      <li v-for="(item,key) in sortData" :key="key"
          class="list-item"
          :class="{ light: item.roasted === '淺焙',
                    medium: item.roasted === '中焙',
                    dark: item.roasted === '深焙', }"
          @click="getNote(item.title)">
        <p class="title">{{ item.title }}</p>
        <div class="done-btn" @click.stop="store.doneNote(item)">
          <input v-model="item.isDone" type="checkbox">
          <span></span>
        </div>
        <button type="button" class="remove-btn"
                @click.stop="store.removeNote(item.title)">
          <span></span>
        </button>
      </li>
    </ul>
    <div v-if="add">
      <edit-form ref="edit"/>
    </div>
  </div>
</template>

<!-- eslint-disable import/extensions -->
<!-- eslint-disable import/no-unresolved -->
<script setup>
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useNotesStore } from '@/stores/notesStore.js';
import EditForm from '../components/icons/EditForm.vue';

const router = useRouter();
// 引入noteStore
const store = useNotesStore();
const { sort, add, sortData } = storeToRefs(store);

// 前往note
const getNote = (name) => {
  router.push(`/note/${name.replace(/\s*/g, '')}`);
};
</script>

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

.container{
  position: relative;
  padding: 1.5rem;
  background: #EDE9E3;
}

h1{
  background-color: rgba(0, 0, 0, .5);
  color: transparent;
  // color: #D3CEC5;
  text-align: center;
  text-shadow: 2px 2px 3px rgba(255,255,255,.5);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}

.sort-wrap{
  margin: 1.5rem 0 2.5rem;
  display: flex;
  justify-content: space-around;
  button{
    cursor: pointer;
    position: relative;
    display: block;
    font-size: 1.2rem;
    border: none;
    background: none;
    color: #D3C6B2;
    transition: color .3s ease;
    &:not(:last-child){
      &:after{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: -2.1rem;
        width: 1px;
        background: #D3C6B2;
      }
    }
    &:hover{
      color: #2F2A29;
    }
  }
  button.active{
    color: #2F2A29;
  }
}

.list-container{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
}
.list-item{
  cursor: pointer;
  position: relative;
  padding: 0.5rem;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  transition: all .3s ease;
  p{
    height: 6rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    padding-right: 1.5rem;
    font-size: 1.3rem;
    font-weight: 500;
    color: #fff;
    text-shadow: 1px 1px 3px rgba($color: #302b2b, $alpha: 0.55);
  }
  &:not(:first-child){
    &:hover{
      box-shadow: 5px 5px 15px rgba(135, 135, 135, 0.7);
    }
  }
}
.add{
  background: #EAEAEA;
  display: grid;
  place-content: center;
  box-shadow: -3px -3px 15px #fff inset,
              3px 3px 15px #878787 inset;
  span{
    color: #000;
  }
}
.light{
  background: $light_roast;
}
.medium{
  background: $medium_roast;
}
.dark{
  background: $dark_roast;
}

.done-btn{
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
}

.remove-btn{
  cursor: pointer;
  position: absolute;
  top: 0.8rem;
  right: 0.5rem;
  background: none;
  border: none;
  span{
    position: relative;
    display: block;
    width: 1rem;
    height: 1rem;
    &:before, &:after {
      content: '';
      position: absolute;
      height: 1px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      right: 0;
      left: 0;
      background: rgba($color: #fff, $alpha: 0.75);
    }
    &:after {
      transform: rotate(-45deg);
    }
    &:hover{
      &:before, &:after {
        background: #000;
      }
    }
  }
}
</style>
