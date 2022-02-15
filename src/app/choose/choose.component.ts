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

  ngOnInit() {
    this.nextMon();
  }

  nextMon(){
    if (this.mon < 100) {
      if (this.mon < 10) {
        this.src = "https://www.serebii.net/pokemon/art/00" + this.mon + ".png"
      }
      else {
        this.src = "https://www.serebii.net/pokemon/art/0" + this.mon + ".png"
      }
    }
    else {
      this.src = "https://www.serebii.net/pokemon/art/" + this.mon + ".png"
    }
  }

  smash(){
    console.log("smash");
    this.smashed.push(this.mon);
    this.mon++;
    this.nextMon();
  }

  pass(){
    console.log("pass");
    this.passed.push(this.mon);
    this.mon++;
    this.nextMon();
  }
}
