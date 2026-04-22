<script setup>
const races = [
  {
    date: '19 avril 2026',
    title: 'Le Mans',
    description: 'Une petite course sur un petit circuit',
    circuit:
      '/la_mans.jpeg',
  },
  {
    date: '12 novembre 2025',
    title: 'Pôle Mécanique Alès Cévennes.',
    description: 'Week-end ensoleillé à Alès pour le PHS DAY du 8 novembre.',
    circuit:
      '/ales.PNG',
  },
]
</script>

<template>
  <section class="page-block">
    <h1>Calendrier des courses</h1>
    <p>Retrouvez les dates clés de la saison et les circuits où l’association est présente.</p>

    <div class="timeline">
      <article v-for="race in races" :key="race.title" class="timeline-item">
        <div class="timeline-date">{{ race.date }}</div>
        <div class="timeline-content">
          <h3>{{ race.title }}</h3>
          <p>{{ race.description }}</p>
          <div class="image-box">
            <img :src="race.circuit" :alt="`Photo du circuit : ${race.title}`" />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<style scoped>
.image-box {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
  display: block;
}
</style>