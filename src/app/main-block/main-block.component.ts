import { Component } from '@angular/core';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.css']
})
export class MainBlockComponent {
  name: string;
  title: string;
  description: string;

  constructor() {
    this.name = 'Carlos Alfonso Rivera Maldonado';
    this.title = 'Senior Software Engineer';
    this.description = 'Passionate software developer with over a decade of expertise in designing, developing, and deploying software projects. A strong advocate for collaborative teamwork and agile methodologies.';
  }
}
