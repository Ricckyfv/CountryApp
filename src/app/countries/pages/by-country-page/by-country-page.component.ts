import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent implements OnInit {

  //https://restcountries.com/v3.1/name/peru

  constructor(private countriesService: CountriesService){}

  public countries:Country[]= [];
  public placeholder:string='Buscar por pais';
  public isLoading:boolean= false;
  public initialValue:string= '';

  ngOnInit(): void {
    this.countries= this.countriesService.cacheStore.byCountries.countries;
    this.initialValue= this.countriesService.cacheStore.byCountries.term;
  }
  searchByCountry(term:string):void{
    this.isLoading= true;

    this.countriesService.searchCountry(term)
    .subscribe(countries=>{
      this.countries=countries;
      this.isLoading= false;
    })
  }

}
