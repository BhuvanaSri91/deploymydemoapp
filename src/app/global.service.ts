import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  title:string = "Angular Demo"

  constructor() { }
}
