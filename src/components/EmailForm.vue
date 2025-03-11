<template>
  <div class="register-container">
    <div class="form-column">
      <h2 class="form-title">Registre-se</h2>
      <form @submit.prevent="handleSubmit" class="register-form">
        <div class="form-group">
          <label for="name">Nome</label>
          <input
            type="text"
            id="name"
            v-model="name"
            required
            class="form-input"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="form-input"
          />
        </div>
        <div class="form-group">
          <label for="password">Whatsapp</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="form-input"
          />
        </div>
        <button type="submit" class="submit-button">Registrar</button>
      </form>
    </div>
    <div class="side-text-column">
      <h3 class="side-title">Saiba como ser avisado</h3>
      <p class="side-description">
        Você pode aderir ao nosso plano gratuito e ser avisado por email, para
        isso basta se registrar no formulário ao lado. Ou conheça nossos
        <router-link to="/planosReformulado">planos</router-link> para saber
        mais.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");

const handleSubmit = () => {
  // Here you would typically handle the form submission,
  // such as sending the data to an API
  console.log("Form submitted", {
    name: name.value,
    email: email.value,
    password: password.value,
  });
};
</script>

<style scoped>
.register-container {
  display: flex;
  max-width: 900px;
  margin: 2rem auto;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.form-column {
  flex: 1;
  padding: 2rem;
}

.side-text-column {
  flex: 1;
  background-color: #f8f9fa;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-title {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.register-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
}

.form-input {
  width: 93%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.submit-button {
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

.side-title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.side-description {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .register-container {
    flex-direction: column;
  }

  .side-text-column {
    order: -1;
  }
}
</style>
