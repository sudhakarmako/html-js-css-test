
this.x = 81;   
const module = {
   
  x: 81,
  getX: function () 
{ 
    console.log(this.x);
    return this.x; }
};
module.getX(); // 81
const retrieveX = module.getX;
retrieveX(); // 9
