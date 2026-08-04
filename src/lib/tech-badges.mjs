import {
  siBootstrap,
  siCss,
  siDjango,
  siDocker,
  siExpress,
  siFirebase,
  siFlutter,
  siGooglechrome,
  siHtml5,
  siLinux,
  siMongodb,
  siMui,
  siMysql,
  siN8n,
  siNginx,
  siNodedotjs,
  siOllama,
  siPm2,
  siPostgresql,
  siPuppeteer,
  siPython,
  siReact,
  siSqlite,
  siTailwindcss,
  siUnity,
} from 'simple-icons';

const TECHNOLOGIES = {
  react: siReact,
  'node.js': siNodedotjs,
  python: siPython,
  docker: siDocker,
  'docker compose': siDocker,
  linux: siLinux,
  nginx: siNginx,
  django: siDjango,
  'django rest framework': siDjango,
  'material ui': siMui,
  express: siExpress,
  'express.js': siExpress,
  n8n: siN8n,
  flutter: siFlutter,
  unity: siUnity,
  puppeteer: siPuppeteer,
  chromium: siGooglechrome,
  html: siHtml5,
  css: siCss,
  'tailwind css': siTailwindcss,
  bootstrap: siBootstrap,
  postgresql: siPostgresql,
  mysql: siMysql,
  mongodb: siMongodb,
  sqlite: siSqlite,
  firebase: siFirebase,
  ollama: siOllama,
  pm2: siPm2,
};

const techKeys = Object.keys(TECHNOLOGIES).sort((a, b) => b.length - a.length);

export function techColor(hex) {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  if (luminance < 0.12) return '9a9a9a';
  if (luminance > 0.9) return '6f6f6f';
  return hex;
}

export { techKeys, TECHNOLOGIES as techByKey };
