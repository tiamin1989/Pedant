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
