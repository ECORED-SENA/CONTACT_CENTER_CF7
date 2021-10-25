<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Indicadores de cobranzas

    p.mb-5 En todas las operaciones de #[i  Contact Center BPO], existen parámetros de medición denominados indicadores de gestión y las operaciones de cobranza no son la excepción, ya que en esta gestión también existen indicadores que todos los gestores de cobro deberán cumplir.
    
    
    .crd.custom_bg_02.pt-5.mb-5 
      .row.justify-content-center

        .col-lg-11.position-relative.mb-5
          .banner_B.mb-5
            .banner_B__img.Img_BG_05A         
            .banner_B__bodyA
              p.mb-0 Es importante tener en cuenta que los indicadores de gestión en cobranza son muy imporantes, puesto que de su cumplimiento depende la continuidad de la campaña y la permanencia de los gestores de cobro en términos de empleabilidad y estabilidad económica.


        .col-lg-11
          .banner_A  
            .banner_A__img.clr_primario_h1
              figure
                img(src="@/assets/curso/tema_2/img_2_02.svg", alt="Gestión de cobro")   
            .banner_A__body
              .txt_container
                p.text-white #[strong ¿Qué es un indicador de gestión?]
                p.text-white.mb-0 Los indicadores se pueden definir como parámetros de medición o métricas que permiten representar numéricamente los desempeños de una operación de cobranza y, a partir de sus resultados, realizar un proceso de toma de decisiones en cuanto a implementación de planes de mejora. Los indicadores de gestión también se conocen bajo la sigla KPI (Key Performance Indicators, en español indicadores claves de desempeño), los que  se definen mediante unos umbrales u objetivos de cumplimiento de acuerdo con la necesidad de la campaña.

    p.mb-5 En la gestión de cobranza, los indicadores KPI son:     

    .row.justify-content-center.mb-5
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema_2/img_2_03.png", alt="Productividad", style="width:100%;").m-auto
            .tarjetaTxt
              p.text-white.mb-0 Este indicador hace referencia al total de llamadas realizadas durante el turno por parte del gestor de cobro, se debe tener en cuenta que la cobranza son operaciones outbound que se realizan mediante sistemas de marcación automática lo que permite mantener una mayor productividad.
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema_2/img_2_04.png", alt="Productividad", style="width:100%;").m-auto
            .tarjetaTxt
              p.text-white.mb-0 Corresponde al total de las llamadas realizadas VS el total de gestiones cumplidas, es decir, mide el total de las promesas de pago realizadas (cumplimiento objetivo de llamada).
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema_2/img_2_05.png", alt="Productividad", style="width:100%;").m-auto
            .tarjetaTxt
              p.text-white.mb-0 Hace referencia al resultado que obtiene cada gestor de cobro durante los monitoreos de las llamadas, se aclara que estos monitoreos pueden ser de manera remota (grabaciones de llamadas) o en tiempo real y fundamentalmente mide que la gestión de cobranzas cumpla con parámetros de comunicación efectiva, persuasión, negociación y consecución de gestión efectiva.

      
      
    p.mb-5 Además de los KPI ya expuestos, existen indicadores adicionales para medir los indicadores de confianza, a saber:

    .row.align-items-center.mb-5
      .col-lg-8
        TabsA.color-primario.mb-5
    
          .tarjeta.clr_acentoCont_h1.p-4(titulo="Contactabilidad")
            h4 Contactabilidad
            p Es el indicador que mide la eficiencia de la base de datos de clientes por llamar en términos de comunicación con ellos, la contactabilidad mide específicamente el número de contactos efectivos durante la jornada de gestión vs. las llamadas de no contacto, que corresponde a los números telefónicos marcados y no contestados, ocupados, de máquina contestadora, etc.

          .tarjeta.clr_acentoCont_h1.p-4(titulo="Eficacia del compromiso")
            h4 Eficacia del compromiso
            p La particularidad del indicador radica en que a partir de los compromisos generados (efectividad), se realiza seguimiento y medición para verificar cuántos de esos compromisos generados realmente se convierten en pagos por parte del deudor.

          .tarjeta.clr_acentoCont_h1.p-4(titulo="Adherencia al turno")
            h4 Adherencia al turno
            p Esta métrica se encarga de verificar que el gestor de cobro cumpla con su horario laboral, aplica desde el momento en que el asesor realiza el proceso de logueo en el CRM, hasta el momento de deslogueo. Este indicador es tenido en cuenta al momento de realizar la liquidación de la nómina de los colaboradores.

          .tarjeta.clr_acentoCont_h1.p-4(titulo="Tiempos efectivos")
            h4 Tiempos efectivos
            p Se trata del indicador que mide los tiempos de duración de las llamadas vs. la efectividad vs. productividad.  Su interpretación es la siguiente: a menor tiempo de duración de la llamada, mayor efectividad y productividad.        
        
      .col-lg-4
        figure
          img(src="@/assets/curso/tema_2/img_2_06.png", alt="Productividad", style="width:300px;").m-auto

    .crd.crd_highligt_rigth.clr_primario_h2.custom_bg_01.mb-5
      .row.justify-content-around.align-items-center
        .col-auto.mb-4.mb-lg-0
          img(src="@/assets/curso/tema_1/icon_1_1_01.svg", style="width:90px").m-auto
        .col-lg
          p.text-white.mb-0 Por último, tenemos el indicador de eficiencia de las acciones de cobranza el cual aplica para las gestiones que se realizan a través de los medios electrónicos, por ejemplo, mensajes de texto enviados (cobranza preventiva), correos electrónicos y chats.         
             
    
    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
