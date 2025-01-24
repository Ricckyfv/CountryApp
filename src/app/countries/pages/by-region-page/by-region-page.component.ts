import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})


export class ByRegionPageComponent implements OnInit{

  //https://restcountries.com/v3.1/region/africa

    constructor(private countriesService: CountriesService){}

    public countries:Country[]= [];
    public regions:Region[]= ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    public selectedRegion?:Region;
    public placeholder:string='Buscar por region'

    ngOnInit(): void {
      this.countries= this.countriesService.cacheStore.byRegion.countries;
      this.selectedRegion= this.countriesService.cacheStore.byRegion.region;
    }
    searchByRegion(region:Region):void{
      this.selectedRegion= region;
      this.countriesService.searchRegion(region)
      .subscribe(countries=>{
        this.countries=countries;
      })
    }
}
