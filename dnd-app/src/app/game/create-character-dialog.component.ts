import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-character-dialog',
  templateUrl: './create-character-dialog.component.html',
  styleUrls: ['./create-character-dialog.component.css']
})
export class CreateCharacterDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateCharacterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onCancel(): void {
    this.dialogRef.close();
  }

}

export interface DialogData {
  name: string;
}