const requestJson = require('./requestJson');

const REMOTE_SERVICE_URL = 'https://data.jsdelivr.com/v1/package/npm';


module.exports = async function getFilesList(libName, libVersion) {
  // https://github.com/jsdelivr/data.jsdelivr.com#list-package-files
  const url = `${REMOTE_SERVICE_URL}/${libName}@${libVersion}/flat`;
  const libRoot = await requestJson(url);

  return libRoot.files || [];
};
