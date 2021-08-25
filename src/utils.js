import fs from 'fs';
import path from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const readFile = (file) => {
  const fullPath = path.resolve(file);
  return fs.readFileSync(fullPath, { encoding: 'utf8' });
};

export default readFile;
