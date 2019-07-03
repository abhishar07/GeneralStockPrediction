import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private noteservice:NoteService) {}

  ngOnInit() {
  }

}
