/* global $ */
 var sum = [];

 $('#btn1').on('click', function() {
    var memory = document.getElementById('table').value;
    document.getElementById('table').value = memory + 1;
 });
 $('#btn2').on('click', function() {
    var memory = document.getElementById('table').value;
    document.getElementById('table').value = memory + 2;
 });
 $('#btn3').on('click', function() {
    var memory = document.getElementById('table').value;
    document.getElementById('table').value = memory + 3;
 });
 $('#btn4').on('click', function() {
    var memory = document.getElementById('table').value;
    document.getElementById('table').value = memory + 4;
 });
 $('#btn5').on('click', function() {
    var memory = document.getElementById('table').value;
    document.getElementById('table').value = memory + 5;
 });
 $('#btn6').on('click', function() {
    var memory = document.getElementById('table').value;
    document.getElementById('table').value = memory + 6;
 });
 $('#btn7').on('click', function() {
    var memory = document.getElementById('table').value;
    document.getElementById('table').value = memory + 7;
 });$('#btn8').on('click', function() {
    var memory = document.getElementById('table').value;
    document.getElementById('table').value =memory + 8;
 });$('#btn9').on('click', function() {
    var memory = document.getElementById('table').value;
    document.getElementById('table').value = memory + 9;
 });
 $('#btn0').on('click', function() {
    var memory = document.getElementById('table').value;
    document.getElementById('table').value = memory + 0;
 });
 $('#btnDec').on('click', function() {
    var memory = document.getElementById('table').value;
    document.getElementById('table').value = memory + '.';
 });
 $('#btnPlus').on('click',function() {
     var memory = document.getElementById('table').value;
     sum.push(memory);
     sum.push('+');
     document.getElementById('table').value = '';
 });
 $('#btnSub').on('click',function() {
     var memory = document.getElementById('table').value;
     sum.push(memory);
     sum.push('-');
     document.getElementById('table').value = '';
 });
  $('#btnMul').on('click',function() {
     var memory = document.getElementById('table').value;
     sum.push(memory);
     sum.push('*');
     document.getElementById('table').value = '';
 });
  $('#btnDiv').on('click',function() {
     var memory = document.getElementById('table').value;
     sum.push(memory);
     sum.push('/');
     document.getElementById('table').value = '';
 });
  $('#btnC').on('click',function() {
     document.getElementById('table').value = '';
 });
  $('#btnCE').on('click',function() {
      sum = [];
      document.getElementById('table').value = '';
 });
 $('#btnEqual').on('click', function() {
     var memory = document.getElementById('table').value;
     sum.push(memory);
     document.getElementById('table').value = '';
     sToV();
 });
 function sToV(){
     var join = sum.join('');
     var equation = eval(join);
     document.getElementById('table').value = equation;
     sum = [];
 }
