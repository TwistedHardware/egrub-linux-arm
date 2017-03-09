// general theme functions

function add_rule(rule, doc) {

    for( var i in doc.styleSheets ){
        if( doc.styleSheets[i].href && doc.styleSheets[i].href.indexOf("theme-editor-style.css") ) {
            stylesheet = doc.styleSheets[i];
            break;
        }
    }

    stylesheet.insertRule(rule,stylesheet.cssRules.length);
}

function apply_rule(color, rules, doc) {
    n = rules.length;
    for(var i = 0; i < n; i++) {
        add_rule(rules[i],doc);
    }
}

function apply_theme(doc) {

    // get theme
    var theme = get_theme();

    theme_change(theme[0].color, doc);
    item_label_change(theme[0].label, doc);

    img = doc.getElementById('logo');
    logo_change(null,img,theme[0].logo);

    img = doc.getElementById('logo_reverse');
    logo_change(null,img,theme[0].logo_reverse);

    login_body = doc.getElementById('login_body');
    login_background_change(null,login_body,theme[0].login_background);

    app_title = doc.getElementById('app_title');
    app_title_change(app_title,theme[0].app_title);
}

function readURL(input, img) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            img.src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function readURLBackgroundImage(input, obj) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            obj.style.backgroundImage = "url('" + e.target.result + "')";
        }

        reader.readAsDataURL(input.files[0]);
    }
}

// index theme events

function theme_change(color, doc) {
    rules = [];

    rules[0] = '.theme-color {background-color:' + color + ';}';
    rules[1] = '.darker {background: linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), ' + color + ';}';
    rules[2] = '.theme-color-menu-icon {color: ' + color + ';}';
    rules[3] = '.login-field {border-bottom: 2px solid ' + color + ';}';

    apply_rule(color, rules, doc);
}

function item_label_change(color, doc) {

    rules = [];

    rules[0] = '.theme-color-menu-label {color: ' + color + ';}';

    apply_rule(color, rules, doc);
}

function logo_change(input = null, img = null, imgUrl = '') {
    if(img != null && imgUrl != '') {
        img.src = imgUrl;
    }
    else if(input != null) {
        readURL(input, img);
    }
}

function login_background_change(input = null, obj = null, imgUrl = '') {
    if(obj != null && imgUrl != '') {
        obj.style.backgroundImage = "url('" + imgUrl + "')";
    }
    else if(input != null) {
        readURLBackgroundImage(input, obj);
    }
}

function app_title_change(obj = null, value = '') {
    if(obj != null) {
        if(value != '') {
            obj.innerHTML = value;
        }
        else {
            obj.innerHTML = '&nbsp;';
        }
    }
}
