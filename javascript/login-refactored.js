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

    local_session_body = {
        "user": {
            "surname": "Admin",
            "status": "Active",
            "first_name": "LR",
            "organisation": "HM Land Registry",
            "email": "llclradmin@nonexistanttest.com",
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

    preview_session_body = {
        "user": {
            "surname": "Doe",
            "status": "Active",
            "first_name": "Jane",
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

    local_session_key = create_session_key('http://localhost:8001/v1.0/sessions')
    preview_session_key = create_session_key('http://llc-preview-auth.service.dev.ctp.local:8091/v1.0/sessions')

    populate_session('http://localhost:8001/v1.0/sessions', local_session_key, local_session_body)
    populate_session('http://llc-preview-auth.service.dev.ctp.local:8091/v1.0/sessions', preview_session_key, preview_session_body)

    if (phantom.url.indexOf('http://localhost:8080') > -1) {
        phantom.addCookie({
            'name': 'AccessToken',
            'value': local_session_key,
            'domain': 'localhost'
        });
    } else {
        phantom.addCookie({
            'name': 'AccessToken',
            'value': preview_session_key,
            'domain': 'llc-preview-frontend.service.dev.ctp.local'
        });
    }

    page.open(page_url, function() {})

    setTimeout(ready, 2000);
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

    xhr2 = new XMLHttpRequest();
    xhr2.open('PUT', url, false);
    xhr2.setRequestHeader("Content-type", "application/json");
    xhr2.send(JSON.stringify(body));
}