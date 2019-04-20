import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { concat } from 'rxjs/internal/observable/concat';
import { HttpClient } from '@angular/common/http';
import { Nurse } from '../nurse';
import { debug } from 'util';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-nurse-login',
  templateUrl: './nurse-login.component.html',
  styleUrls: ['./nurse-login.component.css']
})
export class NurseLoginComponent implements OnInit {

  requestedNurse: any;
  authorizationError: boolean = false;
  email: string;
  password: string;

  constructor(private data: DataService, private router: Router, private sessionStorage: SessionStorageService) { }

  ngOnInit() {
  }

  onLogin(){

    this.requestLogin();    
  }


 
  checkPass(){
    console.log(this.requestedNurse);
     
  }

    requestLogin(){
      this.data.nurseLogin(this.email, this.password).subscribe(
        patient => {
          this.requestedNurse = patient      
          console.log(this.requestedNurse);

          debugger

          if (this.requestedNurse === null) {
            this.router.navigate(['nurse-login']);
            this.authorizationError = true;
          }else            
              if (this.requestedNurse.password === this.password) {

                this.sessionStorage.store('nurse', this.requestedNurse);
                this.router.navigate(['nurse_page']);
              }
              else {
                this.authorizationError = true;
              }

        
        })  
  
    }

}
