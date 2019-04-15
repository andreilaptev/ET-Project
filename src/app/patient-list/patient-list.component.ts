import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { concat } from 'rxjs/internal/observable/concat';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patientId: number;
  patients: any;

  constructor(private data: DataService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.patientId = params.id );
  }

  ngOnInit() {
    this.data.getAllPatients().subscribe(
      data => {
        this.patients = data;
        console.log(this.patients);
      }
    )
  }

}
