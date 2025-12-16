import yayJpg from '../assets/yay.jpg';
// import "antd/lib/config-provider/style/index.js";
// require('./a.css');
// import * as onig from 'vscode-oniguruma/release/onig.wasm';

// onig;

// const onig2 = new URL("https://unpkg.com/vscode-oniguruma@2.0.1/release/onig.wasm");

// onig2;

import a from './a';

a;

import { Shape } from '@antv/g-canvas';

Shape

export function requireStat(name: string) {
  return require(`${name}`);
}

export async function importUrl(url: string) {
  return import(`${url}`).then((module) => module.default);
}


export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi3333!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
