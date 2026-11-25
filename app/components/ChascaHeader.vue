<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{ overlay?: boolean; showOnStory?: boolean }>()
const storyVisible = ref(false)
let storyElement: Element | null = null

function updateStoryVisibility() {
  if (!storyElement) return
  const storyTop = storyElement.getBoundingClientRect().top + window.scrollY
  storyVisible.value = window.scrollY >= storyTop - window.innerHeight * 0.85
}

onMounted(() => {
  if (!props.showOnStory) return
  storyElement = document.querySelector('#story')
  if (!storyElement) return
  updateStoryVisibility()
  window.addEventListener('scroll', updateStoryVisibility, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', updateStoryVisibility))
</script>

<template>
  <header class="chasca-header" :class="{ 'chasca-header-overlay': overlay }">
    <a class="chasca-wordmark" href="/#home" aria-label="Chasca home">
      <img src="/chasca-flame.png" alt="" />
      <span>chasca</span><i aria-hidden="true">✳</i>
    </a>
    <nav aria-label="Main navigation">
      <a href="/#story">OUR STORY</a><a href="/menu">MENU</a><a href="/#home-location">LOCATION</a><a href="/#happenings">EVENTS</a><a href="/#home-contact">CONTACTS</a>
    </nav>
    <div class="chasca-social"><a href="https://www.instagram.com/" aria-label="Instagram">◎</a><a href="/#home-contact" aria-label="Contact">✉</a></div>
  </header>
  <Teleport to="body">
    <a v-if="showOnStory && storyVisible" class="chasca-mobile-menu" href="/demo-contact" aria-label="Contact Chasca">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 3.75h10.5A2.5 2.5 0 0 1 19 6.25v14H8.5A2.5 2.5 0 0 1 6 17.75z" />
        <path d="M6 17.75a2.5 2.5 0 0 1 2.5-2.5H19M9.5 8h6M9.5 11h6" />
      </svg>
    </a>
  </Teleport>
</template>

<style>
.chasca-header{height:88px;padding:0 5.5%;display:flex;align-items:center;justify-content:space-between;gap:24px;background:#171713;color:#fff;border-bottom:1px solid #ffffff30;font-family:'DM Sans',sans-serif}.chasca-header-overlay{background:transparent}.chasca-wordmark{display:flex;align-items:center;gap:9px;color:#fff;text-decoration:none;flex:none}.chasca-wordmark img{width:52px;height:52px;object-fit:contain}.chasca-wordmark span{font:italic 39px 'Playfair Display',serif;letter-spacing:2px}.chasca-wordmark i{font:12px 'DM Sans',sans-serif;color:#c2a46a;align-self:flex-start;margin:8px 0 0 -5px}.chasca-header nav{display:flex;align-items:center;gap:clamp(16px,2.4vw,38px)}.chasca-header nav a,.chasca-social a{color:#fff;text-decoration:none;font-size:10px;letter-spacing:.12em;font-weight:700;white-space:nowrap}.chasca-header nav a:hover,.chasca-social a:hover{color:#c5a872}.chasca-social{display:flex;align-items:center;gap:15px}.chasca-social a{font-size:18px;letter-spacing:0}.chasca-mobile-menu{display:none}@media(max-width:760px){.chasca-header{height:auto;min-height:74px;padding:10px 22px;flex-wrap:wrap;gap:8px}.chasca-wordmark img{width:42px;height:42px}.chasca-wordmark span{font-size:34px}.chasca-mobile-menu{display:flex;position:fixed;top:16px;right:18px;z-index:1000;width:44px;height:44px;align-items:center;justify-content:center;background:#171713;border:1px solid #b99b62;border-radius:50%;color:#c8ab72;box-shadow:0 3px 12px #0003;text-decoration:none}.chasca-mobile-menu svg{width:25px;height:25px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}.chasca-header nav{order:3;width:100%;justify-content:space-between;gap:8px;padding:4px 0 8px}.chasca-header nav a{font-size:8px;letter-spacing:.08em}.chasca-social{display:none}}@media(max-width:440px){.chasca-header nav a{font-size:7px;letter-spacing:.04em}}
</style>
