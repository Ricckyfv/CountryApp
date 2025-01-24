import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { CountryPageComponent } from './countries/pages/country-page/country-page.component';

//El path por defecto hay que colocarlo al final, para que no cree conflicto entre paths
const routes: Routes=[
  // {path:'',
  //  component: HomePageComponent
  // },
  {path:'about',
    component: AboutPageComponent
  },
  {path:'contact',
    component: ContactPageComponent
  },
  {path:'countries',
    loadChildren: ()=>import('./countries/countries.module').then(m=>m.CountriesModule)
  },
  {path: '**',
    redirectTo: 'countries' //Path por defecto
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
