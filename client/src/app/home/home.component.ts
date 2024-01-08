import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  registerNode = false;
  users: any;

  constructor() {  }
  ngOnInit(): void {

  }

  registerToggle(){
    this.registerNode = !this.registerNode;
  }


  cancelRegisterMode(event: boolean){
    this.registerNode = event;
  }

}
