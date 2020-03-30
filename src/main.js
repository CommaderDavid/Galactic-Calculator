import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Calculate } from './galactic.js';

$(document).ready(function() {
  $("form#mainForm").submit(function (e) {
    e.preventDefault();
    let typePlanet = $("#planets").val();
    const inputtedAge = $("#userAge").val();
    
  });
});
