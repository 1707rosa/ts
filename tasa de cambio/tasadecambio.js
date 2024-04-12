<!DOCTYPE html>

<body>
  
<script>
   let num = parseFloat(prompt("Ingrese una cantidad:"));
  let cam= parseInt(prompt("Elija la moneda que ingreso: 1.Yen , 2. Dolar, 3. Euro, 4. Wones"));
  let yen =0.39;
  let usd= 58.53; 
  let eur=63.07;
  let won=0.044;
  let total=0;
   switch (cam) {
    case 1:
        total=num*yen;
        console.log("Los yenes que ingreso en pesos son: "+ total +" "+ "La tasa de cambio es: 0.39");
         break;
    case 2:
        total=num*usd;
        console.log("Los dolares que ingreso en pesos son: "+ total +" "+ "La tasa de cambio es: 58.53");
        break;
    case 3:
       total=num*eur;
        console.log("Los euros que ingreso en pesos son: "+ total +" "+ "La tasa de cambio es: 63.07");
        break;
    case 4:
        total=num*won;
        console.log("Los wones que ingreso en pesos son: "+ total +" "+ "La tasa de cambio es: 0.044");
        break;
    default:
        console.log("No esta entre las opciones");
   }


   if(total>=10000.00 && total<=20000.00){
          let aumento= (total*0.10)+total;
         console.log("Se le aumento un 10% a su cantidad"+ " "+ aumento)  ; 

        }else if (total>=20001.00){
            let aumento= (total*0.15)+total;
         console.log("Se le aumento un 15% a su cantidad"+" "+ aumento)  ; 
}





</script>
</body>
</html>
