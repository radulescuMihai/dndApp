import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameService } from './game/game.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './game/login.component';
import { CreateCharacterDialogComponent } from './game/create-character-dialog.component';
import { MultiplayerComponent } from './game/multiplayer.component';
import { CreateHostDialogComponent } from './game/create-host-dialog.component';
import { CreateMonsterDialogComponent } from './game/create-monster-dialog.component';

@NgModule({
  exports: [
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDividerModule,
    CreateCharacterDialogComponent,
    CreateHostDialogComponent,
  ],
  declarations: [
    AppComponent,
    GameComponent,
    LoginComponent,
    CreateCharacterDialogComponent,
    MultiplayerComponent,
    CreateHostDialogComponent,
    CreateMonsterDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [GameService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateCharacterDialogComponent,
    CreateHostDialogComponent,
  ]

})
export class AppModule { }
