<template>
  <header>
    <nav>
      <router-link to="/home"
        ><img src="../../assets/logo_basica.png" alt=""
      /></router-link>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/planosReformulado">Planos</router-link></li>
        <li><router-link to="/contatoRefact">Contato</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

img {
  height: 42px;
  margin-left: 50px;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  color: #0f0f0f;
  font-family: sans-serif;
  font-weight: bold;
}

a:hover {
  color: #ccc;
  cursor: pointer;
}
</style>
