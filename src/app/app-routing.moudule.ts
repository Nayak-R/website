import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";
import { BlogComponent } from "./blog/blog.component";
import { LoginComponent } from "./login/login.component";

const routes:Routes=[
    {
        component:AboutUsComponent,
        path:'aboutus'
    },{
        component:ContactUsComponent,
        path:'contactus'
    },{
        component:HomeComponent,
        path:''
    },{
        component:BlogComponent,
        path:'blog'
    },{
        component:LoginComponent,
        path:'login'
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{ }