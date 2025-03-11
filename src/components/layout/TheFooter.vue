<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-column">
        <h3 class="footer-heading">Social</h3>
        <ul class="footer-list">
          <li><a href="#" class="footer-link">LinkedIn</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3 class="footer-heading">Contato</h3>
        <ul class="footer-list">
          <li>Email: fuinomeado@gmail.com</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
.footer {
  background-color: #f0f0f0;
  padding: 10px 0;
  margin-top: 2rem;
  font-family: Arial, sans-serif;
  position: relative;
  bottom: 0;
}

.footer-content {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.footer-column {
  flex: 1;
  margin-right: 2rem;
  width: 10%;
}

.footer-column:last-child {
  margin-right: 0;
}

.footer-heading {
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.footer-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 0.5rem;
  color: #666;
}

.footer-link {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #333;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }

  .footer-column {
    margin-right: 0;
    margin-bottom: 2rem;
  }

  .footer-column:last-child {
    margin-bottom: 0;
  }
}
</style>
