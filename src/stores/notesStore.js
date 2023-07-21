/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { defineStore } from 'pinia';

export const useNotesStore = defineStore('notesStore', () => {
  const router = useRouter();
  const route = useRoute();
  // sort
  const sort = ref('all');

  // 全部資料
  const data = ref(localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []);

  const sortData = computed(() => {
    const arr = [];
    if (sort.value === 'all') {
      arr.value = data.value;
    } else if (sort.value === 'noFinish') {
      arr.value = data.value.filter((item) => item.isDone === false);
    } else if (sort.value === 'finish') {
      arr.value = data.value.filter((item) => item.isDone === true);
    }
    return arr.value;
  });

  // 新增狀態
  const add = ref(false);
  // 編輯狀態
  const isEdit = ref(false);

  // 當前note
  const currentNote = computed(() => {
    if (!route.params.name) {
      return {};
    }
    return data.value.find((item) => item.title.replace(/\s*/g, '') === (route.params.name)) || {};
  });

  // 更新初始化tempNote
  const tempNote = ref({});
  function setTempNote() {
    if (route.params.name) {
      // eslint-disable-next-line max-len
      tempNote.value = JSON.parse(JSON.stringify(data.value.find((item) => item.title.replace(/\s*/g, '') === (route.params.name))));
    } else {
      tempNote.value = {
        isDone: false,
        segment: 1,
        strategy: [{ time: '0s', water: 0 }, { time: '', water: 0 }],
        id: new Date().getTime().toString(),
      };
    }
  }

  // 更新資料
  function updateNote() {
    const index = data.value.findIndex((i) => i.id === tempNote.value.id);
    if (index !== -1) {
      data.value.splice(index, 1, tempNote.value);
      isEdit.value = false;
    } else {
      data.value.push(tempNote.value);
      add.value = false;
    }
    localStorage.setItem('notes', JSON.stringify(data.value));
    router.push(`/note/${tempNote.value.title.replace(/\s*/g, '')}`);
    tempNote.value = {};
  }
  // 取消編輯
  function cancelEdit() {
    tempNote.value = {};
    if (route.params.name) {
      isEdit.value = !isEdit.value;
    } else {
      router.push('/all');
      add.value = !add.value;
    }
  }
  // 移除資料
  function removeNote(name) {
    const index = data.value.findIndex((i) => i.title === name);
    data.value.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(data.value));
    router.push('/all');
  }
  // 狀態更新
  function doneNote(note) {
    // eslint-disable-next-line no-param-reassign
    note.isDone = !note.isDone;
    if (route.params.name) {
      const index = data.value.findIndex((i) => i.title === note.title);
      data.value.splice(index, 1, note);
      localStorage.setItem('notes', JSON.stringify(data.value));
    } else {
      localStorage.setItem('notes', JSON.stringify(data.value));
    }
  }

  return {
    sort,
    add,
    isEdit,
    data,
    currentNote,
    tempNote,
    sortData,
    setTempNote,
    updateNote,
    cancelEdit,
    removeNote,
    doneNote,
  };
});
