import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainBlockComponent } from './main-block/main-block.component';
import { AboutMeBlockComponent } from './about-me-block/about-me-block.component';
import { TechnologyStackBlockComponent } from './technology-stack-block/technology-stack-block.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainBlockComponent,
    AboutMeBlockComponent,
    TechnologyStackBlockComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
