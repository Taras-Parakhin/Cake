import {Component, HostListener, OnInit} from '@angular/core';

import {IOrder} from "../../interfaces";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  'cake-name': string = 'Ягідний бісквіт';

  orders: IOrder[];

  constructor() { }

  @HostListener('window:resize', ['$event']) onResize() {
    if (window.innerWidth <= 992) {
      this["cake-name"] = 'Ягідний бісквіт з полуницею..';
    }
  }

  ngOnInit(): void {
    this.orders = [
      {
        img: 'assets/images/cakes/cake',
        'order-time': 'Замовлення за 14 днів',
        btns: ['Торт', 'Бісквіт'],
        'cake-name': this["cake-name"],
        price: 300,
        photo: 'assets/images/cakes/galina-bgilka',
        name: 'Галина Бджілка',
        location: 'Зароріжжя'
      },

      {
        img: 'assets/images/cakes/cake',
        'order-time': 'Замовлення за 14 днів',
        btns: ['Торт', 'Бісквіт'],
        'cake-name': this["cake-name"],
        price: 300,
        photo: 'assets/images/cakes/galina-bgilka',
        name: 'Галина Бджілка',
        location: 'Зароріжжя'
      },

      {
        img: 'assets/images/cakes/cake',
        'order-time': 'Замовлення за 14 днів',
        btns: ['Торт', 'Бісквіт'],
        'cake-name': this["cake-name"],
        price: 300,
        photo: 'assets/images/cakes/galina-bgilka',
        name: 'Галина Бджілка',
        location: 'Зароріжжя'
      },

      {
        img: 'assets/images/cakes/cake',
        'order-time': 'Замовлення за 14 днів',
        btns: ['Торт', 'Бісквіт'],
        'cake-name': this["cake-name"],
        price: 300,
        photo: 'assets/images/cakes/galina-bgilka',
        name: 'Галина Бджілка',
        location: 'Зароріжжя'
      },

      {
        img: 'assets/images/cakes/cake',
        'order-time': 'Замовлення за 14 днів',
        btns: ['Торт', 'Бісквіт'],
        'cake-name': this["cake-name"],
        price: 300,
        photo: 'assets/images/cakes/galina-bgilka',
        name: 'Галина Бджілка',
        location: 'Зароріжжя'
      },

      {
        img: 'assets/images/cakes/cake',
        'order-time': 'Замовлення за 14 днів',
        btns: ['Торт', 'Бісквіт'],
        'cake-name': this["cake-name"],
        price: 300,
        photo: 'assets/images/cakes/galina-bgilka',
        name: 'Галина Бджілка',
        location: 'Зароріжжя'
      },

      {
        img: 'assets/images/cakes/cake',
        'order-time': 'Замовлення за 14 днів',
        btns: ['Торт', 'Бісквіт'],
        'cake-name': this["cake-name"],
        price: 300,
        photo: 'assets/images/cakes/galina-bgilka',
        name: 'Галина Бджілка',
        location: 'Зароріжжя'
      },

      {
        img: 'assets/images/cakes/cake',
        'order-time': 'Замовлення за 14 днів',
        btns: ['Торт', 'Бісквіт'],
        'cake-name': this["cake-name"],
        price: 300,
        photo: 'assets/images/cakes/galina-bgilka',
        name: 'Галина Бджілка',
        location: 'Зароріжжя'
      }
    ]
  }



}
