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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
