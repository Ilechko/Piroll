import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informations-block',
  templateUrl: './informations-block.component.html',
  styleUrls: ['./informations-block.component.css']
})
export class InformationsBlockComponent implements OnInit {
  numberInfo = '548';
  descInfo = 'projects completed';
  numberWorking = '1465';
  descWorking = 'working hours';
  numberFeedbacks = '612';
  descFeedbacks = 'positive feedbacks';
  numberClients = '735';
  descClients = 'happy clients';

  constructor() { }

  ngOnInit(): void {
  }

}
