const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '..', 'public', 'favicon.svg');
const outputDir = path.join(__dirname, '..', 'public');

function createIco(pngBuffer) {
  const size = pngBuffer.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0);
  entry.writeUInt8(32, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(size, 8);
  entry.writeUInt32LE(22, 12);

  return Buffer.concat([header, entry, pngBuffer]);
}

async function generateFavicons() {
  const svgBuffer = fs.readFileSync(svgPath);

  const sizes = [
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'favicon-192x192.png', size: 192 },
    { name: 'logo192.png', size: 192 },
    { name: 'logo512.png', size: 512 }
  ];

  for (const { name, size } of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(outputDir, name));
    console.log(`Generated ${name} (${size}x${size})`);
  }

  const png32 = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();

  const icoBuffer = createIco(png32);
  fs.writeFileSync(path.join(outputDir, 'favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico (32x32)');
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
