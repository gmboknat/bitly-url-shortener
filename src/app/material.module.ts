import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatCardModule]
})
export class MaterialModule {}
