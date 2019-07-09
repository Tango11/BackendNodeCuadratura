var express = require('express')
require('dotenv').config();
var http = require('http')
var app = express()
const bodyParser = require('body-parser');
const hostname = process.env.HOST;  
const port = process.env.PORT;
const router = express.Router();
const path = require('path');
var cors = require('cors');
var oracledb = require('oracledb');
delay = ms => new Promise(res => setTimeout(res, ms));
var arreg =[];
var output = {};
var arregart =[];
var arregartDet = [];
var jk=0;
const maxRows = 10000;
var recu =0;
var pol = 1;
ArrayTit = [];
arregbo= [];
arrecu = {};
arrecajaweb = {};
arrecajawebcursor = {};
arrecajawebtiendacursor = {};
arrecajawebtiendacursorcredito = {};
arrecubdt = {};
arretrxbo={};
arreunobo= {};
arredosbdt={};
arretrxbdt={};
toto = [];
ArrayCajaBO =  [];
ArrayCajaBDT =  [];
arreCajitas = [];
arreCajitasSuma = [];
cuadra = {};
this.arretrxboto = {};
ArrayCajacomprueba = [];
arete = {};
aretesm = {};
aretedos = {};
toctoc = [];
toctic = [];
pol=0;
op = 0;
st = 0;
sw = -1;
cantcaja = 0;

app.use(bodyParser.json());
/*app.use(bodyParser.urlencoded({ extended: true }));*/
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(cors());
var lee = ['oscar', 'juan', 'marcos'];

app.get('/', (req, res) => {
  res.status(200).send("Welcome to API REST")

})



// inicio

app.all("/*", function(req, res, next){
  
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
  
  
});

app.post('/lee', function (req, res) {
  this.arrecu = [];
  this.arrecubdt = [];
  /*req.body.text = `${req.body.text} from Nodejs`;*/
  req.body.text = arreg;
  getlocal();
  //req.body.text= 
  return res.send(arreg)
  
  
})

app.post('/leelo', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
 
 // this.arrecu = [];
 // this.arrecubdt = [];
  getlocal();
  //req.body.text= 
 res.send(arreg);
 res.end();
  
})

app.post('/leecajaweb', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
 
 // this.arrecu = [];
 // this.arrecubdt = [];
  getCajaWeb(function (resulto){

  //req.body.text= 
 res.send(arrecajaweb);
 res.end();
  })
  
})



app.post('/tren', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  var ro;
  var hg;
  req.body.text=`${req.body.fecha}`;
  fechaTodas= req.body.text;
  
  ro=dos(fechaTodas,function (fechaTodas,resulto) {
 
  req.body.text= this.arrecu;
  
  if (this.arrecu === 0)
  {
    req.body.text='0';
    ro=dos(fechaTodas,function (fechaTodas,resulto) {
    req.body.text=this.arrecu;
   
    return res.send((req.body.text));
   // res.end();
    })
  }else
  {
  var jsonArray = JSON.parse(JSON.stringify(this.arrecu));
  
  return res.send((req.body.text));
  //res.end();
 
  }
})
  
})
var hash = {};
kmi=0;
app.post('/diferencia', function (req, res) {
 
  var ArrayCaja =  [];
  var ArrayCajasum =  [];
  var ArrayCajaBO =  [];
  var ArrayCajaBDT =  [];
  
 
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  var ro;
 // toctoc = [];
  req.body.text=`${req.body}`;
  sucursal = `${req.body.sucursal}`;
  fecha =  `${req.body.fecha}`;
  ArrayCaja = req.body.caja;
  ArrayCajacomprueba = ArrayCaja;
 
  //ArrayCaja.length
  //ArrayCaja.length-1
  
  
  for(km=0;km<=ArrayCaja.length-1;km++){
    

    first(sucursal,ArrayCaja[km],fecha);
   // diferenciabo(sucursal,ArrayCaja[km],fecha);
 //  console.log('numero de caja SM en Callback:' + nro_caja);

 
 
  }
  toctoc.push(arete);
  /* toctoc = toctoc.filter(function(current) {
    var exists = !hash[current.id] || false;
    hash[current.id] = true;
    return exists;
  }); */
  
  

 toctoc=removeDuplicates(toctoc);
  
 //unicos;
  req.body.text= JSON.stringify(toctoc);
  return  res.send(req.body.text);
 // req.body.text =  arete;
 // return res.send((req.body.text));

  
 // return res.send((req.body.text));
 // req.body.text=this.arretrxbdt;
 // console.log(this.arretrxbo);
 // return res.send((req.body.text));
 /* sucursal=`${req.body.sucursal}`;
 nro_caja=`${req.body.nro_caja}`;
 fecha=`${req.body.fecha}`; */
/*  ro=diferenciabo(sucursal,nro_caja,fecha);
 req.body.text= this.arrecu;
 req.body.textoto = this.arrecubdt;
  if (this.arrecu === 0)
  {
    
    req.body.text='0';
    ro=diferenciabo(sucursal,nro_caja,fecha);
    req.body.text=this.arrecu;
    return res.send((req.body.text));
  }else
  {
  var jsonArray = JSON.parse(JSON.stringify(this.arrecu))
  return res.send((req.body.text));
 
  } */
})

//diferencia desde el modal
app.post('/diferenciamod', function (req, res) {
  llenaArreglo();
  var ArrayCaja =  [];
  var ArrayCajasum =  [];
  var ArrayCajaBO =  [];
  var ArrayCajaBDT =  [];
 // arete = {};
  toctoc = [];
 
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  var ro;
 // toctoc = [];
  req.body.text=`${req.body}`;
  sucursal = `${req.body.sucursal}`;
  fecha =  `${req.body.fecha}`;
  caja = `${req.body.caja}`;
  ArrayCajacomprueba = ArrayCaja;
 
  //ArrayCaja.length
  //ArrayCaja.length-1
  
  
  //for(km=1;km<=caja;km++){
    

    first(sucursal,caja,fecha);
   // diferenciabo(sucursal,ArrayCaja[km],fecha);
 //  console.log('numero de caja SM en Callback:' + nro_caja);

 
 
 // } Aqui va arete y no aretesm
  toctoc.push(arete);
  /* toctoc = toctoc.filter(function(current) {
    var exists = !hash[current.id] || false;
    hash[current.id] = true;
    return exists;
  }); */
  toctoc=removeDuplicates(toctoc);
  
 //unicos;
  req.body.text= JSON.stringify(toctoc);
  return  res.send(req.body.text);
 
})
//fin modal


function removeDuplicates(arrayIn) {
  var arrayOut = [];
  arrayIn.forEach(item=> {
    try {
      if (JSON.stringify(arrayOut[arrayOut.length-1].zone) !== JSON.stringify(item.zone)) {
        arrayOut.push(item);
      }
    } catch(err) {
      arrayOut.push(item);
     }
  })
  return arrayOut;
}
app.post('/trenbdt', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  var ro;
  req.body.text=`${req.body.fecha}`;
  fechaTodas= req.body.text;
  console.log('Fecha BDT');
  console.log(fechaTodas);
  if (fechaTodas !== 'undefined')
  {
    console.log('paso paso');
  ro = dosbdt(fechaTodas, function (fechaTodas,resulto) {
  req.body.text= this.arrecubdt;
  const cantidadDe = Object.keys(req.body.text).length;
  //
  if (cantidadDe === 0)
  {
    req.body.text='0';
    ro=dosbdt(fechaTodas, function (fechaTodas,resulto) {
    req.body.text=this.arrecubdt;
    return res.send((req.body.text));
    //res.end();
    })
  }else
  {
    var jsonArray = JSON.parse(JSON.stringify(this.arrecubdt))
    const cantidadDe = Object.keys(req.body.text).length;
   return res.send((req.body.text));
   //res.end();
 
  }
  })
  //
  }else{
    console.log('Sin Fecha');
  }

  
})

//articulos
app.post('/articulos', function (req, res) {
  var ro;
  req.body.text=`${req.body.fecha}`;
  fechaTodas= req.body.text;
  
  getArticulos(fechaTodas);
  //req.body.text= 
  return res.send(arregart);
  res.end();
})

