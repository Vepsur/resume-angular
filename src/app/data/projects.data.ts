export interface technology {
  title: string;
  description: string;
  descriptionList: string[];
  technology: string[];
  imgUrl: string;
  ghPages: string;
}

const sneakersProject: technology = {
  title: "React Sneakers Online Shop",
  description: 'Online store project with functions:',
  descriptionList: [
    'add to favorites',
    'add to cart',
    'make order',
    'watch and cancel order in profile',
    'search by title'
  ],
  technology: [
    'React',
    'TypeScript',
    'Redux Toolkit',
    'Axios',
    'SCSS',
    'Backend on MockAPI'
  ],
  imgUrl: 'react_sneakers_laptop.png',
  ghPages: 'https://vepsur.github.io/react-sneakers/'
}

const clockProject: technology = {
  title: "Clock widget with timer function",
  description: 'Clock widget project with functions:',
  descriptionList: [
    'choose color theme',
    'stopwatch widget',
    'mark the lap time',
    'start/pause/refresh stopwatch',
    'my selfmade design'
  ],
  technology: [
    'React',
    'SCSS'
  ],
  imgUrl: 'timer_project_mobile.png',
  ghPages: 'https://vepsur.github.io/clock-widget/'
}

const chessProject: technology = {
  title: "Chess game (WIP)",
  description: 'Chess game project focused on OOP training.',
  descriptionList: [],
  technology: [
    'Angular',
    'SCSS'
  ],
  imgUrl: 'chess_project.png',
  ghPages: 'https://vepsur.github.io/angular-chess/'
}

export const projects: technology[] = [
  sneakersProject, clockProject, chessProject
]