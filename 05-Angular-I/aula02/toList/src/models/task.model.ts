export class Task {
    title: string;
    description: string;
    date: Date;
    
    // uma das vantagens da model é que aqui temos uns constructor
    // Aqui é onde vai CRIAR a classe. São os valores default
    constructor(title = '', description = '', date = new Date()){
        this.title = title;
        this.description = description;
        this.date = date;
    }
}