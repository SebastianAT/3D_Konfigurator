$('#print').click(function (e) {
    var orgHeight = $('.myCanvas canvas').height();
    $('#creatorInfo').hide();
    if (isMobileDevice == true) {
        $('#printInfo').css('cssText', 'margin-top: 0px !important;');
        $('#printInfo').css('cssText', 'bottom: 0 !important;');
    } else {
        $('#printInfo').css('cssText', 'margin-top: 820px !important;');
    }
    $('#printText').text('');
    if (counter == 1 && isShort == true) {
        $('#printText').append('<p class="lang" key="LANG84">Anzahl kurzer Anhänger: 1</p>');
        $('#printText').append('<p class="lang" key="LANG85">Sitzplätze: 20</p>');

        if (closed1 == true) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG86">Aufbau: Geschlossen</p>');
        } else if (closed1 == false) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG87">Aufbau: Offen</p>');
        } else if (closed1 == null) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG88">Aufbau: PVC</p>');
        }
    } else if (counter == 2 && isShort == true) {
        $('#printText').append('<p class="lang" key="LANG89">Anzahl kurzer Anhänger: 2</p>');
        $('#printText').append('<p class="lang" key="LANG90">Sitzplätze: 40</p>');
        if (closed1 == true) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG91">Aufbau Anhänger 1: Geschlossen</p>');
        } else if (closed1 == false) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG92">Aufbau Anhänger 1: Offen</p>');
        } else if (closed1 == null) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG93">Aufbau Anhänger 1: PVC</p>');
        }
        if (closed2 == true) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG94">Aufbau Anhänger 2: Geschlossen</p>');
        } else if (closed2 == false) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG95">Aufbau Anhänger 2: Offen</p>');
        } else if (closed2 == null) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG96">Aufbau Anhänger 2: PVC</p>');
        }
    } else if (counter == 3 && isShort == true) {
        $('#printText').append('<p class="lang" key="LANG97">Anzahl kurzer Anhänger: 3</p>');
        $('#printText').append('<p class="lang" key="LANG98">Sitzplätze: 60</p>');

        if (closed1 == true) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG99">Aufbau Anhänger 1: Geschlossen</p>');
        } else if (closed1 == false) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG100">Aufbau Anhänger 1: Offen</p>');
        } else if (closed1 == null) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG101">Aufbau Anhänger 1: PVC</p>');
        }
        if (closed2 == true) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG102">Aufbau Anhänger 2: Geschlossen</p>');
        } else if (closed2 == false) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG103">Aufbau Anhänger 2: Offen</p>');
        } else if (closed2 == null) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG104">Aufbau Anhänger 2: PVC</p>');
        }
        if (closed3 == true) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG105">Aufbau Anhänger 3: Geschlossen</p>');
        } else if (closed3 == false) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG106">Aufbau Anhänger 3: Offen</p>');
        } else if (closed3 == null) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG107">Aufbau Anhänger 3: PVC</p>');
        }
    }

    if (counter3 == 4 && isLong == true) {
        $('#printText').append('<p class="lang" key="LANG108">Anzahl langer Anhänger: 1</p>');
        $('#printText').append('<p class="lang" key="LANG109">Sitzplätze: 28</p>');
        if (closed4 == true) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG110">Aufbau: Geschlossen</p>');
        } else if (closed4 == false) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG111">Aufbau: Offen</p>');
        } else if (closed4 == null) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG112">Aufbau: PVC</p>');
        }
    } else if (counter3 == 5 && isLong == true) {
        $('#printText').append('<p class="lang" key="LANG113">Anzahl langer Anhänger: 2</p>');
        $('#printText').append('<p class="lang" key="LANG114">Sitzplätze: 56</p>');
        if (closed4 == true) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG115">Aufbau Anhänger 1: Geschlossen</p>');
        } else if (closed4 == false) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG116">Aufbau Anhänger 1: Offen</p>');
        } else if (closed4 == null) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG117">Aufbau Anhänger 1: PVC</p>');
        }
        if (closed5 == true) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG118">Aufbau Anhänger 2: Geschlossen</p>');
        } else if (closed5 == false) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG119">Aufbau Anhänger 2: Offen</p>');
        } else if (closed5 == null) {
            $('#printText').append('<p style="font-weight:bold" class="lang" key="LANG120">Aufbau Anhänger 2: PVC</p>');
        }
    }

    $('#printText').append('<p class="lang" key="LANG121">Gewählte Ausstattung</p>');
    var count = 0;
    $("input[name^=in1]:checked").each(function () {
        count++;
        if (count == 1) {
            var id = $(this).attr("data-name");
            $('#printText').append('<p>');
            $('#printText').append('<span style="font-weight:bold" class="lang" key="LANG122">Lokomotive: </span>');
            $('#printText').append(id + ', ');
        } else {
            var id = $(this).attr("data-name");
            $('#printText').append(id + ', ');
        }
    });

    if (count >= 1) {
        $('#printText').append('</p>');
    }

    count = 0;
    $("input[name^=in2]:checked").each(function () {
        count++;
        if (count == 1) {
            var id = $(this).attr("data-name");
            $('#printText').append('<p>');
            $('#printText').append('<span style="font-weight:bold" class="lang" key="LANG123">Anhänger kurz 1: </span>');
            $('#printText').append(id + ', ');
        } else {
            var id = $(this).attr("data-name");
            $('#printText').append(id + ', ');
        }
    });

    if (count >= 1) {
        $('#printText').append('</p>');
    }
    count = 0;
    $("input[name^=in3]:checked").each(function () {
        count++;
        if (count == 1) {
            var id = $(this).attr("data-name");
            $('#printText').append('<p>');
            $('#printText').append('<span style="font-weight:bold" class="lang" key="LANG124">Anhänger kurz 2: </span>');
            $('#printText').append(id + ', ');
        } else {
            var id = $(this).attr("data-name");
            $('#printText').append(id + ', ');
        }
    });

    if (count >= 1) {
        $('#printText').append('</p>');
    }
    count = 0;
    $("input[name^=in4]:checked").each(function () {
        count++;
        if (count == 1) {
            var id = $(this).attr("data-name");
            $('#printText').append('<p>');
            $('#printText').append('<span style="font-weight:bold" class="lang" key="LANG125">Anhänger kurz 3: </span>');
            $('#printText').append(id + ', ');
        } else {
            var id = $(this).attr("data-name");
            $('#printText').append(id + ', ');
        }
    });

    if (count >= 1) {
        $('#printText').append('</p>');
    }
    count = 0;
    $("input[name^=in5]:checked").each(function () {
        count++;
        if (count == 1) {
            var id = $(this).attr("data-name");
            $('#printText').append('<p>');
            $('#printText').append('<span style="font-weight:bold" class="lang" key="LANG126">Anhänger lang 1: </span>');
            $('#printText').append(id + ', ');
        } else {
            var id = $(this).attr("data-name");
            $('#printText').append(id + ', ');
        }
    });

    if (count >= 1) {
        $('#printText').append('</p>');
    }
    count = 0;
    $("input[name^=in6]:checked").each(function () {
        count++;
        if (count == 1) {
            var id = $(this).attr("data-name");
            $('#printText').append('<p>');
            $('#printText').append('<span style="font-weight:bold" class="lang" key="LANG127">Anhänger lang 2: </span>');
            $('#printText').append(id + ', ');
        } else {
            var id = $(this).attr("data-name");
            $('#printText').append(id + ', ');
        }
    });

    if (count >= 1) {
        $('#printText').append('</p>');
    }

    $('#printText').append('<br><p class="lang" key="LANG128">Gewählte Farben</p>');
    if (isLoko == true) {
        $('#printText').append('<p>Lokomotive: <span style="color: #' + $('#colorChoosen401').val() + ' !important;">1st:</span> ' + $('#color401').val() + ' <span style="color: #' + $('#colorChoosen201').val() + ' !important;">2st:</span> ' + $('#color201').val() + ' <span style="color: #' + $('#colorChoosen301').val() + ' !important;">3st:</span> ' + $('#color301').val() + '</p>');
    }

    if (counter == 1 && isShort == true) {
        $('#printText').append('<p>1st Anhänger: <span style="color: #' + $('#colorChoosen202').val() + ' !important;">1st:</span> ' + $('#color202').val() + ' <span style="color: #' + $('#colorChoosen302').val() + ' !important;">2st:</span> ' + $('#color302').val() + ' <span style="color: #' + $('#colorChoosen402').val() + ' !important;">3st:</span> ' + $('#color402').val() + ' <span style="color: #' + $('#colorChoosen502').val() + ' !important;">4st:</span> ' + $('#color502').val() + '</p>');
    } else if (counter == 2 && isShort == true) {
        $('#printText').append('<p>1st Anhänger: <span style="color: #' + $('#colorChoosen202').val() + ' !important;">1st:</span> ' + $('#color202').val() + ' <span style="color: #' + $('#colorChoosen302').val() + ' !important;">2st:</span> ' + $('#color302').val() + ' <span style="color: #' + $('#colorChoosen402').val() + ' !important;">3st:</span> ' + $('#color402').val() + ' <span style="color: #' + $('#colorChoosen502').val() + ' !important;">4st:</span> ' + $('#color502').val() + '</p>');
        $('#printText').append('<p>2st Anhänger: <span style="color: #' + $('#colorChoosen203').val() + ' !important;">1st:</span> ' + $('#color203').val() + ' <span style="color: #' + $('#colorChoosen303').val() + ' !important;">2st:</span> ' + $('#color303').val() + ' <span style="color: #' + $('#colorChoosen403').val() + ' !important;">3st:</span> ' + $('#color403').val() + ' <span style="color: #' + $('#colorChoosen503').val() + ' !important;">4st:</span> ' + $('#color503').val() + '</p>');
    } else if (counter == 3 && isShort == true) {
        $('#printText').append('<p>1st Anhänger: <span style="color: #' + $('#colorChoosen202').val() + ' !important;">1st:</span> ' + $('#color202').val() + ' <span style="color: #' + $('#colorChoosen302').val() + ' !important;">2st:</span> ' + $('#color302').val() + ' <span style="color: #' + $('#colorChoosen402').val() + ' !important;">3st:</span> ' + $('#color402').val() + ' <span style="color: #' + $('#colorChoosen502').val() + ' !important;">4st:</span> ' + $('#color502').val() + '</p>');
        $('#printText').append('<p>2st Anhänger: <span style="color: #' + $('#colorChoosen203').val() + ' !important;">1st:</span> ' + $('#color203').val() + ' <span style="color: #' + $('#colorChoosen303').val() + ' !important;">2st:</span> ' + $('#color303').val() + ' <span style="color: #' + $('#colorChoosen403').val() + ' !important;">3st:</span> ' + $('#color403').val() + ' <span style="color: #' + $('#colorChoosen503').val() + ' !important;">4st:</span> ' + $('#color503').val() + '</p>');
        $('#printText').append('<p>3st Anhänger <span style="color: #' + $('#colorChoosen204').val() + ' !important;">1st:</span> ' + $('#color204').val() + ' <span style="color: #' + $('#colorChoosen304').val() + ' !important;">2st:</span> ' + $('#color304').val() + ' <span style="color: #' + $('#colorChoosen404').val() + ' !important;">3st:</span> ' + $('#color404').val() + ' <span style="color: #' + $('#colorChoosen504').val() + ' !important;">4st:</span> ' + $('#color504').val() + '</p>');
    } else if (counter3 == 4 && isLong == true) {
        $('#printText').append('<p>1st Anhänger: <span style="color: #' + $('#colorChoosen205').val() + ' !important;">1st:</span> ' + $('#color205').val() + ' <span style="color: #' + $('#colorChoosen305').val() + ' !important;">2st:</span> ' + $('#color305').val() + ' <span style="color: #' + $('#colorChoosen405').val() + ' !important;">3st:</span> ' + $('#color405').val() + ' <span style="color: #' + $('#colorChoosen505').val() + ' !important;">4st:</span> ' + $('#color505').val() + '</p>');

    } else if (counter3 == 5 && isLong == true) {
        $('#printText').append('<p>1st Anhänger: <span style="color: #' + $('#colorChoosen205').val() + ' !important;">1st:</span> ' + $('#color205').val() + ' <span style="color: #' + $('#colorChoosen305').val() + ' !important;">2st:</span> ' + $('#color305').val() + ' <span style="color: #' + $('#colorChoosen405').val() + ' !important;">3st:</span> ' + $('#color405').val() + ' <span style="color: #' + $('#colorChoosen505').val() + ' !important;">4st:</span> ' + $('#color505').val() + '</p>');
        $('#printText').append('<p>2st Anhänger: <span style="color: #' + $('#colorChoosen206').val() + ' !important;">1st:</span> ' + $('#color206').val() + ' <span style="color: #' + $('#colorChoosen306').val() + ' !important;">2st:</span> ' + $('#color306').val() + ' <span style="color: #' + $('#colorChoosen406').val() + ' !important;">3st:</span> ' + $('#color406').val() + ' <span style="color: #' + $('#colorChoosen506').val() + ' !important;">4st:</span> ' + $('#color506').val() + '</p>');
    }

    $(".lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });

    window.print();
    $('.myCanvas canvas').height(orgHeight);
    $('#printInfo').hide();
    $('#creatorInfo').show();
});
