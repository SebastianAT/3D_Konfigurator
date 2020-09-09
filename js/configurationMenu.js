$(".copen_1").click(function () {
    if (panel_1 == true) {
        $("#c1").hide();
        $("#c1_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        panel_1 = false;
    } else {
        $("#c1").show();
        $("#c1_").html('<img src="examples/pfeil_einklappen.png" />');
        $("#c2").hide();
        $("#c3").hide();
        $("#c4").hide();
        $("#c4_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        $("#c2_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        $("#c3_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        panel_1 = true;
        panel_2 = false;
        panel_3 = false;
        panel_4 = false;
    }
});
$(".copen_2").click(function () {
    if (panel_2 == true) {
        $("#c2").hide();
        $("#c2_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        panel_2 = false;
    } else {
        $("#c2").show();
        $("#c2_").html('<img src="examples/pfeil_einklappen.png" />');
        $("#c1").hide();
        $("#c3").hide();
        $("#c4").hide();
        $("#c1_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        $("#c4_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        $("#c3_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        panel_1 = false;
        panel_3 = false;
        panel_4 = false;
        panel_2 = true;
    }
});
$(".copen_3").click(function () {
    if (panel_3 == true) {
        $("#c3").hide();
        $("#c3_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        panel_3 = false;
    } else {
        $("#c3").show();
        $("#c3_").html('<img src="examples/pfeil_einklappen.png" />');
        $("#c1").hide();
        $("#c2").hide();
        $("#c4").hide();
        $("#c1_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        $("#c2_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        $("#c4_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        panel_1 = false;
        panel_4 = false;
        panel_2 = false;
        panel_3 = true;
    }
});
$(".copen_4").click(function () {
    if (panel_4 == true) {
        $("#c4").hide();
        $("#c4_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        panel_4 = false;
    } else {
        $("#c4").show();
        $("#c4_").html('<img src="examples/pfeil_einklappen.png" />');
        $("#c1").hide();
        $("#c2").hide();
        $("#c3").hide();
        $("#c1_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        $("#c2_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        $("#c3_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        panel_1 = false;
        panel_3 = false;
        panel_2 = false;
        panel_4 = true;
    }
});

$(".copen_5").click(function () {
    if (panel_5 == true) {
        $("#c5").hide();
        $("#c5_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        panel_5 = false;
    } else {
        $("#c5").show();
        $("#c5_").html('<img src="examples/pfeil_einklappen.png" />');
        $("#c1").hide();
        $("#c2").hide();
        $("#c3").hide();
        $("#c4").hide();
        $("#c6").hide();
        $("#c7").hide();
        $("#c1_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        $("#c2_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        $("#c3_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        $("#c4_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        $("#c6_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        panel_1 = false;
        panel_3 = false;
        panel_2 = false;
        panel_4 = false;
        panel_5 = true;
        panel_6 = false;
    }
});

$(".copen_6").click(function () {
    if (panel_6 == true) {
        $("#c6").hide();
        $("#c6_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        panel_6 = false;
    } else {
        $("#c6").show();
        $("#c6_").html('<img src="examples/pfeil_einklappen.png" />');
        $("#c1").hide();
        $("#c2").hide();
        $("#c3").hide();
        $("#c4").hide();
        $("#c5").hide();
        $("#c1_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        $("#c2_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        $("#c3_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        $("#c4_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        $("#c5_").html('<img src="examples/pfeil_ausklappen_2.png" />');
        panel_1 = false;
        panel_3 = false;
        panel_2 = false;
        panel_4 = false;
        panel_5 = false;
        panel_6 = true;
    }
});