app.post('/articulosdet', function (req, res) {
  var ro;
  req.body.text=`${req.body.fecha}`;
  req.body.textdos=`${req.body.local}`;
  fechaTodas= req.body.text;
  getArticulosDet(fechaTodas,req.body.textdos);
  return res.send(arregartDet);
  res.end();
 })

 // WebCaja
 app.post('/webcaja', function (req, res) {
  var ro;
  req.body.text=`${req.body.fecha}`;
  req.body.textdos=`${req.body.sucursal}`;
  sucursal = req.body.textdos;
  pr = `${req.body.pr}`;
  fechaTodas= req.body.text;
  getCaja(fechaTodas,req.body.textdos,pr, function (fechaTodas,sucursal,pr,resulto){
  return res.send(arrecajawebcursor);
  res.end();
  })
 })
//Fin WebCajas

// WebTiendas
app.post('/webtienda', function (req, res) {
  var ro;
  req.body.text=`${req.body.fecha}`;
  req.body.textdos=`${req.body.sucursal}`;
  sucursal= req.body.textdos;
  pr = `${req.body.pr}`;
  tpt = `${req.body.tpt}`;
  fechaTodas= req.body.text;
  getCajaTienda(fechaTodas,req.body.textdos,pr,tpt, function (fechaTodas,sucursal,pr,tpt,resulto) {
  return res.send(arrecajawebtiendacursor);
  res.end();
  })
 })
 app.post('/webtiendacredito', function (req, res) {

  var ro;
  req.body.text=`${req.body.fecha}`;
  req.body.textdos=`${req.body.sucursal}`;
  pr = `${req.body.pr}`;
  tpt = `${req.body.tpt}`;
  fechaTodas= req.body.text;
  getCajaTiendaCredito(fechaTodas,req.body.textdos,pr,tpt, function (fechaTodas,sucursal,pr,tpt,resulto){
  return res.send(arrecajawebtiendacursorcredito);

  res.end();
  })
 })
//Fin WebCajas


//locales
app.post('/local', function (req, res) {
  var ro;
  
  
  req.body.text=`${req.body.fecha}`;
  req.body.textdos=`${req.body.local}`;
  locali =  req.body.textdos;
  fechaTodas= req.body.text;
  
  ro=doslocal(fechaTodas,req.body.textdos,function (fechaTodas,locali, resulto) {

  req.body.text= this.arrecu;
  
  req.body.textoto = this.arrecubdt;
  if (this.arrecu === 0)
  {
    
    req.body.text='0';
    ro=doslocal(fechaTodas,req.body.textdos,function (fechaTodas,locali, resulto) {
    req.body.text=this.arrecu;
    return res.send((req.body.text));
    })
  }else
  {
  var jsonArray = JSON.parse(JSON.stringify(this.arrecu))
  return res.send((req.body.text));
 
  }
  })
})



app.post('/localbdt', function (req, res) {
  var ro;
  req.body.text=`${req.body.fecha}`;
  req.body.textdos=`${req.body.local}`;
  fechaTodas= req.body.text;
  ro = doslocalbdt(fechaTodas,req.body.textdos);
  req.body.text= this.arrecubdt;
  var jsonArray = JSON.parse(JSON.stringify(this.arrecubdt))
  return res.send((req.body.text));
  
})

//fin locales
//fin locales


app.post('/trensoso', function (req, res) {
 /*this.arrecubdt= [];
  this.arrecu = [];*/
  req.body.text=`${req.body.fecha}`;
  fechaTodas= req.body.text;
  //this.arrecu=0
  var ro;
  req.body.text=`${req.body.text}`;
  fechaTodas= req.body.text;
  ro = cuatro(fechaTodas);
  req.body.text= this.arrecubdt;
  var jsonArray = JSON.parse(JSON.stringify(this.arrecubdt))
  res.send((req.body.text));
  res.end();
})

app.post('/trensosolocal', function (req, res) {
  /*this.arrecubdt= [];
  this.arrecu = [];*/
  req.body.text=`${req.body.fecha}`;
  req.body.textdos=`${req.body.local}`;
  fechaTodas= req.body.text;
  //this.arrecu=0
  var ro;
  ro = cuatrolocal(fechaTodas,req.body.textdos);
  req.body.text= this.arrecubdt;
  var jsonArray = JSON.parse(JSON.stringify(this.arrecubdt))
  return res.send((req.body.text));
})




//Fin

let connection;
let connectione;
//var oracledb = require('oracledb');
const config = {
  user: process.env.userBO,                // Update me
  password: process.env.passwordBO,        // Update me
 /* connectString: 'QACRT1_A006q.WORLD'  */ 
 connectString: process.env.connectStringBO,
_enableStats: true,
poolMax: 44,
poolMin: 2,
poolIncrement: 5,
poolTimeout: 4

};

const configdos = {
  user: process.env.userBDT,                // Update me
  password: process.env.passwordBDT,        // Update me
  /*connectString: 'QACRT2_A006Q.WORLD'   // Update me*/

  connectString: process.env.connectStringBDT,
  _enableStats: true,
  poolMax: 44,
  poolMin: 2,
  poolIncrement: 5,
  poolTimeout: 4
};

//inicio config web caja
const configtres = {
  user: 'ops$credi_adm',                // Update me
  password: 'credi2000',
  /*connectString: 'QACRT2_A006Q.WORLD'   // Update me*/

  connectString: `(DESCRIPTION= 
    (ADDRESS=
        (PROTOCOL=TCP)
        (HOST=10.0.148.178)
        (PORT=1527)
    )
    (CONNECT_DATA= 
      (SERVICE_NAME=decrt2)
      (SERVER=DEDICATED)
    )
  ) `,
  _enableStats: true,
  poolMax: 44,
  poolMin: 2,
  poolIncrement: 5,
  poolTimeout: 4
};
//final config web caja


 //eliminar
 (async function() {
  try{
     connection = await oracledb.getConnection({
          user : process.env.userBO,
          password : process.env.passwordBO,
          connectString: process.env.connectStringBO,
          _enableStats: true,
          poolMax: 44,
          poolMin: 2,
          poolIncrement: 5,
          poolTimeout: 4
         
     });
     
     console.log("Successfully connected to Oracle!")
  } catch(err) {
      console.log("Error Error: ", err);
    } finally {
      if (connection) {
        try {
          await connection.close();
         
        } catch(err) {
          console.log("Error when closing the database connection: ", err);
        }
      }
    }
  })()


  async function getPri() {
    oracledb.getConnection(
      {
        user: 'test_back',                // Update me
        password: 'piloto',        // Update me
  /*connectString: 'QACRT2_A006Q.WORLD'   // Update me*/

      connectString: `(DESCRIPTION= 
          (ADDRESS=
              (PROTOCOL=TCP)
              (HOST=10.0.148.178)
              (PORT=1527)
          )
          (CONNECT_DATA= 
            (SERVICE_NAME=decrt2)
            (SERVER=DEDICATED)
          )
       ) `,
          _enableStats: true,
          poolMax: 44,
          poolMin: 2,
          poolIncrement: 5,
          poolTimeout: 4
      },
      function(err, connection)
      {
        if (err) { console.error(err); return; }
        connection.execute(
          " SELECT SQL_TEXT, USERNAME, SCHEMANAME, OSUSER, LOGON_TIME, STATUS, MACHINE,"
         + " PROGRAM,SID, s.SERIAL# FROM SYS.V_$SESSION S, SYS.V_$SQLAREA A WHERE A.HASH_VALUE=S.SQL_HASH_VALUE"
         + " ORDER BY LOGON_TIME DESC",
          function(err, result)
          {
            if (err) { console.error(err); return; }
            console.log('Entro a getPri')
            console.log(result.rows);
           
          });
      });
  }

  
  
