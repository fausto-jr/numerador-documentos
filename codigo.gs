
var url = "Doc Shared Link/edit#gid=0";


function doGet() {
  return HtmlService.createTemplateFromFile("page").evaluate();
}


//planilha
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


function click(doc){
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName(doc.tipo);
  
  var number = numberGen(doc.bdate,doc.tipo);
  var retornos = {};
  ws.appendRow([number,doc.destino,doc.setor,doc.bdate,doc.obs]);
  retornos.numero = number;
  retornos.tipo = doc.tipo;
  return retornos;

}

function pad(num, size) {
    var s = "00" + num;
    return s.substr(s.length-size);
}

function check(string){
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("oficios");
  var list = ws.getRange(2,1,ws.getRange("A2").getDataRegion().getLastRow(),1).getValues();
  list = list.map(function(r){return r[0].toString();});
  
  for(var i=0; i<list.length;i++){
    if(list[i].equals(string) == true){
      return true;  
    }
    else
      return false;
}
}


function numberGen(number,sheet){
  //var now = new Date();
  //var strDate = now.getUTCFullYear() + ("0" + (now.getUTCMonth()+1)).slice(-2) + ("0" + now.getUTCDate()).slice(-2) + pad(1,3);
  Logger.log(sheet);
  var numbercpy = number.split('-').join('');
  var strDate = numbercpy + pad(1,2);
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName(sheet);
  var list = ws.getRange(1,1,ws.getRange("A2").getDataRegion().getLastRow(),1).getValues();
  list = list.map(function(r){return r[0].toString();});
  /* 
  for (var i=0; i<list.length; i++) {
    if(list[i].equals(strDate) == true){
      return strDate;  
    }
    else
      return strDate;
}*/
  var i=1;
  do {
  if (list.indexOf(strDate) >= 0){
   //var strDate = now.getUTCFullYear() + ("0" + (now.getUTCMonth()+1)).slice(-2) + ("0" + now.getUTCDate()).slice(-2) + pad(i,3);
    var strDate = numbercpy + pad(i,2);
  }
  else 
  {  break;
    }
  i++;
}
while (i < 99);
  return strDate;
}