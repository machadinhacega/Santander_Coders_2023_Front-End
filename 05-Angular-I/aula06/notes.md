## Formulários reativos:

### 1. Fazer uma importação 
> app.modeule.ts:

    ReactiveFormsModule


### 2. Criar um constructor:
 > form-reactive.ts:

    constructor(private formBuilder: FormBuilder){}

### 3. Criar a variavel form:
 > form-reactive.ts:


    public form: FormGroup = this.formBuilder.group({
        tittle: ['', Validators.required],
        description: ['', Validators.required],
        date: ['', Validators.required],
        Select: ['toDO', Validators.required],
    })

### 4. Passar a variavel form por uma property binding
 > form-reactive.html:

    <form [formGroup]="form">
