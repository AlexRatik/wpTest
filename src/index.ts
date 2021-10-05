import { doSmth } from './module';
import El from './style.css';
import El2 from './style2.css';
import image from './assets/Выпускница.jpg';
import myf from './file.myf';

console.log(El2);

const img = document.createElement('img');
img.src = image;
img.className = El.img_as;
document.body.appendChild(img);

doSmth();

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const b = 'git';

setTimeout(() => {
  const a = 'ssh';
  console.log(a + b);
}, 1000);

function createElement(style:string, text:string) {
  const el = document.createElement('div');
  el.textContent = text;
  el.className = style;
  document.body.appendChild(el);
}
createElement(El.El, myf);
createElement(El2.eL, 'Element 2');
