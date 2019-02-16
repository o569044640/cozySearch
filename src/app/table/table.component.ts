import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  siteListFirstRow = [
    {name: 'Facebook', iconPath: '../../assets/table-icons/facebook.png', websiteURL: 'https://www.facebook.com' },
    {name: 'youtube', iconPath: '../../assets/table-icons/youtube.png', websiteURL: 'https://www.youtube.com' },
    {name: 'Google', iconPath: '../../assets/table-icons/google.png', websiteURL: 'https://www.google.com' },
    {name: 'twitch', iconPath: '../../assets/table-icons/twitch.png', websiteURL: 'https://www.twitch.tv/' },
    {name: 'Reddit', iconPath: '../../assets/table-icons/reddit.png', websiteURL: 'https://www.reddit.com'  }
  ];

  siteListSecondRow = [
    {name: 'Linkedin', iconPath: '../../assets/table-icons/linkedin.png', websiteURL: 'https://www.linkedin.com' },
    {name: 'Instagram', iconPath: '../../assets/table-icons/instagram.png', websiteURL: 'https://www.instagram.com' },
    {name: 'Netflix', iconPath: '../../assets/table-icons/netflix.png', websiteURL: 'https://www.netflix.com'  },
    {name: 'Amazon', iconPath: '../../assets/table-icons/amazon.png', websiteURL: 'https://www.amazon.com' },
    {name: 'Gmail', iconPath: '../../assets/table-icons/gmail.png', websiteURL: 'https://www.google.com/gmail/' },
  ];

  siteListThirdRow = [
    {name: 'tumblr', iconPath: '../../assets/table-icons/tumblr.png', websiteURL: 'https://www.tumblr.com' },
    {name: 'wikipedia', iconPath: '../../assets/table-icons/wikipedia.png', websiteURL: 'https://www.wikipedia.org' },
    {name: 'twitter', iconPath: '../../assets/table-icons/twitter.png', websiteURL: 'https://www.twitter.com'  },
    {name: 'yahoo', iconPath: '../../assets/table-icons/yahoo.png', websiteURL: 'https://www.yahoo.com' },
    {name: 'blogger', iconPath: '../../assets/table-icons/blogger.png', websiteURL: 'https://www.blogger.com/' },
  ];


  constructor() { }

  ngOnInit() {
  }

}
