import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{HomeComponent} from "./components/home/home.component";
import{AboutComponent} from "./components/about/about.component";
import{LoginComponent} from "./components/login/login.component";
import{EaterloginComponent} from "./components/eater/eaterlogin/eaterlogin.component";
import{EatersignupComponent} from "./components/eater/eatersignup/eatersignup.component";
import{EaterpageComponent} from "./components/eater/eaterpage/eaterpage.component";
import{DonorloginComponent} from "./components/donor/donorlogin/donorlogin.component";
import{DonorsignupComponent} from "./components/donor/donorsignup/donorsignup.component";
import{DonorpageComponent} from "./components/donor/donorpage/donorpage.component";
import{DonorupdateComponent} from "./components/donor/donorupdate/donorupdate.component";
import{HerologinComponent} from "./components/heroes/herologin/herologin.component";
import{HerosignupComponent} from "./components/heroes/herosignup/herosignup.component";
import{HeropageComponent} from "./components/heroes/heropage/heropage.component";
import{CharityloginComponent} from "./components/charity/charitylogin/charitylogin.component";
import{CharitysignupComponent} from "./components/charity/charitysignup/charitysignup.component";
import{CharitypageComponent} from "./components/charity/charitypage/charitypage.component";
import{ CharityupdateComponent} from "./components/charity/charityupdate/charityupdate.component";
import{ ShelterloginComponent} from "./components/shelterhome/shelterlogin/shelterlogin.component";
import{SheltersignupComponent} from "./components/shelterhome/sheltersignup/sheltersignup.component";
import{ShelterpageComponent} from "./components/shelterhome/shelterpage/shelterpage.component";
import{ComplaintadminComponent} from "./components/complaintadmin/complaintadmin.component"
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"eaterlogin",component:EaterloginComponent},
  {path:"eatersignup",component:EatersignupComponent},
  {path:"eaterpage",component:EaterpageComponent},
  {path:"donorlogin",component:DonorloginComponent},
  {path:"donorsignup",component:DonorsignupComponent},
  {path:"donorpage",component:DonorpageComponent},
  {path:"donor/update",component:DonorupdateComponent},
  {path:"herologin",component:HerologinComponent},
  {path:"herosignup",component:HerosignupComponent},
  {path:"heropage",component:HeropageComponent},
  {path:"charitylogin",component:CharityloginComponent},
  {path:"charitysignup",component:CharitysignupComponent},
  {path:"charitypageComponent",component:CharitypageComponent},
  {path:"charity/update",component:CharityupdateComponent},
  {path:"shelterlogin",component:ShelterloginComponent},
  {path:"sheltersignup",component:SheltersignupComponent},
  {path:"shelterpage",component:ShelterpageComponent},
  {path:"Complaintadmin",component:ComplaintadminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
