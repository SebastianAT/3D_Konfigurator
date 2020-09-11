

function myFunction(elmnt, clr) {
    var tmp = elmnt.id;
    if (clr == 1) {
        tmp = elmnt.id
    }

    if (clr == 1) {
        if (document.getElementById(tmp).checked) {
            scene.getObjectByName('Drehlicht').visible = true;
        } else {
            scene.getObjectByName('Drehlicht').visible = false;
        }
    } else {
        var t1 = 'Drehlicht_anh' + (clr - 1);
        if (document.getElementById(tmp).checked) {
            scene.getObjectByName(t1).visible = true;
        } else {
            scene.getObjectByName(t1).visible = false;
        }
    }
}

function setSkitraeger(elmnt, nr) {
    var tmp = elmnt.id;
    var tmp2 = parseInt(nr) + 2;
    if (document.getElementById(tmp).checked) {
        if (nr >= 4) {
            if (scene.getObjectByName('Handycap_Rampe_2_anh' + nr).visible == false) {
                if (scene.getObjectByName('skitraeger_luxus_1_anh' + nr).visible == false) {
                    scene.getObjectByName('skitraeger_standard_1_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_standard_5_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_standard_6_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_standard_7_anh' + nr).visible = true;
                    scene.getObjectByName('H11_Ruecklicht_anh' + nr).visible = false;
                    scene.getObjectByName('H12_Ruecklicht_anh' + nr).visible = false;
                } else {
                    document.getElementById("skitraeger_luxus" + nr).checked = false;
                    scene.getObjectByName('skitraeger_luxus_1_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_luxus_2_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_luxus_3_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_standard_2_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_standard_3_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_standard_1_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_standard_5_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_standard_6_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_standard_7_anh' + nr).visible = true;
                    scene.getObjectByName('H11_Ruecklicht_anh' + nr).visible = false;
                    scene.getObjectByName('H12_Ruecklicht_anh' + nr).visible = false
                }
            }

        } else {

            if (counter2 == tmp2) {
                if (scene.getObjectByName('skitraeger_luxus_1_anh' + nr).visible == false) {
                    scene.getObjectByName('skitraeger_standard_1_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_standard_2_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_standard_3_anh' + nr).visible = true;

                    for (var i = 1; i < 4; i++) {
                        if (i != nr) {
                            if ((counter2 == 3 && i == 1) || (counter2 == 4 && (i == 1 || i == 2)) || (counter2 == 5 && (i == 1 || i == 2 || i == 3))) {
                                if (scene.getObjectByName('skitraeger_luxus_2_anh' + i).visible == true) {
                                    document.getElementById("skitraeger_luxus" + i).checked = false;
                                    scene.getObjectByName('skitraeger_luxus_1_anh' + i).visible = false;
                                    scene.getObjectByName('skitraeger_luxus_2_anh' + i).visible = false;
                                    scene.getObjectByName('skitraeger_luxus_3_anh' + i).visible = false;
                                    scene.getObjectByName('skitraeger_luxus_4_anh' + i).visible = false;
                                    scene.getObjectByName('skitraeger_luxus_5_anh' + i).visible = false;
                                    scene.getObjectByName('skitraeger_luxus_6_anh' + i).visible = false;
                                }
                                if (scene.getObjectByName('skitraeger_standard_1_anh' + i).visible == true) {
                                    document.getElementById("skitraeger" + i).checked = false;
                                    scene.getObjectByName('skitraeger_standard_1_anh' + i).visible = false;
                                    scene.getObjectByName('skitraeger_standard_2_anh' + i).visible = false;
                                    scene.getObjectByName('skitraeger_standard_3_anh' + i).visible = false;
                                }
                            }
                        }
                    }

                } else {
                    document.getElementById("skitraeger_luxus" + nr).checked = false;
                    scene.getObjectByName('skitraeger_luxus_1_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_luxus_2_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_luxus_3_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_luxus_4_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_luxus_5_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_luxus_6_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_standard_1_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_standard_2_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_standard_3_anh' + nr).visible = true;
                }
            } else {
                alert("Only for last trailer");
                document.getElementById("skitraeger" + nr).checked = false;
            }

        }
    } else {

        if (nr >= 4) {
            scene.getObjectByName('skitraeger_standard_1_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_5_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_6_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_7_anh' + nr).visible = false;
            scene.getObjectByName('H11_Ruecklicht_anh' + nr).visible = true;
            scene.getObjectByName('H12_Ruecklicht_anh' + nr).visible = true;

        } else {
            scene.getObjectByName('skitraeger_standard_1_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_2_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_3_anh' + nr).visible = false;
        }

    }
}

function setWerbetafel(elmnt, nr) {
    var tmp = elmnt.id;

    if (document.getElementById(tmp).checked) {
        scene.getObjectByName('Werbetafel_1_anh' + nr).visible = true;
        scene.getObjectByName('Werbetafel_2_anh' + nr).visible = true;
		billboards_normal = true;
		
		if(billboards_lamps == true){
			scene.getObjectByName('coloredLamps_anh' + nr).visible = false;
			billboards_lamps = false;
			
			document.getElementById('werbetafel_beleuchtung'+nr).checked = false;
		}
    } else {
        scene.getObjectByName('Werbetafel_1_anh' + nr).visible = false;
        scene.getObjectByName('Werbetafel_2_anh' + nr).visible = false;
		billboards_normal = false;
    }

}

function setWerbetafelLamps(elmnt, nr) {
    var tmp = elmnt.id;
    if (document.getElementById(tmp).checked) {
        scene.getObjectByName('Werbetafel_1_anh' + nr).visible = true;
        scene.getObjectByName('Werbetafel_2_anh' + nr).visible = true;
        scene.getObjectByName('coloredLamps_anh' + nr).visible = true;
		billboards_lamps = true;
		
		if(billboards_normal == true){
			billboards_normal = false;
			
			document.getElementById('werbetafel'+nr).checked = false;
		}
    } else {
        scene.getObjectByName('Werbetafel_1_anh' + nr).visible = false;
        scene.getObjectByName('Werbetafel_2_anh' + nr).visible = false;
        scene.getObjectByName('coloredLamps_anh' + nr).visible = false;
		billboards_lamps = false;
    }

}

