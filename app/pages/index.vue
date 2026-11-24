<script setup lang="ts">
const gallery = [
  { image: 'photo-1476224203421-9ac39bcb3327', alt: 'A freshly prepared dish with greens' },
  { image: 'photo-1555939594-58d7cb561ad1', alt: 'A colorful spread ready to share' },
  { image: 'photo-1547592180-85f173990554', alt: 'A bright garden lunch' },
  { image: 'photo-1414235077428-338989a2e8c0', alt: 'Dinner served at the restaurant' },
  { image: 'photo-1517248135467-4c7edcad34c4', alt: 'A warm and welcoming dining room' },
  { image: 'photo-1559339352-11d035aa65de', alt: 'Friends enjoying a meal together' },
]
const photo = (id: string, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`
</script>

<template>
  <main>
    <div class="opening-stage">
    <section id="home" class="hero">
      <div class="hero-shade"></div>
      <header class="site-header">
        <a class="wordmark" href="#home" aria-label="Chasca home"><img class="wordmark-logo" src="/chasca-flame.png" alt="" />chasca<span>✳</span></a>
        <nav aria-label="Main navigation">
          <a href="#story">OUR STORY</a><a href="/menu">MENU <span class="down">⌄</span></a><a href="#visit">DIRECTIONS</a><a href="#happenings">EVENTS</a><a href="#visit">VIRTUAL TOUR</a>
        </nav>
        <div class="header-social"><a href="#happenings" aria-label="Instagram">◎</a><a href="#visit" aria-label="Email">✉</a></div>
      </header>
      <div class="hero-copy">
        <p class="script welcome-script">A little taste of nature</p>
        <h1>CHASCA</h1>
        <div class="divider"><span></span><b>RESERVE A TABLE</b><span></span></div>
        <a class="button" href="/reservation">BOOK NOW</a>
      </div>
      <a href="#story" class="scroll-cue" aria-label="Scroll to our story">⌄</a>
    </section>

    <section id="story" class="story section-wrap">
      <div class="story-copy">
        <p class="script">A place to gather</p>
        <h2>OUR STORY</h2>
        <span class="flourish">✳</span>
        <p>Chasca is nestled in the one-hectare Ginger Garden of the Singapore Botanic Gardens, where more than 250 species of ginger flourish among stunning foliage and colourful flowers.</p>
        <p>Since opening in 2001, our glass-walled dining room has brought the garden indoors. Come for a leisurely lunch, a special dinner, or simply a moment surrounded by the quiet beauty of nature.</p>
        <a class="text-link" href="#visit">A LITTLE MORE ABOUT US <span>↗</span></a>
      </div>
      <div class="story-images">
        <img :src="photo('photo-1414235077428-338989a2e8c0', 1100)" alt="The Chasca dining room among lush greenery" />
        <img :src="photo('photo-1547592180-85f173990554', 1100)" alt="A seasonal dish made with fresh ingredients" />
      </div>
    </section>
    </div>

    <section id="menu" class="menu-note">
      <p class="script">From our garden to your table</p><h2>GOOD FOOD, GOOD COMPANY</h2>
      <p>Seasonal ingredients, thoughtful cooking, and a little ginger in everything we do.</p>
      <a class="button dark-button" href="mailto:hello@thehalia.com?subject=Chasca%20menu">EXPLORE OUR MENU</a>
    </section>

    <section id="happenings" class="happenings">
      <p class="script">Follow the good things</p><h2>INSTAGRAM HAPPENINGS</h2>
      <div class="gallery"><a v-for="(item, index) in gallery" :key="item.image" href="#visit" :aria-label="item.alt"><img :src="photo(item.image, 500)" :alt="item.alt" /><span v-if="index === 2">◎</span></a></div>
      <a class="text-link insta-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">FOLLOW ALONG ON INSTAGRAM <span>↗</span></a>
    </section>

    <footer id="visit">
      <div class="footer-top"><p>COME FIND US IN THE GARDEN</p><div class="footer-social"><a href="https://www.instagram.com/" aria-label="Instagram">◎</a><a href="mailto:hello@thehalia.com" aria-label="Email">✉</a></div><a class="back-top" href="#home" aria-label="Back to top">⌃</a></div>
      <div class="footer-bottom"><p>Chasca Restaurant · 1 Cluny Road, Ginger Garden, Singapore Botanic Gardens, Singapore 259569 · <a href="tel:+6568441148">Tel: (65) 6844 1148</a></p><div class="footer-links"><a href="#happenings">ARTICLES</a><i>•</i><a href="#visit">CAREERS</a><i>•</i><a href="#visit">CONTACT</a></div><small>Thoughtfully made, with a little help from nature.</small></div>
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
