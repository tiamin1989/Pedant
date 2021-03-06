import Select from '../components/Select.js';

const select = new Select('#select');

document.getElementById('select').addEventListener(
  'change',
  function () { select.resizeSelect(this.selectedItem); },
  false
);

document.getElementById('select').addEventListener(
  'blur',
  function () { select.resizeSelect(this.selectedItem); },
  false
);

document.getElementById('select').addEventListener(
  'focus',
  function () { select.restoreSelect(); },
  false
);

document.querySelector('.header__hamburger').addEventListener(
  'click',
  function() {
    document.querySelector('.header__hamburger-nav-list').style.visibility = 'visible';
    document.querySelector('.header__hamburger-close').style.display = 'block';
  },
  false
);

document.querySelector('.header__hamburger-close').addEventListener(
  'click',
  function() {
    document.querySelector('.header__hamburger-nav-list').style.visibility = 'hidden';
    document.querySelector('.header__hamburger-close').style.display = 'none';
  },
  false
);
