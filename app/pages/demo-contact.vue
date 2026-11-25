<script setup lang="ts">
const form = reactive({ name: '', email: '', message: '' })
const sending = ref(false)
const sent = ref(false)
const errorMessage = ref('')

async function submitForm() {
  sending.value = true
  sent.value = false
  errorMessage.value = ''

  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    sent.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  } catch {
    errorMessage.value = 'No se ha podido enviar tu mensaje. Inténtalo de nuevo más tarde.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <main class="demo-page">
    <ChascaHeader />
    <div class="demo-contact-layout">
      <section class="demo-card">
        <a class="demo-back" href="/#home" aria-label="Volver a la página principal"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m0 0 7-7m-7 7 7 7" /></svg><span>VOLVER AL INICIO</span></a>
        <p class="demo-kicker">Una nota</p>
        <h1>CONTACTA CON NOSOTROS</h1>
        <p class="demo-intro">Envíanos un mensaje y nuestro equipo se pondrá en contacto contigo.</p>
        <form class="demo-form" @submit.prevent="submitForm">
          <label>Tu nombre<input v-model.trim="form.name" name="name" autocomplete="name" maxlength="100" required /></label>
          <label>Tu correo electrónico<input v-model.trim="form.email" name="email" type="email" autocomplete="email" maxlength="254" required /></label>
          <label>Mensaje<textarea v-model.trim="form.message" name="message" rows="6" maxlength="5000" required></textarea></label>
          <button type="submit" :disabled="sending">{{ sending ? 'ENVIANDO…' : 'ENVIAR MENSAJE' }}</button>
          <p v-if="sent" class="form-status success" role="status">¡Gracias! Hemos enviado tu mensaje.</p>
          <p v-if="errorMessage" class="form-status error" role="alert">{{ errorMessage }}</p>
        </form>
      </section>
      <aside class="demo-contact-panel">
        <p class="panel-kicker">Hablemos</p>
        <h2>ESTAMOS PARA AYUDARTE</h2>
        <p class="panel-intro">Llámanos o escríbenos con los datos de contacto.</p>
        <div class="demo-contact-methods">
          <div class="demo-contact-method"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h3l2 5-2 1.5a15 15 0 0 0 4.5 4.5L16 12l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 5 5a2 2 0 0 1 2-2Z"/></svg><span><small>TELÉFONO · NÚMERO DE PRUEBA</small><strong>+34 000 731 428</strong></span></div>
          <div class="demo-contact-method"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L4 20l1.1-3.2A8.5 8.5 0 1 1 20 11.5Z"/><path d="M9 8.5c.3 2.6 2 4.3 4.5 5"/></svg><span><small>WHATSAPP · NÚMERO DE PRUEBA</small><strong>+34 000 284 619</strong></span></div>
        </div>
      </aside>
    </div>
  </main>
</template>

<style scoped>
.demo-page{min-height:100vh;padding:0 0 64px;background:#f7f5f0;color:#191919;font-family:'DM Sans',sans-serif}
.demo-contact-layout{width:min(1080px,89%);margin:auto;padding:46px 0 64px;display:grid;grid-template-columns:minmax(0,1.2fr) minmax(300px,.8fr);gap:32px;align-items:start}
.demo-back{display:inline-flex;align-items:center;gap:8px;color:#8d7444;text-decoration:none;font-size:10px;font-weight:700;letter-spacing:.13em;margin-bottom:26px}
.demo-back svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.demo-kicker,.panel-kicker{text-align:center;color:#b99b62;font:italic clamp(36px,6vw,48px) 'Playfair Display',serif;margin:0 0 4px}
.demo-card{width:100%;margin:0;padding:38px clamp(22px,4vw,52px);background:#fff;box-shadow:0 12px 40px #1d1a1108}
.demo-card h1{text-align:center;font-size:clamp(20px,4vw,28px);letter-spacing:.16em;margin:0}
.demo-intro{text-align:center;color:#666;font-size:14px;line-height:1.7;margin:15px 0 30px}
.demo-form{display:grid;gap:18px}
.demo-form label{display:grid;gap:8px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.demo-form input,.demo-form textarea{width:100%;border:1px solid #d8d5cf;border-radius:0;background:#fff;padding:12px 13px;color:#222;font:400 14px 'DM Sans',sans-serif;letter-spacing:0;text-transform:none;outline:none}
.demo-form input:focus,.demo-form textarea:focus{border-color:#b99b62;box-shadow:0 0 0 2px #b99b6225}
.demo-form textarea{resize:vertical}
.demo-form button{border:0;background:#171717;color:#fff;padding:16px 20px;font:700 11px 'DM Sans',sans-serif;letter-spacing:.17em;cursor:pointer}
.demo-form button:disabled{opacity:.6;cursor:wait}
.form-status{margin:0;text-align:center;font-size:13px;line-height:1.6}.success{color:#24633c}.error{color:#a32c2c}
.demo-contact-panel{padding:38px 26px;background:#242424;color:#fff;box-shadow:0 12px 40px #1d1a1110}.panel-kicker{font-size:clamp(32px,4vw,42px)}
.demo-contact-panel h2{text-align:center;font-size:clamp(18px,2vw,23px);letter-spacing:.13em;margin:0}
.panel-intro{text-align:center;color:#d0cec8;font-size:13px;line-height:1.7;margin:14px 0 26px}
.demo-contact-methods{display:grid;gap:14px}
.demo-contact-method{display:flex;align-items:center;gap:13px;padding:17px 14px;background:#ffffff0b;border:1px solid #c8ab7240}
.demo-contact-method>svg{width:27px;height:27px;flex:none;fill:none;stroke:#c8ab72;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
.demo-contact-method span{display:grid;gap:4px}.demo-contact-method small{font-size:9px;letter-spacing:.1em;color:#c7c3b9}.demo-contact-method strong{font-size:15px;font-weight:600;color:#fff}
@media(max-width:760px){.demo-contact-layout{width:calc(100% - 36px);padding:30px 0 44px;grid-template-columns:1fr;gap:20px}.demo-contact-panel{padding:30px 22px}}
@media(max-width:480px){.demo-page{padding-bottom:36px}.demo-contact-layout{width:calc(100% - 28px)}.demo-card{padding:30px 20px}}
</style>
