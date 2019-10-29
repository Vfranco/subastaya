import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { SessionModule } from '../session/session.module';
import { TopbarComponent } from './topbar/topbar.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations : [
        NavbarComponent, TopbarComponent, SectionComponent, FooterComponent, HeaderComponent
    ],
    exports : [
        NavbarComponent, TopbarComponent, SectionComponent, FooterComponent, HeaderComponent
    ],
    imports : [
        CommonModule,
        SessionModule
    ],
    providers : []
})

export class LandingModule { }
