   		$(document).ready(function () {
         });

   		// $(function() {
      //     $.scrollify({
      //       section : ".seccion",
		  //   sectionName : "seccion",
		  //   interstitialSection : "",
		  //   easing: "easeOutExpo",
		  //   scrollSpeed: 1500,
		  //   offset : 0,
		  //   scrollbars: false,
		  //   standardScrollElements: "",
		  //   setHeights: false,
		  //   overflowScroll: false,
		  //   updateHash: true,
		  //   touchScroll:true,
		  //   before:function() {},
		  //   after:function() {},
		  //   afterResize:function() {
		  //   	if( $(window).width() < 767) {
			// 	   $.scrollify.disable()
			// 	 }else{
			// 	   $.scrollify.enable()
			// 	 }
		  //   },
		  //   afterRender:function() {},
      //     });
      //   });

// --------------- como estaba antes -------------------

      // const icono = document.querySelector('#icono');
      //   menu =  document.querySelector('#nav');
      //   producto = document.querySelectorAll('.ruta');

      // icono.addEventListener('click', (e) =>{
      //   menu.classList.toggle('active');
      // })
      // producto.addEventListener('click', (e) =>{
      //   menu.classList.toggle('active');
      // })
// -------------------------------------------------------

      $('#icono').click(function(){
        $('#nav').toggleClass('active');
        $('#foods').removeClass('opacityno');

          $('#nav .ruta').click(function(){
            $('#nav').addClass('active');
            $('#foods').addClass('opacityno');
          })
        // $('icono').click(function(){
        //   $('#nav').addClass('active');
        // })
      })
      $('#frutas').click(function(){
        $('#foods').toggleClass('close');
      })
      
