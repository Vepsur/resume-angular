import { Component, OnInit } from '@angular/core';

const myTechnologyStack = [
  {
    name: 'JavaScript, HTML, CSS',
    imgLink: 'HTML, CSS, JS.svg'
  },
  {
    name: 'React',
    imgLink: 'React.svg'
  },
  {
    name: 'Redux, Redux Toolkit',
    imgLink: 'Redux.svg'
  },
  {
    name: 'Angular',
    imgLink: 'Angular.svg'
  },
  {
    name: 'TypeScript',
    imgLink: 'TypeScript.svg'
  },
  {
    name: 'SASS, SCSS',
    imgLink: 'SASS.svg'
  },
  {
    name: 'Axios',
    imgLink: 'Axios.svg'
  },
  {
    name: 'Git, GitHub',
    imgLink: 'Git.svg'
  },
  {
    name: 'Figma',
    imgLink: 'Figma.svg'
  }
]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  myTechnologyStack = myTechnologyStack;

  constructor() { }

  ngOnInit(): void {
  }

}
