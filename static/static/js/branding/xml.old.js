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

    xmlFile = '/static/branding/theme.xml';
    parent  = 'themes';

    var result = [];
    var request = new XMLHttpRequest();
    request.open("GET", xmlFile, false);
    request.send();
    var xml = request.responseXML;
    var list = xml.getElementsByTagName(parent);
    for(var i = 0; i < list.length; i++) {
        var item = list[i];

        var colors = item.getElementsByTagName('color');
        for(var j = 0; j < colors.length; j++) {
            theme_color = colors[j].childNodes[0].nodeValue;
        }

        var labels = item.getElementsByTagName('label');
        for(var j = 0; j < labels.length; j++) {
            theme_label = labels[j].childNodes[0].nodeValue;
        }

        var nodes = item.getElementsByTagName('logo');
        for(var j = 0; j < nodes.length; j++) {
            theme_logo = nodes[j].childNodes[0].nodeValue;
        }

        var nodes = item.getElementsByTagName('logo_reverse');
        for(var j = 0; j < nodes.length; j++) {
            theme_logo_reverse = nodes[j].childNodes[0].nodeValue;
        }

        var nodes = item.getElementsByTagName('login_background');
        for(var j = 0; j < nodes.length; j++) {
            theme_login_background = nodes[j].childNodes[0].nodeValue;
        }

        var nodes = item.getElementsByTagName('app_title');
        for(var j = 0; j < nodes.length; j++) {
            theme_app_title = nodes[j].childNodes[0].nodeValue;
        }

        result.push({
            color:theme_color,
            label:theme_label,
            logo:theme_logo,
            logo_reverse:theme_logo_reverse,
            login_background:theme_login_background,
            app_title:theme_app_title
        });
    }
    return result;
}
