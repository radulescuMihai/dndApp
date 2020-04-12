import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from './Character.model';

@Component({
  selector: 'app-create-character-dialog',
  templateUrl: './create-character-dialog.component.html',
  styleUrls: ['./create-character-dialog.component.css']
})
export class CreateCharacterDialogComponent implements OnInit {

  caracter:Character;

  constructor(
    public dialogRef: MatDialogRef<CreateCharacterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data && this.data.caracter) {
      this.caracter = this.data.caracter;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}