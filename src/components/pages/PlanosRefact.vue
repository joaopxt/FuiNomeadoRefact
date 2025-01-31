<template>
  <div class="container">
    <h1>Planos</h1>
    <div class="containerPlanos">
      <base-card>
        <h4>Gratuito</h4>
        <div class="cardContent">
          <img src="../../assets/email_icon.svg" alt="emailIcon" />
          <span>Email</span>
        </div>
        <p>R$0.00</p>
      </base-card>

      <base-card>
        <h4>Premium</h4>
        <div class="cardContent">
          <img src="../../assets/email_icon.svg" alt="emailIcon" />
          <span>Email</span>
        </div>
        <div class="cardContent">
          <img src="../../assets/phone_icon.svg" alt="phoneIcon" />
          <span>Telefone</span>
        </div>
        <p>R$1,00 / Mês</p>
      </base-card>
      <base-card>
        <h4>Plus</h4>
        <div class="cardContent">
          <img src="../../assets/email_icon.svg" alt="emailIcon" />
          <span>Email</span>
        </div>
        <div class="cardContent">
          <img src="../../assets/phone_icon.svg" alt="phoneIcon" />
          <span>Telefone</span>
        </div>
        <div class="cardContent">
          <img src="../../assets/whatsapp_icon.svg" alt="whatsappIcon" />
          <span>Whatsapp</span>
        </div>
        <p>R$50,00 / Mês</p>
      </base-card>
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
  gap: 55px;
  border-radius: 12px;
  background-color: rgba(117, 174, 187, 0.30000001192092896);
  padding: 5px 30px 5px 30px;
  width: 75%;
  margin-bottom: 70px;
}

.containerForm {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  border-radius: 12px;
  background-color: rgba(24, 97, 114, 1);
  width: 75%;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 35px;
}

.formCard {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: rgba(71, 137, 152, 1);
  padding: 1rem;
  margin: 32px 20px 32px 0px;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
}

.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: #ccc;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
}

.card p {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}

.cardContent {
  display: flex;
  gap: 25px;

  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}

.cardContent img,
.cardContent span {
  margin-bottom: 10px;
}

h4 {
  background-color: rgba(9, 75, 91, 1);
  border-radius: 20px;
  text-align: center;
  color: #fff;
  padding: 8px;
}

h3 {
  color: #f1f1f1;
  align-self: center;
}

h1 {
  color: rgb(34, 124, 145);
}

* {
  font-family: sans-serif;
}
</style>
