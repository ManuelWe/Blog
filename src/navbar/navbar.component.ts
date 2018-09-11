import { Component, OnInit } from '@angular/core';
import {load} from '@angular/core/src/render3/instructions';
import {main} from '@angular/compiler-cli/src/main';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  readMore() {
  }
  /* TODO
   * Fix navbar functionality (interaction between components)
   */
}
