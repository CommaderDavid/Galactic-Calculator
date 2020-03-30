import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Calculate } from './galactic.js';

$(document).ready(function() {
  $("form#mainForm").submit(function (e) {
    e.preventDefault();
    const userAge = $("#userAge").val();
    let inputtedAge = new Calculate(userAge);
    let typePlanet = $("#planets").val();

    const merAge = inputtedAge.mercuryAge();
    const venAge = inputtedAge.venusAge();
    const marAge = inputtedAge.marsAge();
    const jupAge = inputtedAge.jupiterAge();

    if (typePlanet === "1") {
      $("#answer").show();
      $("#planetAge").empty().append(merAge);
      $("#yearsLeft").empty().append(inputtedAge.determinesLife(merAge));
    } else if (typePlanet === "2") {
      $("#answer").show();
      $("#planetAge").empty().append(venAge);
      $("#yearsLeft").empty().append(inputtedAge.determinesLife(venAge));
    } else if (typePlanet === "3") {
      $("#answer").show();
      $("#planetAge").empty().append(marAge);
      $("#yearsLeft").empty().append(inputtedAge.determinesLife(marAge));
    } else if (typePlanet === "4") {
      $("#answer").show();
      $("#planetAge").empty().append(jupAge);
      $("#yearsLeft").empty().append(inputtedAge.determinesLife(jupAge));
    }
  });
});
