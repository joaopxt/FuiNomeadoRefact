<template>
  <div class="container">
    <base-dialog
      :show="openDialog"
      title="Ocorreu um erro!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <div class="headText">
      <div class="h1Container">
        <h1>Escolha como você deseja ser avisado</h1>
      </div>
      <div class="pContainer">
        <p class="headP">
          Cada um de nossos planos oferece uma cobertura de diferente para a sua
          nomeação ser notificada
        </p>
      </div>
    </div>
    <div class="containerPlanos">
      <card-planos></card-planos>
    </div>
    <email-form id="form"> </email-form>
  </div>
</template>

<script>
import CardPlanos from "@/components/CardPlanos.vue";
import EmailForm from "../../EmailForm.vue";

export default {
  components: {
    EmailForm,
    CardPlanos,
  },
  methods: {
    toggleModal() {
      alert("clicou");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap");

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.containerPlanos {
  display: flex;
  align-items: center;
  gap: 55px;
  width: 75%;
  margin-bottom: 70px;
}

.headText {
  display: flex;
  flex-direction: column;
  width: 73%;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
}

.h1Container {
  width: 300px;
  text-align: center;
}
.pContainer {
  text-align: center;
  width: 100%;
}
.headP {
  color: #a7a7a7;
}

* {
  font-family: sans-serif;
}
</style>
