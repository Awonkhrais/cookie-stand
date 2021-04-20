'use strict';

let totalHourly = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let totalSum=0;
let time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function Salmon (name , min , max , avg , customr ){


  this.name=name;
  this.min = min;
  this.max =max;
  this.avg = avg;
  this.customr =customr;
  this.sum = 0;





}


Salmon.prototype.getCusNum = function(){


  for(let i = 0 ; i<time.length ; i++){

    let customrNum= Math.ceil(getRandomInt(this.min,this.max)*this.avg);
    this.sum=this.sum+customrNum;
    this.customr.push(customrNum);
    totalHourly[i]=totalHourly[i]+customrNum;


  }

};

// Gernral tag for whole body.
const parentElement = document.getElementById('SalmonCookies');

let articleElement = document.createElement('article');
parentElement.appendChild(articleElement);

let table = document.createElement('table');
articleElement.appendChild(table);

let tRow = document.createElement('tr');
table.appendChild(tRow);
// function for the header row just.
function headerRow (){

  let thedaer =document.createElement('th');
  tRow.appendChild(thedaer);
  thedaer.textContent = 'location';

  for (let i = 0 ; i<time.length ; i++){

    let tHead =document.createElement('th');
    tRow.appendChild(tHead);
    tHead.textContent = time[i];
  }

  let locationTotal =document.createElement('th');
  tRow.appendChild(locationTotal);
  locationTotal.textContent = 'location Totals';
}

Salmon.prototype.render = function(){


  let tRow1 = document.createElement('tr');
  table.appendChild(tRow1);

  let city1 = document.createElement('td');
  tRow1.appendChild(city1);
  city1.textContent = this.name;

  for (let x = 0 ; x<time.length ; x++){

    let tBody =document.createElement('td');
    tRow1.appendChild(tBody);
    tBody.textContent = this.customr[x];
  }
  let tBody =document.createElement('th');
  tRow1.appendChild(tBody);
  tBody.textContent = this.sum;


};
// function for footer just

function footerRow (){
  let tRow2 = document.createElement('tr');
  table.appendChild(tRow2);
  let tfooter = document.createElement('td');
  tRow2.appendChild(tfooter);
  tfooter.textContent = 'Totals';

  for (let z = 0 ; z<time.length ; z++){
    let tBody1 = document.createElement('td');
    tRow2.appendChild(tBody1);
    tBody1.textContent = totalHourly[z];
    totalSum=totalSum+totalHourly[z];


  }

  let tTotaly = document.createElement('th');
  tRow2.appendChild(tTotaly);
  tTotaly.textContent = totalSum;

}
// this is Math.random()

function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}





let seattle =new Salmon('seattle' , 23 , 65 , 6.3 , []);
let Tokyo =new Salmon('Tokyo' , 3 , 24 , 1.2 , [] );
let dubai =new Salmon('Dubai' , 11 , 38 , 3.7 , []);
let paris =new Salmon('Paris' , 20 , 38 , 2.3 , []);
let lima =new Salmon('Lima' , 2 , 16 , 4.6 , []);


headerRow();
console.log(seattle);
seattle.getCusNum();
seattle.render();
console.log(Tokyo);
Tokyo.getCusNum();
Tokyo.render();
console.log(dubai);
dubai.getCusNum();
dubai.render();
console.log(paris);
paris.getCusNum();
paris.render();
console.log(lima);
lima.getCusNum();
lima.render();
footerRow();














// let seattle = {
//   name : 'Seattle',
//   min : 23,
//   max : 65,
//   avg : 6.3,
//   time : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   getCusNum : function() {



//     return Math.ceil(getRandomInt(this.min,this.max)*this.avg);

//   },


//   render : function() {

//     const parentElement = document.getElementById('SalmonCookies');

//     let articleElement = document.createElement('article');
//     parentElement.appendChild(articleElement);

//     let h2Element = document.createElement('h2');
//     h2Element.textContent = this.name;
//     articleElement.appendChild(h2Element);

//     let ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);

//     let sum = 0;
//     for (let i = 0; i < this.time.length; i++) {
//       let liElement = document.createElement('li');
//       let cookies = this.getCusNum();
//       liElement.textContent = this.time[i] + ': ' + cookies + ' cookies';
//       ulElement.appendChild(liElement);
//       sum = sum + cookies;
//       if (i===13){
//         let liElement=document.createElement('li');
//         liElement.textContent='total: ' + sum + ' cookies';
//         ulElement.appendChild(liElement);

//       }

//     }

//   },
// };



