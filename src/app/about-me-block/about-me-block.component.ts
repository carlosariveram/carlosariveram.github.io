import { Component } from '@angular/core';
import { AboutMeDetail } from './about-me-detail';

@Component({
  selector: 'app-about-me-block',
  templateUrl: './about-me-block.component.html',
  styleUrls: ['./about-me-block.component.css']
})
export class AboutMeBlockComponent {
  title: string;
  detail: AboutMeDetail[];

  constructor() {
    this.title = 'About Me';
    this.detail = this.getAboutMeDetail();
  }

  getAboutMeDetail() : AboutMeDetail[] {
    return [{
      icon: 'code',
      title: 'Software Development',
      details: 'I have honed my skills in the entire stack as an API integration expert using technologies like C#, VB.Net, PHP, Javascript and GO.'
    }, {
      icon: 'diversity_3',
      title: 'Team Lead',
      details: 'Successfully guided software development teams for more than 5 years. By introducing best practices, design patterns, and agile methodologies.'
    }, {
      icon: 'support',
      title: 'Reliability Engineer',
      details: 'Equipped with a robust background in reliability engineering and production support, I\'ve ensured the continuous and smooth operation of complex software systems.'
    }]
  }
}
