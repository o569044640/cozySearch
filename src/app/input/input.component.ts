import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  defaultOption: string;
  iconPath: string;
  inputName: string;
  formAction: string;

  constructor() {
    this.defaultOption = 'Google';
    this.iconPath = 'assets/google.svg';
    this.inputName = 'q';
    this.formAction = '//www.google.com/search';
   }

  ngOnInit() {
  }

  clicGoogle() {
    this.defaultOption = 'Google';
    this.iconPath = 'assets/google.svg';
    this.inputName = 'q';
    this.formAction = '//www.google.com/search';
  }

  clickYoutube() {
    this.defaultOption = 'Youtube';
    this.iconPath = 'assets/youtube.svg';
    this.inputName = 'search_query';
    this.formAction = '//www.youtube.com/results';
  }

  clickAmazon() {
    this.defaultOption = 'Amazon';
    this.iconPath = 'assets/amazon.svg';
    this.inputName = 'k';
    this.formAction = '//www.amazon.com/s';
  }

}
