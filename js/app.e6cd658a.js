(function(e){function a(a){for(var o,r,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(a);while(u.length)u.shift()();return t.push.apply(t,d||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},i={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"ed906f42","chunk-0206bfa0":"43180e95","chunk-04b93936":"fdd9dc59","chunk-13a6037e":"5bb0e99d","chunk-16015154":"47d0109c","chunk-17977988":"0b79cdbe","chunk-2c06842c":"a539447e","chunk-2d208d90":"8f0b021b","chunk-2d21d0e2":"8084ceb7","chunk-2d22c123":"b6fe20f3","chunk-2e80bb9a":"cab1171f","chunk-3145fe0f":"4098f9fc","chunk-319206de":"c02121cd","chunk-328f70dd":"6a57d7fd","chunk-3807499c":"54e8a8e0","chunk-3dc647fd":"494ed364","chunk-4cdd78c0":"337ab599","chunk-4fde0a08":"583c19fb","chunk-515a8379":"fdcdcd40","chunk-53ccb27e":"804ac6f4","chunk-59974754":"28bfa0b6","chunk-766a929b":"11a83165","chunk-839300a6":"8ab37204","chunk-c796899c":"014e1f9d","chunk-dbb9869e":"9141750b",comple:"0c7bf677",creditos:"24e085b8",glosario:"e9d4464c",intro:"0869cd2e",referencias:"1db455a9",tema1:"676c960e",tema2:"c7b43b2b",tema3:"ae5b40e2"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};r[e]?a.push(r[e]):0!==r[e]&&n[e]&&a.push(r[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-319206de":"31d6cfe0","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"d0120593","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"002c4af9","chunk-766a929b":"da8224db","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"2e6a182c",creditos:"616bdfbc",glosario:"5780ba4b",intro:"0e433876",referencias:"20ad1b35",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",i=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var d=t[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===i))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===o||l===i)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var o=a&&a.target&&a.target.src||i,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete r[e],p.parentNode.removeChild(p),n(t)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=i[e]=[a,n]}));a.push(o[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,n[1](u)}i[e]=void 0}};var p=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var p=l;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},i=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),d=Object(s["a"])(c,r,i,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),p=n("8c4f"),f=n("ae58"),m=n("7e58");u["a"].use(p["a"]);var b=new p["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:m["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Gestión de cobro en BPO",descripcionCurso:"A través de este componente formativo, el aprendiz debe apropiar los elementos y conceptos necesarios, relacionados con la gestión de cobranza áreas de <i>Contact Center BPO</i>, todos sus procesos, características e indicadores de gestión que le permitirán afianzar habilidades y destrezas que garanticen procesos de cobranza y recuperación de cartera efectivos.",imagenBannerPrincipal:n("ae0a"),fondoBannerPrincipal:n("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Gestión de cobro y recuperación de cartera",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Cobranza: técnicas y tipos",hash:"T_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Cartera y tipos de cartera",hash:"T_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Recuperación de cartera",hash:"T_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Ley Habeas Data",hash:"T_1_4"},{icono:"far fa-file-alt",numero:"1.5",titulo:"Circulares Superintendencia Financiera",hash:"T_1_5"},{icono:"far fa-file-alt",numero:"1.6",titulo:"Productos financieros",hash:"T_1_6"},{icono:"far fa-file-alt",numero:"1.7",titulo:"Gestión de la información",hash:"T_1_7"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Indicadores de cobranzas",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Reportes",desarrolloContenidos:!0}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Congreso de Colombia. (2008). Ley Estatutaria 1266 del 31 de diciembre de 2008, por la cual se dictan las disposiciones generales del <i>habeas data</i> y se regula el manejo de la información contenida en bases de datos personales, en especial la financiera, crediticia, comercial, de servicios y la proveniente de terceros países y se dictan otras disposiciones. ",link:"http://wp.presidencia.gov.co/sitios/normativa/leyes/Documents/Juridica/Ley%201266%20de%2031%20de%20diciembre%202008.pdf"},{referencia:"Córdoba, P., M. (2012). Gestión financiera. Ecoe Ediciones. ",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69231"},{referencia:"Gil, C., J. C. (2017). El debido proceso en la Ley de <i>Habeas Data</i>. Revista CES Derecho 8(1), 191-204. ",link:"https://revistas.ces.edu.co/index.php/derecho/article/view/4269"},{referencia:"Morales, C., J.A., y Morales, C. A. (2014). Crédito y cobranza. Grupo Editorial Patria. ",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39380"},{referencia:"Velasco, I. (s.f.). Proceso de la cobranza de la cartera. Servicio Nacional de Aprendizaje SENA. "}],glosario:[{termino:"Cartera administrativa",significado:"estrategias establecidas por los acreedores para motivar e incentivar la intención de pago de los deudores en mora."},{termino:"Centrales de información financiera",significado:"entidades de carácter privado que se encargan de almacenar y actualizar información del comportamiento crediticio de los deudores."},{termino:"Cobranza preventiva",significado:"gestión que se realiza por lo general a través de mensajes de texto y chat que tiene como fin recordar al cliente los plazos máximos de pago de sus obligaciones."},{termino:"Negociación",significado:"en la cobranza, corresponde a la estrategia aplicada por un gestor de cobro para lograr que el cliente realice promesa de pago."},{termino:"Objeciones",significado:"dentro de la cobranza, corresponde a las razones que manifiesta el cliente por las que no ha cumplido con la obligación o pagos."},{termino:"Tasas de interés",significado:"para el sistema bancario, corresponde al dinero adicional que un deudor debe pagar a la entidad financiera por concepto del préstamo de algún dinero."}],complementario:[{texto:"López, J. F. (2019). Acuerdo de pago. Economipedia.com ",tipo:"Artículo ",link:"https://economipedia.com/definiciones/acuerdo-de-pago.html"},{texto:"Ley Estatutaria 1266 del 31 de diciembre de 2008, por la cual se dictan las disposiciones generales del <i>habeas data</i> y se regula el manejo de la información contenida en bases de datos personales, en especial la financiera, crediticia, comercial, de servicios y la proveniente de terceros países y se dictan otras disposiciones.  ",tipo:"PDF",descarga:"/downloads/Ley_1266_2008.pdf"},{texto:"Superintendencia Financiera. (2008). Circular Externa 052. Superintendencia Financiera de Colombia. ",tipo:"Artículo",link:"https://www.superfinanciera.gov.co/jsp/Buscador/busqueda/BuscadorArchivos/idRecurso/21560/f/0/c/0"},{texto:"Superintendencia Financiera. (2008). Circular Externa 048. Superintendencia Financiera de Colombia. ",tipo:"Artículo",link:"https://www.superfinanciera.gov.co/inicio/normativa/historico-normas-de-las-anteriores-superintendencias-bancaria-y-de-valores-/historico-de-circulares-superintendencia-bancaria/circulares-externas/-17889"},{texto:"Duemint.com. (2021). ¿Cuáles son las técnicas de cobranza efectiva? ",tipo:"Artículo",link:"https://blog.duemint.com/cuales-son-las-tecnicas-de-cobranza-efectiva/"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Nadia Patricia Granados Amado",cargo:"Instructor Técnico BPO",centro:"Centro de Gestión de Mercados Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Adriana López",cargo:"Diseñadora instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisora Metodológica y Pedagógica",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrector de estilo",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Sandra Carolina Duran López",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Andrés Felipe Herrera Roldan",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"María Carolina Tamayo Lopez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Zuleidy María Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Maria Isabel Román Rueda",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});o["a"].prototype.$config=v;var y=n("9224");o["a"].prototype.$package=y,new o["a"]({router:h,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.2.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},ae0a:function(e,a,n){e.exports=n.p+"img/banner-princiapal.408e9428.svg"},e6b0:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.203a8ee4.png"}});
//# sourceMappingURL=app.e6cd658a.js.map