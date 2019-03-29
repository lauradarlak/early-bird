
export const compare = (a, b) => {
   let comparison = 0;
   if (a.id > b.id) {
     comparison = 1;
   } else if (a.id < b.id) {
     comparison = -1;
   }
   return comparison;
 }
