A=3;B=9;	//case #00
//A=17;B=24;	//case #01
ContadorDeCuadrados=0;
if(B<A){		// elimina error B<A
  console.log("introducir rango de valores correcto A < B!!");
	
        }else{
while(A<=B){	//elimina error de introducir raizes negativas
	if(A<0){
	console.log("ERROR: raíz negativa");
		
	        }else{
		R=Math.sqrt(A);
		     }
		if(R%1!==0){
			A++;

			   }else{
			ContadorDeCuadrados++;
			A++;
			        }
		}
	}
console.log(ContadorDeCuadrados);

