<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 ¿Por qué es importante el estudio de la gestión de cobro en el #[i Contact Center BPO]? El siguiente video presenta una respuesta a este interrogante, indicando las temáticas a trabajar. 
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-oyLjvUc4SY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)          
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
