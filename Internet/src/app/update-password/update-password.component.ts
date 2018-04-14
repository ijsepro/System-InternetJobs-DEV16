import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  name='Angular 5';
  hyphenText='';
  editProspectMode:boolean;

  checkStatus(){
    this.editProspectMode=this.editProspectMode==false?true:false;
    return this.editProspectMode;
  }
  addHyphen(e){
    this.hyphenText=e.key.match(new RegExp('.{1,4}','g')).join("-");
    console.log(this.hyphenText);
  }


  constructor() { }

  ngOnInit() {
  }

}
