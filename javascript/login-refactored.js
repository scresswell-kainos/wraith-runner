session_config = require('./session')

module.exports = function (phantom, ready) {
    page_location = ''
    for (var i in page.cookies) {
        if (page.cookies[i].name === 'Location') {
            page_location = page.cookies[i].value
        }
    }

    root_url = phantom.url.split('/').slice(0,3).join('/')
    page_url = root_url + page_location

    session_body = {
        "user": {
            "surname": "Admin",
            "status": "Active",
            "first_name": "LR",
            "organisation": "HM Land Registry",
            "email": "lr_admin_1@email.com",
            "roles": [
            "LLC LR Admins"
            ],
            "permissions": [
                "Edit Accounts",
                "Create LR User",
                "Browse LLC",
                "Cancel LLC",
                "Request LLC1",
                "Add LLC",
                "Vary LLC",
                "Retrieve LLC",
                "Create LA User",
                "Add LON",
                "Create LA Admin",
                "Set User Organisation",
                "View Accounts",
                "Search Users",
                "Account Management",
                "Archive Accounts",
                "Create LR Admin",
                "Change Account Role",
                "Change Account Status"
            ]
        },
        "maintain_frontend": session_config[page_location]
    }

    if (phantom.url.indexOf('llc-integration-frontend.service.dev.ctp.local') > -1) {
        integration_session_key = create_session_key('http://llc-integration-auth.service.dev.ctp.local:8091/v1.0/sessions')
        console.log('integration ' + page_url + ' ' + integration_session_key)
        populate_session('http://llc-integration-auth.service.dev.ctp.local:8091/v1.0/sessions', integration_session_key, session_body)

        phantom.addCookie({
            'name': 'AccessToken',
            'value': integration_session_key,
            'domain': 'llc-integration-frontend.service.dev.ctp.local'
        });
    } else {
        preview_session_key = create_session_key('http://llc-preview-auth.service.dev.ctp.local:8091/v1.0/sessions')
        console.log('preview ' + page_url + ' ' + preview_session_key)
        populate_session('http://llc-preview-auth.service.dev.ctp.local:8091/v1.0/sessions', preview_session_key, session_body)

        phantom.addCookie({
            'name': 'AccessToken',
            'value': preview_session_key,
            'domain': 'llc-preview-frontend.service.dev.ctp.local'
        });
    }

    setTimeout(function(){ready();}, 20000);
}

function create_session_key (url) {
    xhr = new XMLHttpRequest();
    xhr.open('POST', url, false);
    xhr.send();

    var response = xhr.responseText;

    return response
}

function populate_session (url, key, body) {
    url += '/' + key + '/state'
    console.log(url)
    xhr2 = new XMLHttpRequest();
    xhr2.open('PUT', url, false);
    xhr2.setRequestHeader("Content-type", "application/json");
    xhr2.send(JSON.stringify(body));
}
