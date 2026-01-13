<template>
  <div class="ma-4 text-center">
    <h1 class="ma-4">Sobre</h1>
    <p class="ma-4">
      Essa lista de tarefas foi desenvolvida durante um
      <a
        class="courseLink"
        target="_blank"
        href="https://www.udemy.com/course/curso-front-end-developer-vue/?utm_campaign=Search_DSA_Beta_Prof_la.PT_cc.BR_Subs&utm_source=google&utm_medium=paid-search&portfolio=Brazil&utm_audience=mx&utm_tactic=nb&utm_term=&utm_content=g&funnel=Conversion&test=&gad_source=1&gad_campaignid=23011142365&gbraid=0AAAAADROdO1BLmpMiYRNQyE4W3IWzcK4W&gclid=EAIaIQobChMI49r6tMeHkgMVCGFIAB3FfSM_EAAYASAAEgL_zPD_BwE&couponCode=CP250105G1"
        >curso de Vue.js</a
      >
      da Udemy.

    </p>
    <p class="ma-4">
      Abaixo, algumas tecnologias que foram utilizadas.
    </p>
    <v-divider></v-divider>
  </div>
  <div></div>
  <div class="ma-4 d-flex">
    <AboutCard
      v-for="(item, index) in items"
      :key="index"
      :image="item.image"
      :title="item.title"
      :subtitle="item.subtitle"
      :text="item.text"
      :link="item.link"
    ></AboutCard>
  </div>
  <div class="text-center">
    <v-divider class="ma-4"></v-divider>
    <a
      target="_blank"
      href="https://www.linkedin.com/in/natan-o-da-silva/"
      alt="Meu perfil no LinkedIn"
    >
      <v-btn color="primary">Meu perfil no LinkedIn</v-btn>
    </a>
  </div>
</template>
<script setup>
import AboutCard from "./AboutCard.vue";
const items = [
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*OrjCKmou1jT4It5so5gvOA.jpeg",
    title: "Vue.js",
    subtitle: "A abstração progressiva de JavaScript",
    text: "Vue é um framework JavaScript para construção de interfaces de usuário. Ele se baseia em HTML, CSS e JavaScript padrão, e fornece um modelo de programação declarativo e baseado em componentes que ajuda você a desenvolver interfaces de usuário de forma eficiente, sejam elas simples ou complexas.",
    link: "https://vuejs.org/",
  },
  {
    image:
      "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-atom.svg",
    title: "Vuetify 3",
    subtitle: "Incrível biblioteca front-end",
    text: "Vuetify 3 é um framework de interface para Vue 3 que fornece componentes prontos e estilizados seguindo o Material Design.",
    link: "https://vuetifyjs.com/",
  },
  {
    image:
      "https://fineproxy.org/wp-content/uploads/2023/07/netlify.app_logo.png",
    title: "Netlify",
    subtitle:
      "A Netlify incorpora funcionalidade serverless à sua plataforma web.",
    text: "A Netlify é a plataforma moderna de desenvolvimento para empresas que permite alcançar a velocidade, a agilidade e o desempenho de uma arquitetura web escalável e componível.",
    link: "https://www.netlify.com/",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*UWpmhI3AEdFY7gjHIZH-2w.png",
    title: "PWA",
    subtitle: "Progressive Web App",
    text: "Por muito tempo, os aplicativos web ficaram em segundo plano em relação aos aplicativos nativos. Enquanto os apps móveis se beneficiam de acesso total às APIs do dispositivo, desempenho ágil e suporte a recursos como conteúdo offline e notificações push, a natureza sem estado e isolada pelo sandbox do navegador da web frequentemente relegou os aplicativos baseados na web à segunda opção.",
    link: "https://pt.wikipedia.org/wiki/Progressive_web_app",
  },
];
</script>
<style scoped>
.courseLink {
  text-decoration: none;
}
</style>
