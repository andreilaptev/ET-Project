import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }  from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Tip } from '../tip';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { concat } from 'rxjs/internal/observable/concat';
import { HttpClient } from '@angular/common/http';
import { debug } from 'util';

@Component({
  selector: 'app-check-disease',
  templateUrl: './check-disease.component.html',
  styleUrls: ['./check-disease.component.css']
})
export class CheckDiseaseComponent implements OnInit {

  sneezing: boolean;
  itching: boolean;
  soreThroat: boolean;
  cough: boolean;
  fever: boolean;
  appetiteLoss: boolean;
  inactivity: boolean;
  chestPain: boolean;
  purplishSkin: boolean;
  panic: boolean;
  stress: boolean;
  sweating: boolean;

  constructor(private data: DataService) { }

  deseases: any;

  ngOnInit() {
  }

  onEnter(){

    if (this.sneezing == undefined) this.sneezing = false;
    if (this.itching == undefined) this.itching = false;
    if (this.soreThroat == undefined) this.soreThroat = false;
    if (this.cough == undefined) this.cough = false;
    if (this.fever == undefined) this.fever = false;
    if (this.appetiteLoss == undefined) this.appetiteLoss = false;
    if (this.inactivity == undefined) this.inactivity = false;
    if (this.chestPain == undefined) this.chestPain = false;
    if (this.purplishSkin == undefined) this.purplishSkin = false;
    if (this.panic == undefined) this.panic = false;
    if (this.stress == undefined) this.stress = false;
    if (this.sweating == undefined) this.sweating = false;

    this.data.checkDesease(this.sneezing, this.itching, this.soreThroat, this.cough, this.fever, 
      this.appetiteLoss, this.inactivity, this.chestPain, this.purplishSkin, this.panic, this.stress, this.sweating )
      .subscribe(data => this.deseases = data)
   // console.log(this.symptom1, this.symptom2, this.symptom3)

   debugger
  }

}
