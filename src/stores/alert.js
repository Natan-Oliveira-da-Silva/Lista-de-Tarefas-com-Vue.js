import { defineStore } from "pinia";

export const useAlertStore = defineStore("alert", {
  state: () => ({
    showAlert: false,
    type: "error",
    text: "teste!!!!",
  }),
  actions: {
    notifyAlert() {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
    },
    notifyAlertCreated(){
      this.type = "success"
      this.text = "Tarefa criada com sucesso!"
      this.notifyAlert()
    },
    notifyAlertDeleted(){
      this.type = "warning"
      this.text = "Tarefa excluída!"
      this.notifyAlert()
    },
    notifyAlertUpdated(){
      this.type = "info"
      this.text = "Tarefa editada!"
      this.notifyAlert()
    }
  },
});
