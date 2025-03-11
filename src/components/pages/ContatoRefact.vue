<template>
  <div class="container">
    <div class="headText">
      <div class="h1Container">
        <h1>Contate-nos</h1>
      </div>
    </div>
    <div class="register-container">
      <div class="form-column">
        <h2 class="form-title">Fale conosco</h2>
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
            <label for="password">Mensagem</label>
            <textarea
              type="password"
              id="password"
              v-model="password"
              cols="14"
              rows="5"
              required
              class="form-input"
            />
          </div>
          <button type="submit" class="submit-button">Enviar</button>
        </form>
      </div>
      <div class="side-text-column">
        <p class="side-description">
          Caso precise relatar algum problema ou tirar uma dúvida é só entrar em
          contato com a gente pelo formulário ao lado
        </p>
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
