import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { AppRoutingModule } from './app-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ProfileComponent,
    ProductComponent,
    LoginComponent,
    CatalogueComponent,
    

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MdbCollapseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
