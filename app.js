let startPage = document.getElementById('start-page');
let lap1 =document.getElementById('lap1');
let lap2 = document.getElementById('lap2');

let valami = document.getElementById('valami');

let startBtn = document.getElementById('start-btn');

let kocka1 = document.getElementById('kocka1');
let kocka2 = document.getElementById('kocka2');

let finish1 = document.getElementById('finish1');
let finish2 = document.getElementById('finish2');

startBtn.addEventListener('click', function () {
   startPage.style.display = 'none';
   lap1.style.display = 'block';
});

kocka1.addEventListener('mouseout', function () {
   startMenu();
});

finish1.addEventListener('mouseout', function () {
   lap1.style.display = 'none';
   lap2.style.display = 'block';
   startPage.style.display = 'none';
});

function startMenu() {
   lap1.style.display = 'none';
   lap2.style.display = 'none';
   startPage.style.display = 'block';
}