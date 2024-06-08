import { Component } from '@angular/core';
import { TechnologyStackDetail } from './technology-stack-detail';

@Component({
  selector: 'app-technology-stack-block',
  templateUrl: './technology-stack-block.component.html',
  styleUrls: ['./technology-stack-block.component.css']
})
export class TechnologyStackBlockComponent {
  technologyStack: TechnologyStackDetail[];

  constructor() {
    this.technologyStack = this.getTechnologyStackDetail();
    console.log(this.technologyStack);
  }

  getTechnologyStackDetail(): TechnologyStackDetail[] {
    return [{
      image: 'csharp.png',
      alt: 'C#'
    }, {
      image: 'js.png',
      alt: "JavaScript"
    }, {
      image: 'php.png',
      alt: "PHP"
    }, {
      image: 'sql-server.png',
      alt: "SQL Server"
    }, {
      image: 'mysql.png',
      alt: "MySQL"
    }, {
      image: 'postgresql.png',
      alt: "PostgreSQL"
    }, {
      image: 'elastic.png',
      alt: "Elastic"
    }, {
      image: 'aws.png',
      alt: "AWS"
    }, {
      image: 'azure.png',
      alt: "Azure"
    }, {
      image: 'google-cloud.svg',
      alt: "Google Cloud"
    }]
  }
}
