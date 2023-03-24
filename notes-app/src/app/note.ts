export class Note {

    constructor()
    {
        this.budget_code_id = 0;
        this.amount = 0;
        this.insert_date = String(new Date().toLocaleString());
        this.update_date = String(new Date().toLocaleString());
        this.remarks = "";
        this.status = "O";
        this.description = "";
    }

    id : Number;
    subject_description : string;
    budget_code_id : Number ;
    description : string ;
    amount : Number ;
    remarks : string ;
    status : string ;
    insert_date : String ;
    update_date : String ;


}
