const crypto = require('node:crypto')
const path = require('node:path')

module.exports = function staticImageDataLoader(content) {
  const extension = path.extname(this.resourcePath)
  const baseName = path.basename(this.resourcePath, extension)
  const hash = crypto.createHash('sha1').update(content).digest('hex').slice(0, 8)
  const outputPath = `static/media/${baseName}.${hash}${extension}`

  this.emitFile(outputPath, content)

  return `
    const image = {
      src: __webpack_public_path__ + ${JSON.stringify(outputPath)},
      width: 0,
      height: 0,
    };
    export default image;
  `
}

module.exports.raw = true
