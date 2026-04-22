<script setup>

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/' },
  { name: 'Facebook', url: 'https://www.facebook.com/' },
  { name: 'TikTok', url: 'https://www.tiktok.com/' },
]
const baseUrl = `${import.meta.env.BASE_URL}`;
const moto2 = `${baseUrl}moto2.jpg`;
const moto1 = `${baseUrl}moto1.jpg`;
const moto3 = `${baseUrl}moto3.jpg`;
const partenaire1 = `${baseUrl}partenaire1.png`;
</script>

<template>
  <section class="hero">
    <h1>Moto et passion</h1>
    <p>
      Ride For Change est une association qui propose des baptêmes moto adaptés et accompagne son
      président dans les compétitions handi-sport.
    </p>
  </section>

  <section class="story-grid">
    <article class="story-text">
      <h2>Notre mission</h2>
      <p>
        Nous rendons la moto accessible à toutes et tous.
      </p>
    </article>
    <div class="image-box">
    <img
      :src="moto2"
      alt="Pilote en action"
      class="story-image"
    />
    </div>

    <div class="image-box">
    <img
      :src="moto1"
      alt="la course"
      class="story-image"
    />
    </div>
    <article class="story-text">
      <h2>Des baptêmes toute l’année</h2>
      <p>
        Nous organisons des journées découverte avec des motos adaptées, un encadrement sécurisé et
        une ambiance conviviale.
      </p>
    </article>

    <article class="story-text">
      <h2>Compétition handi-sport</h2>
      <p>
        Le président porte nos couleurs sur différents circuits français et inspire de nombreux
        pilotes à dépasser leurs limites.
      </p>
    </article>
    <div class="image-box">
    <img
      :src="moto3"
      alt="Moto sur circuit"
      class="story-image"
    />
    </div>

    <div class="image-box">
    <img
        :src="partenaire1"
        alt="Partenaire"
        class="story-image"
    />
    </div>
    <article class="story-text">
      <h2>Un super partenaire</h2>
      <p>
        Notre super partenaire qui nous accompagne.
      </p>
    </article>
  </section>
</template>
<style scoped>
.image-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
}
</style>