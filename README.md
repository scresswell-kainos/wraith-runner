# wraith-runner
[Wraith](https://github.com/BBC-News/wraith) was developed by the BBC News developers as a screenshot comparison tool.

This repo contains configurations to run against the LLC Maintain application for Land Registry.

## Installation
Clone the repository locally

Navigate to the repository folder

Run

'''./run_wraith.sh'''

# Files of note

## run_wraith.sh
A simple shell script which:
- Installs phantomjs
- Installs wraith
- Runs a wraith scan

## /config/capture.yaml
The configuration file
- The screens to be snapped
- The resolutions to be used
- The login file to use. Currently the config is set up to use javascript/login.js

## javascript/login.js
Simple javascript file which logs in to the application if the login form is displayed.

It will complete the login form using the specified username and password.
