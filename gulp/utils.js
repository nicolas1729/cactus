'use strict';

var fs = require('fs');

<<<<<<< HEAD
module.exports =  {
    endsWith : endsWith,
    parseVersion : parseVersion
}

function endsWith(str, suffix) {
    return str.indexOf('/', str.length - suffix.length) !== -1;
};
=======
module.exports = {
    endsWith : endsWith,
    parseVersion : parseVersion,
    isLintFixed : isLintFixed
};

function endsWith(str, suffix) {
    return str.indexOf('/', str.length - suffix.length) !== -1;
}
>>>>>>> 533092147c410637b99bf57166ee237aec486555

var parseString = require('xml2js').parseString;
// return the version number from `pom.xml` file
function parseVersion() {
<<<<<<< HEAD
    var version;
=======
    var version = null;
>>>>>>> 533092147c410637b99bf57166ee237aec486555
    var pomXml = fs.readFileSync('pom.xml', 'utf8');
    parseString(pomXml, function (err, result) {
        if (result.project.version && result.project.version[0]) {
            version = result.project.version[0];
        } else if (result.project.parent && result.project.parent[0] && result.project.parent[0].version && result.project.parent[0].version[0]) {
            version = result.project.parent[0].version[0];
<<<<<<< HEAD
        } else {
            throw new Error('pom.xml is malformed. No version is defined');
        }
    });
    return version;
}

=======
        }
    });
    if (version === null) {
        throw new Error('pom.xml is malformed. No version is defined');
    }
    return version;
}

function isLintFixed(file) {
	// Has ESLint fixed the file contents?
	return file.eslint !== null && file.eslint.fixed;
}
>>>>>>> 533092147c410637b99bf57166ee237aec486555
