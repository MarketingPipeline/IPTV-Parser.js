/* Stuff for webpack config / build process 
Note / step for cutting release -
update package.json FIRST with version - to keep updated version in license.
THEN create build.
*/ 
const packageData = require('../package.json');

const REPONAME = `IPTV-Parser.js`;

const LICENSE = `/**!
 * @license ${REPONAME} - ${packageData.description}
 * VERSION: ${packageData.version}
 * LICENSED UNDER ${packageData?.license} LICENSE
 * MORE INFO CAN BE FOUND AT https://github.com/MarketingPipeline/${REPONAME}/
 */`;

const packageCONFIG = {LICENSE, FILENAME:packageData.main.split("/").pop()};

module.exports = packageCONFIG
