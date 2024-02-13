import { RouterModule, Routes } from '@angular/router'
import { HeaderComponent } from './header/header.component'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { HomeComponent } from './home/home.component'
const routes: Routes = [

]
@NgModule({
    imports: [HeaderComponent,HomeComponent,BrowserModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
    bootstrap: [],
  })
  export class AppModule {}