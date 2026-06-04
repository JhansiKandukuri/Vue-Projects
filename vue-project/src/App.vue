<script setup>
import Counter from './components/counter.vue'
import Filter from './components/filter.vue'
import Todo from './components/Todo.vue'
import Task from './components/Tasks.vue/task.vue'
import Debouncing from './components/debouncing.vue'
import ModalComp from './components/teleport/modalComp.vue'

import { ref } from 'vue'

const showModal = ref(false)

</script>

<template>
 <div id="app-container">
  <Counter />
  <Filter />
  <Todo />
  <Task />
  <Debouncing />
  <button class="btn btn-primary" @click="showModal = true">Show Modal</button>
  <Teleport to="body">
    <ModalComp v-if="showModal" @close = "showModal = false" />
  </Teleport>
 
</div>
</template>

<style>
#app-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}
#app-container .card-header {
  background-color: #0a58ca;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
}
</style>
