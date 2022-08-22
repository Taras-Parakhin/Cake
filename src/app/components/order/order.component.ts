import {Component, Input, OnInit} from '@angular/core';

import {IOrder} from "../../interfaces";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input()
  order: IOrder;

  constructor() { }

  ngOnInit(): void {
  }

}
