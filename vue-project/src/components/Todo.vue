<script setup>
import { ref } from 'vue'   
const todoList = ref([
  { id: 1, text: 'Buy groceries', isCompleted: false },
  { id: 2, text: 'Walk the dog', isCompleted: true },
  { id: 3, text: 'Read a book', isCompleted: false },
  { id: 4, text: 'Call Mom', isCompleted: false }
])
</script>
<template>
    <div class=" row card">
        <div class="card-header">
            Todo List
        </div>
        <div class="card-body">
            <h5 class="card-title">To Do's</h5>
            <div class='todo-list'>
                <ul> 
                    <li class="list-group-item" v-for="todo in todoList" :key="todo.id">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" :value="todo.id" :checked="todo.isCompleted" :id="todo.id" @change="todo.isCompleted = !todo.isCompleted">
                            <label class="form-check-label" for="todo.id" :class="todo.isCompleted ? 'completed' : ''">
                                {{ todo.text }}
                            </label>
                        </div>
                    </li>  
                </ul>
            </div>
        </div>
    </div>
</template>
<style>
.completed {
    text-decoration: line-through;
}

</style>
