

jQuery('.pvcToggle').click(function () {
    var tmp;
    if (this.id == 'pvcPlane1') {
        tmp = 1;
        if (pvc1 == true) {
            if (pvcClosed1 == false) {
                scene.getObjectByName('pvc1_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc2_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc3_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc4_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc5_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc6_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc7_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc8_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc9_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc10_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc11_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc12_anh' + tmp + '').visible = false;

                scene.getObjectByName('pvc1_1_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_2_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_3_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_4_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_5_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_6_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_7_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_8_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_9_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_10_anh' + tmp + '').visible = true;
                pvcClosed1 = true;
            } else if (pvcClosed1 == true) {
                scene.getObjectByName('pvc1_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc2_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc3_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc4_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc5_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc6_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc7_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc8_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc9_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc10_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc11_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc12_anh' + tmp + '').visible = true;

                scene.getObjectByName('pvc1_1_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_2_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_3_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_4_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_5_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_6_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_7_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_8_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_9_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_10_anh' + tmp + '').visible = false;
                pvcClosed1 = false;
            }

        }
    } else if (this.id == 'pvcPlane2') {
        tmp = 2;
        if (pvc2 == true) {
            if (pvcClosed2 == false) {
                scene.getObjectByName('pvc1_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc2_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc3_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc4_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc5_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc6_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc7_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc8_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc9_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc10_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc11_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc12_anh' + tmp + '').visible = false;

                scene.getObjectByName('pvc1_1_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_2_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_3_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_4_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_5_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_6_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_7_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_8_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_9_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_10_anh' + tmp + '').visible = true;
                pvcClosed2 = true;
            } else if (pvcClosed2 == true) {
                scene.getObjectByName('pvc1_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc2_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc3_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc4_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc5_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc6_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc7_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc8_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc9_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc10_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc11_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc12_anh' + tmp + '').visible = true;

                scene.getObjectByName('pvc1_1_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_2_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_3_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_4_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_5_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_6_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_7_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_8_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_9_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_10_anh' + tmp + '').visible = false;
                pvcClosed2 = false;
            }

        }
    } else if (this.id == 'pvcPlane3') {
        tmp = 3;
        if (pvc3 == true) {
            if (pvcClosed3 == false) {
                scene.getObjectByName('pvc1_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc2_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc3_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc4_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc5_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc6_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc7_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc8_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc9_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc10_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc11_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc12_anh' + tmp + '').visible = false;

                scene.getObjectByName('pvc1_1_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_2_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_3_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_4_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_5_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_6_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_7_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_8_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_9_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_10_anh' + tmp + '').visible = true;
                pvcClosed3 = true;
            } else if (pvcClosed3 == true) {
                scene.getObjectByName('pvc1_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc2_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc3_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc4_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc5_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc6_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc7_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc8_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc9_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc10_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc11_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc12_anh' + tmp + '').visible = true;

                scene.getObjectByName('pvc1_1_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_2_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_3_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_4_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_5_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_6_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_7_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_8_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_9_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_10_anh' + tmp + '').visible = false;
                pvcClosed3 = false;
            }

        }
    } else if (this.id == 'pvcPlane4') {
        tmp = 4;
        if (pvc4 == true) {
            if (pvcClosed4 == false) {
                scene.getObjectByName('pvc1_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc2_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc3_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc4_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc5_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc6_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc7_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc8_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc9_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc10_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc11_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc12_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc13_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc14_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc15_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc16_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc17_anh' + tmp + '').visible = false;

                scene.getObjectByName('pvc1_1_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_2_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_3_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_4_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_5_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_6_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_7_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_8_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_9_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_10_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_11_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_12_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_13_anh' + tmp + '').visible = true;
                pvcClosed4 = true;
            } else if (pvcClosed4 == true) {
                scene.getObjectByName('pvc1_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc2_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc3_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc4_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc5_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc6_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc7_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc8_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc9_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc10_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc11_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc12_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc13_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc14_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc15_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc16_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc17_anh' + tmp + '').visible = true;

                scene.getObjectByName('pvc1_1_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_2_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_3_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_4_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_5_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_6_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_7_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_8_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_9_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_10_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_11_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_12_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_13_anh' + tmp + '').visible = false;
                pvcClosed4 = false;
            }

        }
    } else if (this.id == 'pvcPlane5') {
        tmp = 5;
        if (pvc5 == true) {
            if (pvcClosed5 == false) {
                scene.getObjectByName('pvc1_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc2_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc3_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc4_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc5_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc6_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc7_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc8_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc9_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc10_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc11_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc12_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc13_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc14_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc15_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc16_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc17_anh' + tmp + '').visible = false;

                scene.getObjectByName('pvc1_1_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_2_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_3_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_4_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_5_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_6_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_7_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_8_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_9_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_10_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_11_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_12_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc1_13_anh' + tmp + '').visible = true;
                pvcClosed5 = true;
            } else if (pvcClosed5 == true) {
                scene.getObjectByName('pvc1_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc2_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc3_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc4_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc5_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc6_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc7_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc8_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc9_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc10_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc11_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc12_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc13_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc14_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc15_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc16_anh' + tmp + '').visible = true;
                scene.getObjectByName('pvc17_anh' + tmp + '').visible = true;

                scene.getObjectByName('pvc1_1_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_2_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_3_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_4_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_5_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_6_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_7_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_8_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_9_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_10_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_11_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_12_anh' + tmp + '').visible = false;
                scene.getObjectByName('pvc1_13_anh' + tmp + '').visible = false;
                pvcClosed5 = false;
            }

        }
    }
});

