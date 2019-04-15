export class Patient {
    id:	number;
    name:	string;
    email:	string;
    password: string;
    clinicalVisits: [
        {
            bodyTemperature: number,
            heartRate: number,
            bloodPressure: number
          }
    ];
    dailyInfo: [{
        title: string,
        body: string
      }]
}