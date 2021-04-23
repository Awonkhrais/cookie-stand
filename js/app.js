let hour =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];



let seattle = {

  city : 'seattle',
  minC : 23,
  maxC : 65,
  avg : 6.3,
  cookPerHour : [],
  total : 0 ,

  getsum : function (){

    for(let i = 0 ; i<hour.length ; i++){


      let cooki = Math.ceil(getRandomInt(this.minC,this.maxC)*this.avg);

      this.total = this.total + cooki ;

      this.cookPerHour.push(cooki);

      //   console.log(hour[i] + ':' + cooki);

    }


  },

  render : function(){

    const parentElement = document.getElementById('salmon');

    let sectionElment = document.createElement('section');
    parentElement.appendChild(sectionElment);


    let h2Elemnt =document.createElement('h2');
    sectionElment.appendChild(h2Elemnt);
    h2Elemnt.textContent = this.city;

    let ulElemnt = document.createElement('ul');
    h2Elemnt.appendChild(ulElemnt);


    for(let i =0 ; i<hour.length ; i++){

      let liElement = document.createElement('li');
      ulElemnt.appendChild(liElement);
      liElement.textContent = hour[i] + ':' + this.cookPerHour[i];

    }

    let totalElemnt = document.createElement('li');
    ulElemnt.appendChild(totalElemnt);
    totalElemnt.textContent = 'Total : ' + this.total;







  },





};

/////////////////////////////////


let tokyo = {

  city : 'Tokyo',
  minC : 3,
  maxC : 24,
  avg : 1.2,
  cookPerHour : [],
  total : 0,

  getsum : function (){

    for(let i = 0 ; i<hour.length ; i++){


      let cooki = Math.ceil(getRandomInt(this.minC,this.maxC)*this.avg);

      this.total = this.total + cooki ;

      this.cookPerHour.push(cooki);

      //   console.log(hour[i] + ':' + cooki);

    }


  },

  render : function(){

    const parentElement = document.getElementById('salmon');

    let sectionElment = document.createElement('section');
    parentElement.appendChild(sectionElment);


    let h2Elemnt =document.createElement('h2');
    sectionElment.appendChild(h2Elemnt);
    h2Elemnt.textContent = this.city;

    let ulElemnt = document.createElement('ul');
    h2Elemnt.appendChild(ulElemnt);


    for(let i =0 ; i<hour.length ; i++){

      let liElement = document.createElement('li');
      ulElemnt.appendChild(liElement);
      liElement.textContent = hour[i] + ':' + this.cookPerHour[i];

    }

    let totalElemnt = document.createElement('li');
    ulElemnt.appendChild(totalElemnt);
    totalElemnt.textContent = 'Total : ' + this.total;







  },





};


////////////////////////////////////////


let dubai = {

  city : 'Dubai',
  minC : 11,
  maxC : 38,
  avg : 3.7,
  cookPerHour : [],
  total : 0,

  getsum : function (){

    for(let i = 0 ; i<hour.length ; i++){


      let cooki = Math.ceil(getRandomInt(this.minC,this.maxC)*this.avg);

      this.total = this.total + cooki ;

      this.cookPerHour.push(cooki);

      //   console.log(hour[i] + ':' + cooki);

    }


  },

  render : function(){

    const parentElement = document.getElementById('salmon');

    let sectionElment = document.createElement('section');
    parentElement.appendChild(sectionElment);


    let h2Elemnt =document.createElement('h2');
    sectionElment.appendChild(h2Elemnt);
    h2Elemnt.textContent = this.city;

    let ulElemnt = document.createElement('ul');
    h2Elemnt.appendChild(ulElemnt);


    for(let i =0 ; i<hour.length ; i++){

      let liElement = document.createElement('li');
      ulElemnt.appendChild(liElement);
      liElement.textContent = hour[i] + ':' + this.cookPerHour[i];

    }

    let totalElemnt = document.createElement('li');
    ulElemnt.appendChild(totalElemnt);
    totalElemnt.textContent = 'Total : ' + this.total;







  },





};



///////////////////////////////



let paris = {

  city : 'Paris',
  minC : 20,
  maxC : 38,
  avg : 2.3,
  cookPerHour : [],
  total : 0,

  getsum : function (){

    for(let i = 0 ; i<hour.length ; i++){


      let cooki = Math.ceil(getRandomInt(this.minC,this.maxC)*this.avg);

      this.total = this.total + cooki ;

      this.cookPerHour.push(cooki);

      //   console.log(hour[i] + ':' + cooki);

    }


  },

  render : function(){

    const parentElement = document.getElementById('salmon');

    let sectionElment = document.createElement('section');
    parentElement.appendChild(sectionElment);


    let h2Elemnt =document.createElement('h2');
    sectionElment.appendChild(h2Elemnt);
    h2Elemnt.textContent = this.city;

    let ulElemnt = document.createElement('ul');
    h2Elemnt.appendChild(ulElemnt);


    for(let i =0 ; i<hour.length ; i++){

      let liElement = document.createElement('li');
      ulElemnt.appendChild(liElement);
      liElement.textContent = hour[i] + ':' + this.cookPerHour[i];

    }

    let totalElemnt = document.createElement('li');
    ulElemnt.appendChild(totalElemnt);
    totalElemnt.textContent = 'Total : ' + this.total;







  },





};



///////////////////////////////////



let lima = {

  city : 'Lima',
  minC : 2,
  maxC : 16,
  avg : 4.6,
  cookPerHour : [],
  total : 0,

  getsum : function (){

    for(let i = 0 ; i<hour.length ; i++){


      let cooki = Math.ceil(getRandomInt(this.minC,this.maxC)*this.avg);

      this.total = this.total + cooki ;

      this.cookPerHour.push(cooki);

      //   console.log(hour[i] + ':' + cooki);

    }


  },

  render : function(){

    const parentElement = document.getElementById('salmon');

    let sectionElment = document.createElement('section');
    parentElement.appendChild(sectionElment);


    let h2Elemnt =document.createElement('h2');
    sectionElment.appendChild(h2Elemnt);
    h2Elemnt.textContent = this.city;

    let ulElemnt = document.createElement('ul');
    h2Elemnt.appendChild(ulElemnt);


    for(let i =0 ; i<hour.length ; i++){

      let liElement = document.createElement('li');
      ulElemnt.appendChild(liElement);
      liElement.textContent = hour[i] + ':' + this.cookPerHour[i];

    }

    let totalElemnt = document.createElement('li');
    ulElemnt.appendChild(totalElemnt);
    totalElemnt.textContent = 'Total : ' + this.total;







  },





};




seattle.getsum();
seattle.render();
tokyo.getsum();
tokyo.render();
dubai.getsum();
dubai.render();
paris.getsum();
paris.render();
lima.getsum();
lima.render();







function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

