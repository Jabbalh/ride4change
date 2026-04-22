<template>
  <div class="site-shell">
    <header class="topbar">
      <div class="brand-wrap">
        <img src="/logo.jpg" alt="Logo Ride For Change" class="brand-logo" />
        <div class="brand">Ride 4 Change - Profitez de votre seule vie et lâchez les chevaux</div>
      </div>
      <div class="topbar-right">
        <nav class="menu">
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/calendrier">Calendrier</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
        <div class="topbar-socials" aria-label="Réseaux sociaux">
          <a href="https://www.facebook.com/profile.php?id=61573516003975" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
          <a href="https://www.tiktok.com/@ride4change" target="_blank" rel="noopener noreferrer" aria-label="TikTok">♪</a>
          <a href="https://www.instagram.com/ride4change_ludo_et_paule/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">◎</a>
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="footer">
      <p>Association Ride 4 Change · Moto & Handi-sport</p>
    </footer>
  </div>
</template>
