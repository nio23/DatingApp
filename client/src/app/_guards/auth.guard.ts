import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';


export const authGuard = () => {
  const accService = inject(AccountService);
  const router = inject(Router);
  const toastr = inject(ToastrService);

  return accService.currentUser$.pipe(
    map(user =>{
      if(user) return true;
      else {
        toastr.error('You shall not pass!');
        return false;      
      }
    })
  )
};
