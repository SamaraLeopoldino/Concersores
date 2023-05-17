function cLDolar(){
    let libra = parseFloat(document.getElementById('moedaLibra').value);
   
    const dolar = 1.24;
   
    let conv = libra / dolar;
   
   
    document.getElementById('c-Libra').innerHTML = conv.toFixed(2);
   
        }
   
    function cLEuro(){
    let libra = parseFloat(document.getElementById('moedaLibra').value);
   
    const euro = 1.14;
   
    let conv = libra / euro;
   
   
    document.getElementById('c-Libra').innerHTML = conv.toFixed(2);
   
        }
   
    function cLReal(){
    let libra = parseFloat(document.getElementById('moedaLibra').value);
   
    const real = 6.26;
   
    let conv = libra / real;
   
   
    document.getElementById('c-Libra').innerHTML = conv.toFixed(2);
   
        }
   
    function cLYuan(){
    let libra = parseFloat(document.getElementById('moedaLibra').value);
   
    const yuan = 8.55;
   
    let conv = libra / yuan;
   
   
    document.getElementById('c-Libra').innerHTML = conv.toFixed(2);
   
        }
   
    function cDEuro(){
        let dolar = parseFloat(document.getElementById('moedaDolar').value);
       
        const euro = 0.91;
       
        let conv = dolar / euro;
       
        document.getElementById('c-Dolar').innerHTML = conv.toFixed(2);
       
        }
       
    function cDLibra(){
        let dolar = parseFloat(document.getElementById('moedaDolar').value);
       
        const libra = 0.80;
       
        let conv = dolar / libra;
       
        document.getElementById('c-Dolar').innerHTML = conv.toFixed(2);
       
        }
       
    function cDReal(){
        let dolar = parseFloat(document.getElementById('moedaDolar').value);
       
        const real = 5.03;
       
        let conv = dolar / real;
       
        document.getElementById('c-Dolar').innerHTML = conv.toFixed(2);
       
        }
       
    function cDYuan(){
        let dolar = parseFloat(document.getElementById('moedaDolar').value);
       
        const yuan = 6.89;
       
        let conv = dolar / yuan;
       
        document.getElementById('c-Dolar').innerHTML = conv.toFixed(2);
        }


    function cELibra(){
            let euro = parseFloat(document.getElementById('moedaEuro').value);
           
            const libra = 0.88;
           
            let conv = euro / libra;
           
            document.getElementById('c-Euro').innerHTML = conv.toFixed(2);
           
        }
           
    function cEReal(){
            let euro = parseFloat(document.getElementById('moedaEuro').value);
           
            const real = 5.56;
           
            let conv = euro / real;
           
            document.getElementById('c-Euro').innerHTML = conv.toFixed(2);
           
        }
           
    function cEYuan(){
            let euro = parseFloat(document.getElementById('moedaEuro').value);
           
            const yuan = 7.54;
           
            let conv = euro / yuan;
           
            document.getElementById('c-Euro').innerHTML = conv.toFixed(2);
        }


    function cEDolar(){
                let euro = parseFloat(document.getElementById('moedaEuro').value);
               
                const dolar = 1.10;
               
                let conv = euro / dolar;
               
                document.getElementById('c-Euro').innerHTML = conv.toFixed(2);
        }


    function cRLibra(){
     let real = parseFloat(document.getElementById('moedaReal').value);
                   
     const libra = 0.16;
                   
     let conv = real / libra;
                   
     document.getElementById('c-Real').innerHTML = conv.toFixed(2);
                   
        }


     function cRYuan(){
        let real = parseFloat(document.getElementById('moedaReal').value);
       
        const yuan = 1.36;
       
        let conv = real / yuan;
       
        document.getElementById('c-Real').innerHTML = conv.toFixed(2);
       
        }      
             
    function cRDolar(){
            let real = parseFloat(document.getElementById('moedaReal').value);
           
            const dolar = 0.20;
           
            let conv = real / dolar;
           
            document.getElementById('c-Real').innerHTML = conv.toFixed(2);
           
        }


    function cREuro(){
                let real = parseFloat(document.getElementById('moedaReal').value);
               
                const euro = 0.18;
               
                let conv = real / euro;
               
                document.getElementById('c-Real').innerHTML = conv.toFixed(2);
               
        }


    function cYEuro(){
        let yuan = parseFloat(document.getElementById('moedaYuan').value);
       
        const euro = 0.13;
       
        let conv = yuan / euro;
       
        document.getElementById('c-Yuan').innerHTML = conv.toFixed(2);
       
        }


    function cYDolar(){
            let yuan = parseFloat(document.getElementById('moedaYuan').value);
           
            const dolar = 0.15;
           
            let conv = yuan / dolar;
           
            document.getElementById('c-Yuan').innerHTML = conv.toFixed(2);
           
        }
   
    function cYLibra(){
                let yuan = parseFloat(document.getElementById('moedaYuan').value);
               
                const libra = 0.12;
               
                let conv = yuan / libra;
               
                document.getElementById('c-Yuan').innerHTML = conv.toFixed(2);
               
        }


    function cYReal(){
                    let yuan = parseFloat(document.getElementById('moedaYuan').value);
                   
                    const real = 0.74;
                   
                    let conv = yuan / real;
                   
                    document.getElementById('c-Yuan').innerHTML = conv.toFixed(2);
                   
        }
           
    function cMMilimetro(){
            let metro = parseFloat(document.getElementById('distanciaMetro').value);
                           
           const milimetro = 1.000;
                           
           let conv = metro / milimetro;
                           
           document.getElementById('c-Metros').innerHTML = conv.toFixed(2);
                           
        }
           
       function cMJardas(){
             let metro = parseFloat(document.getElementById('distanciaMetro').value);
                                             
            const jardas = 1.0936;
                                             
            let conv = metro / jardas;
                                             
            document.getElementById('c-Metros').innerHTML = conv.toFixed(2);
                                             
        }
   
       function cMCm(){
                let metro = parseFloat(document.getElementById('distanciaMetro').value);
                                                             
                const centimetros= 100;
                                                             
                let conv = metro / centimetros;
             
                document.getElementById('c-Metros').innerHTML = conv.toFixed(2);
                                                             
        }
   
       function cMKm(){
        let metro = parseFloat(document.getElementById('distanciaMetro').value);
                     
        const quilometro = 0.001;
                                                                             
         let conv = metro / quilometro;
                                                                             
         document.getElementById('c-Metros').innerHTML = conv.toFixed(2);
                                                                             
        }
   
       function cMPes(){
               let metro = parseFloat(document.getElementById('distanciaMetro').value);
                             
               const pes = 3.281;
                                                                                     
                let conv = metro / pes;
                                                                                     
                document.getElementById('c-Metros').innerHTML = conv.toFixed(2);
                                                                                     
        }


        function cPCm(){
            let pes = parseFloat(document.getElementById('distanciaPes').value);
                         
            const centimetros = 30.48;
                                                                                 
             let conv = pes / centimetros;
                                                                                 
             document.getElementById('c-Pes').innerHTML = conv.toFixed(2);
        }                                
       
        function cPKm(){
            let pes = parseFloat(document.getElementById('distanciaPes').value);
                         
            const  quilometro = 0.0003048;
                                                                                 
             let conv = pes / quilometro ;
                                                                                 
             document.getElementById('c-Pes').innerHTML = conv.toFixed(2);
        }                                                                  
     
        function cPJardas(){
            let pes = parseFloat(document.getElementById('distanciaPes').value);
                         
            const jardas = 0.333333 ;
                                                                                 
             let conv = pes / jardas;
                                                                                 
             document.getElementById('c-Pes').innerHTML = conv.toFixed(2);
        }  


        function cPMetros(){
            let pes = parseFloat(document.getElementById('distanciaPes').value);
                         
            const metros = 0.3048;
                                                                                 
             let conv = pes / metros;
                                                                                 
             document.getElementById('c-Pes').innerHTML = conv.toFixed(2);
        }  


        function cPMilimetro(){
            let pes = parseFloat(document.getElementById('distanciaPes').value);
                         
            const milimetro = 304.8;
                                                                                 
             let conv = pes / milimetro;
                                                                                 
             document.getElementById('c-Pes').innerHTML = conv.toFixed(2);
        }  


        function cCPes(){
            let centimetros = parseFloat(document.getElementById('distanciaCentimetros').value);
                         
            const pes = 0.0328;
                                                                                 
             let conv = centimetros / pes;
                                                                                 
             document.getElementById('c-Cm').innerHTML = conv.toFixed(2);
        }  


        function cCJardas(){
            let centimetros = parseFloat(document.getElementById('distanciaCentimetros').value);
                         
            const jardas = 0.10936;
                                                                                 
             let conv = centimetros /jardas;
                                                                                 
             document.getElementById('c-Cm').innerHTML = conv.toFixed(2);
        }  


        function cCKm(){
            let centimetros = parseFloat(document.getElementById('distanciaCentimetros').value);
                         
            const quilometros = 0.00001;
                                                                                 
             let conv = centimetros / quilometros;
                                                                                 
             document.getElementById('c-Cm').innerHTML = conv.toFixed(2);
        }  


        function cCMetros(){
            let centimetros = parseFloat(document.getElementById('distanciaCentimetros').value);
                         
            const metros = 0.001;
                                                                                 
             let conv = centimetros / metros;
                                                                                 
             document.getElementById('c-Cm').innerHTML = conv.toFixed(2);
        }  


        function cCMilimetros(){
            let centimetros = parseFloat(document.getElementById('distanciaCentimetros').value);
                         
            const milimetros = 10;
                                                                                 
             let conv = centimetros / milimetros;
                                                                                 
             document.getElementById('c-Cm').innerHTML = conv.toFixed(2);
        }  


        function cJMilimetro(){
            let jardas= parseFloat(document.getElementById('distanciaJardas').value);
                         
            const milimetro = 914.4;
                                                                                 
             let conv = jardas / milimetro;
                                                                                 
             document.getElementById('c-Jardas').innerHTML = conv.toFixed(2);
        }  


        function cJCm(){
            let jardas= parseFloat(document.getElementById('distanciaJardas').value);
                         
            const centimetros = 91.44;
                                                                                 
             let conv = jardas / centimetros;
                                                                                 
             document.getElementById('c-Jardas').innerHTML = conv.toFixed(2);
        }


        function cJPes(){
            let jardas= parseFloat(document.getElementById('distanciaJardas').value);
                         
            const pes = 3;
                                                                                 
             let conv = jardas / pes;
                                                                                 
             document.getElementById('c-Jardas').innerHTML = conv.toFixed(2);
        }


        function cJKm(){
            let jardas= parseFloat(document.getElementById('distanciaJardas').value);
                         
            const quilometros = 0.0009144;
                                                                                 
             let conv = jardas / quilometros;
                                                                                 
             document.getElementById('c-Jardas').innerHTML = conv.toFixed(2);
        }


        function cJardaMetro(){
            let jardas= parseFloat(document.getElementById('distanciaJardas').value);
                         
            const metros = 0.9144;
                                                                                 
             let conv = jardas / metros;
                                                                                 
             document.getElementById('c-Jardas').innerHTML = conv.toFixed(2);
        }


        function cMLcm(){
            let milimetro= parseFloat(document.getElementById('distanciaMilimetro').value);
                         
             const centimetro = 0.1;
                                                                                 
             let conv = milimetro / centimetro;
                                                                                 
             document.getElementById('c-Milimetros').innerHTML = conv.toFixed(2);
        }


       
        function cMLjardas(){
            let milimetro= parseFloat(document.getElementById('distanciaMilimetro').value);
                         
             const jardas = 0.00109361;
                                                                                 
             let conv = milimetro / jardas;
                                                                                 
             document.getElementById('c-Milimetros').innerHTML = conv.toFixed(2);
        }


       
        function cMLmetro(){
            let milimetro= parseFloat(document.getElementById('distanciaMilimetro').value);
                         
             const metros = 0.001;
                                                                                 
             let conv = milimetro / metros;
                                                                                 
             document.getElementById('c-Milimetros').innerHTML = conv.toFixed(2);
        }


       
        function cMLpes(){
            let milimetro= parseFloat(document.getElementById('distanciaMilimetro').value);
                         
             const pes = 0.00328084 ;
                                                                                 
             let conv = milimetro / pes;
                                                                                 
             document.getElementById('c-Milimetros').innerHTML = conv.toFixed(2);
        }


       
        function cMLkm(){
            let milimetro= parseFloat(document.getElementById('distanciaMilimetro').value);
                         
             const quilometro = 0.0000001;
                                                                                 
             let conv = milimetro / quilometro;
                                                                                 
             document.getElementById('c-Milimetros').innerHTML = conv.toFixed(2);
        }


       
        function cKCm(){
            let quilometro= parseFloat(document.getElementById('distanciaQuilometro').value);
                         
             const centimetro = 100.000;
                                                                                 
             let conv = quilometro / centimetro;
                                                                                 
             document.getElementById('c-Km').innerHTML = conv.toFixed(2);
        }


        function cKMilimetros(){
            let quilometro= parseFloat(document.getElementById('distanciaQuilometro').value);
                         
             const milimetro = 1000.000;
                                                                                 
             let conv = quilometro / milimetro;
                                                                                 
             document.getElementById('c-Km').innerHTML = conv.toFixed(2);
        }


        function cKMetros(){
            let quilometro= parseFloat(document.getElementById('distanciaQuilometro').value);
                         
             const metros = 1.000;
                                                                                 
             let conv = quilometro / metros;
                                                                                 
             document.getElementById('c-Km').innerHTML = conv.toFixed(2);
        }


        function cKPes(){
            let quilometro= parseFloat(document.getElementById('distanciaQuilometro').value);
                         
             const pes = 3280.84;
                                                                                 
             let conv = quilometro / pes;
                                                                                 
             document.getElementById('c-Km').innerHTML = conv.toFixed(2);
        }


        function cKJardas(){
            let quilometro= parseFloat(document.getElementById('distanciaQuilometro').value);
                         
             const jardas = 1760.00;
                                                                                 
             let conv = quilometro / jardas;
                                                                                 
             document.getElementById('c-Km').innerHTML = conv.toFixed(2);
        }


        function cCKelvin(){
            let celsius= parseFloat(document.getElementById('TemperaturaCelsius').value);
                         
             const kelvin = 274.15;
                                                                                 
             let conv = celsius / kelvin;
                                                                                 
             document.getElementById('c-Celsius').innerHTML = conv.toFixed(2);
        }


        function cCFihre(){
            let celsius= parseFloat(document.getElementById('TemperaturaCelsius').value);
                         
             const fahrenheit = 38.8;
                                                                                 
             let conv = celsius / fahrenheit;
                                                                                 
             document.getElementById('c-Celsius').innerHTML = conv.toFixed(2);
        }


        function cKCelsius(){
            let kelvin= parseFloat(document.getElementById('TemperaturaKelvin').value);
                         
             const celsius = -272.15;
                                                                                 
             let conv = kelvin / celsius;
                                                                                 
             document.getElementById('c-Kelvin').innerHTML = conv.toFixed(2);
        }


        function cKFihre(){
            let kelvin= parseFloat(document.getElementById('TemperaturaKelvin').value);
                         
             const fahrenheit = -457.87;
                                                                                 
             let conv = kelvin / fahrenheit;
                                                                                 
             document.getElementById('c-Kelvin').innerHTML = conv.toFixed(2);
        }


        function cFKelvin(){
            let fahrenheit= parseFloat(document.getElementById('TemperaturaFahrenheit').value);
                         
             const kelvin = 255.93;
                                                                                 
             let conv = fahrenheit / kelvin;
                                                                                 
             document.getElementById('c-Fahrenheit').innerHTML = conv.toFixed(2);
        }


        function cFCelsius(){
            let fahrenheit= parseFloat(document.getElementById('TemperaturaFahrenheit').value);
                         
             const celsius = -17.22;
                                                                                 
             let conv = fahrenheit / celsius;
                                                                                 
             document.getElementById('c-Fahrenheit').innerHTML = conv.toFixed(2);
        }



