import { Component , OnInit} from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../note';


@Component({
  selector: 'app-notes-table',
  templateUrl: './notes-table.component.html',
  styleUrls: ['./notes-table.component.css']
})
export class NotesTableComponent implements OnInit  {

  notes : Note[];


  constructor(private notesService : NotesService){}

  ngOnInit(): void {
    
      this.fetchNotesFromService();

  }

  private fetchNotesFromService(){

          this.notesService.getNoteList().subscribe(data =>{

              this.notes = data ;

          })
  }

}