// let Tokyo ={
//   name :'Tokyo',
//   min : 3,
//   max : 24,
//   avg : 1.2,
//   time : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   getCusNum : function() {



//     return Math.ceil(getRandomInt(this.min,this.max)*this.avg);

//   },


//   render : function () {
//     const parentElement = document.getElementById('SalmonCookies');

//     let articleElement = document.createElement('article');
//     parentElement.appendChild(articleElement);

//     let h2Element = document.createElement('h2');
//     h2Element.textContent=this.name;
//     articleElement.appendChild(h2Element);

//     let ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);

//     let sum = 0;
//     for (let i = 0; i < this.time.length; i++) {
//       let liElement = document.createElement('li');
//       let cookies = this.getCusNum();
//       liElement.textContent = this.time[i] + ': ' + cookies + ' cookies';
//       ulElement.appendChild(liElement);
//       sum = sum + cookies;
//       if (i===13){
//         let liElement=document.createElement('li');
//         liElement.textContent='total: ' + sum + ' cookies';
//         ulElement.appendChild(liElement);

//       }

//     }



//   }



// };



// let Dubai ={
//   name :'Dubai',
//   min : 11,
//   max : 38,
//   avg : 3.7,
//   time : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   getCusNum : function() {



//     return Math.ceil(getRandomInt(this.min,this.max)*this.avg);

//   },


//   render : function () {
//     const parentElement = document.getElementById('SalmonCookies');

//     let articleElement = document.createElement('article');
//     parentElement.appendChild(articleElement);

//     let h2Element = document.createElement('h2');
//     h2Element.textContent=this.name;
//     articleElement.appendChild(h2Element);

//     let ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);

//     let sum = 0;
//     for (let i = 0; i < this.time.length; i++) {
//       let liElement = document.createElement('li');
//       let cookies = this.getCusNum();
//       liElement.textContent = this.time[i] + ': ' + cookies + ' cookies';
//       ulElement.appendChild(liElement);
//       sum = sum + cookies;
//       if (i===13){
//         let liElement=document.createElement('li');
//         liElement.textContent='total: ' + sum + ' cookies';
//         ulElement.appendChild(liElement);

//       }

//     }



//   }



// };


// let Paris ={
//   name :'Paris',
//   min : 20,
//   max : 38,
//   avg : 2.3,
//   time : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   getCusNum : function() {



//     return Math.ceil(getRandomInt(this.min,this.max)*this.avg);

//   },


//   render : function () {
//     const parentElement = document.getElementById('SalmonCookies');

//     let articleElement = document.createElement('article');
//     parentElement.appendChild(articleElement);

//     let h2Element = document.createElement('h2');
//     h2Element.textContent=this.name;
//     articleElement.appendChild(h2Element);

//     let ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);

//     let sum = 0;
//     for (let i = 0; i < this.time.length; i++) {
//       let liElement = document.createElement('li');
//       let cookies = this.getCusNum();
//       liElement.textContent = this.time[i] + ': ' + cookies + ' cookies';
//       ulElement.appendChild(liElement);
//       sum = sum + cookies;
//       if (i===13){
//         let liElement=document.createElement('li');
//         liElement.textContent='total: ' + sum + ' cookies';
//         ulElement.appendChild(liElement);

//       }

//     }



//   }



// };


// let Lima ={
//   name :'Lima',
//   min : 2,
//   max : 16,
//   avg : 4.6,
//   time : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   getCusNum : function() {



//     return Math.ceil(getRandomInt(this.min,this.max)*this.avg);

//   },


//   render : function () {
//     const parentElement = document.getElementById('SalmonCookies');

//     let articleElement = document.createElement('article');
//     parentElement.appendChild(articleElement);

//     let h2Element = document.createElement('h2');
//     h2Element.textContent=this.name;
//     articleElement.appendChild(h2Element);

//     let ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);

//     let sum = 0;
//     for (let i = 0; i < this.time.length; i++) {
//       let liElement = document.createElement('li');
//       let cookies = this.getCusNum();
//       liElement.textContent = this.time[i] + ': ' + cookies + ' cookies';
//       ulElement.appendChild(liElement);
//       sum = sum + cookies;
//       if (i===13){
//         let liElement=document.createElement('li');
//         liElement.textContent='total: ' + sum + ' cookies';
//         ulElement.appendChild(liElement);

//       }

//     }



//   }



// };




// seattle.render();
// console.log(seattle);
// Tokyo.render();
// console.log(Tokyo);
// Dubai.render();
// console.log(Dubai);
// Paris.render();
// console.log(Paris);
// Lima.render();
// console.log(Lima);
