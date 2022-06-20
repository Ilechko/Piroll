import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-block',
  templateUrl: './skills-block.component.html',
  styleUrls: ['./skills-block.component.css']
})
export class SkillsBlockComponent implements OnInit {

  titleLoad = 'Professional Skills';
  descDesign = 'UI/UX DESIGN';
  progLoadDesign = '75%';
  descDevelopment = 'WEB DEVELOPMRNT';
  progLoadDevelopment = '90%';
  descMarketing = 'MARKETING';
  progLoadMarketing = '65%';

  constructor() { }

  ngOnInit(): void {
  }

}
