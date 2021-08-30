import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { DialogpopupComponent } from '../dialogpopup/dialogpopup.component';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  rowdata : any[] = []
  constructor(
    private dialog :MatDialog,private shared : SharedService
  ) { }

  ngOnInit(): void {
    this.rowdata=this.shared.getMessage()
  }

  OnClickButton()
{
  const dialogconfig = new MatDialogConfig();
  dialogconfig.disableClose=false;
  dialogconfig.autoFocus=true;
  dialogconfig.width="100%";
  dialogconfig.height="100%";
  dialogconfig.scrollStrategy;
  this.dialog.open(DialogpopupComponent,dialogconfig);
  
}

}
