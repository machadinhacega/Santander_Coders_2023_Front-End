export class Task {
    title: string;
    description: string;
    date: Date;
    status: string;
    
    // uma das vantagens da model é que aqui temos uns constructor
    // Aqui é onde vai CRIAR a classe. São os valores default
    constructor(title = '', description = '', date = new Date(), status =''){
        this.title = title;
        this.description = description;
        this.date = date;
        this.status = status;
    }
}


// type Istatus = 'toDo' | 'doing' | 'done'