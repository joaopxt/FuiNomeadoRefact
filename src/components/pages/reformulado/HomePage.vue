<template>
  <div class="container">
    <div class="containerHomeContent">
      <div class="subtitleContainer">
        <h1>Fui nomeado em algum concurso?</h1>
        <div class="h3Container">
          <h3>
            Deixe seu nome e e-mail conosco e pesquisaremos todos os dias o
            diário oficial para saber se você foi nomeado. Assim que seu nome
            for publicado te enviaremos um e-mail avisando
          </h3>
        </div>
      </div>
      <img class="homeImg" src="../../../assets/contratacao.jpg" alt="" />
    </div>
    <hr class="homeHr" />
    <div class="subtitleContainer">
      <h1>Saiba como ser avisado</h1>
      <div class="h3Container">
        <h3>
          Você pode aderir ao nosso plano gratuito e ser avisado por email, para
          isso basta se registrar no formulário abaixo. Ou conhecer os nossos
          <router-link to="/planosReformulado">planos</router-link> para saber
          mais
        </h3>
      </div>
    </div>
    <email-form></email-form>
  </div>
</template>

<script>
import EmailForm from "../../EmailForm.vue";

export default {
  components: {
    EmailForm,
  },
};
</script>

<style scoped>
* {
  font-family: "Inter";
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.containerHomeContent {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 90%;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 35px;
}

.subtitleContainer {
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.h3Container {
  width: 400px;
}

.homeImg {
  width: 600px;
  height: 350px;
  border-radius: 30px;
}

.homeHr {
  width: 50%;
  margin-top: 50px;
  margin-bottom: 35px;
}

h1 {
  color: #0f0f0f;
}

h3 {
  text-align: center;
  color: #181818;
  font-weight: 300;
  margin-top: 0;
}
</style>