async function getSes() {
  let conn;
 let Sql;

 Sql = ' SELECT SQL_TEXT, USERNAME, SCHEMANAME, OSUSER, LOGON_TIME, STATUS, MACHINE,';
 Sql = Sql + ' PROGRAM FROM SYS.V_$SESSION S, SYS.V_$SQLAREA A WHERE A.HASH_VALUE=S.SQL_HASH_VALUE';
 Sql = Sql + ' ORDER BY LOGON_TIME DESC;';
 //Sql = Sql + 'SELECT s.USERNAME, s.SID, s.SERIAL#, s.SPID, s.OSUSER, s.MACHINE, s.PROGRAM' 
 //Sql = Sql + ' FROM v$session s, v$process  p  WHERE  s.PADDR = p.ADDR  ORDER by 1;';

 console.log(Sql);
  try {
   
    conn = await oracledb.getConnection(configdos);

    const result = await conn.execute(Sql
    
    );
    //arreg=result;
    console.log(result);
    //console.log(result.rows[0]);
  } catch (err) {
    console.log('Ouch!', err);
  } finally {
    if (conn) { // conn assignment worked, need to close
     console.log('Cierra locales getSes');
       await conn.close();
       
    }
  }
  return (result);
}

  
//fin eliminar

async function getlocal() {
    let conn;
   
    try {
     
      conn = await oracledb.getConnection(config);
  
      const result = await conn.execute(
        'select sucursal,desc_suc from trx_sucursal order by sucursal'
      
      );
      arreg=result;
     
      console.log(result.rows[0]);
     
    } catch (err) {
      console.log('Ouch!', err);
    } finally {
      
      if (conn) { // conn assignment worked, need to close
      
         await conn.close();
         
      }
    }
    
    return (arreg);
  }

  async function getCajaWeb(callback) {
    
    try{
      let connection;
      pol = pol + 1;
      var bindVars = {
       
        p1: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT},
        p4: {type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
        p6: {type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
      }
    conne =  await oracledb.getConnection(configtres);
      oracledb.getConnection(configtres)
      .then((conne) => {
        conne.execute(
          "BEGIN PKG_CAJA_GENERAL_WEB.CargaSucursales(:p1 , :p4, :p6); END;",
          bindVars,
          function (err, result)
          {
            if (err) { console.error(err.message); return; }
            setTimeout(function () {
              callback(this.arrecajaweb);
            }, 700);
                fetchRowsFromRSCAJAWEB(conne, result.outBinds.p1, 3000);
                op = op + 1;
               
          });
          
       
      })
      .catch((e) => {
        console.log("Error: " +  e.message);
      })
      
    }catch{
    
    }finally{
      
          if (conne) { // conn assignment worked, need to close
        // console.log('Cierra locales getSes');
       
        /* conne.release(
          function(err) {
            if (err) {
              console.error(err.message);
              return next(err);
            }
          }); */
          await conne.close();
      }
    }
  }

  //obtiene articulos
  async function getArticulos(fecho) {
    let conn;
    var Sql;
console.log('entro articulos'+fecho);
    try {
     
      conn = await oracledb.getConnection(configdos);
       /*  Sql = "select sucursal,nro_caja,nro_docto,numero_trx,codigo_trx,origen_trx,monto_trx,"
        Sql = Sql + " Fproc_SUMA_articulos_cr(comercio,fecha, sucursal,nro_caja,nro_docto,0) "
        Sql = Sql + " From cr_trx_header Where  comercio = 1 and  fecha_trunc =to_date('" + fecho + "','dd-mm-yyyy') and"
        Sql = Sql + " tipo_trx  in (1,3) and codigo_trx in (1,3,9,10,29,30,23)" 
        Sql = Sql + " order by sucursal";
        console.log(Sql); */

        Sql = "select sucursal,to_number(nro_caja),nro_docto,numero_trx,codigo_trx,origen_trx,monto_trx," 
        Sql = Sql + "Fproc_SUMA_articulos_cr(comercio,fecha, sucursal,nro_caja,nro_docto,0)"  
        Sql = Sql + " From cr_trx_header Where  comercio = 1 and  fecha_trunc =to_date('" + fecho + "','dd-mm-yyyy') and tipo_trx  in (1,3)" 
        Sql = Sql + " and codigo_trx in (1,3,9,10,29,30,23)"
        Sql = Sql + " and Fproc_SUMA_articulos_cr(comercio,fecha, sucursal,nro_caja,nro_docto,0)  <> monto_trx"
        Sql = Sql + " order by sucursal";
      const result = await conn.execute(
                Sql
      );
      arregart=result;
     
     
    } catch (err) {
      console.log('Ouch!', err);
    } finally {
      if (conn) { // conn assignment worked, need to close
       
         await conn.close();
       
      }
    }
    return (arregart);
  }

  async function getArticulosDet(fecho,locali) {
    let conn;
    var Sql;
console.log('entro articulos'+fecho);
    try {
     
      conn = await oracledb.getConnection(configdos);
       /*  Sql = "select sucursal,nro_caja,nro_docto,numero_trx,codigo_trx,origen_trx,monto_trx,"
        Sql = Sql + " Fproc_SUMA_articulos_cr(comercio,fecha, sucursal,nro_caja,nro_docto,0) "
        Sql = Sql + " From cr_trx_header Where  comercio = 1 and  fecha_trunc =to_date('" + fecho + "','dd-mm-yyyy') and"
        Sql = Sql + " tipo_trx  in (1,3) and codigo_trx in (1,3,9,10,29,30,23)" 
        Sql = Sql + " order by sucursal";
        console.log(Sql); */
        Sql = "select  sucursal,nro_caja,nro_docto,numero_trx,codigo_trx,origen_trx,monto_trx,"
        Sql = Sql + " Fproc_SUMA_articulos_cr(comercio,fecha, sucursal,nro_caja,nro_docto,origen_trx) "
        Sql = Sql + " From cr_trx_header Where  comercio = 1 and  fecha_trunc = to_date('" + fecho + "','dd-mm-yyyy') and"
        Sql = Sql + " sucursal = " + locali + " and "
        Sql = Sql + " tipo_trx  in (1,3) and codigo_trx in (1,3,9,10,29,30,23) "
        Sql = Sql + " and monto_trx > Fproc_SUMA_articulos_cr(comercio,fecha, sucursal,nro_caja,nro_docto,origen_trx)"
        Sql = Sql + " order by nro_caja ";
        const result = await conn.execute(
                Sql
      );
      arregartDet=result;
     
      
    } catch (err) {
      console.log('Ouch!', err);
    } finally {
      if (conn) { // conn assignment worked, need to close
       
         await conn.close();
         
      }
    }
    return (arregartDet);
  }
  //Fin articulos

  async function uno()
  {
    let conn;
    try {
      var bindvars = {
       
        p3: {type: oracledb.NUMBER, dir: oracledb.BIND_OUT}
        //p3: 1
     
      };
      console.log('hola mundo0');
      conn = await oracledb.getConnection(config);
      console.log('hola mundo1');
       conn.execute(
        "BEGIN TEST_BACK.prueba(:p3); END;",
        bindvars,
        function(err, result) {
          if (err) {
            console.log('error');
            console.log(err);
            console.log(result);
            console.error(err.message);
           // doRelease(conn);
            return;
          }
          fetchRowsFromRS(conn, result.outBinds.p3, 10);
          console.log('hola mundo2');
         
        });
        console.log('hola mundo3');
        console.log(result.outBinds.p3);
     // arregbo=result;
     
     // console.log(result.rows[0]);
      //inicia
     
      //finicia

    } catch (err) {
      console.log('Ouch!', err);
    } finally {
      if (conn) { // conn assignment worked, need to close
        console.log('hola mundo4');
       // console.log(result.outBinds);
       
        await conn.close();
         console.log('hola mundo5');
      }
    }
  }

//************ */

function fetchRowsFromRS(connection, resultSet, numRows) {
  
  resultSet.getRows( // get numRows rows
    numRows,
    function (err, rows) {
     // this.arrecu= [];
      if (err) {
        console.log(err);
        doClose(connection, resultSet); // always close the ResultSet
      } else if (rows.length === 0) {   // no rows, or no more rows
        console.log('Cierra Uno SM');
        doClose(connection, resultSet); // always close the ResultSet
      } else if (rows.length > 0) {
        console.log("fetchRowsFromRS(): Got " + rows.length + " rows");
        for(jk=0;jk<=rows.length;jk++)
        {
        
          this.arrecu[jk]=rows[jk];
      
        } 
       
       
        
      }
      releaseConnections(resultSet, connection)
        return
     }
   
    );
    
   
    
}
// ini Caja general web
function fetchRowsFromRSCAJAWEB(connection, resultSet, numRows) {
  
  resultSet.getRows( // get numRows rows
    numRows,
    function (err, rows) {
     // this.arrecu= [];
      if (err) {
        console.log(err);
        doClose(connection, resultSet); // always close the ResultSet
      } else if (rows.length === 0) {   // no rows, or no more rows
        console.log('Cierra Uno SM');
        doClose(connection, resultSet); // always close the ResultSet
      } else if (rows.length > 0) {
        console.log("fetchRowsFromRS(): Got " + rows.length + " rows");
        for(jk=0;jk<=rows.length;jk++)
        {
        
          this.arrecajaweb[jk]=rows[jk];
      
        } 
       
       
        
      }
      releaseConnections(resultSet, connection)
        return
     }
   
    );
    
   
    
}

//ini caja general web
function fetchRowsFromRSCAJAWEBCURSOR(connection, resultSet, numRows) {
  
  resultSet.getRows( // get numRows rows
    numRows,
    function (err, rows) {
     // this.arrecu= [];
      if (err) {
        console.log(err);
        doClose(connection, resultSet); // always close the ResultSet
      } else if (rows.length === 0) {   // no rows, or no more rows
        console.log('Cierra Uno SM');
        doClose(connection, resultSet); // always close the ResultSet
      } else if (rows.length > 0) {
        console.log("fetchRowsFromRS(): Got " + rows.length + " rows");
        for(jk=0;jk<=rows.length;jk++)
        {
         
          this.arrecajawebcursor[jk]=rows[jk];
      
        } 
       
       
        
      }
      releaseConnections(resultSet, connection)
        return
     }
   
    );
    
   
    
}
//fini caja general web
// fini Caja general web

//ini cajawentienda
//ini caja general web
function fetchRowsFromRSCAJAWEBTIENDACURSOR(connection, resultSet, numRows) {
  
  resultSet.getRows( // get numRows rows
    numRows,
    function (err, rows) {
     // this.arrecu= [];
      if (err) {
        console.log(err);
        doClose(connection, resultSet); // always close the ResultSet
      } else if (rows.length === 0) {   // no rows, or no more rows
        console.log('Cierra Uno SM');
        doClose(connection, resultSet); // always close the ResultSet
      } else if (rows.length > 0) {
        console.log("fetchRowsFromRS(): Got " + rows.length + " rows");
        for(jk=0;jk<=rows.length;jk++)
        {
         
          this.arrecajawebtiendacursor[jk]=rows[jk];
      
        } 
       
       
        
      }
      releaseConnections(resultSet, connection)
        return
     }
   
    );
    
   
    
}
function fetchRowsFromRSCAJAWEBTIENDACURSORCREDITO(connection, resultSet, numRows) {
  
  resultSet.getRows( // get numRows rows
    numRows,
    function (err, rows) {
     // this.arrecu= [];
      if (err) {
        console.log(err);
        doClose(connection, resultSet); // always close the ResultSet
      } else if (rows.length === 0) {   // no rows, or no more rows
        console.log('Cierra Uno SM');
        doClose(connection, resultSet); // always close the ResultSet
      } else if (rows.length > 0) {
        console.log("fetchRowsFromRS(): Got " + rows.length + " rows");
        for(jk=0;jk<=rows.length;jk++)
        {
         
          this.arrecajawebtiendacursorcredito[jk]=rows[jk];
      
        } 
       
       
        
      }
      releaseConnections(resultSet, connection)
        return
     }
   
    );
    
   
    
}
//fini caja general web
//finicajawebtienda
//Caja TRX
function fetchRowsTRXBO(connection, resultSet, numRows) {
  
  resultSet.getRows( // get numRows rows
    numRows,
    function (err, rows) {
      this.arretrxbo=[];
     // this.arrecu= [];
      if (err) {
        console.log(err);
        doClose(connection, resultSet); // always close the ResultSet
      } else if (rows.length === 0) {   // no rows, or no more rows
        console.log('Cierra Uno SM');
        doClose(connection, resultSet); // always close the ResultSet
      } else if (rows.length > 0) {
        console.log("fetchRowsFromRSTRXBO(): Got " + rows.length + " rows");
        for(jk=0;jk<=rows.length;jk++)
        {
        
          this.arretrxbo[jk]=rows[jk];
         // console.log('revisa indice 1 por dato:'+ this.arretrxbo[jk]);
      
        } 
       
       
        
      }
      releaseConnections(resultSet, connection)
      //console.log('Resultado del ArreBo');
     // console.log( this.arretrxbo);
      arreunobo = this.arretrxbo;
    // releaseConnections(resultSet, connection)
     return arreunobo
        
     }
   
    );
    
    return this.arreunobo
    
}
//Fin Caja
//Caja TRX BDT
function fetchRowsTRXBDT(connection, resultSet, numRows) {
  
    
  resultSet.getRows( // get numRows rows
    numRows,
    function (err, rows) {
     // this.arrecu= [];
     this.arretrxbdt=[];
      if (err) {
        console.log(err);
        doClose(connection, resultSet); // always close the ResultSet
      } else if (rows.length === 0) {   // no rows, or no more rows
        console.log('Cierra Uno SM');
        doClose(connection, resultSet); // always close the ResultSet
      } else if (rows.length > 0) {
        console.log("fetchRowsFromRSTRXBDT(): Got " + rows.length + " rows");
        for(jk=0;jk<=rows.length;jk++)
        {
        
          this.arretrxbdt[jk]=rows[jk];
          //console.log('revisa indice 2 por dato:'+ this.arretrxbdt[jk]);
      
        } 
      // console.log('final indice d2:' + this.arretrxbdt );
       
        
      }
     // releaseConnections(resultSet, connection)
     releaseConnections(resultSet, connection);
    // console.log('BO FINAL :' + arreunobo);
     console.log('Resultado del ArreBdt');
     arredosbdt = this.arretrxbdt;
    //  console.log( this.arredosbdt);
    
             
     return arredosbdt;
        
     }
   
    );
    
    return this.arredosbdt
    
}
//Fin Caja BDTTRX
//Inicio CajaWeb
async function getCaja(fecho,locali,pr,callback) {
  console.log("Fecha:" + fecho + " Sucursal:" + locali + " tipo sucursal:" + pr);
  
  try{
  let connection;
  pol = pol + 1;
  var bindVars = {
    p3: locali,
    p5: fecho,
    p7: pr,
    p1: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT},
    p4: {type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
    p6: {type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
  }
conne =  await oracledb.getConnection(configtres);
  oracledb.getConnection(configtres)
  .then((conne) => {
    conne.execute(
      "BEGIN PKG_CAJA_GENERAL_WEB.CargaVentasWeb(:p5, :p3 , :p7 , :p1 , :p4, :p6); END;",
      bindVars,
      function (err, result)
      {
        if (err) { console.error(err.message); return; }
        setTimeout(function () {
          callback(fecho,locali,pr, this.arrecajawebcursor);
        }, 1200);
        fetchRowsFromRSCAJAWEBCURSOR(conne, result.outBinds.p1, 3000);
            op = op + 1;
           
      });
      
   
  })
  .catch((e) => {
    console.log("Error: " +  e.message);
  })
  
}catch{

}finally{
 
      if (conne) { // conn assignment worked, need to close
    // console.log('Cierra locales getSes');
    
    /* conne.release(
      function(err) {
        if (err) {
          console.error(err.message);
          return next(err);
        }
      }); */
      await conne.close();
  }
}
  
  
}
//Fin Caja WEb
//inicio CajaWeb Tiendas
async function getCajaTienda(fecho,locali,pr,tpt,callback) {
  console.log(" Tienda Venta"+" Fecha:" + fecho + " Sucursal:" + locali + " tipo sucursal:" + pr);
  
  try{
  let connection;
  pol = pol + 1;
  var bindVars = {
    p3: locali,
    p5: fecho,
    p7: pr,
    p8: tpt,
    p1: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT},
    p4: {type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
    p6: {type: oracledb.VARCHAR, dir: oracledb.BIND_OUT},
  }
conne =  await oracledb.getConnection(configtres);
  oracledb.getConnection(configtres)
  .then((conne) => {
    conne.execute(
      "BEGIN PKG_CAJA_GENERAL_WEB.CargaVentasWeb(:p5, :p3 , :p7 , :p8 ,:p1 , :p4, :p6); END;",
      bindVars,
      function (err, result)
      {
        if (err) { console.error(err.message); return; }
        setTimeout(function () {
          callback(fecho,locali,pr,tpt, this.arrecajawebtiendacursor);
        }, 1600);
        fetchRowsFromRSCAJAWEBTIENDACURSOR(conne, result.outBinds.p1, 3000);
            op = op + 1;
           
      });
      
   
  })
  .catch((e) => {
    console.log("Error: " +  e.message);
  })
  
}catch{

}finally{
 
      if (conne) { // conn assignment worked, need to close
    // console.log('Cierra locales getSes');
    
    /* conne.release(
      function(err) {
        if (err) {
          console.error(err.message);
          return next(err);
        }
      }); */
      await conne.close();
  }
}
  
  
}

//Fin CajaWebTiendas
//inicio CajaWeb Tiendas
async function getCajaTiendaCredito(fecho,locali,pr,tpt,callback) {
  console.log(" Tienda Credito"+"Fecha:" + fecho + " Sucursal:" + locali + " tipo sucursal:" + pr);
  
  try{
  let connection;
  pol = pol + 1;
  var bindVars = {
    p3: locali,
    p5: fecho,
    p7: pr,
    p8: tpt,
    p1: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT},
    p4: {type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
    p6: {type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
  }
conne =  await oracledb.getConnection(configtres);
  oracledb.getConnection(configtres)
  .then((conne) => {
    conne.execute(
      "BEGIN PKG_CAJA_GENERAL_WEB.CargaNotaCreditoWeb(:p5, :p3 , :p7 , :p8,:p1 , :p4, :p6); END;",
      bindVars,
      function (err, result)
      {
        if (err) { console.error(err.message); return; }
        setTimeout(function () {
          callback(fecho,locali,pr,tpt,  this.arrecajawebtiendacursorcredito);
        }, 700);
        fetchRowsFromRSCAJAWEBTIENDACURSORCREDITO(conne, result.outBinds.p1, 3000);
            op = op + 1;
           
      });
      
   
  })
  .catch((e) => {
    console.log("Error: " +  e.message);
  })
  
}catch{

}finally{
 
      if (conne) { // conn assignment worked, need to close
    // console.log('Cierra locales getSes');
    
    /* conne.release(
      function(err) {
        if (err) {
          console.error(err.message);
          return next(err);
        }
      }); */
      await conne.close();
  }
}
  
  
}

//Fin CajaWebTiendas


//bdt
function fetchRowsFromRSBDT(connection, resultSeto, numRows) {
  
  resultSeto.getRows( // get numRows rows
    numRows,
    function (err, rows) {
      
      if (err) {
        console.log(err);
        doClosebdt(connection, resultSeto); // always close the ResultSet
      } else if (rows.length === 0) {   // no rows, or no more rows
        console.log('Cierra Dos SM');
        doClosebdt(connection, resultSeto); // always close the ResultSet
      } else if (rows.length > 0) {
        console.log("fetchRowsFromRSBDT(): Got " + rows.length + " rows");
        for(jk=0;jk<=rows.length;jk++)
        {
         // console.log('sergio');
         // console.log(rows[jk]);
          this.arrecubdt[jk]=rows[jk];
         // console.log('checho');
        //  console.log(this.arrecubdt);
        
       //fetchRowsFromRSBDT(connection, resultSeto, numRows);
      }   
      
        
      }
      releaseConnections(resultSeto, connection)
      return
    
    }
   
    )
   
  // getPri();
}
//finbdt
 



//comodin
async function cuatro(fecho) {
  
 
  try{

  var bindVars = {
    p3: fecho,
    p5: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT},
    p4: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
    p6: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
  }


conne = await oracledb.getConnection(config)
  /*oracledb.getConnection(config)*/
  .then((conne) => {
    conne.execute(
      "BEGIN PKG_CUADRA_BO.PRC_CUA_GRA(:p3, :p5 , :p4, :p6); END;",
      bindVars,
      function (err, result)
      {
        if (err) { console.error(err.message); return; }
       
       // console.log(result.outBinds.p4);
        //console.log(result.outBinds.p5.metaData);
      
       fetchRowsFromRS(conne, result.outBinds.p5, 3000);
      // console.log('pedro');
      // console.log(arregbo[jk]);
    
      });
     
    console.log("Success!");
  })
  
}catch{

}finally{
      if (conne) { // conn assignment worked, need to close
    // console.log('Cierra locales getSes');
       await conne.close();
  }
}


try{
  var bindVars = {
    p3: fecho,
    p5: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT},
    p4: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
    p6: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
  }

  
conne = await oracledb.getConnection(configdos);
  oracledb.getConnection(configdos)
  .then((conne) => {
    conne.execute(
      "BEGIN PKG_CUADRA_BDT.PRC_CUA_GRA(:p3, :p5 , :p4, :p6); END;",
      bindVars,
      function (err, result)
      {
        if (err) { console.error(err.message); return; }
       
       // console.log(result.outBinds.p4);
        //console.log(result.outBinds.p5.metaData);
      
       fetchRowsFromRSBDT(conne, result.outBinds.p5, 3000);
      // console.log('pedro');
      // console.log(arregbo[jk]);
     
      })
     
    console.log("Successdos!");
  })
  .catch((e) => {
    console.log("Error: " +  e.message);
  });
  
}catch{

}finally{
      if (conne) { // conn assignment worked, need to close
    // console.log('Cierra locales getSes');
       await conne.close();
  }
}
 
}
//fin comidin

//borrar

function doClosebdt(connection, resultSeto) {
  resultSeto.close(
    function(err) {
      if (err) { console.error(err.message); }
      doRelease(connection);
    });
}

  
  //cambio a dos nuevo
  async function dos(fecho,callback) {
  try{
    var bindVars = {
      p3: fecho,
      p5: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT},
      p4: {type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
      p6: {type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
    }
   
  conne =  await oracledb.getConnection(config)
 
   /* oracledb.getConnection(config)*/
  
    .then((conne) => {
     
      conne.execute(
        "BEGIN PKG_CUADRA_BO.PRC_CUA_GRA(:p3, :p5 , :p4, :p6); END;",
        bindVars,
        function (err, result)
        {
          if (err) { console.error(err.message); return; }
          setTimeout(function () {
            callback(fecho, this.arrecu);
          }, 2500);
          fetchRowsFromRS(conne, result.outBinds.p5, 3000);
        
        });
     
         
         // releaseConnections(result, conne);
     
    })
 
   .catch((e) => {
      console.log("Error: " +  e.message);
    })
   
  }catch{

  }finally{
   
        if (conne) { // conn assignment worked, need to close
      // console.log('Cierra locales getSes');
      /* conne.release(
        function(err) {
          if (err) {
            console.error(err.message);
            return next(err);
          }
        }); */
      //releaseConnections(result, conne);
          
        await conne.close();
         console.log("fuction dos : ejecute_bo");
    }
  }

  /*try{
    var bindVars = {
      p3: fecho,
      p5: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT},
      p4: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
      p6: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
    }
  conne = await oracledb.getConnection(configdos);
    oracledb.getConnection(configdos)
    .then((conne) => {
      conne.execute(
        "BEGIN PKG_CUADRA_BDT.PRC_CUA_GRA(:p3, :p5 , :p4, :p6); END;",
        bindVars,
        function (err, result)
        {
          if (err) { console.error(err.message); return; }
              fetchRowsFromRSBDT(conne, result.outBinds.p5, 3000);
            
        });
        
      console.log("Successdos!");
    })
    .catch((e) => {
      console.log("Error: " +  e.message);
    });
  
  }catch{

  }finally{

    console.log("fuction dos: finally_bdt");
        if (conne) { // conn assignment worked, need to close
      // console.log('Cierra locales getSes');
         await conne.close();
         console.log("fuction dos : ejecute_bdt");
  }
}*/
    recu = recu + 1;
    return
  }

  //Fin a cambio dos nuevo
//local y fecha
 //cambio a dos nuevo
 async function doslocal(fecho,locali,callback) {
   try{
  var bindVars = {
    p3: locali,
    p5: fecho,
    p1: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT},
    p4: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
    p6: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
  }
 
conne =  await oracledb.getConnection(config);
  oracledb.getConnection(config)
 
  
 
  .then((conne) => {
    conne.execute(
     
      "BEGIN PKG_CUADRA_BO.PRC_CUA_DET(:p3, :p5 , :p1, :p4, :p6); END;",
      bindVars,
      function (err, result)
      {
        if (err) { console.error(err.message); return; }
        setTimeout(function () {
          callback(fecho, locali, this.arrecu);
        }, 900);
       // console.log(result.outBinds.p4);
        //console.log(result.outBinds.p5.metaData);
      
       fetchRowsFromRS(conne, result.outBinds.p1, 3000);
      // console.log('pedro');
      // console.log(arregbo[jk]);
  
      });
    
    console.log("Success!");
  })

  .catch((e) => {
    console.log("Error: " +  e.message);
  });
  
}catch{

}finally{
      if (conne) { // conn assignment worked, need to close
    // console.log('Cierra locales getSes');
   /*  conne.release(
      function(err) {
        if (err) {
          console.error(err.message);
          return next(err);
        }
      }); */
     await conne.close();
  }
}


try{
  var bindVars = {
    p3: locali,
    p5: fecho,
    p1: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT},
    p4: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
    p6: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
  }
conne = await oracledb.getConnection(configdos);
  oracledb.getConnection(configdos)
  .then((conne) => {
    conne.execute(
      
      "BEGIN PKG_CUADRA_BDT.PRC_CUA_DET(:p3, :p5 , :p1, :p4, :p6); END;",
      bindVars,
      function (err, result)
      {
        if (err) { console.error(err.message); return; }
       
       // console.log(result.outBinds.p4);
        //console.log(result.outBinds.p5.metaData);
      
       fetchRowsFromRSBDT(conne, result.outBinds.p1, 3000);
      // console.log('pedro');
      // console.log(arregbo[jk]);
      

      })
     
    console.log("Successdos!");
  })
  .catch((e) => {
    console.log("Error: " +  e.message);
  });
}catch{

}finally{
      if (conne) { // conn assignment worked, need to close
    // console.log('Cierra locales getSes');
    /* conne.release(
      function(err) {
        if (err) {
          console.error(err.message);
          return next(err);
        }
      }); */
   
     await conne.close();
  }
}
}