function toggleHandycapHeck() {
    var pos1 = scene.getObjectByName("handycap_heck_door_1").rotation.y;
    if (pos1.toFixed(2) >= -1.57 && pos1.toFixed(2) <= 0.6 && handycap_heck_doors_open_1 == false) {
        scene.getObjectByName("handycap_heck_door_1").rotation.y += 0.14;
        scene.getObjectByName("fenster_heck_handycap_3").rotation.y += 0.134;
        scene.getObjectByName("fenster_stoß_handycap_2").rotation.z += -0.134;
    }

    var pos2 = scene.getObjectByName("handycap_heck_door_2").rotation.y;
    if (pos2.toFixed(2) <= 1.57 && pos2.toFixed(2) >= -0.6 && handycap_heck_doors_open_2 == false) {
        scene.getObjectByName("handycap_heck_door_2").rotation.y += -0.14;
        scene.getObjectByName("fenster_heck_handycap_4").rotation.y += -0.134;
    }

    if (pos1.toFixed(2) == 0.67) {
        handycap_heck_doors_open_1 = true;
    }

    if (pos2.toFixed(2) == -0.67) {
        handycap_heck_doors_open_2 = true;
    }
    if (handycap_heck_doors_open_1 == true && handycap_heck_doors_open_2 == true) {
        var pos3 = scene.getObjectByName("Handycap_Rampe_2").rotation.y;
        if (scene.getObjectByName('Handycap_Rampe_2').rotation.y.toFixed(2) <= 0.00 && scene.getObjectByName('Handycap_Rampe_2').rotation.y >= -1.60) {

            scene.getObjectByName('Handycap_Rampe_2').rotation.y += -0.1;
        }
    }
}

