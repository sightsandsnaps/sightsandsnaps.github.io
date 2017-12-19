import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { HomeComponent } from './components/home.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
