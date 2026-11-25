<script setup lang="ts">
const gallery = [
  { image: 'photo-1476224203421-9ac39bcb3327', alt: 'Un plato recién preparado con verduras frescas' },
  { image: 'photo-1555939594-58d7cb561ad1', alt: 'Una mesa llena de platos para compartir' },
  { image: 'photo-1547592180-85f173990554', alt: 'Un almuerzo luminoso en el jardín' },
  { image: 'photo-1414235077428-338989a2e8c0', alt: 'Una cena servida en el restaurante' },
  { image: 'photo-1517248135467-4c7edcad34c4', alt: 'Un comedor cálido y acogedor' },
  { image: 'photo-1559339352-11d035aa65de', alt: 'Amigos disfrutando de una comida juntos' },
]
const photo = (id: string, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`
</script>

<template>
  <main>
    <div class="opening-stage">
    <section id="home" class="hero">
      <div class="hero-shade"></div>
      <ChascaHeader overlay />
      <div class="hero-copy">
        <p class="script welcome-script">Un toque de naturaleza</p>
        <h1>CHASCA</h1>
        <div class="divider"><span></span><b>RESERVA TU MESA</b><span></span></div>
        <a class="button" href="/demo-contact">RESERVAR</a>
      </div>
      <a href="#story" class="scroll-cue" aria-label="Desplázate para conocer nuestra historia">⌄</a>
    </section>

    <section id="story" class="story section-wrap">
      <div class="story-copy">
        <p class="script">Un lugar para reunirse</p>
        <h2>NUESTRA HISTORIA</h2>
        <span class="flourish">✳</span>
        <p>Chasca se encuentra en el jardín de jengibre de los Jardines Botánicos de Singapur, donde más de 250 especies crecen entre una vegetación exuberante y flores de muchos colores.</p>
        <p>Desde 2001, nuestro comedor acristalado acerca el jardín a la mesa. Ven a disfrutar de un almuerzo tranquilo, una cena especial o un momento rodeado de la belleza serena de la naturaleza.</p>
        <a class="text-link" href="#visit">DESCUBRE MÁS SOBRE NOSOTROS <span>↗</span></a>
      </div>
      <div class="story-images">
        <img :src="photo('photo-1414235077428-338989a2e8c0', 1100)" alt="El comedor de Chasca rodeado de vegetación" />
        <img :src="photo('photo-1547592180-85f173990554', 1100)" alt="Un plato de temporada elaborado con ingredientes frescos" />
      </div>
    </section>
    </div>

    <section id="menu" class="menu-note">
      <p class="script">De nuestro huerto a tu mesa</p><h2>BUENA COMIDA, BUENA COMPAÑÍA</h2>
      <p>Ingredientes de temporada, cocina cuidada y un toque de jengibre en todo lo que hacemos.</p>
      <a class="button dark-button" href="mailto:chasca.jadraque.demo@gmail.com?subject=Carta%20de%20Chasca">DESCUBRE NUESTRA CARTA</a>
    </section>

    <section id="happenings" class="happenings">
      <p class="script">Sigue las novedades</p><h2>NOVEDADES EN INSTAGRAM</h2>
      <div class="gallery"><a v-for="(item, index) in gallery" :key="item.image" href="#visit" :aria-label="item.alt"><img :src="photo(item.image, 500)" :alt="item.alt" /><span v-if="index === 2">◎</span></a></div>
      <a class="text-link insta-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">SÍGUENOS EN INSTAGRAM <span>↗</span></a>
    </section>

    <section id="home-location" class="home-location">
      <div class="home-location-copy">
        <p class="script">Ven a vernos</p>
        <h2>CHASCA RESTAURANTE</h2>
        <p class="home-location-address"><svg class="location-pin" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-7.2 8-13a8 8 0 1 0-16 0c0 5.8 8 13 8 13Z"/><circle cx="12" cy="9" r="3"/></svg><span>C. Mayor Alta, 2<br />19240 Jadraque, Guadalajara</span></p>
        <a class="button dark-button" href="https://www.google.com/maps/search/?api=1&amp;query=CHASCA+RESTAURANTE%2C+C.+Mayor+Alta%2C+2%2C+19240+Jadraque%2C+Guadalajara" target="_blank" rel="noreferrer">CÓMO LLEGAR</a>
      </div>
      <div class="home-location-map">
        <iframe title="Mapa de Chasca Restaurante en Jadraque, Guadalajara" src="https://maps.google.com/maps?q=CHASCA%20RESTAURANTE%2C%20C.%20Mayor%20Alta%2C%202%2C%2019240%20Jadraque%2C%20Guadalajara&amp;z=15&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>

    <section id="home-contact" class="home-contact">
      <div class="home-contact-info">
        <p class="script">Nos encantará saber de ti</p>
        <h2>CONTACTA CON CHASCA</h2>
        <div class="home-contact-items">
          <p><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h3l2 5-2 1.5a15 15 0 0 0 4.5 4.5L16 12l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 5 5a2 2 0 0 1 2-2Z"/></svg><span><small>TELÉFONO · NÚMERO DE PRUEBA</small><strong>+34 000 731 428</strong></span></p>
          <p><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L4 20l1.1-3.2A8.5 8.5 0 1 1 20 11.5Z"/><path d="M9 8.5c.3 2.6 2 4.3 4.5 5"/></svg><span><small>WHATSAPP · NÚMERO DE PRUEBA</small><strong>+34 000 284 619</strong></span></p>
          <p><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m4 7 8 6 8-6"/></svg><span><small>CORREO · DIRECCIÓN DE PRUEBA</small><strong>chasca.jadraque.demo@gmail.com</strong></span></p>
        </div>
      </div>
      <div class="home-contact-social">
        <p class="script">Síguenos</p>
        <h2>ENCUÉNTRANOS EN REDES</h2>
        <div class="home-social-links">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="social-dot" cx="17.5" cy="6.5" r="1"/></svg><span>INSTAGRAM</span></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.4C17.3 1.2 16.3 1 15 1c-3.2 0-5 1.9-5 5.4V9H7v4h3v8z"/></svg><span>FACEBOOK</span></a>
        </div>
      </div>
    </section>

    <footer id="visit">
      <div class="footer-top"><p>VEN A VERNOS</p><div class="footer-social"><a href="https://www.instagram.com/" aria-label="Instagram">◎</a><a href="mailto:chasca.jadraque.demo@gmail.com" aria-label="Correo electrónico">✉</a></div><a class="back-top" href="#home" aria-label="Volver arriba">⌃</a></div>
      <div class="footer-bottom"><p>Chasca Restaurante · C. Mayor Alta, 2, 19240 Jadraque, Guadalajara</p><div class="footer-links"><a href="#happenings">ARTÍCULOS</a><i>•</i><a href="#home-location">UBICACIÓN</a><i>•</i><a href="#home-contact">CONTACTO</a></div><small>Hecho con cariño y un toque de naturaleza.</small></div>
    </footer>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,500&display=swap');
:root{font-family:'DM Sans',sans-serif;color:#191919;background:#fff;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;scroll-behavior:smooth}*{box-sizing:border-box}body{margin:0;min-width:320px}a{color:inherit;text-decoration:none}.hero{height:95svh;min-height:560px;position:sticky;top:0;isolation:isolate;color:#fff;background:#191713;overflow:hidden;z-index:0}.hero-image,.hero-shade{position:absolute;inset:0;width:100%;height:100%}.hero-image{object-fit:cover;object-position:center 52%;z-index:-2}.hero-shade{z-index:-1;background:linear-gradient(180deg,rgba(0,0,0,.56),rgba(0,0,0,.22) 38%,rgba(0,0,0,.48)),linear-gradient(90deg,rgba(0,0,0,.16),transparent,rgba(0,0,0,.16))}.site-header{height:88px;padding:0 5.5%;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #ffffff30}.wordmark{font-family:'Playfair Display',serif;font-style:italic;font-size:39px;letter-spacing:2px}.wordmark span{font-size:12px;color:#c2a46a;vertical-align:top;margin-left:4px}.site-header nav{display:flex;gap:clamp(17px,3vw,46px);align-items:center}.site-header nav a,.header-social{font-size:10px;letter-spacing:.12em;font-weight:700}.site-header nav a:hover,.footer-links a:hover{color:#c5a872}.down{font-size:15px;margin-left:4px}.header-social{display:flex;align-items:center;gap:15px;font-size:18px}.seal{border:1px solid #c7af77;border-radius:50%;width:37px;height:37px;display:grid;place-items:center;font-family:serif;color:#d3bd86}.hero-copy{position:absolute;left:15px;right:15px;top:48%;transform:translateY(-45%);text-align:center}.script{font-family:'Playfair Display',serif;font-style:italic;color:#b99b62;font-size:clamp(36px,5vw,63px);margin:0 0 -3px}.welcome-script{font-size:clamp(42px,6vw,76px);margin-bottom:-8px}.hero h1{font-size:clamp(34px,5.3vw,64px);letter-spacing:.18em;margin:0 0 13px;font-weight:700}.divider{display:flex;align-items:center;justify-content:center;gap:13px;margin:0 auto 19px;max-width:350px}.divider span{height:1px;background:#fff;flex:1}.divider b{font-size:10px;letter-spacing:.3em;font-weight:500}.button{background:#fff;color:#171717;display:inline-flex;align-items:center;justify-content:center;min-width:147px;padding:13px 24px;font-size:11px;letter-spacing:.2em;font-weight:700;transition:background .2s,transform .2s}.button:hover{background:#c7ad78;transform:translateY(-2px)}.scroll-cue{position:absolute;bottom:-1px;left:50%;transform:translateX(-50%);width:42px;height:23px;background:white;color:#252525;border-radius:60px 60px 0 0;display:grid;place-items:center;font-size:16px}.section-wrap{width:100%;max-width:none;margin:0;padding:74px 5.5% 30px;position:relative;z-index:1;background:#fff}.story{display:grid;grid-template-columns:1fr 1fr;gap:7%;align-items:center;min-height:660px}.story-copy{text-align:center}.story-copy .script,.happenings .script,.menu-note .script{font-size:clamp(43px,5vw,65px)}h2{font-size:clamp(25px,3.1vw,39px);letter-spacing:.19em;margin:0;font-weight:700}.flourish{color:#b9a77c;display:block;margin:28px 0;font-size:15px}.story-copy>p:not(.script){font-size:13px;line-height:1.9;color:#4c4b48;margin:0 0 18px}.text-link{font-size:10px;letter-spacing:.15em;font-weight:700;display:inline-block;margin-top:15px}.text-link span{color:#b7995c;font-size:15px;margin-left:8px}.story-images{display:grid;gap:28px}.story-images img{display:block;width:100%;height:285px;object-fit:cover;box-shadow:0 8px 16px #0002}.menu-note{text-align:center;padding:84px 20px 90px;background:#f7f5f0}.menu-note>p:not(.script){color:#666;font-size:14px;margin:22px 0 28px}.dark-button{background:#171717;color:#fff}.happenings{text-align:center;padding:82px 3% 86px}.happenings h2{margin-bottom:34px}.gallery{display:grid;grid-template-columns:repeat(6,1fr);gap:3px;overflow:hidden}.gallery a{position:relative;display:block;aspect-ratio:1;overflow:hidden}.gallery img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s}.gallery a:hover img{transform:scale(1.06)}.gallery a span{position:absolute;top:10px;right:12px;color:#fff;font-size:22px}.insta-link{margin-top:28px}footer{color:#eee;text-align:center}.footer-top{height:165px;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}.footer-top>p{font-size:11px;letter-spacing:.2em}.footer-social{display:flex;gap:24px;font-size:20px;margin-top:10px}.back-top{position:absolute;bottom:0;left:50%;transform:translateX(-50%);background:#292929;border-radius:50% 50% 0 0;width:80px;height:42px;font-size:22px;padding-top:10px}.footer-bottom{background:#242424;padding:48px 16px 38px;color:#aaa;font-size:11px}.footer-bottom p{margin:0 0 23px}.footer-bottom p a{color:#c8ab72}.footer-links{display:flex;justify-content:center;gap:14px;align-items:center;letter-spacing:.1em}.footer-links i{font-style:normal;color:#888}.footer-bottom small{display:block;margin-top:23px;font-size:10px;color:#777}
@media(max-width:760px){.hero{height:95svh;min-height:560px;max-height:none}.site-header{height:auto;min-height:74px;padding:0 22px;flex-wrap:wrap}.wordmark{font-size:34px}.header-social{gap:10px}.header-social .seal{display:none}.site-header nav{order:3;width:100%;justify-content:space-between;gap:8px;padding:0 0 14px}.site-header nav a{font-size:8px;letter-spacing:.08em}.hero-copy{top:51%}.story{grid-template-columns:1fr;gap:35px;padding-top:75px;padding-bottom:60px}.story-copy{max-width:560px;margin:auto}.story-images{grid-template-columns:1fr 1fr;gap:12px}.story-images img{height:220px}.gallery{grid-template-columns:repeat(3,1fr)}.happenings{padding:65px 12px}.footer-bottom{padding:38px 20px}.footer-bottom p{line-height:1.8}}@media(max-width:440px){.hero{height:95svh}.site-header nav a{font-size:7px}.story-images{grid-template-columns:1fr}.story-images img{height:240px}.script{font-size:45px}.happenings h2{font-size:22px}.menu-note{padding:65px 18px}}
</style>

<style>
.wordmark{display:flex;align-items:center;gap:9px}.wordmark-logo{width:52px;height:52px;object-fit:contain}
</style>

<style>
.home-location{display:grid;grid-template-columns:.85fr 1.15fr;gap:7%;align-items:center;padding:82px 5.5%;background:#f7f5f0}.home-location-copy{text-align:center}.home-location-copy .script{font-size:clamp(43px,5vw,65px)}.home-location-copy h2{font-size:clamp(24px,3vw,38px);letter-spacing:.16em;margin:0 0 22px}.home-location-address{display:flex;align-items:flex-start;justify-content:center;gap:8px;font-size:19px;line-height:1.8;color:#4c4b48;margin:0 0 25px}.location-pin{width:27px;height:27px;flex:none;margin-top:3px;fill:#b99b62;stroke:#b99b62;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round}.location-pin circle{fill:#f7f5f0;stroke:none}.home-location-map{height:380px;box-shadow:0 8px 24px #0002}.home-location-map iframe{display:block;width:100%;height:100%;border:0}@media(max-width:760px){.home-location{grid-template-columns:1fr;gap:32px;padding:65px 22px}.home-location-map{height:340px}}@media(max-width:440px){.home-location-map{height:290px}}
</style>

<style>
.home-contact{display:grid;grid-template-columns:1.15fr .85fr;gap:8%;align-items:center;padding:58px 8%;background:#fff}.home-contact-info,.home-contact-social{text-align:center}.home-contact .script{font-size:clamp(36px,4.5vw,58px)}.home-contact h2{font-size:clamp(21px,2.5vw,31px);letter-spacing:.16em;margin:0 0 18px}.home-contact-items{display:grid;gap:11px;width:max-content;max-width:100%;margin:auto;text-align:left}.home-contact-items p{display:flex;align-items:center;gap:12px;margin:0}.home-contact-items p>svg{width:27px;height:27px;flex:none;fill:none;stroke:#b99b62;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}.home-contact-items span{display:grid;gap:3px}.home-contact-items small{font-size:10px;letter-spacing:.12em;color:#777}.home-contact-items strong{font-size:18px;font-weight:600;color:#191919}.home-social-links{display:grid;grid-template-columns:1fr 1fr;gap:16px}.home-social-links a{display:flex;flex-direction:column;align-items:center;gap:12px;padding:16px 12px;border:1px solid #e8e2d7;color:#191919;text-decoration:none;font-size:10px;font-weight:700;letter-spacing:.12em;transition:background .2s,color .2s}.home-social-links a:hover{background:#171717;color:#c8ab72}.home-social-links svg{width:34px;height:34px;fill:none;stroke:#b99b62;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}.home-social-links a:last-child svg{fill:#b99b62;stroke:none}.home-social-links .social-dot{fill:#b99b62;stroke:none}@media(max-width:760px){.home-contact{grid-template-columns:1fr;gap:34px;padding:48px 22px}.home-contact-items{width:100%;max-width:350px}.home-social-links{max-width:380px;margin:auto}}
</style>
