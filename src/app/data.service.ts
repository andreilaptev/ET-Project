import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams } from '@angular/common/http';
//import 'rxjs/Rx';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllPatients() {
    return this.http.get('http://localhost:8080/patient');
  }  

  registerPatient(patient){

    const body = {
      name: patient.name, 
      email: patient.email, 
      password: patient.password 
  };
    return this.http.post('http://localhost:8080/auth/patient-register', body);
  }

  getPatient(patientId){
    return this.http.get('http://localhost:8080/patient?id='+ patientId);
  }

  patientLogin(email, password){
    const body = {
      email: email,     
      password: password 
  };

  /*let params = new HttpParams().set("req" , JSON.stringify(body));
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
   return  this.http.get('http://localhost:8080/auth/patient-login', {params: params});*/

   return  this.http.get('http://localhost:8080/auth/patient-login?email=' + email + '&password=' + password);

  }

  nurseLogin(email, password){
    const body = {
      email: email,     
      password: password 
  };
  return this.http.get('http://localhost:8080/auth/nurse-login?email=' + email + '&password=' + password);
  }

  getNurseByEmail(email){
    return this.http.get('http://localhost:8080/nurse?email=' + email);
  }

  addClinicalSignes(patientId, temp, rate, pressure){

    const body = {
      
      "bodyTemperature": temp,
      "heartRate": rate,
      "bloodPressure": pressure

    }
    return this.http.post('http://localhost:8080/nurse/clinical-signs' + patientId, body);
  }

  seeClinicalSignes(patientId){
    return this.http.get('http://localhost:8080/nurse/clinical-signs' + patientId);
  }

  seeEmergencyList(){
    return this.http.get('http://localhost:8080/nurse/alerts');
  }


  makeNotivationalTip(patientId, title, body, nurseId){

    const body1  = {
      "title": title,
      "body" : body,
      "patient_id": patientId,
      "nurse_id": nurseId

    }

    return this.http.post('http://localhost:8080/nurse/create-tip', body1);
  }

  seeMotivationalTips(patientId){
    return this.http.get('http://localhost:8080/patient/tips?patient_id=' + patientId);
  }
   
  createEmergency(patientId, title, msg){

    const body = {
    "title": title, 
  	"body": msg, 
  	"patient_id": patientId

    }

    return this.http.post('http://localhost:8080/patient/alert', body);
  }

  checkDesease(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12){

   /* const body = {
      "symptoms": [        
         s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12
      ]
    }*/

    /*return this.http.get('http://localhost:8080/patient/check-symptoms?sneezing='+s1
    + '&itching=' + s2+ '&soreThroat=' + s3+ '&cough=' + s4 + '&fever=' + s5 +
    '&appetiteLoss=' + s6+ '&inactivity='+ s7+ '&chestPain=' + s8+ '&purplishSkin='+ s9+ 
    '&panic=' + s10 + '&stress=' + s11+ '&sweating=' + s12);*/

    const url = 'http://localhost:8080/patient/check-symptoms?sneezing='+s1
    + '&itching=' + s2+ '&soreThroat=' + s3+ '&cough=' + s4 + '&fever=' + s5 +
    '&appetiteLoss=' + s6+ '&inactivity='+ s7+ '&chestPain=' + s8+ '&purplishSkin='+ s9+ 
    '&panic=' + s10 + '&stress=' + s11+ '&sweating=' + s12;
  
    return this.http.get(url);
  }

  enterDailyInfo(patientId, temp, pressure, rate){

    const body2 = {
      "patient_id": patientId,

    }
    return this.http.post('http://localhost:8080/patient/dailyInfo', body2)
  }
  
}
