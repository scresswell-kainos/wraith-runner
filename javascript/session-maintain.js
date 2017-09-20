llc_data = require('./data-add-llc')

module.exports = {
    "/add-land-charge/add-provisions": {
        "add_charge_state": {
            "charge-type": llc_data["charge-type"],
            "originating-authority": llc_data["originating-authority"],
        }
    },
    "/add-land-charge/add-location": {
        "add_charge_state": {
            "charge-type": llc_data["charge-type"],
            "originating-authority": llc_data["originating-authority"],
            "statutory-provision": llc_data["statutory-provision"]
        }
    },
    "/add-land-charge/more-information": {
        "add_charge_state": {
            "statutory-provision": llc_data["statutory-provision"],
            "geometry": llc_data["geometry"],
            "further-information-location": llc_data["further-information-location"]
        }
    },
    "/add-land-charge/charge-reason": {
        "add_charge_state": {
            "statutory-provision": llc_data["statutory-provision"],
            "geometry": llc_data["geometry"],
            "further-information-location": llc_data["further-information-location"]
        }
    },
    "/add-land-charge/charge-date": {
        "add_charge_state": {
            "statutory-provision": llc_data["statutory-provision"],
            "geometry": llc_data["geometry"],
            "charge-geographic-description": llc_data["charge-geographic-description"],
            "instrument": llc_data["instrument"],
            "charge-type": llc_data["charge-type"],
            "originating-authority": llc_data["originating-authority"],
            "further-information-location": llc_data["further-information-location"]
        }
    },
    "/add-land-charge/confirmation": {
        "last_created_charge": {
            "registration_date": "12/03/2017",
            "entry_number": "1",
            "charge_id": "LLC-12BC"
        }
    },
    "/add-land-charge/additional-info": {
        "add_charge_state": {
            "statutory-provision": llc_data["statutory-provision"],
            "geometry": llc_data["geometry"],
            "further-information-location": llc_data["further-information-location"]
        }
    },
    "/add-land-charge/expiry": {
        "add_charge_state": {
            "statutory-provision": llc_data["statutory-provision"],
            "geometry": llc_data["geometry"],
            "charge-geographic-description": llc_data["charge-geographic-description"],
            "instrument": llc_data["instrument"],
            "charge-type": llc_data["charge-type"],
            "originating-authority": llc_data["originating-authority"],
            "further-information-location": llc_data["further-information-location"]
        }
    },
    "/add-lon/dominant-building": {
        "add_lon_charge_state": {
            "statutory-provision": "Rights of Light Act 1959 section 2(4)",
            "charge-type": "Light Obstruction Notice",
            "originating-authority": "HM Land Registry",
            "instrument": "Certificate",
            "further-information-location": "xxx"
        }
    },
    "/add-lon/upload-lon-documents": {
        "add_lon_charge_state": {
            "statutory-provision": "Rights of Light Act 1959 section 2(4)",
            "charge-type": "Light Obstruction Notice",
            "originating-authority": "HM Land Registry",
            "instrument": "Certificate",
            "further-information-location": llc_data["further-information-location"]
        }
    },
    "/add-lon/dominant-building-extent": {
        "add_lon_charge_state": {
            "applicant-address": {
                "street": "DEVON COUNTY COUNCIL GEORGE STREET 2",
                "postcode": "EX1 1DA",
                "country": "United Kingdom",
                "county": "2",
                "town": "EXETER"
            },
            "charge-geographic-description": llc_data["charge-geographic-description"],
            "originating-authority": "HM Land Registry",
            "statutory-provision": "Rights of Light Act 1959 section 2(4)",
            "applicant-name": "bob",
            "instrument": "Certificate",
            "charge-type": "Light Obstruction Notice",
            "further-information-location": llc_data["further-information-location"]
        }
    },
    "/add-lon/land-interest": {
        "add_lon_charge_state": {
            "statutory-provision": "Rights of Light Act 1959 section 2(4)",
            "charge-type": "Light Obstruction Notice",
            "originating-authority": "HM Land Registry",
            "instrument": "Certificate",
            "further-information-location": llc_data["further-information-location"],
        }
    },
    "/add-lon/servient-structure-height": {
        "add_lon_charge_state": {
            "statutory-provision": "Rights of Light Act 1959 section 2(4)",
            "charge-type": "Light Obstruction Notice",
            "originating-authority": "HM Land Registry",
            "instrument": "Certificate",
            "further-information-location": llc_data["further-information-location"],
        }
    },
    "/add-lon/servient-structure-position": {
        "add_lon_charge_state": {
            "statutory-provision": "Rights of Light Act 1959 section 2(4)",
            "charge-type": "Light Obstruction Notice",
            "originating-authority": "HM Land Registry",
            "instrument": "Certificate",
            "further-information-location": llc_data["further-information-location"],
        }
    },
    "/add-lon/confirmation": {
        "last_created_charge": {
            "entry_number": 149,
            "charge_id": "LLC-1G",
            "registration_date": "20/09/2017"
        }
    },
    "/modify-land-charge/edit-provisions": {},
    "/modify-land-charge/vary-location": {},
    "/modify-land-charge/additional-info": {},
    "/modify-land-charge/more-information": {},
    "/modify-land-charge/expiry": {},
    "/modify-land-charge/charge-reason": {},
    "/modify-land-charge/charge-date": {},
    "/modify-land-charge/confirm": {},
    "/create-llc1/extent": {},
    "/create-llc1/description": {},
    "/create-llc1/result": {}
};

