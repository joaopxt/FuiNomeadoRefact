<template>
  <div class="container">
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
      <base-card>
        <h4>Gratuito</h4>
        <hr class="cardHr" />
        <div class="cardContent">
          <img src="../../../assets/email_icon.svg" alt="emailIcon" />
          <span>Email</span>
        </div>
        <hr class="bottomHr" />
        <div class="bottomContainer">
          <p class="cardP">R$0,00<span style="color: #fcfcfc">/mês</span></p>
          <a class="cardA" href="#form">Assinar</a>
        </div>
      </base-card>

      <base-card class="recommendedCard">
        <h4 class="recommendedH4">Premium</h4>
        <hr class="cardHr" />
        <div class="cardContent">
          <img src="../../../assets/email_icon.svg" alt="emailIcon" />
          <span class="recommendedSpan">Email</span>
        </div>
        <div class="cardContent">
          <img src="../../../assets/phone_icon.svg" alt="phoneIcon" />
          <span class="recommendedSpan">Telefone</span>
        </div>
        <hr class="bottomHr" />
        <div class="bottomContainer">
          <p class="recommendedP">
            R$10,00<span style="color: #fcfcfc">/mês</span>
          </p>
          <button class="recommendedButton">Assinar</button>
        </div>
      </base-card>
      <base-card>
        <h4>Plus</h4>
        <hr class="cardHr" />
        <div class="cardContent">
          <img src="../../../assets/email_icon.svg" alt="emailIcon" />
          <span>Email</span>
        </div>
        <div class="cardContent">
          <img src="../../../assets/phone_icon.svg" alt="phoneIcon" />
          <span>Telefone</span>
        </div>
        <div class="cardContent">
          <img src="../../../assets/whatsapp_icon.svg" alt="whatsappIcon" />
          <span>Whatsapp</span>
        </div>
        <hr class="bottomHr" />
        <div class="bottomContainer">
          <p class="cardP">R$50,00<span style="color: #fcfcfc">/mês</span></p>
          <button>Assinar</button>
        </div>
      </base-card>
    </div>

    <email-form id="form"></email-form>

    <!-- <div class="containerForm">
      <h3>Registre-se para ser avisado gratuitamente</h3>
      <hr />
      <div class="formCard">
        <email-form></email-form>
      </div>
    </div> -->
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
  width: 73%;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
}

.h1Container {
  width: 300px;
}
.pContainer {
  text-align: justify;
  width: 250px;
}
.headP {
  color: #a7a7a7;
}

.bottomContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
}

.card {
  background-color: #e2e2e2;
  height: 380px;

  display: flex;
  flex-direction: column;
}

.recommendedCard {
  background-color: #0f0f0f;
  height: 420px;
}

.cardHr {
  width: 250px;
  height: 1px;
  background-color: #cccccc2d;

  margin-bottom: 45px;
}

.cardContent {
  display: flex;
  gap: 25px;
  margin-bottom: 15px;
  align-items: center;
  width: 300px;
  font-weight: bold;
  color: #fff;
}

button,
.cardA {
  background-color: #0f0f0f;
  color: #fff;
  font-weight: 600;
  font-size: 13.3px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 30px;
  height: 32px;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
}

button:hover,
.cardA:hover {
  background-color: #0f0f0f54;
  color: #0f0f0f;
}

.recommendedButton {
  background-color: #76dd4d;
  color: #0f0f0f;
}

.recommendedButton:hover {
  background-color: #76dd4d69;
  color: #f1f1f1;
}

.cardContent img {
  margin-left: 30px;
  margin-bottom: 10px;
}

.cardContent span {
  margin-bottom: 10px;
}

.bottomHr {
  width: 250px;
  height: 1px;
  margin-top: 30px;
}

h4 {
  color: #0f0f0f;
  font-size: 20px;
  margin: 23px 0px 5px 23px;
}

.recommendedH4 {
  color: #fff;
}

h3 {
  color: #f1f1f1;
  align-self: center;
}

h1 {
  color: #0f0f0f;
  font-weight: 400;
}

span {
  font-family: "Roboto", sans-serif;
  color: #0f0f0f;
  font-weight: 100;
}

.recommendedSpan {
  color: #f1f1f1;
}

.cardP {
  text-align: center;
  color: #0f0f0f;
}
.recommendedP {
  text-align: center;
  color: #f1f1f1;
}

* {
  font-family: sans-serif;
}
</style>
