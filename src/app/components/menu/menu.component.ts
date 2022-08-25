import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger(
      'openClose', 
      [
        transition(
          ':enter', 
          [
            style({ width: 0, opacity: 0 }),
            animate('0.5s ease-out', 
                    style({ width: '100%', opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ width: '100%', opacity: 1 }),
            animate('0.5s ease-in', 
                    style({ width: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class MenuComponent implements OnInit {
  @Input() showMenu: boolean = true;

  @Output() changeMenuView = new EventEmitter();
  menuView() {
    this.changeMenuView.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
