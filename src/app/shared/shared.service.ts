import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  listdata : any
  constructor() { }

  setMessage(data:any[]=[])
  {
    this.listdata=data
  }

  getMessage()
  {
    return this.listdata
  }
}
