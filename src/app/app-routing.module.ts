import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { NurseComponent } from 'src/app/nurse/nurse.component';
import { PatientComponent } from 'src/app/patient/patient.component';
import { PatientProfileComponent } from 'src/app/patient-profile/patient-profile.component';
import { PrescriptionPageComponent } from 'src/app/prescription-page/prescription-page.component';
import { PatientRegisterComponent } from 'src/app/patient-register/patient-register.component';
import { VideoComponent } from 'src/app/video/video.component';
import { PatientListComponent } from 'src/app/patient-list/patient-list.component';
import { CreatePrecriptionComponent } from 'src/app/create-precription/create-precription.component';
import { NurseLoginComponent } from 'src/app/nurse-login/nurse-login.component';
import { PatientLoginComponent } from 'src/app/patient-login/patient-login.component';
import { SeeTipsComponent } from 'src/app/see-tips/see-tips.component';
import { CreateEmergencyComponent } from 'src/app/create-emergency/create-emergency.component';
import { EnterDailyInfoComponent } from 'src/app/enter-daily-info/enter-daily-info.component';
import { CheckDiseaseComponent } from 'src/app/check-disease/check-disease.component';
import { SeeClinicalInfoComponent } from 'src/app/see-clinical-info/see-clinical-info.component';
import { EnterSignesComponent } from 'src/app/enter-signes/enter-signes.component';
import { MakeTipsComponent } from 'src/app/make-tips/make-tips.component';
import { SeeEmergencyComponent } from 'src/app/see-emergency/see-emergency.component';

const routes: Routes = [
{
  path: '',
  component: MainComponent
},
{
  path: 'nurse_page',
  component: NurseComponent
},
{
  path: 'patient_page',
  component: PatientComponent
},
{
  path: 'patient/:id',
  component: PatientProfileComponent
},
{
  path: 'prescription_page',
  component: PrescriptionPageComponent
},
{
  path: 'register',
  component: PatientRegisterComponent
},
{
  path: 'video',
  component: VideoComponent
},
{
  path: 'list',
  component: PatientListComponent
},
{
  path: 'create_prescription',
  component: CreatePrecriptionComponent
},
{
  path: 'nurse-login',
  component: NurseLoginComponent
},
{
  path: 'patient-login',
  component: PatientLoginComponent
},
{
  path: 'see-tips',
  component: SeeTipsComponent
},
{
  path: 'create-emergency',
  component: CreateEmergencyComponent
},
{
  path: 'daily-info',
  component: EnterDailyInfoComponent
},
{
  path: 'check-disease',
  component: CheckDiseaseComponent
},
{
  path: 'clinical-info',
  component: SeeClinicalInfoComponent
},
{
  path: 'enter-signes',
  component: EnterSignesComponent
},
{
  path: 'make-tips',
  component: MakeTipsComponent
},
{
  path: 'see-emergency',
  component: SeeEmergencyComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
