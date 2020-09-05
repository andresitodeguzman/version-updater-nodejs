# Version Updater (Node JS)
Script that update version number on build.

## Getting Started
* Guarantee that your package.json contains a version. Make sure that is is in the format `0.0.0`, `major.minor.patch` format.
* Copy script to the root folder of the Node JS project.
* Install `json-beautify`
```bash
$npm i json-beauty --save-dev
```
* Add to build/deploy pipeline or script. It may be added to the build/deploy command in package.json
```json
"scripts": {
  "build": "node version-updater.js && ng build --prod && firebase deploy"
}
```
