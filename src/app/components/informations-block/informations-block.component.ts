import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informations-block',
  templateUrl: './informations-block.component.html',
  styleUrls: ['./informations-block.component.css'],
})
export class InformationsBlockComponent implements OnInit {

  infofrmation = [
    {
      id: 1,
      numberInfo: '548',
      descInfo: 'projects completed',
    },
    {
      id: 2,
      numberWorking: '1465',
      descWorking: 'working hours',
    },
    {
      id: 3,
      numberFeedbacks: '612',
      descFeedbacks: 'positive feedbacks',
    },
    {
      id: 4,
      numberClients: '735',
      descClients: 'happy clients',
    }
  ]
  
  
  

  constructor() {}

  ngOnInit(): void {}
}
