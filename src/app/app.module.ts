import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NurseComponent } from './nurse/nurse.component';
import { PatientComponent } from './patient/patient.component';
import { MainComponent } from './main/main.component';
import { PatientPipe } from './patient.pipe';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PrescriptionPageComponent } from './prescription-page/prescription-page.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { VideoComponent } from './video/video.component';
import { CreatePrecriptionComponent } from './create-precription/create-precription.component';

@NgModule({
  declarations: [
    AppComponent,
    NurseComponent,
    PatientComponent,
    MainComponent,
    PatientPipe,
    PatientListComponent,
    PrescriptionPageComponent,
    PatientProfileComponent,
    PatientRegisterComponent,
    VideoComponent,
    CreatePrecriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
