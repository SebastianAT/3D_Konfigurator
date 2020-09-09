jQuery('#delNew').click(function () {
    if (counter == 4)
        counter = 3;
    counter2 = 3;

    if (counter == 3) {
        var selectedObject = scene.getObjectByName('trailer3');
        scene.remove(selectedObject);
        counter--;
        counter2 = 4;
        posTemp -= 480;
        $('.copen_4').hide();
        $('#c4').hide();
        document.getElementById("skitraeger_luxus3").checked = false;
        document.getElementById("skitraeger3").checked = false;
        document.getElementById("handycap3").checked = false;
        document.getElementById("handycap_heck3").checked = false;
        document.getElementById("drehlicht4").checked = false;
        document.getElementById("werbetafel3").checked = false;
        document.getElementById("werbetafel_beleuchtung3").checked = false;
        document.getElementById("dach_transparent3").checked = false;
        document.getElementById("zweiTueren3").checked = false;
        shortTrailerNr3.body.length = 0;
        shortTrailerNr3.body1.length = 0;
        shortTrailerNr3.body2.length = 0;
        shortTrailerNr3.body3.length = 0;
        $('#nrSeats').html('<img src="examples/sitz40.png" width="65" />');
    } else if (counter == 2) {
        var selectedObject = scene.getObjectByName('trailer2');
        scene.remove(selectedObject);
        counter--;
        counter2 = 3;
        posTemp -= 480;
        $('.copen_3').hide();
        $('#c3').hide();
        document.getElementById("skitraeger_luxus2").checked = false;
        document.getElementById("skitraeger2").checked = false;
        document.getElementById("handycap2").checked = false;
        document.getElementById("handycap_heck2").checked = false;
        document.getElementById("drehlicht3").checked = false;
        document.getElementById("werbetafel2").checked = false;
        document.getElementById("werbetafel_beleuchtung2").checked = false;
        document.getElementById("dach_transparent2").checked = false;
        document.getElementById("zweiTueren2").checked = false;
        shortTrailerNr2.body.length = 0;
        shortTrailerNr2.body1.length = 0;
        shortTrailerNr2.body2.length = 0;
        shortTrailerNr2.body3.length = 0;
        $('#nrSeats').html('<img src="examples/sitz20.png" width="65" />');
    } else if (counter == 1) {
        var selectedObject = scene.getObjectByName('trailer1');
        scene.remove(selectedObject);
        counter--;
        counter2--;
        posTemp -= 510;
        counter = 0;
        counter2 = 2;
        counter3 = 3;
        posTemp = 0;
        $('.copen_2').hide();
        $('#c2').hide();
        $('.copen_3').hide();
        $('#c3').hide();
        $('.copen_4').hide();
        $('#c4').hide();
        $('#longTrailer').show();
        $('#addNewLongText').show();
        isShort = null;
        open_1 = null;
        open_2 = null;
        open_3 = null;
        open_4 = null;
        open_5 = null;
        open_6 = null;
        open_7 = null;
        open_8 = null;
        open_9 = null;
        open_10 = null;
        open_11 = null;
        open_12 = null;
        open_13 = null;
        open_14 = null;
        handycap_heck_doors_open_1 = false;
        handycap_heck_doors_open_2 = false;
        handycap_heck_doors_open_3 = false;
        handycap_heck_doors_open_4 = false;
        handycap_heck_doors_open_5 = false;

        shortTrailerNr1_active = null;
        shortTrailerNr2_active = null;
        shortTrailerNr3_active = null;

        handycapSideNr_1 = null;
        handycapSideNr_2 = null;
        handycapSideNr_3 = null;

        check_1 = false;
        check_2 = false;
        check_3 = false;
        check_4 = false;
        handycap_heck1 = null;
        handycap_heck2 = null;
        handycap_heck3 = null;

        isOpen1 = null;
        isOpen2 = null;
        isOpen3 = null;

        isOpenTwice1 = null;
        isOpenTwice2 = null;
        isOpenTwice3 = null;
        document.getElementById("skitraeger_luxus1").checked = false;
        document.getElementById("skitraeger1").checked = false;
        document.getElementById("handycap1").checked = false;
        document.getElementById("handycap_heck1").checked = false;
        document.getElementById("drehlicht2").checked = false;
        document.getElementById("werbetafel1").checked = false;
        document.getElementById("werbetafel_beleuchtung1").checked = false;
        document.getElementById("dach_transparent1").checked = false;
        document.getElementById("zweiTueren1").checked = false;
        shortTrailerNr1.body.length = 0;
        shortTrailerNr1.body1.length = 0;
        shortTrailerNr1.body2.length = 0;
        shortTrailerNr1.body3.length = 0;
        $('#nrSeats').html('');
    }
});

