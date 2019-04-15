import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { concat } from 'rxjs/internal/observable/concat';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  patienId: number;

  constructor(private route: ActivatedRoute, private data: DataService) { 
    this.route.params.subscribe( params => this.patienId = params.id );
  }

  ngOnInit() {
  }

}
