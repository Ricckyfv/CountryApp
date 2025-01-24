import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {

  public country?:Country;

  constructor(
    public activatedRoute: ActivatedRoute,
    public countriesServices: CountriesService,
    public router:Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.countriesServices.searchCountryByAlphaCode(id))
    )
    .subscribe(country => {
        if(!country){
          return this.router.navigateByUrl('');
        }else{
          return this.country= country;
        }
      })
    }
  }