function setDachtransparent(elmnt, nr) {
    var tmp = elmnt.id;
    if (document.getElementById(tmp).checked) {
        scene.getObjectByName('Dach_transparent_1_anh' + nr).visible = true;
        scene.getObjectByName('Dach_transparent_2_anh' + nr).visible = true;
        scene.getObjectByName('Dach_transparent_3_anh' + nr).visible = true;
        scene.getObjectByName('Dach_Geschlossen_anh' + nr).visible = false;
    } else {
        scene.getObjectByName('Dach_transparent_1_anh' + nr).visible = false;
        scene.getObjectByName('Dach_transparent_2_anh' + nr).visible = false;
        scene.getObjectByName('Dach_transparent_3_anh' + nr).visible = false;
        scene.getObjectByName('Dach_Geschlossen_anh' + nr).visible = true;
    }
}

function setPVC(elmnt, nr) {
    var tmp = elmnt.id;
    if (document.getElementById(tmp).checked) {
        if (nr == 1) {
            closed1 = null;
            document.getElementById('open' + nr).classList.remove('btn-success');
            document.getElementById('open' + nr).classList.add('btn-primary');
            document.getElementById('open' + nr).classList.remove('active');
            document.getElementById('close' + nr).classList.remove('btn-success');
            document.getElementById('close' + nr).classList.add('btn-primary');
            document.getElementById('close' + nr).classList.remove('active');

            scene.getObjectByName('pvc1_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc2_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc3_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc4_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc5_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc6_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc7_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc8_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc9_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc10_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc11_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc12_anh' + nr + '').visible = true;

            scene.getObjectByName('pvc1_1_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_2_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_3_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_4_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_5_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_6_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_7_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_8_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_9_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_10_anh' + nr + '').visible = false;

            scene.getObjectByName('fenster_body_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_body_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_body_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_body_4_anh' + nr).visible = false;
            scene.getObjectByName('fenster_body_5_anh' + nr).visible = false;
            scene.getObjectByName('fenster_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_4_anh' + nr).visible = false;
            scene.getObjectByName('fenster_5_anh' + nr).visible = false;
            scene.getObjectByName('fenster_8_anh' + nr).visible = false;
            scene.getObjectByName('fenster_9_anh' + nr).visible = false;
            scene.getObjectByName('fenster_10_anh' + nr).visible = false;
            scene.getObjectByName('fenster_11_anh' + nr).visible = false;
            scene.getObjectByName('fenster_12_anh' + nr).visible = false;
            scene.getObjectByName('fenster_ganz_heck_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_6_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_7_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_8_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_9_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_10_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_11_anh' + nr).visible = false;
            scene.getObjectByName('fenster_rahmen_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_4_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_3_anh' + nr).visible = false;
            scene.getObjectByName('stoß_1_anh' + nr).visible = false;
            scene.getObjectByName('stoß_2_anh' + nr).visible = false;
            scene.getObjectByName('stoß_3_anh' + nr).visible = false;
            scene.getObjectByName('stoß_4_anh' + nr).visible = false;
            scene.getObjectByName('stoß_5_anh' + nr).visible = false;
            scene.getObjectByName('stoß_6_anh' + nr).visible = false;
            scene.getObjectByName('stoß_7_anh' + nr).visible = false;
            scene.getObjectByName('stoß_8_anh' + nr).visible = false;
            scene.getObjectByName('stoß_9_anh' + nr).visible = false;
            scene.getObjectByName('stoß_10_anh' + nr).visible = false;
            scene.getObjectByName('stoß_101_anh' + nr).visible = false;
            scene.getObjectByName('stoß_11_anh' + nr).visible = false;
            scene.getObjectByName('stoß_15_anh' + nr).visible = false;
            scene.getObjectByName('stoß_16_anh' + nr).visible = false;
            scene.getObjectByName('stoß_161_anh' + nr).visible = false;
            scene.getObjectByName('stoß_17_anh' + nr).visible = false;

            pvc1 = true;
        } else if (nr == 2) {
            closed2 = null;
            document.getElementById('open' + nr).classList.remove('btn-success');
            document.getElementById('open' + nr).classList.add('btn-primary');
            document.getElementById('open' + nr).classList.remove('active');
            document.getElementById('close' + nr).classList.remove('btn-success');
            document.getElementById('close' + nr).classList.add('btn-primary');
            document.getElementById('close' + nr).classList.remove('active');

            scene.getObjectByName('pvc1_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc2_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc3_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc4_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc5_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc6_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc7_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc8_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc9_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc10_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc11_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc12_anh' + nr + '').visible = true;

            scene.getObjectByName('pvc1_1_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_2_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_3_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_4_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_5_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_6_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_7_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_8_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_9_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_10_anh' + nr + '').visible = false;

            scene.getObjectByName('fenster_body_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_body_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_body_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_body_4_anh' + nr).visible = false;
            scene.getObjectByName('fenster_body_5_anh' + nr).visible = false;
            scene.getObjectByName('fenster_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_4_anh' + nr).visible = false;
            scene.getObjectByName('fenster_5_anh' + nr).visible = false;
            scene.getObjectByName('fenster_8_anh' + nr).visible = false;
            scene.getObjectByName('fenster_9_anh' + nr).visible = false;
            scene.getObjectByName('fenster_10_anh' + nr).visible = false;
            scene.getObjectByName('fenster_11_anh' + nr).visible = false;
            scene.getObjectByName('fenster_12_anh' + nr).visible = false;
            scene.getObjectByName('fenster_ganz_heck_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_6_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_7_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_8_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_9_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_10_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_11_anh' + nr).visible = false;
            scene.getObjectByName('fenster_rahmen_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_4_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_3_anh' + nr).visible = false;
            scene.getObjectByName('stoß_1_anh' + nr).visible = false;
            scene.getObjectByName('stoß_2_anh' + nr).visible = false;
            scene.getObjectByName('stoß_3_anh' + nr).visible = false;
            scene.getObjectByName('stoß_4_anh' + nr).visible = false;
            scene.getObjectByName('stoß_5_anh' + nr).visible = false;
            scene.getObjectByName('stoß_6_anh' + nr).visible = false;
            scene.getObjectByName('stoß_7_anh' + nr).visible = false;
            scene.getObjectByName('stoß_8_anh' + nr).visible = false;
            scene.getObjectByName('stoß_9_anh' + nr).visible = false;
            scene.getObjectByName('stoß_10_anh' + nr).visible = false;
            scene.getObjectByName('stoß_101_anh' + nr).visible = false;
            scene.getObjectByName('stoß_11_anh' + nr).visible = false;
            scene.getObjectByName('stoß_15_anh' + nr).visible = false;
            scene.getObjectByName('stoß_16_anh' + nr).visible = false;
            scene.getObjectByName('stoß_161_anh' + nr).visible = false;
            scene.getObjectByName('stoß_17_anh' + nr).visible = false;

            pvc2 = true;
        } else if (nr == 3) {
            closed3 = null;
            document.getElementById('open' + nr).classList.remove('btn-success');
            document.getElementById('open' + nr).classList.add('btn-primary');
            document.getElementById('open' + nr).classList.remove('active');
            document.getElementById('close' + nr).classList.remove('btn-success');
            document.getElementById('close' + nr).classList.add('btn-primary');
            document.getElementById('close' + nr).classList.remove('active');

            scene.getObjectByName('pvc1_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc2_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc3_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc4_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc5_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc6_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc7_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc8_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc9_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc10_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc11_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc12_anh' + nr + '').visible = true;

            scene.getObjectByName('pvc1_1_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_2_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_3_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_4_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_5_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_6_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_7_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_8_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_9_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_10_anh' + nr + '').visible = false;

            scene.getObjectByName('fenster_body_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_body_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_body_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_body_4_anh' + nr).visible = false;
            scene.getObjectByName('fenster_body_5_anh' + nr).visible = false;
            scene.getObjectByName('fenster_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_4_anh' + nr).visible = false;
            scene.getObjectByName('fenster_5_anh' + nr).visible = false;
            scene.getObjectByName('fenster_8_anh' + nr).visible = false;
            scene.getObjectByName('fenster_9_anh' + nr).visible = false;
            scene.getObjectByName('fenster_10_anh' + nr).visible = false;
            scene.getObjectByName('fenster_11_anh' + nr).visible = false;
            scene.getObjectByName('fenster_12_anh' + nr).visible = false;
            scene.getObjectByName('fenster_ganz_heck_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_6_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_7_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_8_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_9_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_10_anh' + nr).visible = false;
            scene.getObjectByName('fenster_beweglich_11_anh' + nr).visible = false;
            scene.getObjectByName('fenster_rahmen_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_4_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_3_anh' + nr).visible = false;
            scene.getObjectByName('stoß_1_anh' + nr).visible = false;
            scene.getObjectByName('stoß_2_anh' + nr).visible = false;
            scene.getObjectByName('stoß_3_anh' + nr).visible = false;
            scene.getObjectByName('stoß_4_anh' + nr).visible = false;
            scene.getObjectByName('stoß_5_anh' + nr).visible = false;
            scene.getObjectByName('stoß_6_anh' + nr).visible = false;
            scene.getObjectByName('stoß_7_anh' + nr).visible = false;
            scene.getObjectByName('stoß_8_anh' + nr).visible = false;
            scene.getObjectByName('stoß_9_anh' + nr).visible = false;
            scene.getObjectByName('stoß_10_anh' + nr).visible = false;
            scene.getObjectByName('stoß_101_anh' + nr).visible = false;
            scene.getObjectByName('stoß_11_anh' + nr).visible = false;
            scene.getObjectByName('stoß_15_anh' + nr).visible = false;
            scene.getObjectByName('stoß_16_anh' + nr).visible = false;
            scene.getObjectByName('stoß_161_anh' + nr).visible = false;
            scene.getObjectByName('stoß_17_anh' + nr).visible = false;

            pvc3 = true;
        } else if (nr == 4) {
            closed4 = null;
            document.getElementById('open' + nr).classList.remove('btn-success');
            document.getElementById('open' + nr).classList.add('btn-primary');
            document.getElementById('open' + nr).classList.remove('active');
            document.getElementById('close' + nr).classList.remove('btn-success');
            document.getElementById('close' + nr).classList.add('btn-primary');
            document.getElementById('close' + nr).classList.remove('active');

            scene.getObjectByName('pvc1_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc2_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc3_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc4_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc5_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc6_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc7_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc8_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc9_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc10_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc11_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc12_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc13_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc14_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc15_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc16_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc17_anh' + nr + '').visible = true;

            scene.getObjectByName('pvc1_1_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_2_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_3_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_4_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_5_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_6_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_7_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_8_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_9_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_10_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_11_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_12_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_13_anh' + nr + '').visible = false;

            longTrailerNr1.glass.forEach(part => part.visible = false);
            scene.getObjectByName('fenster_heck_handycap_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_4_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_ganz_heck_anh' + nr).visible = false;

            pvc4 = true;
        } else if (nr == 5) {
            closed5 = null;
            document.getElementById('open' + nr).classList.remove('btn-success');
            document.getElementById('open' + nr).classList.add('btn-primary');
            document.getElementById('open' + nr).classList.remove('active');
            document.getElementById('close' + nr).classList.remove('btn-success');
            document.getElementById('close' + nr).classList.add('btn-primary');
            document.getElementById('close' + nr).classList.remove('active');

            scene.getObjectByName('pvc1_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc2_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc3_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc4_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc5_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc6_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc7_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc8_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc9_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc10_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc11_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc12_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc13_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc14_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc15_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc16_anh' + nr + '').visible = true;
            scene.getObjectByName('pvc17_anh' + nr + '').visible = true;

            scene.getObjectByName('pvc1_1_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_2_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_3_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_4_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_5_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_6_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_7_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_8_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_9_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_10_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_11_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_12_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_13_anh' + nr + '').visible = false;

            longTrailerNr2.glass.forEach(part => part.visible = false);
            scene.getObjectByName('fenster_heck_handycap_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_4_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_ganz_heck_anh' + nr).visible = false;

            pvc5 = true;
        }
    } else {
        if (nr == 1) {
            closed1 = true;
            document.getElementById('open' + nr).classList.remove('btn-success');
            document.getElementById('open' + nr).classList.add('btn-primary');
            document.getElementById('open' + nr).classList.remove('active');
            document.getElementById('close' + nr).classList.add('btn-success');
            document.getElementById('close' + nr).classList.add('btn-primary');
            document.getElementById('close' + nr).classList.add('active');

            scene.getObjectByName('pvc1_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc2_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc3_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc4_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc5_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc6_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc7_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc8_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc9_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc10_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc11_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc12_anh' + nr + '').visible = false;

            scene.getObjectByName('pvc1_1_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_2_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_3_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_4_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_5_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_6_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_7_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_8_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_9_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_10_anh' + nr + '').visible = false;
            pvcClosed1 = false;
            pvc1 = false;

            scene.getObjectByName('fenster_body_1_anh' + nr).visible = true;
            scene.getObjectByName('fenster_body_2_anh' + nr).visible = true;
            scene.getObjectByName('fenster_body_3_anh' + nr).visible = true;
            scene.getObjectByName('fenster_body_4_anh' + nr).visible = true;
            scene.getObjectByName('fenster_body_5_anh' + nr).visible = true;
            scene.getObjectByName('fenster_1_anh' + nr).visible = true;
            scene.getObjectByName('fenster_2_anh' + nr).visible = true;
            scene.getObjectByName('fenster_3_anh' + nr).visible = true;
            scene.getObjectByName('fenster_4_anh' + nr).visible = true;
            scene.getObjectByName('fenster_5_anh' + nr).visible = true;
            scene.getObjectByName('fenster_8_anh' + nr).visible = true;
            scene.getObjectByName('fenster_9_anh' + nr).visible = true;
            scene.getObjectByName('fenster_10_anh' + nr).visible = true;
            scene.getObjectByName('fenster_11_anh' + nr).visible = true;
            scene.getObjectByName('fenster_12_anh' + nr).visible = true;
            scene.getObjectByName('fenster_ganz_heck_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_1_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_2_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_6_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_7_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_8_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_9_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_10_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_11_anh' + nr).visible = true;
            scene.getObjectByName('fenster_rahmen_anh' + nr).visible = true;
            scene.getObjectByName('fenster_heck_handycap_1_anh' + nr).visible = true;
            scene.getObjectByName('fenster_heck_handycap_2_anh' + nr).visible = true;
            scene.getObjectByName('fenster_heck_handycap_3_anh' + nr).visible = true;
            scene.getObjectByName('fenster_heck_handycap_4_anh' + nr).visible = true;
            scene.getObjectByName('fenster_stoß_handycap_1_anh' + nr).visible = true;
            scene.getObjectByName('fenster_stoß_handycap_2_anh' + nr).visible = true;
            scene.getObjectByName('fenster_stoß_handycap_3_anh' + nr).visible = true;
            scene.getObjectByName('stoß_1_anh' + nr).visible = true;
            scene.getObjectByName('stoß_2_anh' + nr).visible = true;
            scene.getObjectByName('stoß_3_anh' + nr).visible = true;
            scene.getObjectByName('stoß_4_anh' + nr).visible = true;
            scene.getObjectByName('stoß_5_anh' + nr).visible = true;
            scene.getObjectByName('stoß_6_anh' + nr).visible = true;
            scene.getObjectByName('stoß_7_anh' + nr).visible = true;
            scene.getObjectByName('stoß_8_anh' + nr).visible = true;
            scene.getObjectByName('stoß_9_anh' + nr).visible = true;
            scene.getObjectByName('stoß_10_anh' + nr).visible = true;
            scene.getObjectByName('stoß_101_anh' + nr).visible = true;
            scene.getObjectByName('stoß_11_anh' + nr).visible = true;
            scene.getObjectByName('stoß_15_anh' + nr).visible = true;
            scene.getObjectByName('stoß_16_anh' + nr).visible = true;
            scene.getObjectByName('stoß_161_anh' + nr).visible = true;
            scene.getObjectByName('stoß_17_anh' + nr).visible = true;
        } else if (nr == 2) {
            closed2 = true;
            document.getElementById('open' + nr).classList.remove('btn-success');
            document.getElementById('open' + nr).classList.add('btn-primary');
            document.getElementById('open' + nr).classList.remove('active');
            document.getElementById('close' + nr).classList.add('btn-success');
            document.getElementById('close' + nr).classList.add('btn-primary');
            document.getElementById('close' + nr).classList.add('active');

            scene.getObjectByName('pvc1_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc2_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc3_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc4_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc5_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc6_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc7_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc8_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc9_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc10_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc11_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc12_anh' + nr + '').visible = false;

            scene.getObjectByName('pvc1_1_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_2_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_3_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_4_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_5_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_6_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_7_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_8_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_9_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_10_anh' + nr + '').visible = false;
            pvcClosed2 = false;
            pvc2 = false;

            scene.getObjectByName('fenster_body_1_anh' + nr).visible = true;
            scene.getObjectByName('fenster_body_2_anh' + nr).visible = true;
            scene.getObjectByName('fenster_body_3_anh' + nr).visible = true;
            scene.getObjectByName('fenster_body_4_anh' + nr).visible = true;
            scene.getObjectByName('fenster_body_5_anh' + nr).visible = true;
            scene.getObjectByName('fenster_1_anh' + nr).visible = true;
            scene.getObjectByName('fenster_2_anh' + nr).visible = true;
            scene.getObjectByName('fenster_3_anh' + nr).visible = true;
            scene.getObjectByName('fenster_4_anh' + nr).visible = true;
            scene.getObjectByName('fenster_5_anh' + nr).visible = true;
            scene.getObjectByName('fenster_8_anh' + nr).visible = true;
            scene.getObjectByName('fenster_9_anh' + nr).visible = true;
            scene.getObjectByName('fenster_10_anh' + nr).visible = true;
            scene.getObjectByName('fenster_11_anh' + nr).visible = true;
            scene.getObjectByName('fenster_12_anh' + nr).visible = true;
            scene.getObjectByName('fenster_ganz_heck_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_1_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_2_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_6_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_7_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_8_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_9_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_10_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_11_anh' + nr).visible = true;
            scene.getObjectByName('fenster_rahmen_anh' + nr).visible = true;
            scene.getObjectByName('fenster_heck_handycap_1_anh' + nr).visible = true;
            scene.getObjectByName('fenster_heck_handycap_2_anh' + nr).visible = true;
            scene.getObjectByName('fenster_heck_handycap_3_anh' + nr).visible = true;
            scene.getObjectByName('fenster_heck_handycap_4_anh' + nr).visible = true;
            scene.getObjectByName('fenster_stoß_handycap_1_anh' + nr).visible = true;
            scene.getObjectByName('fenster_stoß_handycap_2_anh' + nr).visible = true;
            scene.getObjectByName('fenster_stoß_handycap_3_anh' + nr).visible = true;
            scene.getObjectByName('stoß_1_anh' + nr).visible = true;
            scene.getObjectByName('stoß_2_anh' + nr).visible = true;
            scene.getObjectByName('stoß_3_anh' + nr).visible = true;
            scene.getObjectByName('stoß_4_anh' + nr).visible = true;
            scene.getObjectByName('stoß_5_anh' + nr).visible = true;
            scene.getObjectByName('stoß_6_anh' + nr).visible = true;
            scene.getObjectByName('stoß_7_anh' + nr).visible = true;
            scene.getObjectByName('stoß_8_anh' + nr).visible = true;
            scene.getObjectByName('stoß_9_anh' + nr).visible = true;
            scene.getObjectByName('stoß_10_anh' + nr).visible = true;
            scene.getObjectByName('stoß_101_anh' + nr).visible = true;
            scene.getObjectByName('stoß_11_anh' + nr).visible = true;
            scene.getObjectByName('stoß_15_anh' + nr).visible = true;
            scene.getObjectByName('stoß_16_anh' + nr).visible = true;
            scene.getObjectByName('stoß_161_anh' + nr).visible = true;
            scene.getObjectByName('stoß_17_anh' + nr).visible = true;
        } else if (nr == 3) {
            closed3 = true;
            document.getElementById('open' + nr).classList.remove('btn-success');
            document.getElementById('open' + nr).classList.add('btn-primary');
            document.getElementById('open' + nr).classList.remove('active');
            document.getElementById('close' + nr).classList.add('btn-success');
            document.getElementById('close' + nr).classList.add('btn-primary');
            document.getElementById('close' + nr).classList.add('active');

            scene.getObjectByName('pvc1_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc2_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc3_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc4_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc5_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc6_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc7_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc8_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc9_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc10_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc11_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc12_anh' + nr + '').visible = false;

            scene.getObjectByName('pvc1_1_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_2_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_3_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_4_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_5_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_6_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_7_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_8_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_9_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_10_anh' + nr + '').visible = false;
            pvcClosed3 = false;
            pvc3 = false;

            scene.getObjectByName('fenster_body_1_anh' + nr).visible = true;
            scene.getObjectByName('fenster_body_2_anh' + nr).visible = true;
            scene.getObjectByName('fenster_body_3_anh' + nr).visible = true;
            scene.getObjectByName('fenster_body_4_anh' + nr).visible = true;
            scene.getObjectByName('fenster_body_5_anh' + nr).visible = true;
            scene.getObjectByName('fenster_1_anh' + nr).visible = true;
            scene.getObjectByName('fenster_2_anh' + nr).visible = true;
            scene.getObjectByName('fenster_3_anh' + nr).visible = true;
            scene.getObjectByName('fenster_4_anh' + nr).visible = true;
            scene.getObjectByName('fenster_5_anh' + nr).visible = true;
            scene.getObjectByName('fenster_8_anh' + nr).visible = true;
            scene.getObjectByName('fenster_9_anh' + nr).visible = true;
            scene.getObjectByName('fenster_10_anh' + nr).visible = true;
            scene.getObjectByName('fenster_11_anh' + nr).visible = true;
            scene.getObjectByName('fenster_12_anh' + nr).visible = true;
            scene.getObjectByName('fenster_ganz_heck_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_1_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_2_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_6_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_7_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_8_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_9_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_10_anh' + nr).visible = true;
            scene.getObjectByName('fenster_beweglich_11_anh' + nr).visible = true;
            scene.getObjectByName('fenster_rahmen_anh' + nr).visible = true;
            scene.getObjectByName('fenster_heck_handycap_1_anh' + nr).visible = true;
            scene.getObjectByName('fenster_heck_handycap_2_anh' + nr).visible = true;
            scene.getObjectByName('fenster_heck_handycap_3_anh' + nr).visible = true;
            scene.getObjectByName('fenster_heck_handycap_4_anh' + nr).visible = true;
            scene.getObjectByName('fenster_stoß_handycap_1_anh' + nr).visible = true;
            scene.getObjectByName('fenster_stoß_handycap_2_anh' + nr).visible = true;
            scene.getObjectByName('fenster_stoß_handycap_3_anh' + nr).visible = true;
            scene.getObjectByName('stoß_1_anh' + nr).visible = true;
            scene.getObjectByName('stoß_2_anh' + nr).visible = true;
            scene.getObjectByName('stoß_3_anh' + nr).visible = true;
            scene.getObjectByName('stoß_4_anh' + nr).visible = true;
            scene.getObjectByName('stoß_5_anh' + nr).visible = true;
            scene.getObjectByName('stoß_6_anh' + nr).visible = true;
            scene.getObjectByName('stoß_7_anh' + nr).visible = true;
            scene.getObjectByName('stoß_8_anh' + nr).visible = true;
            scene.getObjectByName('stoß_9_anh' + nr).visible = true;
            scene.getObjectByName('stoß_10_anh' + nr).visible = true;
            scene.getObjectByName('stoß_101_anh' + nr).visible = true;
            scene.getObjectByName('stoß_11_anh' + nr).visible = true;
            scene.getObjectByName('stoß_15_anh' + nr).visible = true;
            scene.getObjectByName('stoß_16_anh' + nr).visible = true;
            scene.getObjectByName('stoß_161_anh' + nr).visible = true;
            scene.getObjectByName('stoß_17_anh' + nr).visible = true;
        } else if (nr == 4) {
            closed4 = true;
            document.getElementById('open' + nr).classList.remove('btn-success');
            document.getElementById('open' + nr).classList.add('btn-primary');
            document.getElementById('open' + nr).classList.remove('active');
            document.getElementById('close' + nr).classList.add('btn-success');
            document.getElementById('close' + nr).classList.add('btn-primary');
            document.getElementById('close' + nr).classList.add('active');

            scene.getObjectByName('pvc1_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc2_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc3_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc4_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc5_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc6_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc7_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc8_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc9_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc10_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc11_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc12_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc13_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc14_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc15_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc16_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc17_anh' + nr + '').visible = false;

            scene.getObjectByName('pvc1_1_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_2_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_3_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_4_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_5_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_6_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_7_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_8_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_9_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_10_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_11_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_12_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_13_anh' + nr + '').visible = false;
            pvcClosed4 = false;
            pvc4 = false;

            longTrailerNr1.glass.forEach(part => part.visible = false);
            scene.getObjectByName('fenster_heck_handycap_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_4_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_ganz_heck_anh' + nr).visible = false;
        } else if (nr == 5) {
            closed5 = true;
            document.getElementById('open' + nr).classList.remove('btn-success');
            document.getElementById('open' + nr).classList.add('btn-primary');
            document.getElementById('open' + nr).classList.remove('active');
            document.getElementById('close' + nr).classList.add('btn-success');
            document.getElementById('close' + nr).classList.add('btn-primary');
            document.getElementById('close' + nr).classList.add('active');

            scene.getObjectByName('pvc1_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc2_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc3_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc4_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc5_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc6_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc7_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc8_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc9_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc10_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc11_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc12_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc13_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc14_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc15_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc16_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc17_anh' + nr + '').visible = false;

            scene.getObjectByName('pvc1_1_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_2_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_3_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_4_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_5_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_6_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_7_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_8_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_9_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_10_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_11_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_12_anh' + nr + '').visible = false;
            scene.getObjectByName('pvc1_13_anh' + nr + '').visible = false;
            pvcClosed5 = false;
            pvc5 = false;

            longTrailerNr2.glass.forEach(part => part.visible = false);
            scene.getObjectByName('fenster_heck_handycap_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_heck_handycap_4_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_1_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_2_anh' + nr).visible = false;
            scene.getObjectByName('fenster_stoß_handycap_3_anh' + nr).visible = false;
            scene.getObjectByName('fenster_ganz_heck_anh' + nr).visible = false;
        }
    }
}

