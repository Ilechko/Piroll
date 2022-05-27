import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-block',
  templateUrl: './footer-block.component.html',
  styleUrls: ['./footer-block.component.css']
})
export class FooterBlockComponent implements OnInit {

  title = "Piroll Design, Inc."
  description = "© 2017 Piroll. All rights reserved. Designed by robirurk."
  email = "hello@pirolltheme.com"
  phone = "+44 987 065 908"

  constructor() { }

  ngOnInit(): void {
  }

}