async function doslocalbdt(fecho,locali) {

  try{
  let connection;
  pol = pol + 1;
  var bindVars = {
    p3: locali,
    p5: fecho,
    p1: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT},
    p4: {type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
    p6: {type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
  }
conne =  await oracledb.getConnection(configdos);
  oracledb.getConnection(configdos)
  .then((conne) => {
    conne.execute(
      "BEGIN PKG_CUADRA_BDT.PRC_CUA_DET(:p3, :p5 , :p1 , :p4, :p6); END;",
      bindVars,
      function (err, result)
      {
        if (err) { console.error(err.message); return; }
       
            fetchRowsFromRSBDT(conne, result.outBinds.p1, 3000);
            op = op + 1;
           
      });
      
   
  })
  .catch((e) => {
    console.log("Error: " +  e.message);
  })
  
}catch{

}finally{
  console.log("fuction doslocalbdt ini!");
      if (conne) { // conn assignment worked, need to close
    // console.log('Cierra locales getSes');
    console.log("fuction doslocalbdt fin!");
    /* conne.release(
      function(err) {
        if (err) {
          console.error(err.message);
          return next(err);
        }
      }); */
      await conne.close();
  }
}
  
  
}

async function cuatrolocal(fecho, locali) {
   try{
  var bindVars = {
    p3: locali,
    p5: fecho,
    p1: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT},
    p4: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
    p6: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
  }
conne = await oracledb.getConnection(config);
  oracledb.getConnection(config)
  .then((conne) => {
    conne.execute(
      
      "BEGIN PKG_CUADRA_BO.PRC_CUA_DET(:p3, :p5 , :p1, :p4, :p6); END;",
      bindVars,
      function (err, result)
      {
        if (err) { console.error(err.message); return; }
       
       // console.log(result.outBinds.p4);
        //console.log(result.outBinds.p5.metaData);
      
       fetchRowsFromRS(conne, result.outBinds.p1, 3000);
      // console.log('pedro');
      // console.log(arregbo[jk]);
    
      });
     
    console.log("Success!");
  })
  .catch((e) => {
    console.log("Error: " +  e.message);
  })
}catch{

}finally{
  console.log("fuction cuatrolocal ini_bo!");
      if (conne) { // conn assignment worked, need to close
    // console.log('Cierra locales getSes');
       await conne.close();
       console.log("fuction cuatrolocal fin_bo!");
}}
  
try{
  let connection;
  pol = pol + 1;
  var bindVars = {
    p3: locali,
    p5: fecho,
    p1: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT},
    p4: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
    p6: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
  }
conne = await oracledb.getConnection(configdos);
  oracledb.getConnection(configdos)
  .then((conne) => {
    conne.execute(
      "BEGIN PKG_CUADRA_BDT.PRC_CUA_DET(:p3, :p5 , :p1 , :p4, :p6); END;",
      bindVars,
      function (err, result)
      {
        if (err) { console.error(err.message); return; }
       
       // console.log(result.outBinds.p4);
        //console.log(result.outBinds.p5.metaData);
      
       fetchRowsFromRSBDT(conne, result.outBinds.p1, 3000);
      // console.log('pedro');
      // console.log(arregbo[jk]);
      
      });
     
    console.log("Successdos!");
  })
  .catch((e) => {
    console.log("Error: " +  e.message);
  });
 
}catch{

}finally{
  console.log("fuction cuatrolocal ini_bdt!");
      if (conne) { // conn assignment worked, need to close
    // console.log('Cierra locales getSes');
       await conne.close();
       console.log("fuction cuatrolocal fin_bdt!");
}}
  
}
//local y fecha



  

  //cambio a dos nuevo
  async function dosbdt(fecho,callback) {
    try{
    let connection;
    pol = pol + 1;
    var bindVars = {
      p3: fecho,
      p5: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT},
      p4: {type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
      p6: {type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
    }
   
    
      conne = await oracledb.getConnection(configdos) 
     
      /* oracledb.getConnection(configdos)*/
      .then((conne) => {
        conne.execute(
          "BEGIN PKG_CUADRA_BDT.PRC_CUA_GRA(:p3, :p5 , :p4, :p6); END;",
          bindVars,
          function (err, result)
          {
            if (err) { console.error(err.message); return; }
            setTimeout(function () {
              callback(fecho, this.arrecubdt);
            }, 700);
           fetchRowsFromRSBDT(conne, result.outBinds.p5, 3000);
          
          });
         
        console.log("Successdos!");
      })
      .catch((e) => {
        console.log("Error: " +  e.message);
      });
    
  }catch{

  }finally{
    console.log("function dosbdt ini!");
        if (conne) { // conn assignment worked, need to close
      // console.log('Cierra locales getSes');
      console.log("function dosbdt fin!");
      /*setTimeout(() => {
     
      }, 8000)*/
     /*  conne.release(
        function(err) {
          if (err) {
            console.error(err.message);
            return next(err);
          }
        }); */
      //releaseConnections(result, conne);
         await conne.close();
        
    }
  }
  return
  }
//CallBack Hell

function asyncSqrt(sucursal,nro_caja,fecho, callback) {
  console.log('START execution with value =', sucursal);
  setTimeout(function () {
      callback(sucursal,nro_caja,fecho, value * value);
  }, 0 | Math.random() * 100);
}

function first(sucursal,nro_caja,fecho)
{
 
/* resulto = {};
 result = {};*/

 ArrayCajaBO = [];
         ArrayCajaBDT = [];
         arreunobo={};
         arredosbdt={};
  diferenciabo(sucursal,nro_caja,fecho,function (sucursal,nro_caja,fecho, resulto) {
   // console.log(arreunobo);
  //console.log('END BO execution with value =', sucursal,nro_caja,fecho, 'and result =',resulto);
      diferenciabdt(sucursal,nro_caja,fecho, function (sucursal,nro_caja,fecho, result) {
         // console.log('END BDT execution with value =', sucursal,nro_caja,fecho, 'and result =', result);
         console.log(arreunobo);
         //console.log(arredosbdt);
          ArrayCajaBO = arreunobo;
          ArrayCajaBDT = arredosbdt;
          callyou(ArrayCajaBO,ArrayCajaBDT,nro_caja);
           
            // diferenciabdt(sucursal,ArrayCaja[km],fecha);
            
               
             
            
            // req.body.text=  arete;//this.arretrxboto;
           
        
      }
  );
 
 /* arreunobo = resulto;
 arredosbdt = result; */
 
}

);


}
//CallBaqck Hell

  //Diferencias Bo Caja

  async function diferenciabo(sucursal,nro_caja,fecho,callback) {
    console.log('sycursal diferencia bo' + sucursal);
    console.log('nro caja diferencia bo ' + nro_caja);
    console.log('fecha diferencia bo' + fecho);
   
    try{
   var bindVars = {
     p7: sucursal,
     p3: nro_caja,
     p5: fecho,
     p1: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT},
     p4: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
     p6: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
   }
  
 conne = await oracledb.getConnection(config)
 
  /* oracledb.getConnection(config)*/
   .then((conne) => {
     conne.execute(
     
       "BEGIN PKG_CUADRA_BO.PRC_CUA_DET_TRX(:p7,:p3, :p5 , :p1, :p4, :p6); END;",
       bindVars,
       function (err, result)
       {
        setTimeout(function () {
          callback(sucursal,nro_caja,fecho,arreunobo);
        }, 1000);
         if (err) { console.error(err.message); return; }
        
        // console.log(result.outBinds.p4);2500//1500
         //console.log(result.outBinds.p5.metaData);
       
         fetchRowsTRXBO(conne, result.outBinds.p1, 3000);      
       // console.log('revisa arreglo indice 1:' + arreunobo);
        //return  arreunobo;
       // console.log('pedro');
       // console.log(arregbo[jk]);
      
       });
      
   
   })
  
   .catch((e) => {
     console.log("Error: " +  e.message);
   });
   
 }catch{
 
 }finally{
       if (conne) { // conn assignment worked, need to close
     // console.log('Cierra locales getSes');
    /*  conne.release(
      function(err) {
        if (err) {
          console.error(err.message);
          return next(err);
        }
      }); */
    
       await conne.close();
        
   }
 }
 return
}

  //Fin Diferfencias
