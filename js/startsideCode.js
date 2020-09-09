

jQuery('#trailerLong').click(function () {
    var temp = false;
    $('#videoTut').html('');
    $('#videoTut').hide();
    $('#panel1').show();
    if (isMobileDevice() == true) {
        $('#mouseInfo').hide();
        $('#touchInfo').show();
        $('#touchInfo').css("margin-left", "300px");
    } else {
        $('#mouseInfo').show();
        $('#mouseInfo').css("margin-left", "300px");
        $('#touchInfo').hide();
    }
    $('#trailerLong').hide();
    $('#trailerShort').hide();
    $('#panelMenu').hide();
    if (isLoko == true) {
        $('#loko').hide();
        $('#addNewLokoText').hide();
    } else {
        $('#loko').show();
        $('#addNewLokoText').show();
    }
    if ($('#panel1').show()) {
        document.getElementById("addNewLong").click();
    }
});

jQuery('#trailerShort').click(function () {
    var temp = false;
    $('#videoTut').html('');
    $('#videoTut').hide();
    $('#panel1').show();
    if (isMobileDevice() == true) {
        $('#mouseInfo').hide();
        $('#touchInfo').show();
        $('#touchInfo').css("margin-left", "300px");
    } else {
        $('#mouseInfo').show();
        $('#mouseInfo').css("margin-left", "300px");
        $('#touchInfo').hide();
    }
    $('#trailerLong').hide();
    $('#trailerShort').hide();
    $('#panelMenu').hide();
    if (isLoko == true) {
        $('#loko').hide();
        $('#addNewLokoText').hide();
    } else {
        $('#loko').show();
        $('#addNewLokoText').show();
    }
    if ($('#panel1').show()) {
        document.getElementById("addNew").click();
    }
});
