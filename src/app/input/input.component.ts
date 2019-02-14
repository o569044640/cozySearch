import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  defaultOption: string;
  iconPath: string;

  constructor() {
    this.defaultOption = 'Google';
    this.iconPath = 'assets/google.svg';
   }

  ngOnInit() {
  }

  clicGoogle() {
    this.defaultOption = 'Google';
    this.iconPath = 'assets/google.svg';
  }

  clickYoutube() {
    this.defaultOption = 'Youtube';
    this.iconPath = 'assets/youtube.svg';
  }

}
