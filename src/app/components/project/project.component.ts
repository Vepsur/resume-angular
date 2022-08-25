import { Component, Input, OnInit } from '@angular/core';
import { technology } from '../../data/projects.data'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: technology | null = null;
  @Input() id: number | null = null;
  
  imgUrl: string | null = null;

  constructor() { }

  ngOnInit(): void {
    this.imgUrl = `assets/${this.project?.imgUrl}`
  }

}
