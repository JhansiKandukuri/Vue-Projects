<template>
  <div class="card-header">
    <div class="header-left">
      <h3 class="task-title">{{ tasks.task.title }}</h3>
    </div>

    <div class="header-actions">
      <button class="icon-btn fav-btn" @click = "$emit('toggle-fav', tasks.task.id)">
        <span v-if="tasks.task.isFav"> <i class="bi bi-balloon-heart-fill"></i> </span>
        <span v-else> <i class="bi bi-balloon-heart"></i> </span>
      </button>
      <button class="icon-btn del-btn" @click = "$emit('delete-task', tasks.task.id)">
        <i class="bi bi-trash-fill"></i>
      </button>
    </div>
  </div>
</template>
<script setup>
const tasks = defineProps({
  task: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['toggle-fav', 'delete-task'])
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(90deg, #f7f7fb, #ffffff);
  border-bottom: 1px solid #eee;
}
.header-left {
  flex: 1;
}
.task-title {
  font-size: 1.05rem;
  margin: 0;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid transparent;
  background: rgba(102, 126, 234, 0.12);
  color: #5b4aa6;
  cursor: pointer;
  transition: transform 0.16s ease, box-shadow 0.16s ease, background-color 0.16s ease;
}
.icon-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(102, 126, 234, 0.14);
}
.fav-btn {
  color: #d63384;
  background: rgba(214, 51, 132, 0.12);
}
.del-btn {
  color: #dc3545;
  background: rgba(220, 53, 69, 0.12);
}
.icon-btn i {
  font-size: 1.1rem;
}
.fav-btn i {
  color: #d63384;
}
.card-body {
  padding: 1rem;
  flex: 1;
}
</style>