import { Component, OnInit, Inject } from '@angular/core';
import { Character } from './Character.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-host-dialog',
  templateUrl: './create-host-dialog.component.html',
  styleUrls: ['./create-host-dialog.component.css']
})
export class CreateHostDialogComponent {

  name:string;

  constructor(
    public dialogRef: MatDialogRef<CreateHostDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  // ngOnInit(): void {
  //   if (this.data && this.data.caracter) {
  //     this.caracter = this.data.caracter;
  //   }
  // }

  onCancel(): void {
    this.dialogRef.close();
  }

}