//Diferencias Bdt Caja

async function diferenciabdt(sucursal,nro_caja,fecho,callback) {
 
 
  console.log('sycursal diferencia bdt' + sucursal);
  console.log('nro caja diferencia bdt ' + nro_caja);
  console.log('fecha diferencia bdt' + fecho);
  try{
 var bindVars = {
   p7: sucursal,
   p3: nro_caja,
   p5: fecho,
   p1: {type: oracledb.CURSOR, dir: oracledb.BIND_OUT},
   p4: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
   p6: {type: oracledb.NUMBER, dir: oracledb.BIND_INOUT},
 }

conne = await oracledb.getConnection(configdos)

 /*oracledb.getConnection(configdos)*/
 .then((conne) => {
   conne.execute(
   
     "BEGIN PKG_CUADRA_BDT.PRC_CUA_DET_TRX(:p7,:p3, :p5 , :p1, :p4, :p6); END;",
     bindVars,
     function (err, result)
     {
      setTimeout(function () {
        callback(sucursal,nro_caja,fecho, arredosbdt);
        }, 800);
     
       if (err) { console.error(err.message); return; }
      
      // console.log(result.outBinds.p4);2000
       //console.log(result.outBinds.p5.metaData);
     
       fetchRowsTRXBDT(conne, result.outBinds.p1, 3000);    
       console.log('Final Arreglo BDT dos 2:' + arredosbdt);
     
    
     // console.log('pedro');
     // console.log(arregbo[jk]);
     //return  arredosbdt;
 
     }
    
     );
   
  
 })

 .catch((e) => {
   console.log("Error: " +  e.message);
 });
 
}catch{

}finally{
     if (conne) { // conn assignment worked, need to close
   // console.log('Cierra locales getSes');
  /*  conne.release(
    function(err) {
      if (err) {
        console.error(err.message);
        return next(err);
      }
    }); */
   
     await conne.close();
     
 }
}
return
}

