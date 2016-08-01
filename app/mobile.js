'use strict'

import './main';
import $ from 'jquery';

$(document).ready(function(){
  let app = document.createElement('div');
  app.innerHTML = '<h1> hello world </h1>';
  document.body.appendChild(app);
});
