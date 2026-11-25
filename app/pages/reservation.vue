<script setup lang="ts">
import { reactive } from 'vue'

const details = reactive({ name: '', phone: '', email: '', date: '', time: '', guests: '2', notes: '' })
const now = new Date()
const minDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`

function sendRequest() {
  const subject = `Solicitud de reserva — ${details.name}`
  const body = [
    'Hola, Chasca. Quisiera solicitar una reserva.',
    '',
    `Nombre: ${details.name}`,
    `Teléfono: ${details.phone}`,
    `Correo: ${details.email}`,
    `Fecha: ${details.date}`,
    `Hora: ${details.time}`,
    `Comensales: ${details.guests}`,
    `Notas: ${details.notes || 'Ninguna'}`,
    '',
    'Por favor, confirmad la disponibilidad.',
  ].join('\n')

  window.location.href = `mailto:hello@thehalia.com?subject=${encodeURIComponent(subject)}&cc=${encodeURIComponent(details.email)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <main class="reservation-page">
    <ChascaHeader />
    <section class="reservation-card">
      <p class="reservation-script">Un lugar en nuestra mesa</p>
      <h1>RESERVA TU MESA</h1>
      <p class="reservation-intro">Déjanos tus datos y nos pondremos en contacto contigo para confirmar la reserva.</p>

      <form class="reservation-form" @submit.prevent="sendRequest">
        <label>Tu nombre<input v-model.trim="details.name" autocomplete="name" required /></label>
        <label>Número de teléfono<input v-model.trim="details.phone" type="tel" autocomplete="tel" required /></label>
        <label>Correo electrónico<input v-model.trim="details.email" type="email" autocomplete="email" required /></label>
        <div class="reservation-row">
          <label>Fecha<input v-model="details.date" type="date" :min="minDate" required /></label>
          <label>Hora<input v-model="details.time" type="time" min="11:00" max="22:00" required /></label>
        </div>
        <label>Número de comensales
          <select v-model="details.guests">
            <option v-for="count in 12" :key="count" :value="String(count)">{{ count }} {{ count === 1 ? 'comensal' : 'comensales' }}</option>
          </select>
        </label>
        <label>¿Hay algo más que debamos saber? <span class="optional">Opcional</span><textarea v-model.trim="details.notes" rows="3" placeholder="Celebración, necesidades alimentarias o preferencias de mesa"></textarea></label>
        <button class="reservation-submit" type="submit">ENVIAR SOLICITUD DE RESERVA</button>
      </form>
      <p class="reservation-footnote">Se abrirá tu aplicación de correo con la solicitud dirigida a Chasca. La reserva no estará confirmada hasta que te respondamos.</p>
      <a class="reservation-back" href="/#home">← VOLVER A CHASCA</a>
    </section>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,500&display=swap');
.reservation-page{min-height:100vh;background:#f7f5f0;padding:0 0 64px;color:#191919;font-family:'DM Sans',sans-serif}.reservation-wordmark{display:block;width:max-content;margin:0 auto 20px;font-family:'Playfair Display',serif;font-size:38px;font-style:italic;letter-spacing:2px}.reservation-wordmark span{font-size:12px;color:#b99b62;vertical-align:top;margin-left:4px}.reservation-card{width:min(100%,650px);margin:auto;padding:48px clamp(22px,7vw,72px);background:#fff;box-shadow:0 12px 40px #1d1a1110}.reservation-script{text-align:center;color:#b99b62;font:italic clamp(36px,7vw,52px) 'Playfair Display',serif;margin:0 0 4px}.reservation-card h1{text-align:center;font-size:clamp(20px,4vw,28px);letter-spacing:.16em;margin:0}.reservation-intro{text-align:center;color:#666;font-size:14px;line-height:1.7;margin:15px 0 30px}.reservation-form{display:grid;gap:18px}.reservation-form label{display:grid;gap:8px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.reservation-form input,.reservation-form select,.reservation-form textarea{width:100%;border:1px solid #d8d5cf;border-radius:0;background:#fff;padding:12px 13px;color:#222;font:400 14px 'DM Sans',sans-serif;letter-spacing:0;text-transform:none;outline:none}.reservation-form input:focus,.reservation-form select:focus,.reservation-form textarea:focus{border-color:#b99b62;box-shadow:0 0 0 2px #b99b6225}.reservation-form textarea{resize:vertical}.reservation-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}.optional{color:#888;font-size:9px;font-weight:400}.reservation-submit{border:0;background:#171717;color:#fff;padding:16px 20px;font:700 11px 'DM Sans',sans-serif;letter-spacing:.17em;cursor:pointer;transition:background .2s}.reservation-submit:hover{background:#b99b62}.reservation-footnote{text-align:center;color:#777;font-size:11px;line-height:1.7;margin:17px 0 0}.reservation-back{display:block;text-align:center;margin-top:25px;font-size:10px;font-weight:700;letter-spacing:.13em;color:#8d7444}@media(max-width:480px){.reservation-page{padding:14px 12px 36px}.reservation-card{padding:34px 20px}.reservation-row{grid-template-columns:1fr}}
</style>
