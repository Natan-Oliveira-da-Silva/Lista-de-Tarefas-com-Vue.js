<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="taskStore.showDialogTaskFields"
      max-width="600"
      min-width="400"
      persistent
    >
      <v-card prepend-icon="mdi-map-marker" title="Editar Tarefa">
        <v-card-text>
          <v-text-field v-model="props.task.title" label="Título"></v-text-field>
          <v-text-field
            v-model="props.task.subtitle"
            label="Descrição"
          ></v-text-field>
        </v-card-text>
        <template v-slot:actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="taskStore.updateTask()"
            color="primary-darken-1"
            variant="elevated"
          >
            OK
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { defineProps } from "Vue";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();
const props = defineProps({
  task: Object,
});
</script>
