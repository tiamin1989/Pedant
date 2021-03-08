import Select from '../components/Select.js';

function addListeners() {
  const select = new Select('#select');
  select.resizeSelect(this.selectedItem);

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
}

document.addEventListener("DOMContentLoaded", addListeners);
