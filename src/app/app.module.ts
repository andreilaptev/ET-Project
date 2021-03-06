import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { FormsModule } from '@angular/forms';

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
import { NurseLoginComponent } from './nurse-login/nurse-login.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { SeeTipsComponent } from './see-tips/see-tips.component';

import { NgxWebstorageModule } from 'ngx-webstorage';
import { CreateEmergencyComponent } from './create-emergency/create-emergency.component';
import { EnterDailyInfoComponent } from './enter-daily-info/enter-daily-info.component';
import { CheckDiseaseComponent } from './check-disease/check-disease.component';
import { SeeClinicalInfoComponent } from './see-clinical-info/see-clinical-info.component';
import { EnterSignesComponent } from './enter-signes/enter-signes.component';
import { MakeTipsComponent } from './make-tips/make-tips.component';
import { SeeEmergencyComponent } from './see-emergency/see-emergency.component';

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
    CreatePrecriptionComponent,
    NurseLoginComponent,
    PatientLoginComponent,
    SeeTipsComponent,
    CreateEmergencyComponent,
    EnterDailyInfoComponent,
    CheckDiseaseComponent,
    SeeClinicalInfoComponent,
    EnterSignesComponent,
    MakeTipsComponent,
    SeeEmergencyComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
