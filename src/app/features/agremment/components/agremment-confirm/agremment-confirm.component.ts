import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agremment-confirm',
  templateUrl: './agremment-confirm.component.html',
  styleUrls: ['./agremment-confirm.component.scss']
})
export class AgremmentConfirmComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirectBack(){
    this.router.navigate(['document-direction']);
  }
  redirect(){
    
  }
}
