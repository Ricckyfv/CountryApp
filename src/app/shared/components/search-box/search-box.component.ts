import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer:Subject<string>= new Subject<string>(); //Puede recibir y emitir datos manualmente con next
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder:string='';

  @Output()
  public onValue= new EventEmitter<string>;

  @Output()
  public onDebounce= new EventEmitter<string>;

  @Input()
  public initialValue:string= '';

  ngOnInit(): void {
    this.debouncerSuscription= this.debouncer
    .pipe(
      debounceTime(300),
    )
    .subscribe(value=> {
      this.onDebounce.emit(value)
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }


  busqueda(txt:string){
    this.onValue.emit(txt);
  }

  onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm);
  }
}
