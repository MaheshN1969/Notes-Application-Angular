export class Note {

    

    id : Number;
    subject_description : string;
    budget_code_id : Number ;
    description : string ;
    amount : Number ;
    remarks : string ;
    status : string ;
    insert_date : String ;
    update_date : String ;

    constructor()
    {
        this.budget_code_id = 0;
        this.amount = 0;
        this.insert_date = this.getFormatedDate( new Date());
        this.update_date = this.getFormatedDate(new Date());
        this.remarks = "";
        this.status = "O";
        this.description = "";
    }

    getFormatedDate(date : Date)
    {
            const dt = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

            return dt ;
    }


}
