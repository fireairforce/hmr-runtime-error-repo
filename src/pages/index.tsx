import yayJpg from '../assets/yay.jpg';
// import "antd/lib/config-provider/style/index.js";
import './a.css';


export function requireStat(name: string) {
  return require(require.resolve(`${name}/package.json'`))
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
