<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogDelete" max-width="400" persistent>
      <v-card
        prepend-icon="mdi-map-marker"
        text="Essa ação não pode ser revertida."
        title="Você tem certeza de que quer excluir essa tarefa?"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn
          @click="taskStore.toggleDelete"
          color='red-darken-1'
          variant='elevated'
          > Não </v-btn>

          <v-btn
          @click="taskStore.deleteTask"
          color='red-darken-1'
          variant='outlined'          
          > Sim </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { useTaskStore } from "@/stores/task";
import { defineProps } from "Vue";

const taskStore = useTaskStore();
const props = defineProps({
  dialog: Boolean,
  task: Object,
});
</script>
