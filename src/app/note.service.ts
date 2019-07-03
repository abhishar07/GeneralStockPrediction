import { Injectable } from '@angular/core';

@Injectable()
export class NoteService {

  constructor() { }

   getNotes(): void{
      alert("this is note service function");
   }
}
