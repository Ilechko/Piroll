import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-gruop-block',
  templateUrl: './form-gruop-block.component.html',
  styleUrls: ['./form-gruop-block.component.css']
})
export class FormGruopBlockComponent implements OnInit {

  mainTitle = "Need a Project?"
  description = "Let us know what you're looking for in an agency. We'll take a look and see if this could be the start of something beautiful."
  buttonName = "send message"

  constructor() { }

  ngOnInit(): void {
  }

}
