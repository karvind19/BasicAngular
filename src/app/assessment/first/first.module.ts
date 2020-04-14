import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstRoutingModule } from './first-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { LoggerModule } from 'ngx-logger';
import { environment } from 'src/environments/environment';
import { FirstComponent } from './first.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
      CommonModule,
     // AppRoutingModule,
  FormsModule,
      MaterialModule,
      FirstRoutingModule,
      LoggerModule.forRoot(environment.logging)
    ],
    declarations: [FirstComponent]
  }) 
export class FirstModule { }
