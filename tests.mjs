import {readFileSync,existsSync} from 'node:fs';
const files=['index.html','app.js','styles.css','privacy.html','terms.html','about.html','contact.html','dashboard.html','robots.txt','sitemap.xml','vercel.json'];
for(const f of files) if(!existsSync(f)) throw new Error(`Missing ${f}`);
const html=readFileSync('index.html','utf8'), js=readFileSync('app.js','utf8');
for(const id of ['currency','rate','tasks','quote','pdf','share','proposal']) if(!html.includes(`id="${id}"`)) throw new Error(`Missing id ${id}`);
for(const token of ['application/ld+json','canonical','og:title']) if(!html.includes(token)) throw new Error(`Missing SEO ${token}`);
for(const token of ['function compute','localStorage','navigator.clipboard','window.print']) if(!js.includes(token)) throw new Error(`Missing function ${token}`);
console.log('All static, functionality, SEO and file-presence tests passed.');
