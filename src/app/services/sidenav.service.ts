import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }

  @Output() sidenavToggled: EventEmitter<boolean>= new EventEmitter();

  toggleSidenav(){
    this.sidenavToggled.emit();
  }

}
