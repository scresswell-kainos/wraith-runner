organisations = require('./data-organisations')
user_under_test = require('./data-user')

module.exports = {
    "/admin/user/edit/details": {
        "editing_user_state": user_under_test,
        "organisation_list": organisations
    },
    "/admin/user/add/details": {
        "creating_user_state": {
            "surname": null,
            "organisation": null,
            "status": null,
            "original_email": null,
            "roles": user_under_test["roles"],
            "id": null,
            "email": null,
            "first_name": null,
            "permissions": user_under_test["permissions"]
        },
        "organisation_list": organisations
    },
    "/admin/user/add/confirm-details": {
        "creating_user_state": {
            "surname": user_under_test["surname"],
            "organisation": user_under_test["organisation"],
            "status": "Invited",
            "original_email": null,
            "roles": user_under_test["roles"],
            "id": null,
            "email": user_under_test["email"],
            "first_name": user_under_test["first_name"],
            "permissions": user_under_test["permissions"]
        },
        "organisation_list": organisations
    },
    "/admin/user/edit/confirm-details": {
        "editing_user_state": user_under_test,
        "organisation_list": organisations
    },
};