function numerovocales(texto) {
    let numerovocales=0;
    let vocales =['a','e','i','o','u','A','E','I','O','U'];

     for (i=0; i<texto.length; i++;)
      {
         if (vocales.indexOF(texto[i])>=0)
          {
            numerovocales=numerovocales+1;
          }
       }    

    return numerovocales;
}

console.log(numerovocales('Esto es un texto de prueba'));

