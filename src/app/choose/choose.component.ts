import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {

  constructor() { }

  src = "";
  mon = 1;
  smashed = new Array();
  passed = new Array();
  showChoose = false;
  showResults = false;

  ngOnInit() {
    this.showChoose = true;
    this.showResults = false;
    this.src = this.nextMon(this.mon);
  }

  nextMon(guy: string | number) {
    if (this.mon < 100) {
      if (this.mon < 10) {
        return "https://www.serebii.net/pokemon/art/00" + guy + ".png"
      }
      else {
        return "https://www.serebii.net/pokemon/art/0" + guy + ".png"
      }
    }
    else {
      return "https://www.serebii.net/pokemon/art/" + guy + ".png"
    }
  }

  smash() {
    this.smashed.push(this.nextMon(this.mon));
    if (this.mon == 905) {
      this.thatsAll();
    }
    else {
      this.mon++;
      this.src = this.nextMon(this.mon);
    }
  }

  pass() {
    this.passed.push(this.mon);
    if (this.mon == 905) {
      this.thatsAll();
    }
    else {
      this.mon++;
      this.src = this.nextMon(this.mon);
    }
  }

  thatsAll() {
    this.showChoose = false;
    this.showResults = true;
  }
}
