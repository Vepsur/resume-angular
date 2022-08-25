import { Component, OnInit } from '@angular/core';
import { projects, technology } from 'src/app/data/projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: technology[] | null = null;

  constructor() { }

  ngOnInit(): void {
    this.projects = projects;
  }

}
