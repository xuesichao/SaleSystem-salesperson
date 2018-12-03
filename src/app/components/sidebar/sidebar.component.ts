import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  changeColor1() {
    document.getElementById('cs1').style.color = '#EB5E28';
    document.getElementById('cs2').style.color = '#66615B';
    document.getElementById('cs3').style.color = '#66615B';
    document.getElementById('cs4').style.color = '#66615B';
    document.getElementById('cs5').style.color = '#66615B';
    document.getElementById('cs6').style.color = '#66615B';
    document.getElementById('cs7').style.color = '#66615B';
  }
  changeColor2() {
    document.getElementById('cs1').style.color = '#66615B';
    document.getElementById('cs2').style.color = '#EB5E28';
    document.getElementById('cs3').style.color = '#66615B';
    document.getElementById('cs4').style.color = '#66615B';
    document.getElementById('cs5').style.color = '#66615B';
    document.getElementById('cs6').style.color = '#66615B';
    document.getElementById('cs7').style.color = '#66615B';
  }
  changeColor3() {
    document.getElementById('cs1').style.color = '#66615B';
    document.getElementById('cs2').style.color = '#66615B';
    document.getElementById('cs3').style.color = '#EB5E28';
    document.getElementById('cs4').style.color = '#66615B';
    document.getElementById('cs5').style.color = '#66615B';
    document.getElementById('cs6').style.color = '#66615B';
    document.getElementById('cs7').style.color = '#66615B';
  }
  changeColor4() {
    document.getElementById('cs1').style.color = '#66615B';
    document.getElementById('cs2').style.color = '#66615B';
    document.getElementById('cs3').style.color = '#66615B';
    document.getElementById('cs4').style.color = '#EB5E28';
    document.getElementById('cs5').style.color = '#66615B';
    document.getElementById('cs6').style.color = '#66615B';
    document.getElementById('cs7').style.color = '#66615B';
  }
  changeColor5() {
    document.getElementById('cs1').style.color = '#66615B';
    document.getElementById('cs2').style.color = '#66615B';
    document.getElementById('cs3').style.color = '#66615B';
    document.getElementById('cs4').style.color = '#66615B';
    document.getElementById('cs5').style.color = '#EB5E28';
    document.getElementById('cs6').style.color = '#66615B';
    document.getElementById('cs7').style.color = '#66615B';
  }
  changeColor6() {
    document.getElementById('cs1').style.color = '#66615B';
    document.getElementById('cs2').style.color = '#66615B';
    document.getElementById('cs3').style.color = '#66615B';
    document.getElementById('cs4').style.color = '#66615B';
    document.getElementById('cs5').style.color = '#66615B';
    document.getElementById('cs6').style.color = '#EB5E28';
    document.getElementById('cs7').style.color = '#66615B';
  }
  changeColor7() {
    document.getElementById('cs1').style.color = '#66615B';
    document.getElementById('cs2').style.color = '#66615B';
    document.getElementById('cs3').style.color = '#66615B';
    document.getElementById('cs4').style.color = '#66615B';
    document.getElementById('cs5').style.color = '#66615B';
    document.getElementById('cs6').style.color = '#66615B';
    document.getElementById('cs7').style.color = '#EB5E28';
  }
}
