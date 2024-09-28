// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const awsExportsBase64 = process.env[process.env.AWS_EXPORTS_KEY];
const awsExports = Buffer.from(awsExportsBase64, 'base64').toString('utf8');

fs.writeFileSync('aws-exports.js', awsExports);
