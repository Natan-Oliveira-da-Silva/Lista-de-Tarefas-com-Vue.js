// Utilities
import { defineStore } from "pinia";
import { useAlertStore } from "./alert";
const alertStore = useAlertStore();

export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [],
    titleTaskCreating: "",
    descriptionTaskCreating: "",
    indexTaskSelected: 0,
    taskId: 0,
    showDialogDelete: false,
    showDialogTaskFields: false,
  }),
  actions: {
    addTask() {
      if (this.titleTaskCreating.length < 5) return;
      this.tasks.push({
        value: this.taskId++,
        title: this.titleTaskCreating,
        subtitle: "",
      });
      this.titleTaskCreating = "";
      this.saveLocalData();
      alertStore.notifyAlertCreated();
    },
    toggleDelete(index) {
      this.showDialogDelete = !this.showDialogDelete;
      if (index != null) this.indexTaskSelected = index;
    },
    deleteTask() {
      this.tasks.splice(this.indexTaskSelected, 1);
      this.toggleDelete();
      this.saveLocalData();
      alertStore.notifyAlertDeleted();
    },
    updateTask() {
      this.saveLocalData();
      this.toggleEdit();
      alertStore.notifyAlertUpdated();
    },
    toggleEdit(index) {
      this.showDialogTaskFields = !this.showDialogTaskFields;
      if (index != null) this.indexTaskSelected = index;
    },
    saveLocalData() {
      localStorage.setItem(
        "tasks",
        JSON.stringify({
          taskId: this.taskId,
          tasksArray: this.tasks,
        })
      );
    },
    getTasksAndId() {
      let items = localStorage.getItem("tasks");
      if (items) {
        this.tasks = JSON.parse(items).tasksArray;
        this.taskId = JSON.parse(items).taskId
      }
    },
    toggleDoneTask(index) {
      this.tasks[index].done = !this.tasks[index].done;
      this.saveLocalData();
    },
  },
});
