import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-disease',
  templateUrl: './check-disease.component.html',
  styleUrls: ['./check-disease.component.css']
})
export class CheckDiseaseComponent implements OnInit {

  symptom1: string;
  symptom2: string;
  symptom3: string;


  constructor() { }

  ngOnInit() {
  }

  onEnter(){

    console.log(this.symptom1, this.symptom2, this.symptom3)
  }

}
