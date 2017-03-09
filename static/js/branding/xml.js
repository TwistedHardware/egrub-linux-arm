function get_phones() {

    xmlFile = '/static/branding/phones.xml';
    parent  = 'phones';

    var result = [];
    var request = new XMLHttpRequest();
    request.open("GET", xmlFile, false);
    request.send();
    var xml = request.responseXML;
    var list = xml.getElementsByTagName(parent)[0].getElementsByTagName('phone');

    for(var i = 0; i < list.length; i++) {
        var item = list[i];

        var ids = item.getElementsByTagName('id');
        for(var j = 0; j < ids.length; j++) {
            phone_id = ids[j].childNodes[0].nodeValue;
        }

        var names = item.getElementsByTagName('name');
        for(var j = 0; j < names.length; j++) {
            phone_name = names[j].childNodes[0].nodeValue;
        }

        var widths = item.getElementsByTagName('width');
        for(var j = 0; j < widths.length; j++) {
            phone_width = widths[j].childNodes[0].nodeValue;
        }

        var heights = item.getElementsByTagName('height');
        for(var j = 0; j < heights.length; j++) {
            phone_height = heights[j].childNodes[0].nodeValue;
        }

        result[phone_id] = {
            id:phone_id,
            name:phone_name,
            width:phone_width,
            height:phone_height
        };

    }
    return result;
}

function get_theme() {

    var result = [];

    $.ajax({
        async  : false,
        url    : '/apiFunction/?method=get_theme',
        success: function(response) {

            result.push({
                color : response.branding.color,
                label : response.branding.label,
                logo  : response.branding.logo,
                logo_reverse     : response.branding.logo_reverse,
                login_background : response.branding.login_background,
                app_title        : response.branding.app_title
            });

        }
    });

    return result;
}
