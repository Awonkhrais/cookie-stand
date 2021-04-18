'use strict';

let seattle = {
  name : 'Seattle',
  min : 23,
  max : 65,
  avg : 6.3,
  time : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  getCusNum : function() {



    return Math.ceil(getRandomInt(this.min,this.max)*this.avg);

  },


  render : function() {

    const parentElement = document.getElementById('SalmonCookies');

    let articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    let sum = 0;
    for (let i = 0; i < this.time.length; i++) {
      let liElement = document.createElement('li');
      let cookies = this.getCusNum();
      liElement.textContent = this.time[i] + ': ' + cookies + ' cookies';
      ulElement.appendChild(liElement);
      sum = sum + cookies;
      if (i===13){
        let liElement=document.createElement('li');
        liElement.textContent='total: ' + sum + ' cookies';
        ulElement.appendChild(liElement);

      }

    }

  },
};



let Tokyo ={
  name :'Tokyo',
  min : 3,
  max : 24,
  avg : 1.2,
  time : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  getCusNum : function() {



    return Math.ceil(getRandomInt(this.min,this.max)*this.avg);

  },


  render : function () {
    const parentElement = document.getElementById('SalmonCookies');

    let articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2Element = document.createElement('h2');
    h2Element.textContent=this.name;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    let sum = 0;
    for (let i = 0; i < this.time.length; i++) {
      let liElement = document.createElement('li');
      let cookies = this.getCusNum();
      liElement.textContent = this.time[i] + ': ' + cookies + ' cookies';
      ulElement.appendChild(liElement);
      sum = sum + cookies;
      if (i===13){
        let liElement=document.createElement('li');
        liElement.textContent='total: ' + sum + ' cookies';
        ulElement.appendChild(liElement);

      }

    }



  }



};



let Dubai ={
  name :'Dubai',
  min : 11,
  max : 38,
  avg : 3.7,
  time : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  getCusNum : function() {



    return Math.ceil(getRandomInt(this.min,this.max)*this.avg);

  },


  render : function () {
    const parentElement = document.getElementById('SalmonCookies');

    let articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2Element = document.createElement('h2');
    h2Element.textContent=this.name;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    let sum = 0;
    for (let i = 0; i < this.time.length; i++) {
      let liElement = document.createElement('li');
      let cookies = this.getCusNum();
      liElement.textContent = this.time[i] + ': ' + cookies + ' cookies';
      ulElement.appendChild(liElement);
      sum = sum + cookies;
      if (i===13){
        let liElement=document.createElement('li');
        liElement.textContent='total: ' + sum + ' cookies';
        ulElement.appendChild(liElement);

      }

    }



  }



};


let Paris ={
  name :'Paris',
  min : 20,
  max : 38,
  avg : 2.3,
  time : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  getCusNum : function() {



    return Math.ceil(getRandomInt(this.min,this.max)*this.avg);

  },


  render : function () {
    const parentElement = document.getElementById('SalmonCookies');

    let articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2Element = document.createElement('h2');
    h2Element.textContent=this.name;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    let sum = 0;
    for (let i = 0; i < this.time.length; i++) {
      let liElement = document.createElement('li');
      let cookies = this.getCusNum();
      liElement.textContent = this.time[i] + ': ' + cookies + ' cookies';
      ulElement.appendChild(liElement);
      sum = sum + cookies;
      if (i===13){
        let liElement=document.createElement('li');
        liElement.textContent='total: ' + sum + ' cookies';
        ulElement.appendChild(liElement);

      }

    }



  }



};


let Lima ={
  name :'Lima',
  min : 2,
  max : 16,
  avg : 4.6,
  time : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  getCusNum : function() {



    return Math.ceil(getRandomInt(this.min,this.max)*this.avg);

  },


  render : function () {
    const parentElement = document.getElementById('SalmonCookies');

    let articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2Element = document.createElement('h2');
    h2Element.textContent=this.name;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    let sum = 0;
    for (let i = 0; i < this.time.length; i++) {
      let liElement = document.createElement('li');
      let cookies = this.getCusNum();
      liElement.textContent = this.time[i] + ': ' + cookies + ' cookies';
      ulElement.appendChild(liElement);
      sum = sum + cookies;
      if (i===13){
        let liElement=document.createElement('li');
        liElement.textContent='total: ' + sum + ' cookies';
        ulElement.appendChild(liElement);

      }

    }



  }



};





function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

seattle.render();
console.log(seattle);
Tokyo.render();
console.log(Tokyo);
Dubai.render();
console.log(Dubai);
Paris.render();
console.log(Paris);
Lima.render();
console.log(Lima);
