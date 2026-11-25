<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ overlay?: boolean }>()
const menuOpen = ref(false)
</script>

<template>
  <header class="chasca-header" :class="{ 'chasca-header-overlay': overlay }">
    <a class="chasca-wordmark" href="/#home" aria-label="Inicio de Chasca">
      <img src="/chasca-flame.png" alt="" />
      <span>chasca</span><i aria-hidden="true">✳</i>
    </a>
    <nav aria-label="Navegación principal">
      <a href="/#story">NUESTRA HISTORIA</a><a href="/menu">CARTA</a><a href="/#home-location">UBICACIÓN</a><a href="/#happenings">EVENTOS</a><a href="/#home-contact">CONTACTO</a>
    </nav>
    <div class="chasca-social"><a href="https://www.instagram.com/" aria-label="Instagram">◎</a><a href="/#home-contact" aria-label="Contacto">✉</a></div>
  </header>
  <Teleport to="body">
    <button v-if="!menuOpen" class="chasca-mobile-menu" type="button" :aria-expanded="menuOpen" aria-controls="chasca-mobile-panel" aria-label="Abrir menú de navegación" @click="menuOpen = true">
      <span></span><span></span><span></span>
    </button>
    <div v-if="menuOpen" id="chasca-mobile-panel" class="chasca-mobile-panel" role="dialog" aria-modal="true" aria-label="Menú de navegación">
      <div class="mobile-panel-top">
        <a class="chasca-wordmark" href="/#home" aria-label="Inicio de Chasca" @click="menuOpen = false"><img src="/chasca-flame.png" alt="" /><span>chasca</span><i aria-hidden="true">✳</i></a>
        <button class="mobile-menu-close" type="button" aria-label="Cerrar menú" @click="menuOpen = false">×</button>
      </div>
      <nav aria-label="Navegación móvil">
        <a href="/#story" @click="menuOpen = false">NUESTRA HISTORIA</a>
        <a href="/menu" @click="menuOpen = false">CARTA</a>
        <a href="/#home-location" @click="menuOpen = false">UBICACIÓN</a>
        <a href="/#happenings" @click="menuOpen = false">EVENTOS</a>
        <a href="/#home-contact" @click="menuOpen = false">CONTACTO</a>
        <a class="mobile-contact-link" href="/demo-contact" @click="menuOpen = false">ENVIAR UN MENSAJE</a>
      </nav>
    </div>
  </Teleport>
</template>

<style>
.chasca-header{height:88px;padding:0 5.5%;display:flex;align-items:center;justify-content:space-between;gap:24px;background:#171713;color:#fff;border-bottom:1px solid #ffffff30;font-family:'DM Sans',sans-serif}.chasca-header-overlay{background:transparent}.chasca-wordmark{display:flex;align-items:center;gap:9px;color:#fff;text-decoration:none;flex:none}.chasca-wordmark img{width:52px;height:52px;object-fit:contain}.chasca-wordmark span{font:italic 39px 'Playfair Display',serif;letter-spacing:2px}.chasca-wordmark i{font:12px 'DM Sans',sans-serif;color:#c2a46a;align-self:flex-start;margin:8px 0 0 -5px}.chasca-header nav{display:flex;align-items:center;gap:clamp(16px,2.4vw,38px)}.chasca-header nav a,.chasca-social a{color:#fff;text-decoration:none;font-size:10px;letter-spacing:.12em;font-weight:700;white-space:nowrap}.chasca-header nav a:hover,.chasca-social a:hover{color:#c5a872}.chasca-social{display:flex;align-items:center;gap:15px}.chasca-social a{font-size:18px;letter-spacing:0}.chasca-mobile-menu,.chasca-mobile-panel{display:none}@media(max-width:760px){.chasca-header{height:auto;min-height:74px;padding:10px 22px;flex-wrap:wrap;gap:8px}.chasca-wordmark img{width:42px;height:42px}.chasca-wordmark span{font-size:34px}.chasca-header nav{display:none}.chasca-mobile-menu{display:flex;position:fixed;top:16px;right:18px;z-index:1002;width:44px;height:44px;align-items:center;justify-content:center;flex-direction:column;gap:5px;padding:0;background:#171713;border:1px solid #b99b62;border-radius:50%;color:#c8ab72;box-shadow:0 3px 12px #0003;cursor:pointer}.chasca-mobile-menu span{display:block;width:19px;height:2px;background:currentColor;transition:transform .2s,opacity .2s}.chasca-mobile-menu[aria-expanded=true] span:first-child{transform:translateY(7px) rotate(45deg)}.chasca-mobile-menu[aria-expanded=true] span:nth-child(2){opacity:0}.chasca-mobile-menu[aria-expanded=true] span:last-child{transform:translateY(-7px) rotate(-45deg)}.chasca-mobile-panel{display:flex;position:fixed;top:70px;right:18px;z-index:1001;width:min(280px,calc(100vw - 36px));padding:12px 0;flex-direction:column;background:#171713;border:1px solid #b99b6240;box-shadow:0 12px 32px #0004}.chasca-mobile-panel a{padding:14px 20px;color:#fff;text-decoration:none;font:700 10px 'DM Sans',sans-serif;letter-spacing:.14em}.chasca-mobile-panel a:hover{color:#c8ab72;background:#ffffff0a}.chasca-mobile-panel .mobile-contact-link{margin:8px 12px 4px;background:#b99b62;color:#171713;text-align:center}.chasca-social{display:none}}@media(max-width:440px){.chasca-header nav a{font-size:7px;letter-spacing:.04em}}
@media(max-width:760px){.chasca-mobile-panel{inset:0;top:0;right:0;width:100%;height:100dvh;min-height:100vh;padding:22px 26px 40px;overflow-y:auto;border:0;box-shadow:none}.mobile-panel-top{display:flex;align-items:center;justify-content:space-between;padding-bottom:30px;border-bottom:1px solid #ffffff30}.mobile-panel-top .chasca-wordmark img{width:42px;height:42px}.mobile-panel-top .chasca-wordmark span{font-size:34px}.mobile-menu-close{display:grid;place-items:center;width:46px;height:46px;padding:0;border:1px solid #b99b62;border-radius:50%;background:transparent;color:#c8ab72;font-size:32px;line-height:1;cursor:pointer}.chasca-mobile-panel nav{display:flex;flex-direction:column;align-items:stretch;gap:0;margin:auto 0}.chasca-mobile-panel nav a{padding:19px 4px;border-bottom:1px solid #ffffff20;color:#fff;text-decoration:none;font:700 14px 'DM Sans',sans-serif;letter-spacing:.16em}.chasca-mobile-panel nav a:hover{color:#c8ab72;background:transparent}.chasca-mobile-panel nav .mobile-contact-link{margin:24px 0 0;padding:16px;background:#b99b62;color:#171713;text-align:center;border:0}}
</style>
