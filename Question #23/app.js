this.x = 9;   
const module = {
  x: 81,
  getX: function () { console.log( "=====",module.x) 
    return module.x; }
};
module.getX(); // 81
const retrieveX = module.getX;
retrieveX();