<template>
  <div>
    <!-- INPUT -->

    <!-- LISTA DE TAREFAS -->
    <v-list
      v-model:selected="taskStore.finishedTasks"
      lines="three"
      select-strategy="leaf"
    >
      <v-list-subheader>Tarefas</v-list-subheader>
      <v-list-item
        v-for="(item, index) in taskStore.tasks"
        :key="item.value"
        :subtitle="item.subtitle"
        :title="item.title"
        :value="item.value"
      >
        <template v-slot:append>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                color="grey-lighten"
                icon="mdi-dots-vertical"
                variant="text"
              ></v-btn>
            </template>
            <v-list>
              <v-list-item value="1" @click="taskStore.toggleEdit(index)">
                <v-list-item-title>Editar</v-list-item-title>
              </v-list-item>
              <v-list-item value="2" @click="taskStore.toggleDelete(index)">
                <v-list-item-title>Excluir</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
        <template v-slot:prepend="{ select }">
          <v-list-item-action start>
            <v-checkbox-btn
              :model-value="item.done"
              @update:model-value="select"
              @click="taskStore.toggleDoneTask(index)"
            ></v-checkbox-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
    <DialogTaskFields :task="taskStore.tasks[taskStore.indexTaskSelected]" />
    <DialogDelete />
  </div>
</template>

<script setup>
import DialogTaskFields from "./dialogs/DialogTaskFields.vue";
import DialogDelete from "./dialogs/DialogDelete.vue";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();
</script>

<style scoped></style>