function setSkitraegerLuxus(elmnt, nr) {
    var tmp = elmnt.id;
    var tmp2 = parseInt(nr) + 2;

    if (document.getElementById(tmp).checked) {
        if (nr >= 4) {
            if (scene.getObjectByName('Handycap_Rampe_2_anh' + nr).visible == false) {
                if (scene.getObjectByName('skitraeger_standard_1_anh' + nr).visible == false) {
                    scene.getObjectByName('skitraeger_luxus_1_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_luxus_2_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_luxus_3_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_standard_1_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_standard_2_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_standard_3_anh' + nr).visible = true;
                    scene.getObjectByName('H11_Ruecklicht_anh' + nr).visible = false;
                    scene.getObjectByName('H12_Ruecklicht_anh' + nr).visible = false;

                } else {
                    document.getElementById("skitraeger" + nr).checked = false;
                    scene.getObjectByName('skitraeger_standard_5_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_standard_6_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_standard_7_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_luxus_1_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_luxus_2_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_luxus_3_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_standard_1_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_standard_2_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_standard_3_anh' + nr).visible = true;
                    scene.getObjectByName('H11_Ruecklicht_anh' + nr).visible = false;
                    scene.getObjectByName('H12_Ruecklicht_anh' + nr).visible = false;
                }

            }
        } else {
            if (counter2 == tmp2) {
                if (scene.getObjectByName('skitraeger_standard_1_anh' + nr).visible == false) {
                    scene.getObjectByName('skitraeger_luxus_1_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_luxus_2_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_luxus_3_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_luxus_4_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_luxus_5_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_luxus_6_anh' + nr).visible = true;

                    for (var i = 1; i < 4; i++) {
                        if (i != nr) {
                            if ((counter2 == 3 && i == 1) || (counter2 == 4 && (i == 1 || i == 2)) || (counter2 == 5 && (i == 1 || i == 2 || i == 3))) {
                                if (scene.getObjectByName('skitraeger_luxus_2_anh' + i).visible == true) {
                                    document.getElementById("skitraeger_luxus" + i).checked = false;
                                    scene.getObjectByName('skitraeger_luxus_1_anh' + i).visible = false;
                                    scene.getObjectByName('skitraeger_luxus_2_anh' + i).visible = false;
                                    scene.getObjectByName('skitraeger_luxus_3_anh' + i).visible = false;
                                    scene.getObjectByName('skitraeger_luxus_4_anh' + i).visible = false;
                                    scene.getObjectByName('skitraeger_luxus_5_anh' + i).visible = false;
                                    scene.getObjectByName('skitraeger_luxus_6_anh' + i).visible = false;
                                }
                                if (scene.getObjectByName('skitraeger_standard_1_anh' + i).visible == true) {
                                    document.getElementById("skitraeger" + i).checked = false;
                                    scene.getObjectByName('skitraeger_standard_1_anh' + i).visible = false;
                                    scene.getObjectByName('skitraeger_standard_2_anh' + i).visible = false;
                                    scene.getObjectByName('skitraeger_standard_3_anh' + i).visible = false;
                                }

                            }

                        }
                    }

                } else {
                    document.getElementById("skitraeger" + nr).checked = false;
                    scene.getObjectByName('skitraeger_standard_1_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_standard_2_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_standard_3_anh' + nr).visible = false;
                    scene.getObjectByName('skitraeger_luxus_1_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_luxus_2_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_luxus_3_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_luxus_4_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_luxus_5_anh' + nr).visible = true;
                    scene.getObjectByName('skitraeger_luxus_6_anh' + nr).visible = true;
                }
            } else {
                alert("only for last trailer");
                document.getElementById("skitraeger_luxus" + nr).checked = false;
            }
        }

    } else {

        if (nr >= 4) {
            scene.getObjectByName('skitraeger_luxus_1_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_luxus_2_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_luxus_3_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_1_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_2_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_3_anh' + nr).visible = false;
            scene.getObjectByName('H11_Ruecklicht_anh' + nr).visible = true;
            scene.getObjectByName('H12_Ruecklicht_anh' + nr).visible = true;

        } else {
            scene.getObjectByName('skitraeger_luxus_1_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_luxus_2_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_luxus_3_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_luxus_4_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_luxus_5_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_luxus_6_anh' + nr).visible = false;
        }
    }
}

