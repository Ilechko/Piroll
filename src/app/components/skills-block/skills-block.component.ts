import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-block',
  templateUrl: './skills-block.component.html',
  styleUrls: ['./skills-block.component.css']
})
export class SkillsBlockComponent implements OnInit {

  titleLoad = 'Professional Skills';
  descDesign = 'UI/UX Design';
  progLoadDesign = '75%';
  descDevelopment = 'web Development';
  progLoadDevelopment = '90%';
  descMarketing = 'Marketing';
  progLoadMarketing = '65%';

  constructor() { }

  ngOnInit(): void {
  }

}
