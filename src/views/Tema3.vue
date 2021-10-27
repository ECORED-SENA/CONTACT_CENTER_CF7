<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Reportes   
         
    figure
      img(src="@/assets/curso/tema_3/img_3_01.jpg", alt="Reportes").m-auto  

    .crd_02.clr_primario_h0  
      .row.justify-content-center
        .col-10.crd_blackBG     
          .crd.crd_borders.clr_white
            p.mb-0 En las operaciones de #[i  Contact Center], ya sea de servicio al cliente, ventas o cobranza, se miden indicadores de gestión que, como se mencionó anteriormente, son el instrumento para determinar el rendimiento de las campañas pero, además de realizar el proceso de medición, es muy importante realizar el ejercicio de reportar, pues al generar los informes es posible visibilizar de manera más clara y específica el comportamiento de los indicadores y por ende determinar hacia dónde se deben dirigir las estrategias de planes de mejora. 

    .crd_02.clr_primario_h0.mb-5
      .row.justify-content-center.align-items-center.pt-4
        .col-lg-10
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-5.mb-5.mb-lg-5
              figure
                img(src="@/assets/curso/tema_3/img_3_02.svg", alt="Operaciones de cobranza", style="width:300px;").m-auto  
            .col-lg-7.px-5.p-lg-0
              p En las operaciones de cobranza, los reportes de gestión se realizan teniendo en cuenta tres parámetros fundamentales para la gestión, que son:
              ul.lista-ul--color
                li 
                  i.far.fa-dot-circle
                  | La operación.
                li 
                  i.far.fa-dot-circle
                  | La calidad.
                li 
                  i.far.fa-dot-circle
                  | El estado de cartera morosa de los clientes.

    p.mb-5 Y los tipos de reportes de gestión son:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--primario_h0")
          .row(titulo="Reporte de operación")
            .col-12
              p Contempla el resultado obtenido durante la gestión, en indicadores como productividad, efectividad, contactabilidad, adherencia al turno y tiempos efectivos; los intervalos de medición pueden ser por horas, diarios, por semana, por quincena y por mes.  Estos reportes se generan automáticamente los #[i software] especializados para #[i  Contact Center] y gestiones de cobro y, en la mayoría de los casos, los supervisores de las operaciones los utilizan para entregar retroalimentación inmediata de su desempeño a los gestores de cobro y por ende implementar las respectivas acciones de mejora.  

          .row(titulo="Reportes de calidad")
            .col-12
              p Corresponde al resultado de los desempeños de los asesores. Para la gestión de estos reportes no se requiere de un software especial, en la mayoría de los casos se utiliza un instrumento de evaluación denominado matriz de calidad que contiene las variables y las ponderaciones para la respectiva medición, el proceso de evaluación se realiza mediante el monitoreo de llamadas de los asesores (escucha de llamadas grabadas o en línea)  y esta gestión siempre está a cargo de los analistas de calidad que, además de escuchar las llamadas, deben dar retroalimentación de su desempeño a los gestores de cobro y acompañar en la aplicación de los planes de mejora.  
            
      .col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0
        figure
          img(src="@/assets/curso/tema_3/img_3_03.png", alt="Tipos de reportes", style="width:300px;").m-auto

      

    .tarjeta.clr_secundario_h0.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/componentes/info.svg")

        .col-md.col-lg-6
          h4 Ejemplo de matriz de calidad para cobranza
          p.mb-4 Como ejemplo de un reporte de calidad, se presenta el siguiente formato de monitoreo de llamadas de cobranza.
          
          a.boton.color-acento-botones(:href="obtenerLink('/downloads/Monitoreo_Llamada_Cobranza.pdf')" target="_blank" type="application/pdf")
            span.clr_text_sistema Descargar
            i.clr_text_sistema.fas.fa-file-download

    h3 Informes de gestión de campañas

    p.mb-5 Avanzando en el tema de informes de gestión, lo primero que se debe establecer, es que no es lo mismo generar un reporte que hacer un informe. Como se vio, el reporte es la posibilidad que se tiene de obtener resultados de la gestión de manera inmediata para acciones inmediatas, mientras que los informes son documentos generados por las personas delegadas para ello, que contienen los resultados de la gestión, con un enfoque mucho más gerencial.  

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.crl_gray.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema_3/img_3_04.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Es decir, el informe contiene un análisis, unas causas del resultado, en algunos casos puede contener secuencialidad y trazabilidad de los indicadores, análisis comparativo respecto a otros periodos de tiempo y siempre van dirigidos a jerarquías más altas dentro de la operación, como por ejemplo a los gerentes de operaciones o directores. 

    p.mb-0 En la mayoría de los casos estos informes de gestión tienen la finalidad de mostrar el comportamiento de la operación y de los gestores de cobro a la luz del resultado de todos los indicadores de gestión y son la principal herramienta dentro de la campaña para la toma de decisiones.



    
    

</template>

<script>
export default {
  name: 'Tema3',
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
