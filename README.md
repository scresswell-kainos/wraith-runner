# wraith-runner
[Wraith](https://github.com/BBC-News/wraith) is a ruby gem developed by the BBC News developers as a screenshot comparison tool.

This repository contains configurations and a runner to simplify running wraith againts the LLC Maintain application for Land Registry.

## Installation & running
Clone the repository locally

Navigate to the repository folder

Run

```
./run_wraith.sh
```

## Files of note

### run_wraith.sh
A simple shell script which:
- Installs phantomjs
- Installs wraith
- Runs a wraith scan

### /config/capture.yaml
The configuration file
- The screens to be snapped
- The resolutions to be used
- The login file to use. Currently the config is set up to use javascript/login.js

### /javascript/login.js
Simple javascript file which logs in to the application if the login form is displayed.

It will complete the login form using the username and password specified in the file.

# To be done
- Figure out how to add session information for the llc add / vary pages
- Figure out how to add session information for the user add / edit pages
