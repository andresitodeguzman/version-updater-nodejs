/**
 * Andresito de Guzman
 * 2020
 * All Rights Reserved
 * 
 * https://github.com/andresitodeguzman
 */

const fs = require('fs');
const beautify = require('json-beautify');

try {
    const file = JSON.parse(fs.readFileSync('./package.json','utf-8'));
    if(file) {
        if(file.version) {
            const parsed = file.version.split('.');
            try {
                const version = { major: +parsed[0], minor: +parsed[1], patch: +parsed[2] };
                if(version.patch === 99) {
                    if(version.minor === 99) {
                        version.major++;
                        version.minor = 0;
                        version.patch = 0;
                    } else {
                        version.minor++;
                        version.patch = 0;
                    }
                } else {
                    version.patch++;
                }

                file.version = `${version.major}.${version.minor}.${version.patch}`;
                try {
                    fs.writeFileSync('package.json', beautify(file,null,2,80));
                    console.log(`Version updated to ${file.version}`);
                } catch(e) {
                    console.error('Failed in writing new version number to package.json');
                }
            } catch (e) {
                console.error('Unknown version format. Please have a major, minor and patch type of versioning.');
            }
        } else {
            console.error('Missing version field in package.json, Add it manually first by adding it.');
        }
    } else  {
        console.error('Failed in parsing the package.json file. It may be missing or the file is invalid or corrupted.');
    }
} catch (e) {
    console.error('Failed in updating the app version. Do this manually by editing the version number on package.json');
}
