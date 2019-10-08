let startPage = document.getElementById('start-page');
let lap1 =document.getElementById('lap1');
let lap2 = document.getElementById('lap2');

let valami = document.getElementById('valami');

let startBtn = document.getElementById('start-btn');

let kocka1 = document.getElementById('kocka1');
let finish = document.getElementById('finish1');

startBtn.addEventListener('click', function () {
   startPage.style.display = 'none';
   lap1.style.display = 'block';
});

kocka1.addEventListener('mouseout', function () {
   startMenu();
});

finish.addEventListener('mouseout', function () {

});

function startMenu() {
   lap1.style.display = 'none';
   startPage.style.display = 'block';
}