import { Component , OnInit,OnDestroy, AfterViewInit, ViewChild} from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../note';
import { SubjectRules } from '../subject-rules';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-notes-table',
  templateUrl: './notes-table.component.html',
  styleUrls: ['./notes-table.component.css']
})
export class NotesTableComponent implements OnInit,OnDestroy,AfterViewInit {

  notes : Note[] ;
  subject_rules : SubjectRules[] ;

  modal_note : Note = new Note() ;
  amount_status : boolean;
  budget_code_status : boolean ;
  selected  : String ;

  dtOptions: DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject();
  
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  

  constructor(private notesService : NotesService ){}

  ngOnInit(): void {

    this.dtOptions = {
      
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu: [5,10,15,25,50],
        processing: true,
        autoWidth : false,
        destroy : true,
        stateSave : true,
    }
    
      this.fetchNotesFromService();
      this.fetchSubjectRules();

      

  }

  rerender(): void {
    
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    // Destroy the table first
          dtInstance.destroy();
    // Call the dtTrigger to rerender again
          this.dtTrigger.next(false);
      });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(false);
     }
    
    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }
    
    

  public fetchSubjectRules()
  {
      this.notesService.getSubjectRules().subscribe(data =>{

          this.subject_rules = data ;
      })
  }

  public dataTableOps()
  {
    setTimeout(()=>{
      $('#notes-table').DataTable({
       
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu: [5,10,15,25,50],
        processing: true,
        autoWidth : false,
        destroy : true,
        stateSave : true,
      
        
        // paging: false,
        // searching: false
      });
    },1);

    
  }

  public fetchNotesFromService(){

    // console.log("Inside ................");

          this.notesService.getNoteList().subscribe(data =>{
              this.notes = [];
              this.notes = data ;

              // this.dtOptions = {
              //   pagingType: 'full_numbers',
              //   pageLength: 5,
              //   lengthMenu: [5,10,15,25,50],
              //   processing: true
              // };

              this.rerender();

    // console.log("Inside main ................ : ",this.notes);


          })
  }

  applyFilter( e : Event)
  {
      let selected  = (e.target as HTMLInputElement).value ;

      console.log("Filter Change : ", selected);

      if(selected === "All")
      {
          this.fetchNotesFromService();
      }
      else if(selected == "Yesterday")
      {
          this.notesService.getNotesAddedSinceYesterday().subscribe(data =>{
            console.log("Notes Since Yesterday : ",data);
            this.notes = [] ;
            this.notes = data ;

            

            console.log("Notes Variable : ",this.notes);
          },
          error => console.log(error)
          )
      }
      else if(selected == "1 Week")
      {
        this.notesService.getNoteAddedSinceOneWeek().subscribe(data =>{
          console.log("Notes Since last 1 Week : ",data);
            this.notes = [] ;
            this.notes = data ;
            console.log("Notes Variable : ",this.notes);
          },
          error => console.log(error)
          )
      }
      else if(selected == "1 Month")
      {
          this.notesService.getNotesAddedSinceOneMonth().subscribe(data =>{
            console.log("Notes Since last 1 Month : ",data);
            this.notes = [] ;
            this.notes = data ;
            console.log("Notes Variable : ",this.notes);
          },
          error => console.log(error)
          )
      }

      this.rerender();
  }

  changeStatus(e : Event)
  {
      console.log("Note Changed ");

      this.selected = (e.target as HTMLInputElement).value ;
      console.log("Subject Selected : ",this.selected);

      const searchObject = this.subject_rules.find((rule) => rule.subject_description == this.selected);

      console.log("Corresponding Rule : ",searchObject);

      this.budget_code_status = (searchObject?.capture_budget_code == "Y") ? false : true ;
      this.amount_status = (searchObject?.capture_amount == "Y") ? false : true ;        

      console.log("Budget Code Status : ",this.budget_code_status);
      console.log("Amount Status : ",this.amount_status);

      if (this.amount_status == true)
      {
          (document.getElementById("modal_amount") as HTMLInputElement).value = "0" ;
          this.modal_note.amount = 0;
            
      }
      
      if(this.budget_code_status == true)
      {
        (document.getElementById("modal_budget-code") as HTMLInputElement).value = "Null" ;
        this.modal_note.budget_code_id = -1 ;
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

  getFormatedDate(date : Date)
  {
          const dt = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

          return dt ;
  }

  closeNote(id : Number , note : Note)
  {
      let remarks = String(prompt("Enter Remarks "));
      
      if(remarks.length != 0 )
      {
            note.remarks = remarks ;
            note.status = 'C';
            note.update_date = this.getFormatedDate(new Date());

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
    this.modal_note.update_date = this.getFormatedDate(new Date());

    console.log("Selected Note : ",this.modal_note); 

      const searchObject = this.subject_rules.find((rule) => rule.subject_description == this.modal_note.subject_description);

      console.log("Search Object : ",searchObject);

      this.amount_status = searchObject?.capture_amount === "Y" ? false : true ;
      this.budget_code_status = searchObject?.capture_budget_code === "Y" ? false : true ;


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
