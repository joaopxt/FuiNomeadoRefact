<template>
  <div class="container">
    <div class="pricing-grid">
      <div v-for="plan in plans" :key="plan.name" class="pricing-card">
        <div class="card-content">
          <h2 class="plan-name">{{ plan.name }}</h2>
          <p class="plan-price">
            <span class="price-amount">R${{ plan.price }}</span>
            <span class="price-period">/mês</span>
          </p>
          <p class="plan-description">{{ plan.description }}</p>
          <ul class="feature-list">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="feature-item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14px"
                width="12px"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#63E6BE"
                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                />
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
        <div class="card-footer" :class="positionFooter(plan.name)">
          <button class="btn-primary">Assinar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plans: [
        {
          name: "Gratuito",
          price: 0,
          description: "Seu email será avisado",
          features: ["Envio por E-mail"],
        },
        {
          name: "Pro",
          price: 10,
          description: "Seja avisado por mais de uma via",
          features: ["Envio por E-mail", "Mensagem via SMS"],
        },
        {
          name: "Plus",
          price: 50,
          description: "Toda cobertura possível",
          features: [
            "Envio por E-mail",
            "Mensagem via SMS",
            "Ligação por telefone",
            "Mensagem via Whatsapp",
          ],
        },
      ],
    };
  },
  methods: {
    positionFooter(plan) {
      if (plan === "Gratuito") {
        return "footerGratuito";
      } else if (plan === "Pro") {
        return "footerPro";
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-grid {
  display: grid;
  gap: 4.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.pricing-card {
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  padding: 25px;
}

.pricing-card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
}

.card-content {
  padding: 1.5rem;
}

.plan-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
}

.plan-price {
  margin-top: 1rem;
}

.price-amount {
  font-size: 2.5rem;
  font-weight: 800;
  color: #111827;
}

.price-period {
  font-size: 1rem;
  font-weight: 500;
  color: #6b7280;
}

.plan-description {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.feature-list {
  margin-top: 1.5rem;
  list-style-type: none;
  padding: 0;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  color: #6b7280;
}

svg {
  width: 1rem;
  height: 1rem;
  color: #10b981;
  margin-right: 0.5rem;
}

.card-footer {
  padding: 1rem 1.5rem;
  background-color: #f9fafb;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.footerGratuito {
  position: relative;
  top: 84px;
}
.footerPro {
  position: relative;
  top: 56px;
}

.btn-primary {
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.btn-primary:hover {
  background-color: #4338ca;
}

@media (min-width: 640px) {
  .pricing-page {
    padding: 3rem;
  }
}

@media (min-width: 768px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
