<template>
  <section class="page-block">
    <h1>Demande d'informations</h1>
    <p>
      Vous souhaitez organiser un baptême moto, devenir bénévole ou obtenir des informations sur
      nos événements ? Envoyez-nous votre message.
    </p>

    <form class="contact-form" action="mailto:contact@rideforchange.fr" method="post" enctype="text/plain">
      <label>
        Nom complet
        <input type="text" name="nom" required />
      </label>

      <label>
        Email
        <input type="email" name="email" required />
      </label>

      <label>
        Sujet
        <select name="sujet">
          <option>Baptême moto</option>
          <option>Événement solidaire</option>
          <option>Partenariat</option>
          <option>Autre demande</option>
        </select>
      </label>

      <label>
        Message
        <textarea name="message" rows="6" required></textarea>
      </label>

      <button type="submit">Envoyer la demande</button>
    </form>
  </section>
</template>
