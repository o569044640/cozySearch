import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  siteListFirstRow = [
    {name: 'Facebook', iconPath: '../../assets/table-icons/facebook.png', websiteURL: 'https://www.facebook.com' },
    {name: 'Amazon', iconPath: '../../assets/table-icons/amazon.png', websiteURL: 'https://www.amazon.com' },
    {name: 'Blogger', iconPath: '../../assets/table-icons/blogger.png', websiteURL: 'https://www.Blogger.com'  },
    {name: 'Google', iconPath: '../../assets/table-icons/google.png', websiteURL: 'https://www.google.com' },
    {name: 'Gmail', iconPath: '../../assets/table-icons/gmail.png', websiteURL: 'https://www.google.com/gmail/' },
  ];

  siteListSecondRow = [
    {name: 'Instagram', iconPath: '../../assets/table-icons/instagram.png', websiteURL: 'https://www.instagram.com' },
    {name: 'Amazon', iconPath: '../../assets/table-icons/amazon.png', websiteURL: 'https://www.amazon.com' },
    {name: 'Blogger', iconPath: '../../assets/table-icons/blogger.png', websiteURL: 'https://www.Blogger.com'  },
    {name: 'Google', iconPath: '../../assets/table-icons/google.png', websiteURL: 'https://www.google.com' },
    {name: 'Gmail', iconPath: '../../assets/table-icons/gmail.png', websiteURL: 'https://www.google.com/gmail/' },
  ];

  siteListThirdRow = [
    {name: 'Facebook', iconPath: '../../assets/table-icons/facebook.png', websiteURL: 'https://www.facebook.com' },
    {name: 'Amazon', iconPath: '../../assets/table-icons/amazon.png', websiteURL: 'https://www.amazon.com' },
    {name: 'Blogger', iconPath: '../../assets/table-icons/blogger.png', websiteURL: 'https://www.Blogger.com'  },
    {name: 'Google', iconPath: '../../assets/table-icons/google.png', websiteURL: 'https://www.google.com' },
    {name: 'Gmail', iconPath: '../../assets/table-icons/gmail.png', websiteURL: 'https://www.google.com/gmail/' },
  ];


  constructor() { }

  ngOnInit() {
  }

}
