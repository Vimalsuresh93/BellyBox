import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { EaterpageComponent } from './components/eater/eaterpage/eaterpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
MatExpansionModule,
MatProgressSpinnerModule,
MatFormFieldModule,
MatDialogModule
} from '@angular/material';
import { EaterloginComponent } from './components/eater/eaterlogin/eaterlogin.component';
import { EatersignupComponent } from './components/eater/eatersignup/eatersignup.component';
import { DonorloginComponent } from './components/donor/donorlogin/donorlogin.component';
import { DonorsignupComponent } from './components/donor/donorsignup/donorsignup.component';
import { DonorpageComponent } from './components/donor/donorpage/donorpage.component';
import { HerologinComponent } from './components/heroes/herologin/herologin.component';
import { HerosignupComponent } from './components/heroes/herosignup/herosignup.component';
import { HeropageComponent } from './components/heroes/heropage/heropage.component';
import { CharityloginComponent } from './components/charity/charitylogin/charitylogin.component';
import { CharitysignupComponent } from './components/charity/charitysignup/charitysignup.component';
import { CharitypageComponent } from './components/charity/charitypage/charitypage.component';
import { DonorupdateComponent } from './components/donor/donorupdate/donorupdate.component';
import { AuthInterceptor } from './Auth/auth-interceptor';
import{ErrorInterceptor} from "./error-interceptor"
import { CharityupdateComponent } from './components/charity/charityupdate/charityupdate.component';
import { ErrorComponent } from './error/error.component';
import { SheltersignupComponent } from './components/shelterhome/sheltersignup/sheltersignup.component';
import { ShelterloginComponent } from './components/shelterhome/shelterlogin/shelterlogin.component';
import { ShelterpageComponent } from './components/shelterhome/shelterpage/shelterpage.component';
import { ComplaintadminComponent } from './components/complaintadmin/complaintadmin.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    EaterpageComponent,
    EaterloginComponent,
    EatersignupComponent,
    DonorloginComponent,
    DonorsignupComponent,
    DonorpageComponent,
    HerologinComponent,
    HerosignupComponent,
    HeropageComponent,
    CharityloginComponent,
    CharitysignupComponent,
    CharitypageComponent,
    DonorupdateComponent,
    CharityupdateComponent,
    ErrorComponent,
    SheltersignupComponent,
    ShelterloginComponent,
    ShelterpageComponent,
    ComplaintadminComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
MatExpansionModule,
ReactiveFormsModule,
MatFormFieldModule,
FormsModule,
MatProgressSpinnerModule,
HttpClientModule,
MatDialogModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true},
   {provide:HTTP_INTERCEPTORS, useClass:ErrorInterceptor,multi:true},
  ],
  bootstrap: [AppComponent],
  entryComponents:[ErrorComponent]
})
export class AppModule { }
