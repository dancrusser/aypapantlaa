//Aqui empieza mi codigo
const seccionesPagina = new fullpage('#fullpage', {
  //___________________________________________
  //   :::::: Opciones Basicas
  //___________________________________________	
  autoScrolling: true, //Se activa el scroll
  fitToSection: false, //Acomoda el scroll automaticamente para que la seccion se muestre en pantalla
  fitToSectionDelay: 300, //Delay antes de acomodar la seccion automaticamente
  easing:'easeInOutCubic', //Funcion de tiempo de la animacion.
  scrollingSpeed: 700, //Velocidad del scroll, valores: en milisegundos
  css3: true, //Si usara CSS3 o javascript
  easingcss3: 'ease-out', //Curva de velocidad del efecto
  loopBottom: false, //Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima seccion
  //___________________________________________
  //   :::::: Barra de Navegacion
  //___________________________________________	
  navigation: true, //Muestra la barra de Navegacion
  menu2: '#menu2', //Menu de navegacion*/
  anchors: ['inicio', 'productos', 'contacto'], //Anclas, las usamos para identificar cada seccion y poder acceder
  navigationTooltips: ['Inicio', 'Productos', 'Contacto'], //Tooltips que mostrara por cada boton.
  showActiveTooltip: false, //Mostrar tooltip activa.
  //___________________________________________
  //   :::::: Secciones
  //___________________________________________
  sectionsColor: ['#000', '#c2c2c2', '#000'], //Color de fondo de cada seccion.
  verticalCentered: true, //Si alineara de forma vertical los contenidos de cada seccion.	
  //___________________________________________
  //   :::::: Slides
  //___________________________________________
  controlArrows: true, //Flechas de Slide.
  slidesNavigation: false, //Indicadores de Slide.
  afterLoad: function(origin, destination){
      if(destination.anchor == 'contacto'){
          document.querySelector('.footer h2').style.opacity = 1;
       }
  }

});
