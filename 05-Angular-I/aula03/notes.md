Conceito de ciclo de vida
Principais métodos de ciclo de vida
Conceito de pipe
Pipes nativas
Pipes customizadas
Encadeamento de pipes






### Conceito de ciclo de vida
https://angular.io/guide/lifecycle-hooks


### Principais métodos de ciclo de vida
ngOnInit(){}
Assim que a aplcação inicia esse método roda
* export class AppComponent implements OnInit{}
* É uma BOA PRÁTICA colocar o 'implement': Nele estou dizendo q a minha classe precisa implementar os métodos q estao dentro do OnInit
ngOnDestroy(){}
ngOnChange(){}

### Pipes nativas
{{task.title | uppercase }}
{{task.description | slice: 0:4 }}
{{task.date | date:'dd/MM/yy'}}

### Pipes customizadas