jQuery('#delNewLong').click(function () {

    if (counter3 == 4) {
        var selectedObject = scene.getObjectByName('trailerLong1');
        scene.remove(selectedObject);
        counter3--;
        counter2--;
        posTemp -= 615;
        counter = 0;
        counter2 = 2;
        counter3 = 3;
        posTemp = 0;
        $('.copen_5').hide();
        $('#c5').hide();
        $('#delNew').show();
        $('#shortTrailer').show();
        $('#addNewShortText').show();
        document.getElementById("skitraeger_luxus4").checked = false;
        document.getElementById("skitraeger4").checked = false;
        document.getElementById("handycap4").checked = false;
        document.getElementById("handycap_heck4").checked = false;
        document.getElementById("drehlicht5").checked = false;
        document.getElementById("werbetafel4").checked = false;
        document.getElementById("werbetafel_beleuchtung4").checked = false;
        document.getElementById("dach_transparent4").checked = false;
        document.getElementById("zweiTueren4").checked = false;
        isLong = null;
        open_1 = null;
        open_2 = null;
        open_3 = null;
        open_4 = null;
        open_5 = null;
        open_6 = null;
        open_7 = null;
        open_8 = null;
        open_9 = null;
        open_10 = null;
        open_11 = null;
        open_12 = null;
        open_13 = null;
        open_14 = null;
        handycap_heck_doors_open_1 = false;
        handycap_heck_doors_open_2 = false;
        handycap_heck_doors_open_3 = false;
        handycap_heck_doors_open_4 = false;
        handycap_heck_doors_open_5 = false;
        longTrailerNr1_active = null;
        longTrailerNr2_active = null;
        handycapSideNr_4 = null;
        handycapSideNr_5 = null;

        check_1 = false;
        check_2 = false;
        check_3 = false;
        check_4 = false;
        handycap_heck4 = null;
        handycap_heck5 = null;
        isOpen4 = null;
        isOpen5 = null;
        isOpenTwice4 = null;
        isOpenTwice5 = null;
        $('#nrSeats').html('');
    } else if (counter3 == 5) {
        var selectedObject = scene.getObjectByName('trailerLong2');
        scene.remove(selectedObject);
        counter3--;
        counter2--;
        posTemp -= 640;
        $('.copen_6').hide();
        $('#c6').hide();
        document.getElementById("skitraeger_luxus5").checked = false;
        document.getElementById("skitraeger5").checked = false;
        document.getElementById("handycap5").checked = false;
        document.getElementById("handycap_heck5").checked = false;
        document.getElementById("drehlicht6").checked = false;
        document.getElementById("werbetafel5").checked = false;
        document.getElementById("werbetafel_beleuchtung5").checked = false;
        document.getElementById("dach_transparent5").checked = false;
        document.getElementById("zweiTueren5").checked = false;
        $('#nrSeats').html('<img src="examples/sitz28.png" width="65" />');
    }
});

jQuery('#delNewLoko').click(function () {
    var selectedObject = scene.getObjectByName('Loko_1');
    scene.remove(selectedObject);
    isLoko = false;
    $('.copen_1').hide();
    $('#c1').hide();
    $('#c1_').hide();

    if (isLong == true) {
        scene.getObjectByName('Area2_anh4').visible = true;
        scene.getObjectByName('Area_anh4').visible = true;
    }

    if (isShort == true) {
        scene.getObjectByName('Area_anh1').visible = true;
        scene.getObjectByName('Area1_anh1').visible = true;
    }
});
