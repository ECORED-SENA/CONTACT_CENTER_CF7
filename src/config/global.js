export default {
  global: {
    componenteFormativo: 'Gestión de cobro en BPO',
    descripcionCurso:
      'A través de este componente formativo, el aprendiz debe apropiar los elementos y conceptos necesarios, relacionados con la gestión de cobranza áreas de <i>Contact Center BPO</i>, todos sus procesos, características e indicadores de gestión que le permitirán afianzar habilidades y destrezas que garanticen procesos de cobranza y recuperación de cartera efectivos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión de cobro y recuperación de cartera',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Cobranza: técnicas y tipos',
            hash: 'T_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Cartera y tipos de cartera',
            hash: 'T_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Recuperación de cartera',
            hash: 'T_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Ley Habeas Data',
            hash: 'T_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Circulares Superintendencia Financiera',
            hash: 'T_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Productos financieros',
            hash: 'T_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Gestión de la información',
            hash: 'T_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Indicadores de cobranzas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Reportes',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      // {
      //   icono: 'fas fa-download',
      //   titulo: 'Descargar material',
      //   download: 'downloads/material.zip',
      // },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (2008). Ley Estatutaria 1266 del 31 de diciembre de 2008, por la cual se dictan las disposiciones generales del <i>habeas data</i> y se regula el manejo de la información contenida en bases de datos personales, en especial la financiera, crediticia, comercial, de servicios y la proveniente de terceros países y se dictan otras disposiciones. ',
      link:
        'http://wp.presidencia.gov.co/sitios/normativa/leyes/Documents/Juridica/Ley%201266%20de%2031%20de%20diciembre%202008.pdf',
    },
    {
      referencia:
        'Córdoba, P., M. (2012). Gestión financiera. Ecoe Ediciones. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69231',
    },
    {
      referencia:
        'Gil, C., J. C. (2017). El debido proceso en la Ley de <i>Habeas Data</i>. Revista CES Derecho 8(1), 191-204. ',
      link: 'https://revistas.ces.edu.co/index.php/derecho/article/view/4269',
    },
    {
      referencia:
        'Morales, C., J.A., y Morales, C. A. (2014). Crédito y cobranza. Grupo Editorial Patria. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39380',
    },
    {
      referencia:
        'Velasco, I. (s.f.). Proceso de la cobranza de la cartera. Servicio Nacional de Aprendizaje SENA. ',
    },
  ],
  glosario: [
    {
      termino: 'Cartera administrativa',
      significado:
        'estrategias establecidas por los acreedores para motivar e incentivar la intención de pago de los deudores en mora.',
    },
    {
      termino: 'Centrales de información financiera',
      significado:
        'entidades de carácter privado que se encargan de almacenar y actualizar información del comportamiento crediticio de los deudores.',
    },
    {
      termino: 'Cobranza preventiva',
      significado:
        'gestión que se realiza por lo general a través de mensajes de texto y chat que tiene como fin recordar al cliente los plazos máximos de pago de sus obligaciones.',
    },
    {
      termino: 'Negociación',
      significado:
        'en la cobranza, corresponde a la estrategia aplicada por un gestor de cobro para lograr que el cliente realice promesa de pago.',
    },
    {
      termino: 'Objeciones',
      significado:
        'dentro de la cobranza, corresponde a las razones que manifiesta el cliente por las que no ha cumplido con la obligación o pagos.',
    },
    {
      termino: 'Tasas de interés',
      significado:
        'para el sistema bancario, corresponde al dinero adicional que un deudor debe pagar a la entidad financiera por concepto del préstamo de algún dinero.',
    },
  ],
  complementario: [
    {
      texto: 'López, J. F. (2019). Acuerdo de pago. Economipedia.com ',
      tipo: 'Artículo ',
      link: 'https://economipedia.com/definiciones/acuerdo-de-pago.html',
    },
    {
      texto:
        'Ley Estatutaria 1266 del 31 de diciembre de 2008, por la cual se dictan las disposiciones generales del <i>habeas data</i> y se regula el manejo de la información contenida en bases de datos personales, en especial la financiera, crediticia, comercial, de servicios y la proveniente de terceros países y se dictan otras disposiciones.  ',
      tipo: 'PDF',
      descarga: '/downloads/Ley_1266_2008.pdf',
    },
    {
      texto:
        'Superintendencia Financiera. (2008). Circular Externa 052. Superintendencia Financiera de Colombia. ',
      tipo: 'Artículo',
      link:
        'https://www.superfinanciera.gov.co/jsp/Buscador/busqueda/BuscadorArchivos/idRecurso/21560/f/0/c/0',
    },
    {
      texto:
        'Superintendencia Financiera. (2008). Circular Externa 048. Superintendencia Financiera de Colombia. ',
      tipo: 'Artículo',
      link:
        'https://www.superfinanciera.gov.co/inicio/normativa/historico-normas-de-las-anteriores-superintendencias-bancaria-y-de-valores-/historico-de-circulares-superintendencia-bancaria/circulares-externas/-17889',
    },
    {
      texto:
        'Duemint.com. (2021). ¿Cuáles son las técnicas de cobranza efectiva? ',
      tipo: 'Artículo',
      link:
        'https://blog.duemint.com/cuales-son-las-tecnicas-de-cobranza-efectiva/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nadia Patricia Granados Amado',
        cargo: 'Instructor Técnico BPO',
        centro:
          'Centro de Gestión de Mercados Logística y Tecnologías de la Información - Regional Distrito Capital',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Duran López',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Maria Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
