<template>
  <div class="container">
    <div class="containerHomeContent">
      <h1>Fui nomeado em algum concurso?</h1>
      <h3>
        Deixe seu nome e e-mail conosco e pesquisaremos todos os dias o diário
        oficial para saber se você foi nomeado. Assim que seu nome for publicado
        te enviamos um e-mail avisando
      </h3>
    </div>
    <email-form></email-form>
  </div>
</template>

<script>
import EmailForm from "../EmailForm.vue";

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

.containerHomeContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: rgb(223 223 223);
  width: 75%;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 55px;
  margin-bottom: 35px;
}

h1 {
  color: rgba(9, 75, 91, 1);
}

h3 {
  text-align: center;
  color: rgb(62 62 62);
  margin-top: 0;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
