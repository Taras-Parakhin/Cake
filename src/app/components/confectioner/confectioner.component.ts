import {Component, HostListener, Input, OnInit} from '@angular/core';

import {IConfectioner} from "../../interfaces";

@Component({
  selector: 'app-confectioner',
  templateUrl: './confectioner.component.html',
  styleUrls: ['./confectioner.component.scss']
})
export class ConfectionerComponent implements OnInit {

  mediaWidth: boolean;

  @Input()
  confectioner: IConfectioner;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event']) onResize() {
    this.mediaWidth = window.innerWidth <= 992;
  }

  more(name: string): void {
    console.log(name)
  }
}
