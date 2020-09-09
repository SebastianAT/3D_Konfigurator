jQuery('#options').click(function () {
				var isVisible = scene.getObjectByName("werbetafel_1").visible;
				if(isVisible){
					longTrailer.roofPlanes.forEach( part => part.visible = false );
				} else {
					longTrailer.roofPlanes.forEach( part => part.visible = true );
				}
			});
			
			jQuery('#openTrailer').click(function () {
				document.getElementById('openTrailer').text = 'Geschlossener Anhänger';
				if( scene.getObjectByName( 'fenster_body' ).visible == true ){
					longTrailer.glass.forEach( part => part.visible = false );
				} else {
					longTrailer.glass.forEach( part => part.visible = true );
				}
			});
			
			document.getElementById('ausstattung_lok4').addEventListener('change', (event) => {
			  if (event.target.checked) {
				scene.getObjectByName('Scheibe03').visible = true;
				scene.getObjectByName('Scheibe04').visible = true;
				scene.getObjectByName('Scheibe05').visible = true;
				scene.getObjectByName('Scheibe06').visible = true;
				scene.getObjectByName('Scheibetüre01').visible = true;
				scene.getObjectByName('Scheibetüre02').visible = true;
			  } else {
				scene.getObjectByName('Scheibe03').visible = false;
				scene.getObjectByName('Scheibe04').visible = false;
				scene.getObjectByName('Scheibe05').visible = false;
				scene.getObjectByName('Scheibe06').visible = false;
				scene.getObjectByName('Scheibetüre01').visible = false;
				scene.getObjectByName('Scheibetüre02').visible = false;
			  }
			});
			
			jQuery('#open').click(function () {
				if(isLong == true){
					if(openLong == false){
						openLong = true;
						closeLong = false;
						if(handycap_heck == true){
							scene.getObjectByName('fenster_heck_handycap_1').visible = false;
							scene.getObjectByName('fenster_heck_handycap_2').visible = false;
							scene.getObjectByName('fenster_heck_handycap_3').visible = false;
							scene.getObjectByName('fenster_heck_handycap_4').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_1').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_2').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_3').visible = false;
						} else if(handycap_heck == false){
							scene.getObjectByName('fenster_heck_handycap_1').visible = false;
							scene.getObjectByName('fenster_heck_handycap_2').visible = false;
							scene.getObjectByName('fenster_heck_handycap_3').visible = false;
							scene.getObjectByName('fenster_heck_handycap_4').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_1').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_2').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_3').visible = false;
						}
						document.getElementById('open').classList.toggle('btn-success');
						document.getElementById('open').classList.toggle('btn-primary');
						document.getElementById('open').classList.toggle('active');
						document.getElementById('close').classList.toggle('btn-success');
						document.getElementById('close').classList.toggle('btn-primary');
						document.getElementById('close').classList.toggle('active');
						longTrailer.glass.forEach( part => part.visible = false );
					}
				} else if( isShort == true){
					if(openLong == false){
						openLong = true;
						closeLong = false;
						if(handycap_heck == true){	
							scene.getObjectByName('fenster_heck_handycap_1').visible = false;
							scene.getObjectByName('fenster_heck_handycap_2').visible = false;
							scene.getObjectByName('fenster_heck_handycap_3').visible = false;
							scene.getObjectByName('fenster_heck_handycap_4').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_1').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_2').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_3').visible = false;
						} else if(handycap_heck == false){
							scene.getObjectByName('fenster_heck_handycap_1').visible = false;
							scene.getObjectByName('fenster_heck_handycap_2').visible = false;
							scene.getObjectByName('fenster_heck_handycap_3').visible = false;
							scene.getObjectByName('fenster_heck_handycap_4').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_1').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_2').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_3').visible = false;
						}
						document.getElementById('open').classList.toggle('btn-success');
						document.getElementById('open').classList.toggle('btn-primary');
						document.getElementById('open').classList.toggle('active');
						document.getElementById('close').classList.toggle('btn-success');
						document.getElementById('close').classList.toggle('btn-primary');
						document.getElementById('close').classList.toggle('active');
						shortTrailer.glass.forEach( part => part.visible = false );
					}
				}
			});
			
			jQuery('#close').click(function () {
				if(isLong == true){
					if(closeLong == false){
						closeLong = true;
						openLong = false;
						if(handycap_heck == true){
							scene.getObjectByName('fenster_heck_handycap_1').visible = true;
							scene.getObjectByName('fenster_heck_handycap_2').visible = true;
							scene.getObjectByName('fenster_heck_handycap_3').visible = true;
							scene.getObjectByName('fenster_heck_handycap_4').visible = true;
							scene.getObjectByName('fenster_stoß_handycap_1').visible = true;
							scene.getObjectByName('fenster_stoß_handycap_2').visible = true;
							scene.getObjectByName('fenster_stoß_handycap_3').visible = true;
						} else if(handycap_heck == false){
							scene.getObjectByName('fenster_heck_handycap_1').visible = false;
							scene.getObjectByName('fenster_heck_handycap_2').visible = false;
							scene.getObjectByName('fenster_heck_handycap_3').visible = false;
							scene.getObjectByName('fenster_heck_handycap_4').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_1').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_2').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_3').visible = false;
						}
						document.getElementById('close').classList.toggle('btn-success');
						document.getElementById('close').classList.toggle('btn-primary');
						document.getElementById('close').classList.toggle('active');
						document.getElementById('open').classList.toggle('btn-success');
						document.getElementById('open').classList.toggle('btn-primary');
						document.getElementById('open').classList.toggle('active');
						longTrailer.glass.forEach( part => part.visible = true );
					}
				} else if( isShort == true){
					if(closeLong == false){
						closeLong = true;
						openLong = false;
						if(handycap_heck == true){
							scene.getObjectByName('fenster_heck_handycap_1').visible = true;
							scene.getObjectByName('fenster_heck_handycap_2').visible = true;
							scene.getObjectByName('fenster_heck_handycap_3').visible = true;
							scene.getObjectByName('fenster_heck_handycap_4').visible = true;
							scene.getObjectByName('fenster_stoß_handycap_1').visible = true;
							scene.getObjectByName('fenster_stoß_handycap_2').visible = true;
							scene.getObjectByName('fenster_stoß_handycap_3').visible = true;
						} else if(handycap_heck == false){
							scene.getObjectByName('fenster_heck_handycap_1').visible = false;
							scene.getObjectByName('fenster_heck_handycap_2').visible = false;
							scene.getObjectByName('fenster_heck_handycap_3').visible = false;
							scene.getObjectByName('fenster_heck_handycap_4').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_1').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_2').visible = false;
							scene.getObjectByName('fenster_stoß_handycap_3').visible = false;
						}
						document.getElementById('close').classList.toggle('btn-success');
						document.getElementById('close').classList.toggle('btn-primary');
						document.getElementById('close').classList.toggle('active');
						document.getElementById('open').classList.toggle('btn-success');
						document.getElementById('open').classList.toggle('btn-primary');
						document.getElementById('open').classList.toggle('active');
						shortTrailer.glass.forEach( part => part.visible = true );
					}
				}
			});