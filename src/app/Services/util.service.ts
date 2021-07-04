import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public sideNavToggle:Subject<Boolean> = new Subject();

}


