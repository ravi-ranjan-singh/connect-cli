const crypto = require('crypto');

exports.generateKeys = () =>
  crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    namedCurve: 'sect239k1',
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
  });

exports.decryptedData = (encryptedData, privateKey) =>
  crypto
    .privateDecrypt(
      {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
      },
      encryptedData
    )
    .toString();
