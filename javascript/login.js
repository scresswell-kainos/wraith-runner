session_config_maintain = require('./session-maintain')
session_config_account_management = require('./session-account-management')
user_data = require('./data-admin-user')

module.exports = function (phantom, ready) {
    page_location = ''
    for (var i in page.cookies) {
        if (page.cookies[i].name === 'Location') {
            page_location = page.cookies[i].value
        }
    }
    root_url = phantom.url.split('/').slice(0, 3).join('/')
    page_url = root_url + page_location

    if (session_config_maintain[page_location] != undefined) {
        // handle maintain frontend sessions
        body = {
            "user": user_data,
            "maintain_frontend": session_config_maintain[page_location]
        }
    } else if (session_config_account_management[page_location] != undefined) {
        // handle account management frontend sessions
        body = {
            "user": user_data,
            "account_management": session_config_account_management[page_location]
        }
    } else {
        // handle any other pages that need login
        body = {
            "user": user_data,
        }
    }

    if (page_location != '') {
        add_cookie(phantom, body);
        page.open(page_url, function () {
        })
    }
    setTimeout(ready, 2000);
}
function add_cookie(phantom, body){
    session_path = ''
    domain = ''

    if (phantom.url.indexOf('localhost') > -1) {
        session_path = 'http://localhost:8001/v1.0/sessions';
        domain = 'localhost'
    } else if (phantom.url.indexOf('preview') > -1) {
        session_path = 'http://llc-preview-auth.service.dev.ctp.local:8091/v1.0/sessions';
        domain = 'llc-preview-frontend.service.dev.ctp.local'
    } else if (phantom.url.indexOf('integration') > -1) {
        session_path = 'http://llc-integration-auth.service.dev.ctp.local:8091/v1.0/sessions';
        domain = 'llc-integration-frontend.service.dev.ctp.local'
    }

    if (session_path != '' && domain != '') {
        session_key = create_session_key(session_path)
        populate_session(session_path, session_key, body)

        phantom.addCookie({
            'name': 'AccessToken',
            'value': session_key,
            'domain': domain
        });
    } else {
        console.log("WARNING - Cookie information could not be loaded")
    }

}

function create_session_key(url) {
    xhr = new XMLHttpRequest();
    xhr.open('POST', url, false);
    xhr.send();

    var response = xhr.responseText;

    return response
}

function populate_session(url, key, body) {
    url += '/' + key + '/state'

    xhr2 = new XMLHttpRequest();
    xhr2.open('PUT', url, false);
    xhr2.setRequestHeader("Content-type", "application/json");
    xhr2.send(JSON.stringify(body));
}