//Fin Diferfencias bdt caja

  //Fin a cambio dos nuevo

  
  function doClose(connection, resultSet)
  {
   
    
    resultSet.close(
      function(err)
      {
        if (err) { console.error(err.message); }
        doRelease(connection);
      });
  }



  function doRelease(connection) {
    connection.close( function(err){
     
     // process.on('SIGTERM', killProcess);
      //process.on('SIGINT', killProcess);
      if (err) console.error(err.message);
     });
    }
    function killProcess() {
      if (process.exitTimeoutId) {
          return;
      }
      process.exitTimeoutId = setTimeout(process.exit, doRelease(connection));
  }
 
 /*   process.on('uncaughtException', function (e) {
      console.log('[uncaughtException] app will be terminated: ', e.stack);
      killProcess();
  });  */

  const releaseConnections = (resultSet, connection) => {
   
    process.nextTick(() => {
      if (resultSet) {
        resultSet
          .close()
          .then(() => {
            connection
              .release()
              .catch(err => {
                throw err
              })
          })
          .catch(err => {
            throw err
          })
      } else {
        connection
          .release()
          .catch(err => {
            throw err
          })
      }
    })
    
  }
  
  const processResultSet = (results, resolve, reject, connection) => {
    const resultSet = results.outBinds.UserDetailsCursor
    if (!resultSet) throw new Error()
    resultSet
      .getRows(maxRows)
      .then(rows => {
        if (!rows || rows.length === 0) {
          resolve(rows)
          releaseConnections(resultSet, connection)
          return
        }
        resolve(rows)
        releaseConnections(resultSet, connection)
      })
      .catch(err => {
        reject(err)
        releaseConnections(resultSet, connection)
      })
  }

  //callyou de visita
  function callyou(ArrayCajaBO,ArrayCajaBDT,nro_caja) {
   
   // this.arretrxbo={};
   // this.arretrxbdt = {};
  
    ArrayBounosm = [];
    ArrayBodtsm = [];
    ArrayBounosm = ArrayCajaBO;
    ArrayBodtsm= ArrayCajaBDT;
    arete={};
    eretesm = {};
    toctoc=[];
   arreunobo={};
   arredosbdt ={};
   // console.log(ArrayCajaBO);
   const dd = Object.keys(ArrayCajaBO).length;
   const ddbdt =  Object.keys(ArrayCajaBDT).length;
   /*const dd = Object.keys(this.ArrayCajaBO[0]).length;
    const ddbdt = Object.keys(this.ArrayCajaBDT[0]).length;*/
    console.log('Cantidad de CajaBo' + dd);
    console.log('Cantidad de CajaBdt' + ddbdt);
    console.log('Nro_caja:' + nro_caja);
   
   // console.log(ArrayCajaBO);
  
   // console.log(ArrayCajaBDT);
   
    for (lop=0;lop<=dd-1;lop++)
    {
  //    console.log(this.ArrayBodt[0][lop]);
    }
    
    //inicia calculo
   
    this.arredifCajas = [{}];
    this.arredifcolumna = [{}];
    diferencia = 0;
    this.dindice = 0;
    this.indicecol = 0;
    suma = 0;
    if (dd !== 0 && ddbdt !== 0) 
    {
    const dboc = Object.keys(ArrayCajaBO[0]).length
    
     for (ii = 0; ii <= dd - 1 ; ii++) {
      try {
       for (nn = 0 ; nn <= ddbdt-1;nn++)
       {
        
       // if ( this.ArrayBouno[ii][0] != 'null' &&  this.ArrayBodt[nn][0] != 'null' &&  this.ArrayBouno[ii][0] !== undefined && this.ArrayBodt[nn][0] !== undefined ) {
          //console.log('Entro CajaBO');
          //console.log(this.ArrayBodt[nn][0]);
          try {
          if (ArrayBounosm[ii][0] === ArrayBodtsm[nn][0]) {
            
            console.log('largo de bdt caja:' + Object.keys(ArrayBodtsm[nn]).length);
            for (jj = 1 ; jj <= Object.keys(ArrayBodtsm[nn]).length - 1 ; jj++) {
              //console.log('Diferencias BO' + this.ArrayBouno[ii][jj] + ' BDT'+ this.ArrayBodt[nn][jj] )
              /* if ( this.this.ArrayBouno[ii][jj === this.arreglobdt[0][w][j]) {*/
                ArrayBounosm[ii][jj] = ArrayBounosm[ii][jj] - ArrayBodtsm[nn][jj];
                diferencia= ArrayBounosm[ii][jj] - ArrayBodtsm[nn][jj];
                if ((ArrayBounosm[ii][jj] < 0 || ArrayBounosm[ii][jj] > 0) && ArrayBounosm[ii][jj] != '0')
                {
                 
                  suma = suma +ArrayBounosm[ii][jj];
                 // if (st === 1 ){
                  console.log('Nro_caja:' + nro_caja + " TRX:" + ArrayBounosm[ii][0] + " Posicion:" + jj);
                 
                  arete[kmi] = ArrayBounosm[ii][0]+'|' + nro_caja + '|' + this.ArrayTit[jj];
                 // aretesm[nn][jj]=ArrayBounosm[ii][0];
                 // console.log('arete arete:' + arete[kmi]);
                 console.log('valor del arreglo para enviar:' + this.ArrayTit[jj]);
                 
                  kmi = kmi + 1;
                  arreCajitas.push(ArrayBounosm[ii][0]);
                
                  difere = 0;
               // }
                }
              }
            //}
          } else{
           /*  arreCajitas.push(this.ArrayBouno[ii][0]); */
          }
         } catch (e) {
            console.log(e); // Pasa el objeto de la excepción a un manejador de errores
           }

      //}
        
       }
       st++;
     }catch (e) {
      console.log(e); // Pasa el objeto de la excepción a un manejador de errores
     }
    
    }
    kmi=0;
   
    //arreCajitasSuma.push(arreCajitas);
   this.arretrxboto=arreCajitas;
   //var obj = Object.assign(this.arretrxboto);
    //output=(this.arretrxboto);
    toctoc = [];
    //this.arretrxbo=this.ArrayBouno;
    arreunobo={};
    arredosbdt ={};
    ArrayBounosm=[]; 
    ArrayBodtsm=[];
    ArrayCajaBO = [];
    ArrayCajaBDT = [];
    return true;
   /*  console.log(ArrayCajaBO);
    console.log('cajabo bdt');
    console.log(ArrayCajaBDT); */
  }


     


    
  
}

 function llenaArreglo() 
{

  this.ArrayTit[0] = 'Local';
  this.ArrayTit[1] = 'Venta Contado';
  this.ArrayTit[2] = 'Venta Credito';
  this.ArrayTit[3] = 'Venta Convenio';
  this.ArrayTit[4] = 'Venta T.Bancaria';
  this.ArrayTit[5] = 'T.Debito';
  this.ArrayTit[6] = 'Venta Monedero';
  this.ArrayTit[7] = 'Venta T.Regalo';
  this.ArrayTit[8] = 'Venta TRE';

//
this.ArrayTit[9] = 'Venta Ripley Más';
  this.ArrayTit[10] = 'Venta Pesos Sueños';
  this.ArrayTit[11] = 'Venta Ptos.Congelados';
  this.ArrayTit[12] = 'N/C Contado';
  this.ArrayTit[13] = 'N/C Crédito';
  this.ArrayTit[14] = 'N/C Convenio';
  this.ArrayTit[15] = 'N/C T.Bancaria';
  this.ArrayTit[16] = ' N/C Monedero';
  this.ArrayTit[17] = 'N/C T.Regalo';
//
  this.ArrayTit[18] = 'N/C T.R.E.';
  this.ArrayTit[19] = ' Abonos Crédito ';
  this.ArrayTit[20] = 'Pagos Convenio ';
  this.ArrayTit[21] = 'Pagos Financieros ';
  this.ArrayTit[22] = 'Pagos Monederos';
  this.ArrayTit[23] = 'Abonos OPM ';
  this.ArrayTit[24] = ' Anulación Avance';
  this.ArrayTit[25] = ' Abono Pie';
  this.ArrayTit[26] = ' Ab. GiftCard Contado';
//
this.ArrayTit[27] = ' Ab. GiftCard Crédito';
this.ArrayTit[28] = '  Ab. GiftCard Monedero';
this.ArrayTit[29] = 'Ab. GiftCard Pie ';
this.ArrayTit[30] = 'Ab. GiftCard Débito ';
this.ArrayTit[31] = 'Egreso Crédito';
this.ArrayTit[32] = 'Egreso Convenio ';
this.ArrayTit[33] = ' Egreso Financiero';
this.ArrayTit[34] = ' Egreso Monedero';
this.ArrayTit[35] = ' Egreso OPM';
//
this.ArrayTit[36] = ' Egreso Cuenta Regalo';
this.ArrayTit[37] = '  Egreso Pie';
this.ArrayTit[38] = 'Avance Efectivo ';
this.ArrayTit[39] = 'Eg. GiftCard Contado';
this.ArrayTit[40] = 'Eg. GiftCard Crédito';
this.ArrayTit[41] = 'Eg. GiftCard Monedero ';
this.ArrayTit[42] = ' Eg. GiftCard Pie';
this.ArrayTit[43] = ' Donaciones';
this.ArrayTit[44] = 'Carga Celular Contado';
//
this.ArrayTit[45] = ' Carga Celular Crédito';
this.ArrayTit[46] = '  Carga Celular Pie';
this.ArrayTit[47] = 'Recaudación Contado ';
this.ArrayTit[48] = 'Recaudación Crédito';
this.ArrayTit[49] = 'Recaudación Pie';
this.ArrayTit[50] = 'Recaudación Cheque ';
this.ArrayTit[51] = ' Recaudación Débito';
this.ArrayTit[52] = 'Recaudación T.Bancaria';
this.ArrayTit[53] = 'Anulación Recaudación Contado';
//
this.ArrayTit[54] = ' Anulación Recaudación Crédito';
this.ArrayTit[55] = ' Anulación Recaudación Pie';
this.ArrayTit[56] = 'Anulación Rec.Débito ';
this.ArrayTit[57] = 'Anulación Rec.T.Bancaria';
this.ArrayTit[58] = 'Egreso Caja Chica';
this.ArrayTit[59] = 'Unidades Con DEspacho ';
this.ArrayTit[60] = ' Unidades Sin Despacho';
this.ArrayTit[61] = 'Rec.Monedero';
this.ArrayTit[62] = 'Recaudación Convenio';
//
this.ArrayTit[63] = ' Recaudación T.Regalo';
this.ArrayTit[64] = ' Egreso Rec.Monedero ';
this.ArrayTit[65] = 'Egreso Rec.Convenio ';
this.ArrayTit[66] = 'Egreso Rec.T.Regalo';
this.ArrayTit[67] = 'Pie Débito';
this.ArrayTit[68] = 'Pie T.Regalo Débito ';
this.ArrayTit[69] = ' Pie Celular Débito';
this.ArrayTit[70] = 'Pie Recaudación Débito';
this.ArrayTit[71] = 'Total Unidades';
return
 }
  //call you de visita

http.createServer(app).listen(port, hostname, () => {
 
  console.log(`Server started at http://${hostname}:${port}/`);

});