function toggleTwiceDoors_new(nr, alreadyOpen) {
    if (alreadyOpen == true) {
        var pos1 = scene.getObjectByName("body_2_anh" + nr).rotation.y;
        if (pos1.toFixed(2) <= 0.00 && pos1.toFixed(2) >= -1.5) {
            scene.getObjectByName("body_2_anh" + nr).rotation.y += -0.14;
            if (nr >= 4) {
                scene.getObjectByName("fenster_3_anh" + nr).rotation.y -= 0.134;
            } else {
                scene.getObjectByName("fenster_3_anh" + nr).rotation.y += 0.134;
            }
        }
        if (scene.getObjectByName("body_2_anh" + nr).rotation.y.toFixed(2) <= -1.5) {
            open_2 = true;
        }

        var pos2 = scene.getObjectByName("body_4_anh" + nr).rotation.y;
        if (pos2.toFixed(2) <= 0.00 && pos2.toFixed(2) >= -1.50) {
            scene.getObjectByName("body_4_anh" + nr).rotation.y += -0.14;
            if (nr >= 4) {
                scene.getObjectByName("fenster_2_anh" + nr).rotation.y -= 0.134;
            } else {
                scene.getObjectByName("fenster_2_anh" + nr).rotation.y += 0.134;
            }
        }
        if (scene.getObjectByName("body_4_anh" + nr).rotation.y.toFixed(2) <= -1.5) {
            open_4 = true;
        }

        var pos4 = scene.getObjectByName("body_6_anh" + nr).rotation.y;
        if (pos4.toFixed(2) <= 0.00 && pos4.toFixed(2) >= -1.50) {
            scene.getObjectByName("body_6_anh" + nr).rotation.y += -0.14;
            if (nr >= 4) {
                scene.getObjectByName("fenster_1_anh" + nr).rotation.y -= 0.134;
            } else {
                scene.getObjectByName("fenster_1_anh" + nr).rotation.y += 0.134;
            }
        }
        if (scene.getObjectByName("body_6_anh" + nr).rotation.y.toFixed(2) <= -1.5) {
            open_6 = true;
        }

        var pos6 = scene.getObjectByName("body_8_anh" + nr).rotation.y;
        if (pos6.toFixed(2) <= 0.00 && pos6.toFixed(2) >= -1.50) {
            scene.getObjectByName("body_8_anh" + nr).rotation.y += -0.14;
            if (nr >= 4) {
                scene.getObjectByName("fenster_4_anh" + nr).rotation.y -= 0.134;
            } else {
                scene.getObjectByName("fenster_4_anh" + nr).rotation.y += 0.134;
            }
        }
        if (scene.getObjectByName("body_8_anh" + nr).rotation.y.toFixed(2) <= -1.5) {
            open_8 = true;
        }

        var pos8 = scene.getObjectByName("body_10_anh" + nr).rotation.y;

        if (pos8.toFixed(2) <= 0.00 && pos8.toFixed(2) >= -1.50) {
            scene.getObjectByName("body_10_anh" + nr).rotation.y += -0.14;
            if (nr >= 4) {
                scene.getObjectByName("fenster_5_anh" + nr).rotation.y -= 0.134;
            } else {
                scene.getObjectByName("fenster_5_anh" + nr).rotation.y += 0.134;
            }
        }
        if (scene.getObjectByName("body_10_anh" + nr).rotation.y.toFixed(2) <= -1.5) {
            open_10 = true;
        }

        if (nr >= 4) {
            var pos10 = scene.getObjectByName("body_12_anh" + nr).rotation.y;
            if (pos10.toFixed(2) <= 0.00 && pos10.toFixed(2) >= -1.50) {
                scene.getObjectByName("body_12_anh" + nr).rotation.y += -0.14;
                scene.getObjectByName("fenster_6_anh" + nr).rotation.y += -0.134;
            }
            if (pos10.toFixed(2) <= -1.5) {
                open_12 = true;
            }
            var pos12 = scene.getObjectByName("body_14_anh" + nr).rotation.y;

            if (pos12.toFixed(2) <= -0.00 && pos12.toFixed(2) >= -2.00) {
                scene.getObjectByName("body_14_anh" + nr).rotation.y += -0.14;
                scene.getObjectByName("fenster_7_anh" + nr).rotation.y += -0.134;
            }
            if (pos12.toFixed(2) <= -1.89) {
                open_14 = true;
            }

            if (open_2 == true && open_4 == true && open_6 == true && open_8 == true && open_10 == true && open_12 == true && open_14 == true) {
                renderer.setAnimationLoop(null);
                open_2 = null;
                open_4 = null;
                open_6 = null;
                open_8 = null;
                open_10 = null;
                open_12 = null;
                open_14 = null;
                isOpenTwiceDoor = true;
                if (nr == 1) {
                    isOpenTwice1 = null;
                } else if (nr == 2) {
                    isOpenTwice2 = null;
                } else if (nr == 3) {
                    isOpenTwice3 = null;
                } else if (nr == 4) {
                    isOpenTwice4 = null;
                } else if (nr == 5) {
                    isOpenTwice5 = null;
                }
            }
        } else if (nr <= 3) {
            if (open_2 == true && open_4 == true && open_6 == true && open_8 == true && open_10 == true) {
                renderer.setAnimationLoop(null);
                open_2 = null;
                open_4 = null;
                open_6 = null;
                open_8 = null;
                open_10 = null;
                isOpenTwiceDoor = true;
                if (nr == 1) {
                    isOpenTwice1 = null;
                } else if (nr == 2) {
                    isOpenTwice2 = null;
                } else if (nr == 3) {
                    isOpenTwice3 = null;
                }
            }
        }

    } else if (alreadyOpen == false) {

        var pos7 = scene.getObjectByName("body_2_anh" + nr).rotation.y;

        if (pos7.toFixed(2) <= 0.00 && pos7.toFixed(2) >= -1.54) {
            if (pos7.toFixed(2) == 0.00) {
                open_2 = false;
            } else {
                scene.getObjectByName("body_2_anh" + nr).rotation.y += 0.14;
                if (nr >= 4) {
                    scene.getObjectByName("fenster_3_anh" + nr).rotation.y -= -0.134;
                } else {
                    scene.getObjectByName("fenster_3_anh" + nr).rotation.y += -0.134;
                }

            }
        }

        if (scene.getObjectByName("body_2_anh" + nr).rotation.y.toFixed(2) == 0.00) {
            open_2 = false;
        }

        var pos8 = scene.getObjectByName("body_4_anh" + nr).rotation.y;
        if (pos8.toFixed(2) <= 0.00 && pos8.toFixed(2) >= -1.54) {
            if (pos8.toFixed(2) == 0.00) {
                open_4 = false;
            } else {
                scene.getObjectByName("body_4_anh" + nr).rotation.y += 0.14;
                if (nr >= 4) {
                    scene.getObjectByName("fenster_2_anh" + nr).rotation.y -= -0.134;
                } else {
                    scene.getObjectByName("fenster_2_anh" + nr).rotation.y += -0.134;
                }
            }
        }
        if (scene.getObjectByName("body_4_anh" + nr).rotation.y.toFixed(2) == 0.00) {
            open_4 = false;
        }

        var pos10 = scene.getObjectByName("body_6_anh" + nr).rotation.y;
        if (pos10.toFixed(2) <= 0.00 && pos10.toFixed(2) >= -1.54) {
            if (pos10.toFixed(2) == 0.00) {
                open_6 = false;
            } else {
                scene.getObjectByName("body_6_anh" + nr).rotation.y += 0.14;
                if (nr >= 4) {
                    scene.getObjectByName("fenster_1_anh" + nr).rotation.y -= -0.134;
                } else {
                    scene.getObjectByName("fenster_1_anh" + nr).rotation.y += -0.134;
                }
            }
        }
        if (scene.getObjectByName("body_6_anh" + nr).rotation.y.toFixed(2) == 0.00) {
            open_6 = false;
        }

        var pos12 = scene.getObjectByName("body_8_anh" + nr).rotation.y;
        if (pos12.toFixed(2) <= 0.00 && pos12.toFixed(2) >= -1.54) {
            if (pos12.toFixed(2) == 0.00) {
                open_8 = false;
            } else {
                scene.getObjectByName("body_8_anh" + nr).rotation.y += 0.14;
                if (nr >= 4) {
                    scene.getObjectByName("fenster_4_anh" + nr).rotation.y += 0.134;
                } else {
                    scene.getObjectByName("fenster_4_anh" + nr).rotation.y += -0.134;
                }
            }
        }

        if (scene.getObjectByName("body_8_anh" + nr).rotation.y.toFixed(2) == 0.00) {
            open_8 = false;
        }

        if (nr >= 4) {

            var pos14 = scene.getObjectByName("body_10_anh" + nr).rotation.y;
            if (pos14.toFixed(2) <= 0.00 && pos14.toFixed(2) >= -1.61) {
                if (pos14.toFixed(2) == 0.00 || pos14.toFixed(2) == -0.35) {
                    open_10 = false;
                } else {
                    scene.getObjectByName("body_10_anh" + nr).rotation.y += 0.14;
                    scene.getObjectByName("fenster_5_anh" + nr).rotation.y -= -0.134;
                }
            }
            if (scene.getObjectByName("body_10_anh" + nr).rotation.y.toFixed(2) == -0.00) {
                open_10 = false;
            }

            var pos16 = scene.getObjectByName("body_12_anh" + nr).rotation.y;
            if (pos16.toFixed(2) <= 0.00 && pos16.toFixed(2) >= -1.54) {
                if (pos16.toFixed(2) == 0.00) {
                    open_12 = false;
                } else {
                    scene.getObjectByName("body_12_anh" + nr).rotation.y += 0.14;
                    scene.getObjectByName("fenster_6_anh" + nr).rotation.y += 0.134;
                }
            }
            if (pos16.toFixed(2) == 0.00) {
                open_12 = false;
            }

            var pos18 = scene.getObjectByName("body_14_anh" + nr).rotation.y;

            if (pos18.toFixed(2) <= -0.35 && pos18.toFixed(2) >= -2.03) {
                if (pos18.toFixed(2) == -0.35) {
                    open_14 = false;
                } else {
                    scene.getObjectByName("body_14_anh" + nr).rotation.y += 0.14;
                    scene.getObjectByName("fenster_7_anh" + nr).rotation.y += 0.134;
                }
            }

            if (pos18.toFixed(2) == -0.63) {
                open_14 = false;
            }

            if (open_2 == false && open_4 == false && open_6 == false && open_8 == false && open_10 == false && open_12 == false && open_14 == false) {
                renderer.setAnimationLoop(null);
                open_2 = null;
                open_4 = null;
                open_6 = null;
                open_8 = null;
                open_10 = null;
                open_12 = null;
                open_14 = null;
                isOpenTwiceDoor = false;
                if (nr == 1) {
                    isOpenTwice1 = null;
                } else if (nr == 2) {
                    isOpenTwice2 = null;
                } else if (nr == 3) {
                    isOpenTwice3 = null;
                } else if (nr == 4) {
                    isOpenTwice4 = null;
                } else if (nr == 5) {
                    isOpenTwice5 = null;
                }
            }
        } else if (nr <= 3) {
            var pos14 = scene.getObjectByName("body_10_anh" + nr).rotation.y;
            if (pos14.toFixed(2) <= 0.00 && pos14.toFixed(2) >= -1.61) {
                if (pos14.toFixed(2) == -0.21 || pos14.toFixed(2) == -0.35) {
                    open_10 = false;
                } else {
                    scene.getObjectByName("body_10_anh" + nr).rotation.y += 0.14;
                    scene.getObjectByName("fenster_5_anh" + nr).rotation.y += -0.134;
                }
            }
            if (scene.getObjectByName("body_10_anh" + nr).rotation.y.toFixed(2) == -0.21) {
                open_10 = false;
            }

            if (open_2 == false && open_4 == false && open_6 == false && open_8 == false && open_10 == false) {
                renderer.setAnimationLoop(null);
                open_2 = null;
                open_4 = null;
                open_6 = null;
                open_8 = null;
                open_10 = null;
                isOpenTwiceDoor = false;
                if (nr == 1) {
                    isOpenTwice1 = null;
                } else if (nr == 2) {
                    isOpenTwice2 = null;
                } else if (nr == 3) {
                    isOpenTwice3 = null;
                }
            }
        }

    }
}

