import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { SharedService } from '../shared/shared.service';



@Component({
  selector: 'app-dialogpopup',
  templateUrl: './dialogpopup.component.html',
  styleUrls: ['./dialogpopup.component.css']
})
export class DialogpopupComponent implements OnInit {

  userform : FormGroup ;
  listdata : any;

  constructor(
    private dialog :MatDialog,private fb: FormBuilder,private shared:SharedService
  ) { 
    this.listdata = [];
    this.userform=  this.fb.group({
      casename : ['',Validators.required],
      casenumber : [,Validators.required]
    })
  }

  ngOnInit(): void {
    
  }
  


 // PressButton(){
    //const dialogconfig = new MatDialogConfig();
   // this.dialog.closeAll();
 // }
 public AddItem() : void
 {
this.listdata.push(this.userform.value);
this.userform.reset();
this.shared.setMessage(this.listdata);
 }
 
}
