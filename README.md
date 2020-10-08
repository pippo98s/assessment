### Comandi da eseguire
```
npm install
```
```
npm run build
```
```
npm run start:dev
```

### Esercizio
L'esercizio può essere eseguito con buon grado di libertà ( è un esercizio e il tuo tempo è prezioso! ):
css: scegli il preprocessore che preferisci fra less o scss
html5: con una logica di semantica che ritieni migliore o con la quale sei consono lavorare (se vuoi usare un paradigma block-element-modifier o altri paradigmi, o logiche del tutto personali, sentiti libero ...)
task runner, module bundler: a tuo piacimento (gulp, grunt, webpack, ...) con le modalità che ritieni (babel, webpack plugins, scaffolding degli asset distribuiti, ...) se non hai ancora affrontato questi temi ti sproniamo a documentarti su webpack per lo svolgimento dell'esercizio.
Per questo esercizio ti chiediamo di non avvalerti di frameworks come React, Vue o Angular, ma di lavorare in ES6 semplice.
Apprezziamo molto sia Vue che React, ma è utile che l'esercizio sia scritto in ES6 puro per valutare la logica e le conoscenze delle direttive ES6.


Ed ecco finalmente l'esercizio:

Usando questo html:

```
    <ul id="card-trigger">
        <li><a href="javascript:void(0)" data-sku="7">post 7</a></li>
        <li><a href="javascript:void(0)" data-sku="3">post 3</a></li>
        <li><a href="javascript:void(0)" data-sku="2">post 2</a></li>
    </ul>

    <a href="javascript:void(0)" id="remover">remove cards</a>

    <div id="cards-holder"></div>
```

Ottieni questo risultato:
Cliccando una voce della navigazione "card-trigger" verrà generata una Card nel div "cards-holder", in caso altre cards siano presenti si aggiungerà alle stesse. Se quella card fosse già presente non se ne  aggiungerà un'altra uguale.

Il contenuto della card sarà recuperato da questo servizio: [https://jsonplaceholder.typicode.com/posts/{id}](https://jsonplaceholder.typicode.com/posts/), usando il data-sku presente sui links come parametro.

La singola Card conterrà un bottone di rimozione della card stessa.

Il card-trigger su mobile dovrà diventare una icona che espone al tap le voci di menu