function toggleStandardDoors(nr, alreadyOpen) {
    var pos_enter = scene.getObjectByName("body_9_anh" + nr).rotation.y;
    if (alreadyOpen == true && pos_enter.toFixed(2) >= -1.5) {
        var pos = scene.getObjectByName("body_1_anh" + nr).rotation.y;
        if (pos.toFixed(2) <= -0.35 && pos >= -2.0) {
            scene.getObjectByName("body_1_anh" + nr).rotation.y += -0.14;
            scene.getObjectByName("fenster_8_anh" + nr).rotation.y += 0.134;
            if (nr >= 4) {
                scene.getObjectByName("stoß_1_anh" + nr).rotation.z -= 0.134;
            } else {
                scene.getObjectByName("stoß_1_anh" + nr).rotation.z += 0.134;
            }
            scene.getObjectByName('fenster_beweglich_11_anh' + nr).visible = false;
        }

        if (scene.getObjectByName("body_1_anh" + nr).rotation.y.toFixed(2) <= -1.89) {
            open_1 = true;
        }

        var pos_3 = scene.getObjectByName("body_3_anh" + nr).rotation.y;

        if (pos_3.toFixed(2) <= -0.00 && pos_3.toFixed(2) >= -1.50) {
            scene.getObjectByName("body_3_anh" + nr).rotation.y += -0.14;
            scene.getObjectByName("fenster_9_anh" + nr).rotation.y += 0.134;
            scene.getObjectByName("stoß_5_anh" + nr).rotation.z += -0.134;
            scene.getObjectByName('fenster_beweglich_10_anh' + nr).visible = false;
        }
        if (scene.getObjectByName("body_3_anh" + nr).rotation.y.toFixed(2) <= -1.5) {
            open_3 = true;
        }

        var pos3 = scene.getObjectByName("body_5_anh" + nr).rotation.y;
        if (pos3.toFixed(2) <= -0.00 && pos3.toFixed(2) >= -1.5) {
            scene.getObjectByName("body_5_anh" + nr).rotation.y += -0.14;
            scene.getObjectByName("fenster_10_anh" + nr).rotation.y += 0.134;
            scene.getObjectByName("stoß_11_anh" + nr).rotation.z += -0.134;
            scene.getObjectByName('fenster_beweglich_9_anh' + nr).visible = false;
        }
        if (scene.getObjectByName("body_5_anh" + nr).rotation.y.toFixed(2) <= -1.5) {
            open_5 = true;
        }

        var pos5 = scene.getObjectByName("body_7_anh" + nr).rotation.y;
        if (pos5.toFixed(2) <= -0.00 && pos5.toFixed(2) >= -1.50) {
            scene.getObjectByName("body_7_anh" + nr).rotation.y += -0.14;
            scene.getObjectByName("fenster_11_anh" + nr).rotation.y += 0.134;
            scene.getObjectByName("stoß_8_anh" + nr).rotation.z += -0.134;
            scene.getObjectByName('fenster_beweglich_8_anh' + nr).visible = false;
        }
        if (scene.getObjectByName("body_7_anh" + nr).rotation.y.toFixed(2) <= -1.5) {
            open_7 = true;
        }

        var pos7 = scene.getObjectByName("body_9_anh" + nr).rotation.y;
        if (pos7.toFixed(2) <= -0.00 && pos7.toFixed(2) >= -1.50) {
            scene.getObjectByName("body_9_anh" + nr).rotation.y += -0.14;
            scene.getObjectByName("fenster_12_anh" + nr).rotation.y += 0.134;
            if (nr >= 4) {
                scene.getObjectByName("stoß_7_anh" + nr).rotation.z += 0.134;
            } else {
                scene.getObjectByName("stoß_10_anh" + nr).rotation.z += 0.134;
            }
            scene.getObjectByName('fenster_beweglich_7_anh' + nr).visible = false;
        }
        pos7 = scene.getObjectByName("body_9_anh" + nr).rotation.y;
        if (scene.getObjectByName("body_9_anh" + nr).rotation.y.toFixed(2) <= -1.5) {
            open_9 = true;
        }

        if (nr >= 4) {

            var pos9 = scene.getObjectByName("body_11_anh" + nr).rotation.y;
            if (pos9.toFixed(2) <= -0.00 && pos9.toFixed(2) >= -1.50) {
                scene.getObjectByName("body_11_anh" + nr).rotation.y += -0.14;
                scene.getObjectByName("fenster_13_anh" + nr).rotation.y += 0.134;
                scene.getObjectByName('fenster_beweglich_6_anh' + nr).visible = false;
            }
            if (pos9.toFixed(2) <= -1.5) {
                open_11 = true;
            }

            var pos11 = scene.getObjectByName("body_13_anh" + nr).rotation.y;
            if (pos11.toFixed(2) <= -0.00 && pos11.toFixed(2) >= -1.50) {
                scene.getObjectByName("body_13_anh" + nr).rotation.y += -0.14;
                scene.getObjectByName("fenster_14_anh" + nr).rotation.y += 0.134;
                scene.getObjectByName('fenster_beweglich_5_anh' + nr).visible = false;
            }
            if (pos11.toFixed(2) <= -1.5) {
                open_13 = true;
            }

            if (open_1 == true && open_3 == true && open_5 == true && open_7 == true && open_9 == true && open_11 == true && open_13 == true) {
                renderer.setAnimationLoop(null);
                open_1 = null;
                open_3 = null;
                open_5 = null;
                open_7 = null;
                open_9 = null;
                open_11 = null;
                open_13 = null;
                isOpenStandardDoor = true;
                if (nr == 1) {
                    isOpen1 = null;
                } else if (nr == 2) {
                    isOpen2 = null;
                } else if (nr == 3) {
                    isOpen3 = null;
                } else if (nr == 4) {
                    isOpen4 = null;
                } else if (nr == 5) {
                    isOpen5 = null;
                }
            }
        } else if (nr <= 3) {
            if (open_1 == true && open_3 == true && open_5 == true && open_7 == true && open_9 == true) {
                renderer.setAnimationLoop(null);
                open_1 = null;
                open_3 = null;
                open_5 = null;
                open_7 = null;
                open_9 = null;
                isOpenStandardDoor = true;
                if (nr == 1) {
                    isOpen1 = null;
                } else if (nr == 2) {
                    isOpen2 = null;
                } else if (nr == 3) {
                    isOpen3 = null;
                }
            }
        }
    } else if (alreadyOpen == false) {
        var pos6 = scene.getObjectByName("body_1_anh" + nr).rotation.y;
        if (pos6.toFixed(2) <= -0.35 && pos6.toFixed(2) >= -3.14) {
            if (pos6.toFixed(2) == -0.35) {
                open_1 = false;
            } else {
                scene.getObjectByName("body_1_anh" + nr).rotation.y += 0.14;
                scene.getObjectByName("fenster_8_anh" + nr).rotation.y -= 0.134;
                if (nr >= 4) {
                    scene.getObjectByName("stoß_1_anh" + nr).rotation.z -= -0.134;
                } else {
                    scene.getObjectByName("stoß_1_anh" + nr).rotation.z += -0.134;
                }
            }
        }

        if (scene.getObjectByName("body_1_anh" + nr).rotation.y.toFixed(2) == -0.49) {
            open_1 = false;
        }

        var pos_7 = scene.getObjectByName("body_3_anh" + nr).rotation.y;

        if (pos_7.toFixed(2) <= -0.00 && pos_7.toFixed(2) >= -1.54) {
            if (pos_7.toFixed(2) == -0.00) {
                open_3 = false;
            } else {
                scene.getObjectByName("body_3_anh" + nr).rotation.y += 0.14;
                scene.getObjectByName("fenster_9_anh" + nr).rotation.y -= 0.134;
                scene.getObjectByName("stoß_5_anh" + nr).rotation.z += 0.134;
            }
        }
        if (scene.getObjectByName("body_3_anh" + nr).rotation.y.toFixed(2) == -0.00) {
            open_3 = false;
        }

        var pos9 = scene.getObjectByName("body_5_anh" + nr).rotation.y;
        if (pos9.toFixed(2) <= -0.00 && pos9.toFixed(2) >= -1.54) {
            if (scene.getObjectByName("body_5_anh" + nr).rotation.y.toFixed(2) == -0.00) {
                open_5 = false;
            } else {
                scene.getObjectByName("body_5_anh" + nr).rotation.y += 0.14;
                scene.getObjectByName("fenster_10_anh" + nr).rotation.y -= 0.134;
                scene.getObjectByName("stoß_11_anh" + nr).rotation.z += 0.134;
            }
        }
        if (pos9.toFixed(2) == -0.00) {
            open_5 = false;
        }

        var pos11 = scene.getObjectByName("body_7_anh" + nr).rotation.y;
        if (pos11.toFixed(2) <= -0.00 && pos11.toFixed(2) >= -1.54) {
            if (pos11.toFixed(2) == -0.00) {
                open_7 = false;
            } else {
                scene.getObjectByName("body_7_anh" + nr).rotation.y += 0.14;
                scene.getObjectByName("fenster_11_anh" + nr).rotation.y -= 0.134;
                scene.getObjectByName("stoß_8_anh" + nr).rotation.z += 0.134;
            }
        }
        if (scene.getObjectByName("body_7_anh" + nr).rotation.y.toFixed(2) == -0.00) {
            open_7 = false;
        }

        var pos13 = scene.getObjectByName("body_9_anh" + nr).rotation.y;
        if (pos13.toFixed(2) <= -0.00 && pos13.toFixed(2) >= -1.54) {
            if (pos13.toFixed(2) == -0.00) {
                open_9 = false;
            } else {
                scene.getObjectByName("body_9_anh" + nr).rotation.y += 0.14;
                if (nr >= 4) {
                    scene.getObjectByName("stoß_7_anh" + nr).rotation.z += -0.134;
                } else {
                    scene.getObjectByName("stoß_10_anh" + nr).rotation.z += -0.134;
                }

                scene.getObjectByName("fenster_12_anh" + nr).rotation.y -= 0.134;
            }
        }
        if (scene.getObjectByName("body_9_anh" + nr).rotation.y.toFixed(2) == -0.00) {
            open_9 = false;
        }

        if (nr >= 4) {
            var pos15 = scene.getObjectByName("body_11_anh" + nr).rotation.y;
            if (pos15.toFixed(2) <= -0.00 && pos15.toFixed(2) >= -1.54) {
                if (pos15.toFixed(2) == -0.00) {
                    open_11 = false;
                } else {
                    scene.getObjectByName("body_11_anh" + nr).rotation.y += 0.14;
                    scene.getObjectByName("fenster_13_anh" + nr).rotation.y -= 0.134;
                }
            }
            if (pos15.toFixed(2) == -0.00) {
                open_11 = false;
            }

            var pos17 = scene.getObjectByName("body_13_anh" + nr).rotation.y;
            if (pos17.toFixed(2) <= 0.00 && pos17.toFixed(2) >= -1.54) {
                if (pos17.toFixed(2) == 0.00) {
                    open_13 = false;
                } else {
                    scene.getObjectByName("body_13_anh" + nr).rotation.y += 0.14;
                    scene.getObjectByName("fenster_14_anh" + nr).rotation.y -= 0.134;
                }
            }
            if (pos17.toFixed(2) == 0.00) {
                open_13 = false;
            }

            if (open_1 == false && open_3 == false && open_5 == false && open_7 == false && open_9 == false && open_11 == false && open_13 == false) {
                renderer.setAnimationLoop(null);
                open_1 = null;
                open_3 = null;
                open_5 = null;
                open_7 = null;
                open_9 = null;
                open_11 = null;
                open_13 = null;
                isOpenStandardDoor = false;
                if (nr == 1) {
                    isOpen1 = null;
                } else if (nr == 2) {
                    isOpen2 = null;
                } else if (nr == 3) {
                    isOpen3 = null;
                } else if (nr == 4) {
                    isOpen4 = null;
                } else if (nr == 5) {
                    isOpen5 = null;
                }

            }

        } else if (nr <= 3) {
            if (open_1 == false && open_3 == false && open_5 == false && open_7 == false && open_9 == false) {
                renderer.setAnimationLoop(null);
                open_1 = null;
                open_3 = null;
                open_5 = null;
                open_7 = null;
                open_9 = null;
                isOpenStandardDoor = false;
                if (nr == 1) {
                    isOpen1 = null;
                } else if (nr == 2) {
                    isOpen2 = null;
                } else if (nr == 3) {
                    isOpen3 = null;
                }
            }
        }
    }
}

