import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// HttpClient Module
import { HttpClientModule } from '@angular/common/http';

// Forms Module
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

// Components
import { AppComponent } from './app.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { GetBookComponent } from './get-book/get-book.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchBooksComponent,
    ListBooksComponent,
    GetBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
