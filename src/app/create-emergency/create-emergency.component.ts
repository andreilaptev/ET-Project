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
  selector: 'app-create-emergency',
  templateUrl: './create-emergency.component.html',
  styleUrls: ['./create-emergency.component.css']
})
export class CreateEmergencyComponent implements OnInit {

  title: string;
  message: string;
  patientId: number;

  emer: any;

  constructor(private data: DataService, private router: Router, private storage: SessionStorageService) { }

  ngOnInit() {
  }

  onCreate(){

    this.patientId = this.storage.retrieve('patient')._id;

    this.data.createEmergency(this.patientId, this.title, this.message)
    .subscribe(data => this.emer = data)


  }
}
