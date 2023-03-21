import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NotesService } from './notes.service';
import { SubjectRules } from './subject-rules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'notes-app';

  notes : Note[];
  rules : SubjectRules[];
  

  constructor(private noteService : NotesService){}

  ngOnInit(): void {
    
  }

 

  


}
