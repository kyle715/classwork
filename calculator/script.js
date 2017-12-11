/* global $ */
 var sum = [{
     sumVal: [0,] 
 }];

 $('#btn1').on('click', function() {
    var memory = document.getElementById('table').value;
    sum[0].sumVal.push(memory);
    document.getElementById('table').value = 1;
 });
 $('#btn2').on('click', function() {
    var memory = document.getElementById('table').value;
    sum[0].sumVal.push(memory);
    document.getElementById('table').value = 2;
 });
 $('#btn3').on('click', function() {
    var memory = document.getElementById('table').value;
    sum[0].sumVal.push(memory);
    document.getElementById('table').value = 3;
 });
 $('#btn4').on('click', function() {
    var memory = document.getElementById('table').value;
    sum[0].sumVal.push(memory);
    document.getElementById('table').value = 4;
 });
 $('#btn5').on('click', function() {
    var memory = document.getElementById('table').value;
    sum[0].sumVal.push(memory);
    document.getElementById('table').value = 5;
 });
 $('#btn6').on('click', function() {
    var memory = document.getElementById('table').value;
    sum[0].sumVal.push(memory);
    document.getElementById('table').value = 6;
 });
 $('#btn7').on('click', function() {
    var memory = document.getElementById('table').value;
    sum[0].sumVal.push(memory);
    document.getElementById('table').value = 7;
 });$('#btn8').on('click', function() {
    var memory = document.getElementById('table').value;
    sum[0].sumVal.push(memory);
    document.getElementById('table').value = 8;
 });$('#btn9').on('click', function() {
    var memory = document.getElementById('table').value;
    sum[0].sumVal.push(memory);
    document.getElementById('table').value = 9;
 });
 $('#btn0').on('click', function() {
    var memory = document.getElementById('table').value;
    sum[0].sumVal.push(memory);
    document.getElementById('table').value = 0;
 });
 $('#btn.').on('click', function() {
    console.log('hello');
    var memory = document.getElementById('table').value;
    document.getElementById('table').value = memory + '.';
 });
 $('btn+').on('click',function() {
    var b = sum[0].sumVal.split(',').map(function(item) {
    return parseInt(item, 10);
    });
        console.log(b);
 });