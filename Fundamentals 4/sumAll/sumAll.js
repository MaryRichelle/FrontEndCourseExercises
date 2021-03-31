const sumAll = function (int1, int2) {

   let sum = 0;
   // if (typeof int1 === NaN || typeof int2 === NaN) {
   //    sum = 'ERROR';
   // }
   
  
   if (int1 < int2) {
      for (let i = int1; i <= int2; i++) 
         sum += i;
      
   }
    if (int1 > int2) {
      for (let i = int2; i <= int1; i++) 
         sum += i;
      
   }
   if (int1 < 0 || int2 < 0) {
      sum = 'ERROR';
   }
   if (typeof int1 !== "number" || typeof int2 !== "number") {
      sum = 'ERROR';
   }
   
   
   return sum;
}


module.exports = sumAll
