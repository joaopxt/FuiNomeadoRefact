<template>
  <div class="container">
    <div class="headText">
      <div class="h1Container">
        <h1>Contate-nos</h1>
      </div>
      <div class="pContainer">
        <p class="headP">
          Caso precise relatar algum problema ou tirar uma dúvida é só entrar em
          contato com a gente pelo formulário abaixo
        </p>
      </div>
    </div>
    <div class="containerForm">
      <h3 class="subtitle">
        Informe os seus dados e a mensagem para retornarmos seu contato
      </h3>
      <hr />
      <div class="formCard">
        <form>
          <h4>Contato</h4>
          <div class="form-control">
            <label for="nome">Nome</label>
            <input type="text" id="nome" />
          </div>
          <div class="form-control">
            <label for="sobrenome">Email</label>
            <input type="text" id="email" />
          </div>
          <div class="form-control">
            <label for="sobrenome">Mensagem</label>
            <textarea id="mensagem" />
          </div>

          <div class="btnContainer">
            <button class="formButton">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.containerForm {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  border-radius: 12px;
  background-color: #e2e2e2;
  width: 75%;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 35px;
}

.formCard {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: #0f0f0f;
  padding: 1rem;
  margin: 32px 20px 32px 0px;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
}

.headText {
  display: flex;
  width: 73%;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
}

.h1Container {
  width: 300px;
}

.h1Container h1 {
  width: fit-content;
  border-bottom: 1px solid #0f0f0f;
}

.pContainer {
  text-align: justify;
  width: 250px;
}
.headP {
  color: #a7a7a7;
}

* {
  font-family: sans-serif;
}

form {
  width: 350px;
}

.form-control {
  margin: 0.5rem 0;
}

.subtitle {
  color: #0f0f0f;
  text-align: center;
}

h4 {
  text-align: center;
  color: #f1f1f1;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: #f1f1f1;
}

select {
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 95%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 6px;
}

textarea {
  display: block;
  width: 95%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 25px 6px 25px 6px;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #f1f1f1;
}

hr {
  height: 240px;
  margin: 0px 120px 0px 50px;
}

.btnContainer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.formButton {
  background-color: #76dd4d;
  color: #0f0f0f;
  font-weight: 600;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 30px;
  height: 32px;
  margin-top: 12px;
  margin-bottom: 6px;
  padding-top: 0;
  padding-bottom: 0;
  border: none;
  cursor: pointer;
}

.formButton:hover {
  background-color: #76dd4d69;
  color: #f1f1f1;
}
</style>
