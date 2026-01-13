<template>
  <v-text-field
    clearable
    label="Adicionar Tarefa"
    :rules="rules"
    @keyup.enter="taskStore.addTask"
    v-model="taskStore.titleTaskCreating"
  ></v-text-field>

  <ListTasks />
</template>

<script setup>
import { onMounted } from "vue";
import ListTasks from "./ListTasks.vue";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();
const rules = [
  value => {
    if (!value || value.length >= 5) return true;
    return "O título da tarefa deve ter, pelo menos, cinco caracteres.";
  },
];

onMounted(() => {
  taskStore.getTasksAndId();
});
</script>

<style></style>