function handycap_heck_einstieg(nr) {
    if (scene.getObjectByName('skitraeger_luxus_1_anh' + nr).visible == true || scene.getObjectByName('skitraeger_standard_3_anh' + nr).visible == true) {
        if (nr >= 4) {
            scene.getObjectByName('skitraeger_luxus_1_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_luxus_2_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_luxus_3_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_1_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_2_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_3_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_5_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_6_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_7_anh' + nr).visible = false;
            scene.getObjectByName('H11_Ruecklicht_anh' + nr).visible = true;
            scene.getObjectByName('H12_Ruecklicht_anh' + nr).visible = true;
        } else {
            scene.getObjectByName('skitraeger_luxus_1_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_luxus_2_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_luxus_4_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_luxus_5_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_luxus_6_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_1_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_2_anh' + nr).visible = false;
            scene.getObjectByName('skitraeger_standard_3_anh' + nr).visible = false;
        }
    }

    var pos1 = scene.getObjectByName("handycap_heck_door_1_anh" + nr).rotation.y;

    if (pos1.toFixed(2) >= -1.57 && pos1.toFixed(2) <= 0.6 && handycap_heck_doors_open_1 == false) {
        scene.getObjectByName("handycap_heck_door_1_anh" + nr).rotation.y += 0.14;
        scene.getObjectByName("fenster_heck_handycap_3_anh" + nr).rotation.y += 0.134;
        if (nr >= 4) {
            scene.getObjectByName("fenster_stoß_handycap_2_anh" + nr).rotation.z += -0.134;
        } else {
            scene.getObjectByName("fenster_stoß_handycap_2_anh" + nr).rotation.z -= -0.134;
        }
    }

    var pos2 = scene.getObjectByName("handycap_heck_door_2_anh" + nr).rotation.y;

    if (pos2.toFixed(2) <= 1.57 && pos2.toFixed(2) >= -0.6 && handycap_heck_doors_open_2 == false) {
        scene.getObjectByName("handycap_heck_door_2_anh" + nr).rotation.y += -0.14;
        scene.getObjectByName("fenster_heck_handycap_4_anh" + nr).rotation.y += -0.134;
    }

    if (pos1.toFixed(2) == 0.67) {
        handycap_heck_doors_open_1 = true;
    }

    if (pos2.toFixed(2) == -0.67) {
        handycap_heck_doors_open_2 = true;
    }

    if (handycap_heck_doors_open_1 == true && handycap_heck_doors_open_2 == true) {
        var pos3 = scene.getObjectByName("Handycap_Rampe_2_anh" + nr).rotation.y;
        if (scene.getObjectByName('Handycap_Rampe_2_anh' + nr).rotation.y.toFixed(2) <= 0.00 && scene.getObjectByName('Handycap_Rampe_2_anh' + nr).rotation.y >= -1.60) {

            scene.getObjectByName('Handycap_Rampe_2_anh' + nr).rotation.y += -0.1;
        } else {
            if (nr == 1) {
                handycap_heck1 = false;
            } else if (nr == 2) {
                handycap_heck2 = false;
            } else if (nr == 3) {
                handycap_heck3 = false;
            } else if (nr == 4) {
                handycap_heck4 = false;
            } else if (nr == 5) {
                handycap_heck5 = false;
            }

            renderer.setAnimationLoop(null);
            handycap_heck_doors_open_1 = false;
            handycap_heck_doors_open_2 = false;
        }
    }
}

