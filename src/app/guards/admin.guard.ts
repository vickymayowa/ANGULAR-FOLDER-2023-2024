import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  let adminRouter = inject(Router)
  let x = 1
  if(x==2){
    return true
  }else{
    adminRouter.navigate(['admin'])
    return false
  }
  // let store = localStorage['contactDetails']
  // if (store) {
  //   // adminRouter.navigate(['admin'])
  //   console.log(true);
    
  //   return true;
  // }else{
  //   return false
  // }
};

