<script setup>
import { ref } from 'vue'  
import TaskList from './tasksList.vue' 
const todoList = ref([])
function updateTodoList(newList, newTask) {
  if(newTask.trim() !== '') {
   newList.push({
    id: newList.length + 1,
    text: newTask,
    isCompleted: false
   })
   newTask = ''
  }
  
}
</script>
<template>
    <div class=" row card">
        <div class="card-header">
            Tasks
        </div>
        <div class="card-body">
            <h5 class="card-title">To Do's</h5>
            <TaskList :todoList="todoList" @updateList="updateTodoList"/>
        </div>
    </div>
</template>
<style>
.completed {
    text-decoration: line-through;
}

</style>
