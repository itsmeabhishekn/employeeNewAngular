import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { NavComponent } from './nav/nav.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';

const myroute: Routes = [
  {
    path: "",
    component: ViewComponent
  },
  {
    path: "add",
    component: AddComponent
  },
  {path:"view",
component:ViewComponent},
{
  path:"search",
  component:SearchComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    NavComponent,
    ViewComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
