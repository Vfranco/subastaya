import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SessionModule } from '../session/session.module';


@NgModule({
    declarations : [
        HomeComponent,
        NavbarComponent        
    ],
    exports : [
        HomeComponent,
        NavbarComponent
    ],
    imports : [
        CommonModule,
        SessionModule
    ],
    providers : []
})

export class LandingModule { }
