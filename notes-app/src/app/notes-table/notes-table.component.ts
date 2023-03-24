import { Component , OnInit} from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../note';
import { SubjectRules } from '../subject-rules';


@Component({
  selector: 'app-notes-table',
  templateUrl: './notes-table.component.html',
  styleUrls: ['./notes-table.component.css']
})
export class NotesTableComponent implements OnInit  {

  notes : Note[];
  subject_rules : SubjectRules[];

  modal_note : Note = new Note() ;
  amount_status : boolean;
  budget_code_status : boolean ;
  selected  : String ;
  

  constructor(private notesService : NotesService ){}

  ngOnInit(): void {
    
      this.fetchNotesFromService();
      this.fetchSubjectRules();

  }

  public fetchSubjectRules()
  {
      this.notesService.getSubjectRules().subscribe(data =>{

          this.subject_rules = data ;
      })
  }

  public fetchNotesFromService(){

    // console.log("Inside ................");

          this.notesService.getNoteList().subscribe(data =>{

              this.notes = data ;

    // console.log("Inside main ................ : ",this.notes);


          })
  }

  changeStatus(e : Event)
  {
      console.log("Note Changed ");

      this.selected = (e.target as HTMLInputElement).value ;
      console.log("Subject Selected : ",this.selected);

      const searchObject = this.subject_rules.find((rule) => rule.subject_description == this.selected);

      console.log("Corresponding Rule : ",searchObject);

      this.budget_code_status = (searchObject?.capture_budget_code == 1) ? false : true ;
      this.amount_status = (searchObject?.capture_amount == 1) ? false : true ;        

      console.log("Budget Code Status : ",this.budget_code_status);
      console.log("Amount Status : ",this.amount_status);

      if (this.amount_status == true)
      {
          (document.getElementById("modal_amount") as HTMLInputElement).value = "0" ;
            
      } 


  }

  public deleteNote(id : Number){

      this.notesService.deleteNote(id).subscribe( data =>{

        console.log("Note Deleted Successfully ..............");
        location.reload();

      },
      error => console.log(error)
      );
  }

  closeNote(id : Number , note : Note)
  {
      let remarks = String(prompt("Enter Remarks "));
      
      if(remarks.length != 0 )
      {
            note.remarks = remarks ;
            note.status = 'C';
            note.update_date = String(new Date().toLocaleString());

            this.notesService.closeNote(id,note).subscribe(data =>{

              console.log("Note Closed Successfully ..............");
              location.reload();

            },
            error => console.log(error)
            
            )
      }
      

  }

  updateNote(id : Number)
  {

      

    const temp = this.notes.find((data) => data.id === id);

    this.modal_note = temp!;
    this.modal_note.update_date = String(new Date().toLocaleString());

    console.log("Selected Note : ",this.modal_note); 

      const searchObject = this.subject_rules.find((rule) => rule.subject_description == this.modal_note.subject_description);

      console.log("Search Object : ",searchObject);

      this.amount_status = searchObject?.capture_amount === 1 ? false : true ;
      this.budget_code_status = searchObject?.capture_budget_code === 1 ? false : true ;


      // this.notesService.updateNote(id,this.modal_note).subscribe(data => {

      //   console.log("Note Updated .................. : ",data);

        

      // },
      // error => console.log(error)
      // )
      
  }

  reloadPage()
  {
    location.reload();
  }

  submitUpdatedForm()
  {
        console.log("Data to be updated : ",this.modal_note);

        this.notesService.updateNote(this.modal_note.id,this.modal_note).subscribe(data => {

        console.log("Note Updated .................. : ",data);

        location.reload();

      },
      error => console.log(error)
      )
  }

}
