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
  selector: 'app-see-tips',
  templateUrl: './see-tips.component.html',
  styleUrls: ['./see-tips.component.css']
})
export class SeeTipsComponent implements OnInit {

  tips: any;
  /*tip: any = {
    title: "First",
    body: "Lorem Ipsum",
    nurse_id: 111

  };*/
  patientName: string;
  patient: any;
  nurse: any;
  nurseName: string;

  constructor(private router: Router, private data: DataService,
    private sessionStorage: SessionStorageService) { }

  ngOnInit() {

    this.patient = this.sessionStorage.retrieve('patient');
    this.patientName = this.patient.name;

    this.nurse = this.sessionStorage.retrieve('nurse');
    this.nurseName = this.nurse.name;

    this.data.seeMotivationalTips(this.patient._id).subscribe(
      data => {
        this.tips = data

        console.log(this.tips)
       // debugger
      }
    )

    //let patient = this.sessionStorage.retrieve('patient');

    //console.log(patient._id)
  }

}
