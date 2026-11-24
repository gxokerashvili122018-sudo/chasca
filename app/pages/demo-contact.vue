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
    errorMessage.value = 'Your message could not be sent. Please try again later.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <main class="demo-page">
    <a class="demo-wordmark" href="/">chasca</a>
    <section class="demo-card">
      <p class="demo-kicker">A little note</p>
      <h1>CONTACT US</h1>
      <p class="demo-intro">Send us a message and our team will be in touch.</p>

      <form class="demo-form" @submit.prevent="submitForm">
        <label>
          Your name
          <input v-model.trim="form.name" name="name" autocomplete="name" maxlength="100" required />
        </label>
        <label>
          Your email
          <input v-model.trim="form.email" name="email" type="email" autocomplete="email" maxlength="254" required />
        </label>
        <label>
          Message
          <textarea v-model.trim="form.message" name="message" rows="6" maxlength="5000" required></textarea>
        </label>
        <button type="submit" :disabled="sending">{{ sending ? 'SENDING…' : 'SEND MESSAGE' }}</button>
        <p v-if="sent" class="form-status success" role="status">Thanks! Your message has been sent.</p>
        <p v-if="errorMessage" class="form-status error" role="alert">{{ errorMessage }}</p>
      </form>
    </section>
  </main>
</template>

<style scoped>
.demo-page{min-height:100vh;padding:24px 20px 64px;background:#f7f5f0;color:#191919;font-family:'DM Sans',sans-serif}
.demo-wordmark{display:block;width:max-content;margin:0 auto 20px;color:inherit;text-decoration:none;font:italic 38px 'Playfair Display',serif;letter-spacing:2px}
.demo-card{width:min(100%,650px);margin:auto;padding:48px clamp(22px,7vw,72px);background:#fff;box-shadow:0 12px 40px #1d1a1110}
.demo-kicker{text-align:center;color:#b99b62;font:italic clamp(36px,7vw,52px) 'Playfair Display',serif;margin:0 0 4px}
h1{text-align:center;font-size:clamp(20px,4vw,28px);letter-spacing:.16em;margin:0}
.demo-intro{text-align:center;color:#666;font-size:14px;line-height:1.7;margin:15px 0 30px}
.demo-form{display:grid;gap:18px}
.demo-form label{display:grid;gap:8px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.demo-form input,.demo-form textarea{width:100%;border:1px solid #d8d5cf;border-radius:0;background:#fff;padding:12px 13px;color:#222;font:400 14px 'DM Sans',sans-serif;letter-spacing:0;text-transform:none;outline:none}
.demo-form input:focus,.demo-form textarea:focus{border-color:#b99b62;box-shadow:0 0 0 2px #b99b6225}
.demo-form textarea{resize:vertical}
.demo-form button{border:0;background:#171717;color:#fff;padding:16px 20px;font:700 11px 'DM Sans',sans-serif;letter-spacing:.17em;cursor:pointer}
.demo-form button:disabled{opacity:.6;cursor:wait}
.form-status{margin:0;text-align:center;font-size:13px;line-height:1.6}
.success{color:#24633c}.error{color:#a32c2c}
@media(max-width:480px){.demo-page{padding:14px 12px 36px}.demo-card{padding:34px 20px}}
</style>