/*
function cLDolar() {
    let libra = parseFloat(document.getElementById('moedaLibra').value);
    const dolar = 1.24;
    let conv = libra / dolar;
    document.getElementById('c-Libra').innerHTML = conv.toFixed(2);
  }
  
  function cLEuro() {
    let libra = parseFloat(document.getElementById('moedaLibra').value);
    const euro = 1.14;
    let conv = libra / euro;
    document.getElementById('c-Libra').innerHTML = conv.toFixed(2);
  }
  
  function cLReal() {
    let libra = parseFloat(document.getElementById('moedaLibra').value);
    const real = 6.26;
    let conv = libra / real;
    document.getElementById('c-Libra').innerHTML = conv.toFixed(2);
  }
  
  function cLYuan() {
    let libra = parseFloat(document.getElementById('moedaLibra').value);
    const yuan = 8.55;
    let conv = libra / yuan;
    document.getElementById('c-Libra').innerHTML = conv.toFixed(2);
  }

  function cCKelvin() {
    let celsius = parseFloat(document.getElementById('TemperaturaCelsius').value);
    let conv = celsius + 273.15;
    document.getElementById('c-Celsius').innerHTML = conv.toFixed(2) + " K";
}

function cCFahrenheit() {
    let celsius = parseFloat(document.getElementById('TemperaturaCelsius').value);
    let conv = (celsius * 9/5) + 32;
    document.getElementById('c-Celsius').innerHTML = conv.toFixed(2) + " °F";
}

function cFCelsius() {
    let fahrenheit = parseFloat(document.getElementById('TemperaturaFahrenheit').value);
    let conv = (fahrenheit - 32) * 5/9;
    document.getElementById('c-Fahrenheit').innerHTML = conv.toFixed(2) + " °C";
}

function cFKelvin() {
    let fahrenheit = parseFloat(document.getElementById('TemperaturaFahrenheit').value);
    let conv = (fahrenheit + 459.67) * 5/9;
    document.getElementById('c-Fahrenheit').innerHTML = conv.toFixed(2) + " K";
}

function cKKelvin() {
    let kelvin = parseFloat(document.getElementById('TemperaturaKelvin').value);
    let conv = kelvin;
    document.getElementById('c-Kelvin').innerHTML = conv.toFixed(2) + " K";
}

function cKCelsius() {
    let kelvin = parseFloat(document.getElementById('TemperaturaKelvin').value);
    let conv = kelvin - 273.15;
    document.getElementById('c-Kelvin').innerHTML = conv.toFixed(2) + " °C";
}

function cMCm() {
    let metros = parseFloat(document.getElementById('distanciaMetro').value);
    let conv = metros * 100;
    document.getElementById('c-Metros').innerHTML = conv.toFixed(2) + " cm";
}

function cMJardas() {
    let metros = parseFloat(document.getElementById('distanciaMetro').value);
    let conv = metros * 1.09361;
    document.getElementById('c-Metros').innerHTML = conv.toFixed(2) + " jardas";
}

function cMMilimetro() {
    let metros = parseFloat(document.getElementById('distanciaMetro').value);
    let conv = metros * 1000;
    document.getElementById('c-Metros').innerHTML = conv.toFixed(2) + " mm";
}

function cMPes() {
    let metros = parseFloat(document.getElementById('distanciaMetro').value);
    let conv = metros * 3.28084;
    document.getElementById('c-Metros').innerHTML = conv.toFixed(2) + " pés";
}

function cMKm() {
    let metros = parseFloat(document.getElementById('distanciaMetro').value)
}
*/