function handycapSide(nr) {
    if (scene.getObjectByName("body_5_anh" + nr).rotation.y.toFixed(2) == -2.80) {

        check_1 = true;
    }
    if (check_1 == false && scene.getObjectByName("body_5_anh" + nr).rotation.y.toFixed(2) <= -0.00 && scene.getObjectByName("body_5_anh" + nr).rotation.y.toFixed(2) >= -2.7) {
        scene.getObjectByName("body_5_anh" + nr).rotation.y += -0.14;
        scene.getObjectByName("fenster_10_anh" + nr).rotation.y += 0.134;
        scene.getObjectByName("stoß_11_anh" + nr).rotation.z += -0.134;

        scene.getObjectByName("fenster_beweglich_9_anh" + nr).visible = false;
    }

    if (scene.getObjectByName("body_6_anh" + nr).rotation.y.toFixed(2) == -2.94) {

        check_2 = true;
    }

    if (check_2 == false && scene.getObjectByName("body_6_anh" + nr).rotation.y.toFixed(2) <= 0.00 && scene.getObjectByName("body_6_anh" + nr).rotation.y.toFixed(2) >= -2.80) {
        scene.getObjectByName("body_6_anh" + nr).rotation.y += -0.14;
        if (nr >= 4) {
            scene.getObjectByName("fenster_1_anh" + nr).rotation.y -= 0.134;
        } else {
            scene.getObjectByName("fenster_1_anh" + nr).rotation.y += 0.134;
        }
    }

    if (nr < 4) {

        if (scene.getObjectByName('Handycap_Rampe_1_anh' + nr).position.z.toFixed(2) == -35.22) {
            check_3 = true;
        }
        if (check_2 == true && scene.getObjectByName('Handycap_Schieb_anh' + nr).position.z.toFixed(2) >= -26.64
             && scene.getObjectByName('Handycap_Schieb_anh' + nr).position.z.toFixed(2) <= 26.64) {

            scene.getObjectByName('Handycap_Schieb_anh' + nr).position.z += 6.66;
        }

        if (check_2 == true && scene.getObjectByName('Handycap_Rampe_1_anh' + nr).position.z.toFixed(2) >= -31.38 && scene.getObjectByName('Handycap_Rampe_1_anh' + nr).position.z.toFixed(2) <= 31.38) { //35.22

            scene.getObjectByName('Handycap_Rampe_1_anh' + nr).position.z += -6.66;
        }

        if (check_3 == true && scene.getObjectByName('Handycap_Rampe_1_anh' + nr).position.z.toFixed(2) == -35.22) {
            if (scene.getObjectByName('Handycap_Rampe_1_anh' + nr).rotation.x.toFixed(2) >= 3.14 && scene.getObjectByName('Handycap_Rampe_1_anh' + nr).rotation.x <= 3.24) {

                scene.getObjectByName('Handycap_Rampe_1_anh' + nr).rotation.x += 0.1;
            } else {
                if (check_4 == false) {
                    check_4 = true;
                    renderer.setAnimationLoop(null);
                    check_1 = false;
                    check_2 = false;
                    check_3 = false;
                }
            }
        }
    } else {

        if (scene.getObjectByName('Handycap_Schieb_anh' + nr).position.z.toFixed(2) == -0.84) {
            check_3 = true;
        }
        if (check_2 == true && scene.getObjectByName('Handycap_Schieb_anh' + nr).position.z.toFixed(2) >= -0.78
             && scene.getObjectByName('Handycap_Schieb_anh' + nr).position.z.toFixed(2) <= 0.00) {

            scene.getObjectByName('Handycap_Schieb_anh' + nr).position.z += -0.06;
        }

        if (check_3 == true && scene.getObjectByName('Handycap_Rampe_1_anh' + nr).position.z.toFixed(2) >= -1.72 && scene.getObjectByName('Handycap_Rampe_1_anh' + nr).position.z.toFixed(2) <= 0.82) { //35.22

            scene.getObjectByName('Handycap_Rampe_1_anh' + nr).position.z += 0.06;
        }

        if (check_3 == true && scene.getObjectByName('Handycap_Rampe_1_anh' + nr).position.z.toFixed(2) == 0.88) {
            if (scene.getObjectByName('Handycap_Rampe_1_anh' + nr).rotation.x.toFixed(2) >= 0.00 && scene.getObjectByName('Handycap_Rampe_1_anh' + nr).rotation.x <= 0.24) {

                scene.getObjectByName('Handycap_Rampe_1_anh' + nr).rotation.x += 0.1;
            } else {
                if (check_4 == false) {
                    check_4 = true;
                    renderer.setAnimationLoop(null);
                    check_1 = false;
                    check_2 = false;
                    check_3 = false;
                }
            }
        }

    }
}
