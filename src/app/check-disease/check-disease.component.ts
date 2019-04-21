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

  symptom1: string;
  symptom2: string;
  symptom3: string;
  symptom4: string;
  symptom5: string;
  symptom6: string;
  symptom7: string;
  symptom8: string;
  symptom9: string;
  symptom10: string;
  symptom11: string;
  symptom12: string;

  constructor(private data: DataService) { }

  deseases: any;

  ngOnInit() {
  }

  onEnter(){

    this.data.checkDesease(this.symptom1, this.symptom2, this.symptom3, this.symptom4, this.symptom5, 
      this.symptom6, this.symptom7, this.symptom8, this.symptom9, this.symptom10, this.symptom11, this.symptom12 )
      .subscribe(data => this.deseases = data)
   // console.log(this.symptom1, this.symptom2, this.symptom3)

   debugger
  }

}
