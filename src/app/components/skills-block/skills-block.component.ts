import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-block',
  templateUrl: './skills-block.component.html',
  styleUrls: ['./skills-block.component.css']
})
export class SkillsBlockComponent implements OnInit {



  title = 'Professional Skills';
  descDesign = 'UI/UX DESIGN';
  progLoadDesign = '75%';
  descDevelopment = 'WEB DEVELOPMENT';
  progLoadDevelopment = '90%';
  descMarketing = 'MARKETING';
  progLoadMarketing = '65%';

  constructor() { }

  ngOnInit(): void {
  }

}