function setAnhanegerGlass(elmnt, nr, isOpen) {
    if (document.getElementById('pvc' + nr).checked) {
        alert("You choosed PVC");
    } else {

        if (nr < 4) {
            if (isOpen == 2) {
                scene.getObjectByName('fenster_body_1_anh' + nr).visible = true;
                scene.getObjectByName('fenster_body_2_anh' + nr).visible = true;
                scene.getObjectByName('fenster_body_3_anh' + nr).visible = true;
                scene.getObjectByName('fenster_body_4_anh' + nr).visible = true;
                scene.getObjectByName('fenster_body_5_anh' + nr).visible = true;
                scene.getObjectByName('fenster_1_anh' + nr).visible = true;
                scene.getObjectByName('fenster_2_anh' + nr).visible = true;
                scene.getObjectByName('fenster_3_anh' + nr).visible = true;
                scene.getObjectByName('fenster_4_anh' + nr).visible = true;
                scene.getObjectByName('fenster_5_anh' + nr).visible = true;
                scene.getObjectByName('fenster_8_anh' + nr).visible = true;
                scene.getObjectByName('fenster_9_anh' + nr).visible = true;
                scene.getObjectByName('fenster_10_anh' + nr).visible = true;
                scene.getObjectByName('fenster_11_anh' + nr).visible = true;
                scene.getObjectByName('fenster_12_anh' + nr).visible = true;

                scene.getObjectByName('fenster_beweglich_1_anh' + nr).visible = true;
                scene.getObjectByName('fenster_beweglich_2_anh' + nr).visible = true;
                scene.getObjectByName('fenster_beweglich_6_anh' + nr).visible = true;
                scene.getObjectByName('fenster_beweglich_7_anh' + nr).visible = true;
                scene.getObjectByName('fenster_beweglich_8_anh' + nr).visible = true;
                scene.getObjectByName('fenster_beweglich_9_anh' + nr).visible = true;
                scene.getObjectByName('fenster_beweglich_10_anh' + nr).visible = true;
                scene.getObjectByName('fenster_beweglich_11_anh' + nr).visible = true;
                if (scene.getObjectByName('Handycap_Rampe_2_anh' + nr).visible == true) {
                    scene.getObjectByName('fenster_heck_handycap_1_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_heck_handycap_2_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_heck_handycap_3_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_heck_handycap_4_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_stoß_handycap_1_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_stoß_handycap_2_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_stoß_handycap_3_anh' + nr).visible = true;
                } else {
                    scene.getObjectByName('fenster_ganz_heck_anh' + nr).visible = true;
                }
                scene.getObjectByName('fenster_rahmen_anh' + nr).visible = true;
                scene.getObjectByName('stoß_1_anh' + nr).visible = true;
                scene.getObjectByName('stoß_2_anh' + nr).visible = true;
                scene.getObjectByName('stoß_3_anh' + nr).visible = true;
                scene.getObjectByName('stoß_4_anh' + nr).visible = true;
                scene.getObjectByName('stoß_5_anh' + nr).visible = true;
                scene.getObjectByName('stoß_6_anh' + nr).visible = true;
                scene.getObjectByName('stoß_7_anh' + nr).visible = true;
                scene.getObjectByName('stoß_8_anh' + nr).visible = true;
                scene.getObjectByName('stoß_9_anh' + nr).visible = true;
                scene.getObjectByName('stoß_10_anh' + nr).visible = true;
                scene.getObjectByName('stoß_101_anh' + nr).visible = true;
                scene.getObjectByName('stoß_11_anh' + nr).visible = true;
                scene.getObjectByName('stoß_15_anh' + nr).visible = true;
                scene.getObjectByName('stoß_16_anh' + nr).visible = true;
                scene.getObjectByName('stoß_161_anh' + nr).visible = true;
                scene.getObjectByName('stoß_17_anh' + nr).visible = true;
                document.getElementById('open' + nr).classList.remove('btn-success');
                document.getElementById('open' + nr).classList.add('btn-primary');
                document.getElementById('open' + nr).classList.remove('active');
                document.getElementById('close' + nr).classList.add('btn-success');
                document.getElementById('close' + nr).classList.add('btn-primary');
                document.getElementById('close' + nr).classList.add('active');

                if (nr == 1) {
                    closed1 = true;
                } else if (nr == 2) {
                    closed2 = true;
                } else if (nr == 3) {
                    closed3 = true;
                } else if (nr == 4) {
                    closed4 = true;
                } else if (nr == 5) {
                    closed5 = true;
                }
            } else if (isOpen == 1) {
				
                scene.getObjectByName('fenster_body_1_anh' + nr).visible = false;
                scene.getObjectByName('fenster_body_2_anh' + nr).visible = false;
                scene.getObjectByName('fenster_body_3_anh' + nr).visible = false;
                scene.getObjectByName('fenster_body_4_anh' + nr).visible = false;
                scene.getObjectByName('fenster_body_5_anh' + nr).visible = false;
                scene.getObjectByName('fenster_1_anh' + nr).visible = false;
                scene.getObjectByName('fenster_2_anh' + nr).visible = false;
                scene.getObjectByName('fenster_3_anh' + nr).visible = false;
                scene.getObjectByName('fenster_4_anh' + nr).visible = false;
                scene.getObjectByName('fenster_5_anh' + nr).visible = false;
                scene.getObjectByName('fenster_8_anh' + nr).visible = false;
                scene.getObjectByName('fenster_9_anh' + nr).visible = false;
                scene.getObjectByName('fenster_10_anh' + nr).visible = false;
                scene.getObjectByName('fenster_11_anh' + nr).visible = false;
                scene.getObjectByName('fenster_12_anh' + nr).visible = false;
                scene.getObjectByName('fenster_ganz_heck_anh' + nr).visible = false;
                scene.getObjectByName('fenster_beweglich_1_anh' + nr).visible = false;
                scene.getObjectByName('fenster_beweglich_2_anh' + nr).visible = false;
                scene.getObjectByName('fenster_beweglich_6_anh' + nr).visible = false;
                scene.getObjectByName('fenster_beweglich_7_anh' + nr).visible = false;
                scene.getObjectByName('fenster_beweglich_8_anh' + nr).visible = false;
                scene.getObjectByName('fenster_beweglich_9_anh' + nr).visible = false;
                scene.getObjectByName('fenster_beweglich_10_anh' + nr).visible = false;
                scene.getObjectByName('fenster_beweglich_11_anh' + nr).visible = false;
                scene.getObjectByName('fenster_rahmen_anh' + nr).visible = false;
                scene.getObjectByName('fenster_heck_handycap_1_anh' + nr).visible = false;
                scene.getObjectByName('fenster_heck_handycap_2_anh' + nr).visible = false;
                scene.getObjectByName('fenster_heck_handycap_3_anh' + nr).visible = false;
                scene.getObjectByName('fenster_heck_handycap_4_anh' + nr).visible = false;
                scene.getObjectByName('fenster_stoß_handycap_1_anh' + nr).visible = false;
                scene.getObjectByName('fenster_stoß_handycap_2_anh' + nr).visible = false;
                scene.getObjectByName('fenster_stoß_handycap_3_anh' + nr).visible = false;
                scene.getObjectByName('stoß_1_anh' + nr).visible = false;
                scene.getObjectByName('stoß_2_anh' + nr).visible = false;
                scene.getObjectByName('stoß_3_anh' + nr).visible = false;
                scene.getObjectByName('stoß_4_anh' + nr).visible = false;
                scene.getObjectByName('stoß_5_anh' + nr).visible = false;
                scene.getObjectByName('stoß_6_anh' + nr).visible = false;
                scene.getObjectByName('stoß_7_anh' + nr).visible = false;
                scene.getObjectByName('stoß_8_anh' + nr).visible = false;
                scene.getObjectByName('stoß_9_anh' + nr).visible = false;
                scene.getObjectByName('stoß_10_anh' + nr).visible = false;
                scene.getObjectByName('stoß_101_anh' + nr).visible = false;
                scene.getObjectByName('stoß_11_anh' + nr).visible = false;
                scene.getObjectByName('stoß_15_anh' + nr).visible = false;
                scene.getObjectByName('stoß_16_anh' + nr).visible = false;
                scene.getObjectByName('stoß_161_anh' + nr).visible = false;
                scene.getObjectByName('stoß_17_anh' + nr).visible = false;
                document.getElementById('open' + nr).classList.add('btn-success');
                document.getElementById('open' + nr).classList.remove('btn-primary');
                document.getElementById('open' + nr).classList.add('active');
                document.getElementById('close' + nr).classList.remove('btn-success');
                document.getElementById('close' + nr).classList.add('btn-primary');
                document.getElementById('close' + nr).classList.remove('active');
                if (nr == 1) {
                    closed1 = false;
                } else if (nr == 2) {
                    closed2 = false;
                } else if (nr == 3) {
                    closed3 = false;
                } else if (nr == 4) {
                    closed4 = false;
                } else if (nr == 5) {
                    closed5 = false;
                }
            }
        } else if (nr == 4) {
            if (isOpen == 1) {
                longTrailerNr1.glass.forEach(part => part.visible = false);
                scene.getObjectByName('fenster_heck_handycap_1_anh' + nr).visible = false;
                scene.getObjectByName('fenster_heck_handycap_2_anh' + nr).visible = false;
                scene.getObjectByName('fenster_heck_handycap_3_anh' + nr).visible = false;
                scene.getObjectByName('fenster_heck_handycap_4_anh' + nr).visible = false;
                scene.getObjectByName('fenster_stoß_handycap_1_anh' + nr).visible = false;
                scene.getObjectByName('fenster_stoß_handycap_2_anh' + nr).visible = false;
                scene.getObjectByName('fenster_stoß_handycap_3_anh' + nr).visible = false;
                if (nr == 4) {
                    closed4 = false;
                }

                document.getElementById('open' + nr).classList.add('btn-success');
                document.getElementById('open' + nr).classList.remove('btn-primary');
                document.getElementById('open' + nr).classList.add('active');
                document.getElementById('close' + nr).classList.remove('btn-success');
                document.getElementById('close' + nr).classList.add('btn-primary');
                document.getElementById('close' + nr).classList.remove('active');

            } else if (isOpen == 2) {
                longTrailerNr1.glass.forEach(part => part.visible = true);

                if (scene.getObjectByName('Handycap_Rampe_2_anh' + nr).visible == true) {
                    scene.getObjectByName('fenster_heck_handycap_1_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_heck_handycap_2_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_heck_handycap_3_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_heck_handycap_4_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_stoß_handycap_1_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_stoß_handycap_2_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_stoß_handycap_3_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_ganz_heck_anh' + nr).visible = false;
                } else {
                    scene.getObjectByName('fenster_ganz_heck_anh' + nr).visible = true;
                }

                if (nr == 4) {
                    closed4 = true;
                }

                document.getElementById('open' + nr).classList.remove('btn-success');
                document.getElementById('open' + nr).classList.add('btn-primary');
                document.getElementById('open' + nr).classList.remove('active');
                document.getElementById('close' + nr).classList.add('btn-success');
                document.getElementById('close' + nr).classList.remove('btn-primary');
                document.getElementById('close' + nr).classList.add('active');
            }
        } else if (nr == 5) {
            if (isOpen == 1) {
                longTrailerNr2.glass.forEach(part => part.visible = false);
                scene.getObjectByName('fenster_heck_handycap_1_anh' + nr).visible = false;
                scene.getObjectByName('fenster_heck_handycap_2_anh' + nr).visible = false;
                scene.getObjectByName('fenster_heck_handycap_3_anh' + nr).visible = false;
                scene.getObjectByName('fenster_heck_handycap_4_anh' + nr).visible = false;
                scene.getObjectByName('fenster_stoß_handycap_1_anh' + nr).visible = false;
                scene.getObjectByName('fenster_stoß_handycap_2_anh' + nr).visible = false;
                scene.getObjectByName('fenster_stoß_handycap_3_anh' + nr).visible = false;
                if (nr == 5) {
                    closed5 = false;
                }

                document.getElementById('open' + nr).classList.add('btn-success');
                document.getElementById('open' + nr).classList.remove('btn-primary');
                document.getElementById('open' + nr).classList.add('active');
                document.getElementById('close' + nr).classList.remove('btn-success');
                document.getElementById('close' + nr).classList.add('btn-primary');
                document.getElementById('close' + nr).classList.remove('active');

            } else if (isOpen == 2) {
                longTrailerNr2.glass.forEach(part => part.visible = true);

                if (scene.getObjectByName('Handycap_Rampe_2_anh' + nr).visible == true) {
                    scene.getObjectByName('fenster_heck_handycap_1_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_heck_handycap_2_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_heck_handycap_3_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_heck_handycap_4_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_stoß_handycap_1_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_stoß_handycap_2_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_stoß_handycap_3_anh' + nr).visible = true;
                    scene.getObjectByName('fenster_ganz_heck_anh' + nr).visible = false;
                } else {
                    scene.getObjectByName('fenster_ganz_heck_anh' + nr).visible = true;
                }
                if (nr == 5) {
                    closed5 = true;
                }

                document.getElementById('open' + nr).classList.remove('btn-success');
                document.getElementById('open' + nr).classList.add('btn-primary');
                document.getElementById('open' + nr).classList.remove('active');
                document.getElementById('close' + nr).classList.add('btn-success');
                document.getElementById('close' + nr).classList.remove('btn-primary');
                document.getElementById('close' + nr).classList.add('active');
            }
        }

    }
}
