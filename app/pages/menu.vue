<template>
  <main class="menu-page">
    <ChascaHeader />

    <section class="menu-hero">
      <p class="menu-script">De nuestro huerto a tu mesa</p>
      <h1>NUESTRA CARTA</h1>
      <p>Ingredientes de temporada, cocina cuidada y un toque de jengibre en todo lo que hacemos.</p>
    </section>

    <section class="menu-content">
      <div class="menu-intro">
        <span class="menu-flourish">✳</span>
        <h2>BUENA COMIDA, BUENA COMPAÑÍA</h2>
        <p>Inspirada en los jardines que nos rodean, nuestra cocina lleva a la mesa ingredientes frescos y sabores llenos de matices. La carta cambia con cada temporada para que siempre haya algo nuevo por descubrir.</p>
      </div>
      <div class="menu-categories">
        <article>
          <span>01</span>
          <h3>A LA CARTA</h3>
          <p>Descubre platos para compartir, disfrutar de almuerzos sin prisa y cenar rodeado de naturaleza.</p>
        </article>
        <article>
          <span>02</span>
          <h3>MENÚS</h3>
          <p>Reúnete alrededor de la mesa y deja que nuestra cocina te sorprenda con una selección de temporada.</p>
        </article>
        <article>
          <span>03</span>
          <h3>BEBIDAS</h3>
          <p>Acompaña tu comida con algo refrescante, desde bebidas inspiradas en el jardín hasta clásicos de siempre.</p>
        </article>
      </div>
      <p class="menu-note">Para consultar los platos, precios o información sobre alérgenos, ponte en contacto con nuestro equipo.</p>
      <a class="menu-contact" href="mailto:chasca.jadraque.demo@gmail.com?subject=Consulta%20sobre%20la%20carta">PREGÚNTANOS POR LA CARTA <span>↗</span></a>
      <a class="menu-reserve" href="/reservation">RESERVA TU MESA</a>
    </section>

    <footer class="menu-footer"><a href="/#home">VOLVER A CHASCA</a><span>C. Mayor Alta, 2, 19240 Jadraque, Guadalajara</span></footer>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,500&display=swap');
.menu-page{min-height:100vh;background:#fff;color:#191919;font-family:'DM Sans',sans-serif}.menu-page a{color:inherit;text-decoration:none}.menu-header{min-height:84px;padding:12px 5.5%;display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:1px solid #e8e5df}.menu-wordmark{font:italic 38px 'Playfair Display',serif;letter-spacing:2px}.menu-wordmark span{font:12px 'DM Sans',sans-serif;color:#b99b62;vertical-align:top;margin-left:4px}.menu-header nav{display:flex;gap:clamp(16px,3vw,42px)}.menu-header nav a,.menu-book{font-size:10px;font-weight:700;letter-spacing:.12em}.menu-header nav a[aria-current=page]{color:#a68852}.menu-book{border:1px solid #b99b62;padding:12px 17px}.menu-hero{min-height:310px;padding:75px 20px 67px;text-align:center;color:#fff;background:linear-gradient(#171713aa,#171713aa),url('https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=1800&q=85') center 52%/cover}.menu-script{font:italic clamp(38px,6vw,62px) 'Playfair Display',serif;color:#c2a46a;margin:0 0 4px}.menu-hero h1{font-size:clamp(30px,4vw,44px);letter-spacing:.2em;margin:0}.menu-hero>p:last-child{font-size:14px;line-height:1.7;margin:16px 0 0;color:#eee}.menu-content{width:min(100% - 40px,1040px);margin:auto;padding:76px 0 84px;text-align:center}.menu-flourish{color:#b99b62;font-size:17px}.menu-intro h2{font-size:clamp(22px,3vw,32px);letter-spacing:.16em;margin:16px 0}.menu-intro p{max-width:690px;margin:0 auto;color:#555;font-size:14px;line-height:1.9}.menu-categories{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin:58px 0 36px;text-align:center}.menu-categories article{padding:30px 24px;border-top:1px solid #c4ad7f;border-bottom:1px solid #e8e4dc}.menu-categories article>span{color:#b99b62;font:italic 24px 'Playfair Display',serif}.menu-categories h3{font-size:14px;letter-spacing:.16em;margin:13px 0}.menu-categories p{font-size:13px;line-height:1.8;color:#666;margin:0}.menu-note{color:#666;font-size:13px;line-height:1.7}.menu-contact{display:inline-block;margin-top:5px;font-size:10px;font-weight:700;letter-spacing:.14em}.menu-contact span{margin-left:8px;color:#b99b62;font-size:15px}.menu-reserve{display:block;width:max-content;margin:28px auto 0;padding:15px 22px;background:#191919;color:#fff!important;font-size:10px;font-weight:700;letter-spacing:.16em}.menu-footer{display:flex;justify-content:space-between;gap:20px;background:#242424;color:#bbb;padding:25px 5.5%;font-size:10px;letter-spacing:.08em}.menu-footer a{color:#d0b47c!important;font-weight:700}@media(max-width:700px){.menu-header{flex-wrap:wrap;justify-content:space-between}.menu-header nav{order:3;width:100%;justify-content:space-between;padding:4px 0 10px}.menu-header nav a{font-size:9px}.menu-book{font-size:9px}.menu-categories{grid-template-columns:1fr;gap:14px;margin-top:38px}.menu-categories article{padding:22px 20px}.menu-content{padding:58px 0 64px}.menu-footer{flex-direction:column;align-items:center;text-align:center}}
</style>
