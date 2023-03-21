import { Component,OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { SubjectRules } from '../subject-rules';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css']
})
export class NotesFormComponent implements OnInit {


  subject_rules : SubjectRules[] ;

  budget_code_status : boolean = true ;
  amount_status : boolean = true;
  selected : String ;
  amountValue : Number = 0;


  constructor(private notesService : NotesService){}

  ngOnInit(): void {

      this.fetchAllRules();
    
  }

  fetchAllRules()
  {
        this.notesService.getSubjectRules().subscribe(data => {

              this.subject_rules = data ; 

              console.log("Rules Fetched : ",this.subject_rules);

        })
  }


  changeStatus(e : Event)
  {
        this.selected = (e.target as HTMLInputElement).value ;

        console.log("Subject Selected : ",this.selected);

        const searchObject = this.subject_rules.find((rule) => rule.subject_description == this.selected);

        console.log("Corresponding Rule : ",searchObject);

        // if(searchObject.capture_budget_code == 1)
        // {

        // }

        

        this.budget_code_status = (searchObject?.capture_budget_code == 1) ? false : true ;
        this.amount_status = (searchObject?.capture_amount == 1) ? false : true ;        

        console.log("Budget Code Status : ",this.budget_code_status);
        console.log("Amount Status : ",this.amount_status);

        if (this.amount_status === true)
        {
          (document.getElementById("amount") as HTMLInputElement).value = "0" ;
            
        } 

        
  }

}
