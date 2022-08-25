import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-info',
  templateUrl: './technology-info.component.html',
  styleUrls: ['./technology-info.component.scss']
})
export class TechnologyInfoComponent implements OnInit {
  @Input() technologyName: string | null = null;
  @Input() imgUrl: string | null = null;

  constructor() { 

  }

  ngOnInit(): void {
    this.imgUrl = `assets/${this.imgUrl}`
  }

}
