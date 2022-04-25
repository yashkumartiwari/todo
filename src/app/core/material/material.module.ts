import { NgModule } from '@angular/core';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import{MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';



const MATERIAL_MODULES = [
  MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule,MatTableModule,MatDialogModule,MatCardModule,
  MatListModule,
  MatButtonModule,
  MatInputModule,
  MatExpansionModule,
  MatToolbarModule,
  MatIconModule,
  MatSnackBarModule,
 
]
@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ],
  exports: [MATERIAL_MODULES],
})
export class MaterialModule { }