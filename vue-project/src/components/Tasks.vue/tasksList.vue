<script setup>
import { ref } from "vue";
const todoList = defineProps({
  todoList: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(["updateList"]);
const newTask = ref("");
const addTask = () => {
 emit("updateList", todoList.todoList, newTask.value);
 newTask.value = "";
 }
</script>
<template>
  <div class="list-container">
    <div class="input">
        <input type="text" class="form-control" id="taskInput" placeholder="Fill the gas tank" v-model="newTask" @keyup.enter="addTask">  
        <button class="btn btn-primary mt-2" @click="addTask">Add Task</button>
    </div>
    <div class="todo-list">
      <ul>
        <li
          class="list-group-item"
          v-for="todo in todoList.todoList"
          :key="todo.id"
        >
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              :value="todo.id"
              :checked="todo.isCompleted"
              :id="todo.id"
              @change="todo.isCompleted = !todo.isCompleted"
            />
            <label
              class="form-check-label"
              for="todo.id"
              :class="todo.isCompleted ? 'completed' : ''"
            >
              {{ todo.text }}
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.completed {
  text-decoration: line-through;
}
</style>
