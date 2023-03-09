

function marcar(){
  const date = new Date()
  horas = date.getHours()
  minutos =date.getMinutes()
  dia = date.getDay()

  hora = horas+minutos/100

  //8:00 - 8:40
  if(hora >= 8 && hora <= 8.39){
    document.getElementById('a').style.backgroundColor = '#61e8c2'

    if(dia == 1){document.getElementById('aa').style.backgroundColor = '#61e8c2'}
    if(dia == 2){document.getElementById('ab').style.backgroundColor = '#61e8c2'}
    if(dia == 3){document.getElementById('ac').style.backgroundColor = '#61e8c2'}
    if(dia == 4){document.getElementById('ad').style.backgroundColor = '#61e8c2'}
    if(dia == 5){document.getElementById('ae').style.backgroundColor = '#61e8c2'}

  }

  else{
    document.getElementById('a').style.backgroundColor = 'white'
    if(dia == 1){document.getElementById('aa').style.backgroundColor = 'white'}
    if(dia == 2){document.getElementById('ab').style.backgroundColor = 'white'}
    if(dia == 3){document.getElementById('ac').style.backgroundColor = 'white'}
    if(dia == 4){document.getElementById('ad').style.backgroundColor = 'white'}
    if(dia == 5){document.getElementById('ae').style.backgroundColor = 'white'}
  }

  //8:40 - 9:20
  if(hora >= 8.40 && hora <= 9.19){
    document.getElementById('b').style.backgroundColor = '#61e8c2'

    if(dia == 1){document.getElementById('ba').style.backgroundColor = '#61e8c2'}
    if(dia == 2){document.getElementById('bb').style.backgroundColor = '#61e8c2'}
    if(dia == 3){document.getElementById('bc').style.backgroundColor = '#61e8c2'}
    if(dia == 4){document.getElementById('bd').style.backgroundColor = '#61e8c2'}
    if(dia == 5){document.getElementById('be').style.backgroundColor = '#61e8c2'}

  }
  else{
    document.getElementById('b').style.backgroundColor = 'white'
    if(dia == 1){document.getElementById('ba').style.backgroundColor = 'white'}
    if(dia == 2){document.getElementById('bb').style.backgroundColor = 'white'}
    if(dia == 3){document.getElementById('bc').style.backgroundColor = 'white'}
    if(dia == 4){document.getElementById('bd').style.backgroundColor = 'white'}
    if(dia == 5){document.getElementById('be').style.backgroundColor = 'white'}
  }

  //9:30 - 10:10
  if(hora >= 9.30 && hora <= 10.09){
    document.getElementById('c').style.backgroundColor = '#61e8c2'

    if(dia == 1){document.getElementById('ca').style.backgroundColor = '#61e8c2'}
    if(dia == 2){document.getElementById('cb').style.backgroundColor = '#61e8c2'}
    if(dia == 3){document.getElementById('cc').style.backgroundColor = '#61e8c2'}
    if(dia == 4){document.getElementById('cd').style.backgroundColor = '#61e8c2'}
    if(dia == 5){document.getElementById('ce').style.backgroundColor = '#61e8c2'}

  }
  else{
    document.getElementById('c').style.backgroundColor = 'white'
    if(dia == 1){document.getElementById('ca').style.backgroundColor = 'white'}
    if(dia == 2){document.getElementById('cb').style.backgroundColor = 'white'}
    if(dia == 3){document.getElementById('cc').style.backgroundColor = 'white'}
    if(dia == 4){document.getElementById('cd').style.backgroundColor = 'white'}
    if(dia == 5){document.getElementById('ce').style.backgroundColor = 'white'}
  }

  //10:10 - 10:50
  if(hora >= 10.10 && hora <= 10.49){
    document.getElementById('d').style.backgroundColor = '#61e8c2'

    if(dia == 1){document.getElementById('da').style.backgroundColor = '#61e8c2'}
    if(dia == 2){document.getElementById('db').style.backgroundColor = '#61e8c2'}
    if(dia == 3){document.getElementById('dc').style.backgroundColor = '#61e8c2'}
    if(dia == 4){document.getElementById('dd').style.backgroundColor = '#61e8c2'}
    if(dia == 5){document.getElementById('de').style.backgroundColor = '#61e8c2'}

  }
  else{
    document.getElementById('d').style.backgroundColor = 'white'
    if(dia == 1){document.getElementById('da').style.backgroundColor = 'white'}
    if(dia == 2){document.getElementById('db').style.backgroundColor = 'white'}
    if(dia == 3){document.getElementById('dc').style.backgroundColor = 'white'}
    if(dia == 4){document.getElementById('dd').style.backgroundColor = 'white'}
    if(dia == 5){document.getElementById('de').style.backgroundColor = 'white'}
  }


  //10:50 - 11:00
  if(hora >= 10.50 && hora <= 10.59){
    document.getElementById('e').style.backgroundColor = '#61e8c2'

    if(dia == 1){document.getElementById('ea').style.backgroundColor = '#61e8c2'}
    if(dia == 2){document.getElementById('eb').style.backgroundColor = '#61e8c2'}
    if(dia == 3){document.getElementById('ec').style.backgroundColor = '#61e8c2'}
    if(dia == 4){document.getElementById('ed').style.backgroundColor = '#61e8c2'}
    if(dia == 5){document.getElementById('ee').style.backgroundColor = '#61e8c2'}
  }
  else{
    document.getElementById('e').style.backgroundColor = 'white'
    if(dia == 1){document.getElementById('ea').style.backgroundColor = 'white'}
    if(dia == 2){document.getElementById('eb').style.backgroundColor = 'white'}
    if(dia == 3){document.getElementById('ec').style.backgroundColor = 'white'}
    if(dia == 4){document.getElementById('ed').style.backgroundColor = 'white'}
    if(dia == 5){document.getElementById('ee').style.backgroundColor = 'white'}
  }

    //11:00 - 11:30
    if(hora >= 11.00 && hora <= 11.29){
      document.getElementById('f').style.backgroundColor = '#61e8c2'

      if(dia == 1){document.getElementById('fa').style.backgroundColor = '#61e8c2'}
      if(dia == 2){document.getElementById('fb').style.backgroundColor = '#61e8c2'}
      if(dia == 3){document.getElementById('fc').style.backgroundColor = '#61e8c2'}
      if(dia == 4){document.getElementById('fd').style.backgroundColor = '#61e8c2'}
      if(dia == 5){document.getElementById('fe').style.backgroundColor = '#61e8c2'}

    }
    else{
      document.getElementById('f').style.backgroundColor = 'white'
      if(dia == 1){document.getElementById('fa').style.backgroundColor = 'white'}
      if(dia == 2){document.getElementById('fb').style.backgroundColor = 'white'}
      if(dia == 3){document.getElementById('fc').style.backgroundColor = 'white'}
      if(dia == 4){document.getElementById('fd').style.backgroundColor = 'white'}
      if(dia == 5){document.getElementById('fe').style.backgroundColor = 'white'}
    }

    //11:30 - 11:40
    if(hora >= 11.30 && hora <= 11.39){
      document.getElementById('g').style.backgroundColor = '#61e8c2'

      if(dia == 1){document.getElementById('ga').style.backgroundColor = '#61e8c2'}
      if(dia == 2){document.getElementById('gb').style.backgroundColor = '#61e8c2'}
      if(dia == 3){document.getElementById('gc').style.backgroundColor = '#61e8c2'}
      if(dia == 4){document.getElementById('gd').style.backgroundColor = '#61e8c2'}
      if(dia == 5){document.getElementById('ge').style.backgroundColor = '#61e8c2'}

    }
    else{
      document.getElementById('g').style.backgroundColor = 'white'
      if(dia == 1){document.getElementById('ga').style.backgroundColor = 'white'}
      if(dia == 2){document.getElementById('gb').style.backgroundColor = 'white'}
      if(dia == 3){document.getElementById('gc').style.backgroundColor = 'white'}
      if(dia == 4){document.getElementById('gd').style.backgroundColor = 'white'}
      if(dia == 5){document.getElementById('ge').style.backgroundColor = 'white'}
    }

    //11:40 - 12:20
    if(hora >= 11.40 && hora <= 12.19){
      document.getElementById('h').style.backgroundColor = '#61e8c2'

      if(dia == 1){document.getElementById('ha').style.backgroundColor = '#61e8c2'}
      if(dia == 2){document.getElementById('hb').style.backgroundColor = '#61e8c2'}
      if(dia == 3){document.getElementById('hc').style.backgroundColor = '#61e8c2'}
      if(dia == 4){document.getElementById('hd').style.backgroundColor = '#61e8c2'}
      if(dia == 5){document.getElementById('he').style.backgroundColor = '#61e8c2'}

    }
    else{
      document.getElementById('h').style.backgroundColor = 'white'
      if(dia == 1){document.getElementById('ha').style.backgroundColor = 'white'}
      if(dia == 2){document.getElementById('hb').style.backgroundColor = 'white'}
      if(dia == 3){document.getElementById('hc').style.backgroundColor = 'white'}
      if(dia == 4){document.getElementById('hd').style.backgroundColor = 'white'}
      if(dia == 5){document.getElementById('he').style.backgroundColor = 'white'}
    }

    //12:20 - 13:00
    if(hora >= 12.20 && hora <= 12.59){
      document.getElementById('i').style.backgroundColor = '#61e8c2'

      if(dia == 1){document.getElementById('ia').style.backgroundColor = '#61e8c2'}
      if(dia == 2){document.getElementById('ib').style.backgroundColor = '#61e8c2'}
      if(dia == 3){document.getElementById('ic').style.backgroundColor = '#61e8c2'}
      if(dia == 4){document.getElementById('id').style.backgroundColor = '#61e8c2'}
      if(dia == 5){document.getElementById('ie').style.backgroundColor = '#61e8c2'}

    }
    else{
      document.getElementById('i').style.backgroundColor = 'white'
      if(dia == 1){document.getElementById('ia').style.backgroundColor = 'white'}
      if(dia == 2){document.getElementById('ib').style.backgroundColor = 'white'}
      if(dia == 3){document.getElementById('ic').style.backgroundColor = 'white'}
      if(dia == 4){document.getElementById('id').style.backgroundColor = 'white'}
      if(dia == 5){document.getElementById('ie').style.backgroundColor = 'white'}
    }

    //13:30 - 14:50
    if(hora >= 13.30 && hora <= 14.49){
      document.getElementById('j').style.backgroundColor = '#61e8c2'

      if(dia == 1){document.getElementById('ja').style.backgroundColor = '#61e8c2'}
      if(dia == 2){document.getElementById('jb').style.backgroundColor = '#61e8c2'}
      if(dia == 3){document.getElementById('jc').style.backgroundColor = '#61e8c2'}
      if(dia == 4){document.getElementById('jd').style.backgroundColor = '#61e8c2'}
      if(dia == 5){document.getElementById('je').style.backgroundColor = '#61e8c2'}

    }
    else{
      document.getElementById('j').style.backgroundColor = 'white'
      if(dia == 1){document.getElementById('ja').style.backgroundColor = 'white'}
      if(dia == 2){document.getElementById('jb').style.backgroundColor = 'white'}
      if(dia == 3){document.getElementById('jc').style.backgroundColor = 'white'}
      if(dia == 4){document.getElementById('jd').style.backgroundColor = 'white'}
      if(dia == 5){document.getElementById('je').style.backgroundColor = 'white'}
    }

    //15:00 - 16:00
    if(hora >= 15.00 && hora <= 15.59){
      document.getElementById('k').style.backgroundColor = '#61e8c2'

      if(dia == 1){document.getElementById('ka').style.backgroundColor = '#61e8c2'}
      if(dia == 2){document.getElementById('kb').style.backgroundColor = '#61e8c2'}
      if(dia == 3){document.getElementById('kc').style.backgroundColor = '#61e8c2'}
      if(dia == 4){document.getElementById('kd').style.backgroundColor = '#61e8c2'}
      if(dia == 5){document.getElementById('ke').style.backgroundColor = '#61e8c2'}

    }
    else{
      document.getElementById('k').style.backgroundColor = 'white'
      if(dia == 1){document.getElementById('ka').style.backgroundColor = 'white'}
      if(dia == 2){document.getElementById('kb').style.backgroundColor = 'white'}
      if(dia == 3){document.getElementById('kc').style.backgroundColor = 'white'}
      if(dia == 4){document.getElementById('kd').style.backgroundColor = 'white'}
      if(dia == 5){document.getElementById('ke').style.backgroundColor = 'white'}
    }

    //16:00 - 16:20
    if(hora >= 16.00 && hora <= 16.19){
      document.getElementById('l').style.backgroundColor = '#61e8c2'
      if(dia == 1){document.getElementById('la').style.backgroundColor = '#61e8c2'}
      if(dia == 2){document.getElementById('lb').style.backgroundColor = '#61e8c2'}
      if(dia == 3){document.getElementById('lc').style.backgroundColor = '#61e8c2'}
      if(dia == 4){document.getElementById('ld').style.backgroundColor = '#61e8c2'}
      if(dia == 5){document.getElementById('le').style.backgroundColor = '#61e8c2'}

    }
    else{
      document.getElementById('l').style.backgroundColor = 'white'
      if(dia == 1){document.getElementById('la').style.backgroundColor = 'white'}
      if(dia == 2){document.getElementById('lb').style.backgroundColor = 'white'}
      if(dia == 3){document.getElementById('lc').style.backgroundColor = 'white'}
      if(dia == 4){document.getElementById('ld').style.backgroundColor = 'white'}
      if(dia == 5){document.getElementById('le').style.backgroundColor = 'white'}
    }

    //Almuerzo
    if(hora >= 13.00 && hora <= 13.29){
      if(dia == 1){document.getElementById('almu').style.backgroundColor = '#61e8c2'}
      if(dia == 2){document.getElementById('almu').style.backgroundColor = '#61e8c2'}
      if(dia == 3){document.getElementById('almu').style.backgroundColor = '#61e8c2'}
      if(dia == 4){document.getElementById('almu').style.backgroundColor = 'white'}
      if(dia == 5){document.getElementById('almu').style.backgroundColor = 'white'}

    }
    else{
      if(dia == 1){document.getElementById('almu').style.backgroundColor = 'white'}
      if(dia == 2){document.getElementById('almu').style.backgroundColor = 'white'}
      if(dia == 3){document.getElementById('almu').style.backgroundColor = 'white'}
      if(dia == 4){document.getElementById('almu').style.backgroundColor = 'white'}
      if(dia == 5){document.getElementById('almu').style.backgroundColor = 'white'}
    }

    //Recreo
    if(hora >= 14.50 && hora <= 14.59){
      if(dia == 1){document.getElementById('recre').style.backgroundColor = '#61e8c2'}
      if(dia == 2){document.getElementById('recre').style.backgroundColor = '#61e8c2'}
      if(dia == 3){document.getElementById('recre').style.backgroundColor = '#61e8c2'}
      if(dia == 4){document.getElementById('recre').style.backgroundColor = 'white'}
      if(dia == 5){document.getElementById('recre').style.backgroundColor = 'white'}

    }
    else{
      if(dia == 1){document.getElementById('recre').style.backgroundColor = 'white'}
      if(dia == 2){document.getElementById('recre').style.backgroundColor = 'white'}
      if(dia == 3){document.getElementById('recre').style.backgroundColor = 'white'}
      if(dia == 4){document.getElementById('recre').style.backgroundColor = 'white'}
      if(dia == 5){document.getElementById('recre').style.backgroundColor = 'white'}
    }



}


marcar()

setInterval(marcar, 100)
