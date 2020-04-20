import { Component, OnInit, Inject } from '@angular/core';
import { Character } from './Character.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-monster-dialog',
  templateUrl: './create-monster-dialog.component.html',
  styleUrls: ['./create-monster-dialog.component.css']
})
export class CreateMonsterDialogComponent implements OnInit {
  
  monster:Character;

  constructor(
    public dialogRef: MatDialogRef<CreateMonsterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data && this.data.caracter) {
      this.monster = this.data.caracter;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }