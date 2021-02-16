import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// omponentes
import { AppComponent } from './app.component';
import { header } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { noticias } from './components/noticias/noticias.component';
import { home } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    header,
    FooterComponent,
    noticias,
    home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
