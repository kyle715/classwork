/* global $ */
 var sum = [];
 var mem = [];

 $('#btn1').on('click', function() {
    var memory = document.getElementById('table').value;
     if(memory == ''){
         document.getElementById('table').value = 1;
     }else {
         document.getElementById('table').value = memory + 1;
     }
 });
 $('#btn2').on('click', function() {
    var memory = document.getElementById('table').value;
     if(memory == ''){
         document.getElementById('table').value = 2;
     }else {
         document.getElementById('table').value = memory + 2;
     }
 });
 $('#btn3').on('click', function() {
    var memory = document.getElementById('table').value;
     if(memory == ''){
         document.getElementById('table').value = 3;
     }else {
         document.getElementById('table').value = memory + 3;
     }
 });
 $('#btn4').on('click', function() {
    var memory = document.getElementById('table').value;
     if(memory == ''){
         document.getElementById('table').value = 4;
     }else {
         document.getElementById('table').value = memory + 4;
     }
 });
 $('#btn5').on('click', function() {
    var memory = document.getElementById('table').value;
     if(memory == ''){
         document.getElementById('table').value = 5;
     }else {
         document.getElementById('table').value = memory + 5;
     }
 });
 $('#btn6').on('click', function() {
    var memory = document.getElementById('table').value;
     if(memory == ''){
         document.getElementById('table').value = 6;
     }else {
         document.getElementById('table').value = memory + 6;
     }
 });
 $('#btn7').on('click', function() {
    var memory = document.getElementById('table').value;
     if(memory == ''){
         document.getElementById('table').value = 7;
     }else {
         document.getElementById('table').value = memory + 7;
     }
 });$('#btn8').on('click', function() {
    var memory = document.getElementById('table').value;
     if(memory == ''){
         document.getElementById('table').value = 8;
     }else {
         document.getElementById('table').value = memory + 8;
     }
 });$('#btn9').on('click', function() {
    var memory = document.getElementById('table').value;
     if(memory == ''){
         document.getElementById('table').value = 9;
     }else {
         document.getElementById('table').value = memory + 9;
     }
 });
 $('#btn0').on('click', function() {
    var memory = document.getElementById('table').value;
     if(memory == ''){
         document.getElementById('table').value = 0;
     }else {
         document.getElementById('table').value = memory + 0;
     }
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
     document.getElementById('function').innerHTML = '+';
 });
 $('#btnSub').on('click',function() {
     var memory = document.getElementById('table').value;
     sum.push(memory);
     sum.push('-');
     document.getElementById('table').value = '';
     document.getElementById('function').innerHTML = '-';
 });
  $('#btnMul').on('click',function() {
     var memory = document.getElementById('table').value;
     sum.push(memory);
     sum.push('*');
     document.getElementById('table').value = '';
     document.getElementById('function').innerHTML = '*';
 });
  $('#btnDiv').on('click',function() {
     var memory = document.getElementById('table').value;
     sum.push(memory);
     sum.push('/');
     document.getElementById('table').value = '';
     document.getElementById('function').innerHTML = '/';
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
     document.getElementById('function').innerHTML = '';
     sToV();
 });
 function sToV(){
     var join = sum.join('');
     var equation = eval(join);
     document.getElementById('table').value = equation;
     sum = [];
 }
 $('#btnMA').on('click', function(){
     if(mem === []){
         mem = [];
     }else {
     mem.push('+');
     mem.push(document.getElementById('table').value);
     var join = mem.join('');
     var equation = eval(join);
     document.getElementById('table').value = equation;
     mem = [];
     var mr = document.getElementById('table').value;
     mem.push(mr);
     document.getElementById('table').value = mem;
 }});
 $('#btnMS').on('click', function(){
     if(mem === []){
         return false;
     }else {
     mem.push('-');
     mem.push(document.getElementById('table').value);
     var join = mem.join('');
     var equation = eval(join);
     document.getElementById('table').value = equation;
     mem = [];
     var mr = document.getElementById('table').value;
     mem.push(mr);
     document.getElementById('table').value = mem;
 }});
 $('#btnMR').on('click', function(){
     var value = mem.join('');
     document.getElementById('table').value = value;
 });
 $('#btnMC').on('click', function(){
     mem = [];
     document.getElementById('table').value = '';
 });
 
 
/* for (var i = 0; i < 10; i++ )
 var btn = document.createElement("BUTTON");
 btn.setAttribute('type', 'text');
 btn.setAttribute('value', '');
 btn.setAttribute('id', `btn${i}`);
 document.getElementById('buttons').appendChild(btn);*/