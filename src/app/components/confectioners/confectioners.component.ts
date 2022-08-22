import { Component, OnInit } from '@angular/core';

import {IConfectioner} from "../../interfaces";

@Component({
  selector: 'app-confectioners',
  templateUrl: './confectioners.component.html',
  styleUrls: ['./confectioners.component.scss']
})
export class ConfectionersComponent implements OnInit {

  confectioners: IConfectioner[];

  constructor() { }

  ngOnInit(): void {
    this.confectioners = [
      {
        photo: 'assets/images/confectioners/galina-bgilka/galina-bgilka',
        imgs: [
          'assets/images/confectioners/galina-bgilka/cake-1',
          'assets/images/confectioners/galina-bgilka/cake-2'
        ],
        name: 'Галина Бджілка',
        btns: ['Торт', 'Маффін', 'Чізкейк', 'Весільний','Зефір'],
        "positive-feedbacks": 97,
        feedbacks: 32
      },

      {
        photo: 'assets/images/confectioners/galina-bgilka/galina-bgilka',
        imgs: [
          'assets/images/confectioners/galina-bgilka/cake-1',
          'assets/images/confectioners/galina-bgilka/cake-2'
        ],
        name: 'Оксана Химин',
        btns: ['Торт', 'Маффін', 'Чізкейк', 'Весільний','Зефір'],
        "positive-feedbacks": 97,
        feedbacks: 32
      },

      {
        photo: 'assets/images/confectioners/galina-bgilka/galina-bgilka',
        imgs: [
          'assets/images/confectioners/galina-bgilka/cake-1',
          'assets/images/confectioners/galina-bgilka/cake-2'
        ],
        name: 'Дарія Трікта',
        btns: ['Торт', 'Маффін', 'Чізкейк', 'Весільний','Зефір'],
        "positive-feedbacks": 97,
        feedbacks: 32
      },

      {
        photo: 'assets/images/confectioners/galina-bgilka/galina-bgilka',
        imgs: [
          'assets/images/confectioners/galina-bgilka/cake-1',
          'assets/images/confectioners/galina-bgilka/cake-2'
        ],
        name: 'Галина Бджілка',
        btns: ['Торт', 'Маффін', 'Чізкейк', 'Весільний','Зефір'],
        "positive-feedbacks": 97,
        feedbacks: 32
      }
    ]
  }

}
