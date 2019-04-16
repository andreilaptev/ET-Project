import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }  from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-see-tips',
  templateUrl: './see-tips.component.html',
  styleUrls: ['./see-tips.component.css']
})
export class SeeTipsComponent implements OnInit {

  tips: any;
  tip: any = {
    title: "First",
    body: "Lorem Ipsum",
    nurse_id: 111

  };
  patientName: string = "test";

  constructor(private router: Router,
    private sessionStorage: SessionStorageService) { }

  ngOnInit() {

    let patient = this.sessionStorage.retrieve('patient');

    console.log(patient._id)
  }

}
