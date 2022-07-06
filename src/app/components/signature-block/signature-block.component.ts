import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signature-block',
  templateUrl: './signature-block.component.html',
  styleUrls: ['./signature-block.component.css'],
})
export class SignatureBlockComponent implements OnInit {
  mainTitle = 'About Us';
  description = `Divide have don't man wherein air fourth. Own itself make have night won't make. A you under Seed appear which good give. Own give air without fowl moveth dry first heaven fruit, dominion she'd won't very all.`;

  constructor() {}

  ngOnInit(): void {}
}
