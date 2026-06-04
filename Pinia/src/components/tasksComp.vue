<template>
  <div class="tasks-container">
    <div class="header-actions">
      <button class="btn action-btn btn-primary" @click="filter = 'all'">All Tasks</button>
      <button class="btn action-btn btn-primary" @click="filter = 'favorites'">Favorites</button>
    </div>
    <div class="cards" v-if="filter === 'all'">
      <h4>You have {{tasksStore.totalCount}} total tasks to complete</h4>
      <div class="new-task input-group mb-3">
        <input type="text" placeholder="Add a new task..." aria-label="Add a new task" aria-describedby="new task button" class="form-control" v-model="newTaskTitle" @keydown.enter="addTask">
        <button class="btn btn-outline-secondary" @click = "addTask" type="button" id="newTask-btn" style="background: linear-gradient(90deg, rgb(165 20 144) 0%, #0f5737 100%);color: #ffffff;">Add</button>
      </div>
      <div class="task-card" v-for="task in tasksStore.tasks" :key="task.id">
        <TaskDetails :task="task" @toggle-fav="toggleFavorite" @delete-task="deleteTask"/>
      </div>
    </div>
    <div class="cards" v-else-if="filter === 'favorites'">
      <h4>You have {{tasksStore.favCount}} favorite tasks to complete</h4>
      <div class="task-card" v-for="task in tasksStore.favs" :key="task.id">
        <TaskDetails :task="task" @toggle-fav="toggleFavorite" @delete-task="deleteTask"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePiniaStore } from '../stores/store'
import TaskDetails from './taskDetails.vue'
import { ref } from 'vue'
const tasksStore = usePiniaStore()
const filter = ref('all')
const newTaskTitle = ref('')
function toggleFavorite(taskId) {
  tasksStore.toggleFav(taskId)
}
function deleteTask(taskId) {
  tasksStore.deleteTask(taskId)
}

const addTask = () => {
  if(newTaskTitle.value.trim() !== '' ) {
    tasksStore.addNewTask(newTaskTitle.value)
    newTaskTitle.value = ''
  }
}

</script>

<style scoped>
.tasks-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.heading {
  margin: 0 0 0.5rem 0;
}
.header-actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}
.btn.action-btn {
  /* use a purple gradient consistent with layout */
  background: linear-gradient(90deg, #6c085d 0%, #d7431d 100%);
  color: #fff;
  border: none;
  padding: 0.55rem 0.95rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(102,126,234,0.18), inset 0 -2px 6px rgba(0,0,0,0.06);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.btn.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102,126,234,0.22), inset 0 -2px 6px rgba(0,0,0,0.06);
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.task-card {
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
