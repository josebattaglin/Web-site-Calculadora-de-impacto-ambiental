function calcul() {
    event.preventDefault()
    var d= dia.value;
    var m=mes.value;
    var a= ano.value;

    

    var lita= 3400*30;
    var kgrao=7*30;
    var kgas=14*30;
    var mflor=24*30;
    

    var ali=lita*12;
    var agrao=kgrao*12;
    var agas= kgas*12;
    var aflor= mflor*12;

    var aux=0
    if(d>0 && m>0 && a>0){//dia mes e ano
      var litros= m*lita;//mes
      var graos=m*kgrao;
      var gas=m*kgas;
      var flores=m*mflor;
      

      var dagua= 3400*d;//dia
      var dgrao= 7*d;
      var dgas= 14*d;
      var dflor= 24*d;
      

      var litros1= a*ali;//ano
      var graos1=a*agrao;
      var gas1=a*agas;
      var flores1=a*aflor;
      
    

      var flitros= litros+litros1
      var fgraos= graos+graos1
      var fgas= gas+gas1
      var fflores= flores+flores1
      

      var fflitros= flitros+dagua
      var ffgraos= fgraos+dgrao
      var ffgas= fgas+dgas
      var ffflores= fflores+dflor

      fflitros += '';//virgula nos números/agua
      var x = fflitros.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2');
      }
      var fflitros1= x1+x2

      

      ffgraos += '';//virgula nos números/graos
      var x3 = ffgraos.split('.');
      var x4 = x3[0];
      var x5 = x3.length > 1 ? '.' + x3[1] : '';
      var rgx1 = /(\d+)(\d{3})/;
      while (rgx1.test(x4)) {
      x4 = x4.replace(rgx1, '$1' + '.' + '$2');
      }
      var ffgraos1= x4+x5

      ffgas += '';//virgula nos números/graos
      var x6 = ffgas.split('.');
      var x7 = x6[0];
      var x8 = x6.length > 1 ? '.' + x6[1] : '';
      var rgx2 = /(\d+)(\d{3})/;
      while (rgx2.test(x7)) {
      x7 = x7.replace(rgx2, '$1' + '.' + '$2');
      }
      var ffgas1= x7+x8

      ffflores += '';//virgula nos números/graos
      var x9 = ffflores.split('.');
      var x10 = x9[0];
      var x11 = x9.length > 1 ? '.' + x9[1] : '';
      var rgx3 = /(\d+)(\d{3})/;
      while (rgx3.test(x10)) {
      x10 = x10.replace(rgx3, '$1' + '.' + '$2');
      }
      var ffflores1= x10+x11

      var resp1=document.getElementById('resp1') ;
      resp1.innerHTML=" " +fflitros1;
      var resp3=document.getElementById('resp2') ;
      resp3.innerHTML=" "+ffgraos1;
      var resp4=document.getElementById('resp3') ;
      resp4.innerHTML=" "+ffgas1;
      var resp5=document.getElementById('resp4') ;
      resp5.innerHTML=" "+ffflores1;
      aux=1
    }else if (aux!=1 && d>0 && m>0){// dia e mes
      var dagua= 3400*d;//dias
      var dgrao= 7*d;
      var dgas= 14*d;
      var dflor= 24*d;
      

      var litros= m*lita;//mes
      var graos=m*kgrao;
      var gas=m*kgas;
      var flores=m*mflor;
      

      var litros2= dagua+litros
      var graos2= graos+dgrao
      var gas2= gas+dgas
      var flores2=flores+dflor
      
      litros2 += '';//virgula nos números/agua
      var x = litros2.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2');
      }
      var litros3= x1+x2

      

      graos2 += '';//virgula nos números/graos
      var x3 = graos2.split('.');
      var x4 = x3[0];
      var x5 = x3.length > 1 ? '.' + x3[1] : '';
      var rgx1 = /(\d+)(\d{3})/;
      while (rgx1.test(x4)) {
      x4 = x4.replace(rgx1, '$1' + '.' + '$2');
      }
      var graos3= x4+x5

      gas2 += '';//virgula nos números/graos
      var x6 = gas2.split('.');
      var x7 = x6[0];
      var x8 = x6.length > 1 ? '.' + x6[1] : '';
      var rgx2 = /(\d+)(\d{3})/;
      while (rgx2.test(x7)) {
      x7 = x7.replace(rgx2, '$1' + '.' + '$2');
      }
      var gas3= x7+x8

      flores2 += '';//virgula nos números/graos
      var x9 = flores2.split('.');
      var x10 = x9[0];
      var x11 = x9.length > 1 ? '.' + x9[1] : '';
      var rgx3 = /(\d+)(\d{3})/;
      while (rgx3.test(x10)) {
      x10 = x10.replace(rgx3, '$1' + '.' + '$2');
      }
      var flores3= x10+x11

      var resp1=document.getElementById('resp1') ;
      resp1.innerHTML=" " +litros3;
      var resp3=document.getElementById('resp2') ;
      resp3.innerHTML=" "+graos3;
      var resp4=document.getElementById('resp3') ;
      resp4.innerHTML=" "+gas3;
      var resp5=document.getElementById('resp4') ;
      resp5.innerHTML=" "+flores3;
      aux=1
    }else if( aux!=1 && a>0 && d>0){//ano e dias
      var litros1= a*ali;//ano
      var graos1=a*agrao;
      var gas1=a*agas;
      var flores1=a*aflor;

      var dagua= 3400*d;//dias
      var dgrao= 7*d;
      var dgas= 14*d;
      var dflor= 24*d;


      var agua4= litros1+dagua
      var grao4= graos1+dgrao
      var gas4= gas1+dgas
      var flores4= flores1+dflor

      agua4 += '';//virgula nos números/agua
      var x = agua4.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2');
      }
      var agua5= x1+x2

      

      grao4 += '';//virgula nos números/graos
      var x3 = grao4.split('.');
      var x4 = x3[0];
      var x5 = x3.length > 1 ? '.' + x3[1] : '';
      var rgx1 = /(\d+)(\d{3})/;
      while (rgx1.test(x4)) {
      x4 = x4.replace(rgx1, '$1' + '.' + '$2');
      }
      var grao5= x4+x5

      gas4 += '';//virgula nos números/graos
      var x6 = gas4.split('.');
      var x7 = x6[0];
      var x8 = x6.length > 1 ? '.' + x6[1] : '';
      var rgx2 = /(\d+)(\d{3})/;
      while (rgx2.test(x7)) {
      x7 = x7.replace(rgx2, '$1' + '.' + '$2');
      }
      var gas5= x7+x8

      flores4 += '';//virgula nos números/graos
      var x9 = flores4.split('.');
      var x10 = x9[0];
      var x11 = x9.length > 1 ? '.' + x9[1] : '';
      var rgx3 = /(\d+)(\d{3})/;
      while (rgx3.test(x10)) {
      x10 = x10.replace(rgx3, '$1' + '.' + '$2');
      }
      var flores5= x10+x11

      var resp1=document.getElementById('resp1') ;
      resp1.innerHTML=" " +agua5;
      var resp3=document.getElementById('resp2') ;
      resp3.innerHTML=" "+grao5;
      var resp4=document.getElementById('resp3') ;
      resp4.innerHTML=" "+gas5;
      var resp5=document.getElementById('resp4') ;
      resp5.innerHTML=" "+flores5;
      aux=1

    }else if(aux!=1 && m>0 && a>0){// mes e ano
      var litros1= a*ali;//ano
      var graos1=a*agrao;
      var gas1=a*agas;
      var flores1=a*aflor;

      var litros= m*lita;//mes
      var graos=m*kgrao;
      var gas=m*kgas;
      var flores=m*mflor;

      var blim1=litros+litros1
      var blim2=graos+graos1
      var blim3=gas+gas1
      var blim4=flores+flores1

      blim1 += '';//virgula nos números/agua
      var x = blim1.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2');
      }
      var blim11= x1+x2

      

      blim2 += '';//virgula nos números/graos
      var x3 = blim2.split('.');
      var x4 = x3[0];
      var x5 = x3.length > 1 ? '.' + x3[1] : '';
      var rgx1 = /(\d+)(\d{3})/;
      while (rgx1.test(x4)) {
      x4 = x4.replace(rgx1, '$1' + '.' + '$2');
      }
      var blim22= x4+x5

      blim3 += '';//virgula nos números/graos
      var x6 = blim3.split('.');
      var x7 = x6[0];
      var x8 = x6.length > 1 ? '.' + x6[1] : '';
      var rgx2 = /(\d+)(\d{3})/;
      while (rgx2.test(x7)) {
      x7 = x7.replace(rgx2, '$1' + '.' + '$2');
      }
      var blim33= x7+x8

      blim4 += '';//virgula nos números/graos
      var x9 = blim4.split('.');
      var x10 = x9[0];
      var x11 = x9.length > 1 ? '.' + x9[1] : '';
      var rgx3 = /(\d+)(\d{3})/;
      while (rgx3.test(x10)) {
      x10 = x10.replace(rgx3, '$1' + '.' + '$2');
      }
      var blim44= x10+x11

      var resp1=document.getElementById('resp1') ;
      resp1.innerHTML=" " +blim11;
      var resp3=document.getElementById('resp2') ;
      resp3.innerHTML=" "+blim22;
      var resp4=document.getElementById('resp3') ;
      resp4.innerHTML=" "+blim33;
      var resp5=document.getElementById('resp4') ;
      resp5.innerHTML=" "+blim44;
      aux=1
    }else if(aux!=1 && m>0){//mes

      var litros= m*lita;//mes
      var graos=m*kgrao;
      var gas=m*kgas;
      var flores=m*mflor;

      litros += '';//virgula nos números/agua
      var x = litros.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2');
      }
      var litros1= x1+x2

      

      graos += '';//virgula nos números/graos
      var x3 = graos.split('.');
      var x4 = x3[0];
      var x5 = x3.length > 1 ? '.' + x3[1] : '';
      var rgx1 = /(\d+)(\d{3})/;
      while (rgx1.test(x4)) {
      x4 = x4.replace(rgx1, '$1' + '.' + '$2')
      }
      var graos1= x4+x5

      gas += '';//virgula nos números/graos
      var x6 = gas.split('.');
      var x7 = x6[0];
      var x8 = x6.length > 1 ? '.' + x6[1] : '';
      var rgx2 = /(\d+)(\d{3})/;
      while (rgx2.test(x7)) {
      x7 = x7.replace(rgx2, '$1' + '.' + '$2');
      }
      var gas1= x7+x8

      flores += '';//virgula nos números/graos
      var x9 = flores.split('.');
      var x10 = x9[0];
      var x11 = x9.length > 1 ? '.' + x9[1] : '';
      var rgx3 = /(\d+)(\d{3})/;
      while (rgx3.test(x10)) {
      x10 = x10.replace(rgx3, '$1' + '.' + '$2');
      }
      var flores1= x10+x11

      var resp1=document.getElementById('resp1') ;
      resp1.innerHTML=" " +litros1;
      var resp3=document.getElementById('resp2') ;
      resp3.innerHTML=" "+graos1;
      var resp4=document.getElementById('resp3') ;
      resp4.innerHTML=" "+gas1;
      var resp5=document.getElementById('resp4') ;
      resp5.innerHTML=" "+flores1;
      aux=1
    }else if( aux!=1 && a>0){// ano
      var litros1= a*ali;//ano
      var graos1=a*agrao;
      var gas1=a*agas;
      var flores1=a*aflor;

      litros1 += '';//virgula nos números/agua
      var x = litros1.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2');
      }
      var litros2= x1+x2

      

      graos1 += '';//virgula nos números/graos
      var x3 = graos1.split('.');
      var x4 = x3[0];
      var x5 = x3.length > 1 ? '.' + x3[1] : '';
      var rgx1 = /(\d+)(\d{3})/;
      while (rgx1.test(x4)) {
      x4 = x4.replace(rgx1, '$1' + '.' + '$2');
      }
      var graos2= x4+x5

      gas1 += '';//virgula nos números/graos
      var x6 = gas1.split('.');
      var x7 = x6[0];
      var x8 = x6.length > 1 ? '.' + x6[1] : '';
      var rgx2 = /(\d+)(\d{3})/;
      while (rgx2.test(x7)) {
      x7 = x7.replace(rgx2, '$1' + '.' + '$2');
      }
      var gas2= x7+x8

      flores1 += '';//virgula nos números/graos
      var x9 = flores1.split('.');
      var x10 = x9[0];
      var x11 = x9.length > 1 ? '.' + x9[1] : '';
      var rgx3 = /(\d+)(\d{3})/;
      while (rgx3.test(x10)) {
      x10 = x10.replace(rgx3, '$1' + '.' + '$2');
      }
      var flores2= x10+x11

      var resp1=document.getElementById('resp1') ;
      resp1.innerHTML=" " +litros2;
      var resp3=document.getElementById('resp2') ;
      resp3.innerHTML=" "+graos2;
      var resp4=document.getElementById('resp3') ;
      resp4.innerHTML=" "+gas2;
      var resp5=document.getElementById('resp4') ;
      resp5.innerHTML=" "+flores2;
      aux=1
    }else if(aux!=1 && d>0){//dia
      var dagua= 3400*d;//dias
      var dgrao= 7*d;
      var dgas= 14*d;
      var dflor= 24*d;

      dagua += '';//virgula nos números/agua
      var x = dagua.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2');
      }
      var dagua1= x1+x2

      

      dgrao += '';//virgula nos números/graos
      var x3 = dgrao.split('.');
      var x4 = x3[0];
      var x5 = x3.length > 1 ? '.' + x3[1] : '';
      var rgx1 = /(\d+)(\d{3})/;
      while (rgx1.test(x4)) {
      x4 = x4.replace(rgx1, '$1' + '.' + '$2');
      }
      var dgrao1= x4+x5

      dgas += '';//virgula nos números/graos
      var x6 = dgas.split('.');
      var x7 = x6[0];
      var x8 = x6.length > 1 ? '.' + x6[1] : '';
      var rgx2 = /(\d+)(\d{3})/;
      while (rgx2.test(x7)) {
      x7 = x7.replace(rgx2, '$1' + '.' + '$2');
      }
      var dgas1= x7+x8

      dflor += '';//virgula nos números/graos
      var x9 = dflor.split('.');
      var x10 = x9[0];
      var x11 = x9.length > 1 ? '.' + x9[1] : '';
      var rgx3 = /(\d+)(\d{3})/;
      while (rgx3.test(x10)) {
      x10 = x10.replace(rgx3, '$1' + '.' + '$2');
      }
      var dflor= x10+x11

      var resp1=document.getElementById('resp1') ;
      resp1.innerHTML=" " +dagua1;
      var resp3=document.getElementById('resp2') ;
      resp3.innerHTML=" "+dgrao1;
      var resp4=document.getElementById('resp3') ;
      resp4.innerHTML=" "+dgas1;
      var resp5=document.getElementById('resp4') ;
      resp5.innerHTML=" "+dflor;
      aux=1
    }

  }

 