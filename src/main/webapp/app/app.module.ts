import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SeabankSharedModule } from 'app/shared/shared.module';
import { SeabankCoreModule } from 'app/core/core.module';
import { SeabankAppRoutingModule } from './app-routing.module';
import { SeabankHomeModule } from './home/home.module';
import { SeabankEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SeabankSharedModule,
    SeabankCoreModule,
    SeabankHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SeabankEntityModule,
    SeabankAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class SeabankAppModule {}
