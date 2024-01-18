import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { isPlatformBrowser } from '@angular/common';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';
import { NgxSpinnerModule } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Dating app';
  
  constructor(private accountService: AccountService, @Inject(PLATFORM_ID) private platformId: any) {
    
  }
  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      this.setCurrentUser();
    }
  }

  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }

}
