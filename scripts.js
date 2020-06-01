function buildbr() {
  if(document.getElementById("datacode").value=="")
 { alert("Code data is empty!");
  return;}
  document.getElementById("output").style.backgroundImage="none";
  document.getElementById("barcode").style.overflowX="scroll";
  document.getElementById("barcode").style.overflowY="scroll";
  document.getElementById("barcode").title=document.getElementById("datacode").value;
  document.getElementById("barcode").style.backgroundColor="white";
  document.getElementById("downloadsvg").style.visibility="visible";
  document.getElementById("print").style.visibility="visible";

  switch (document.getElementById("format").value) {
    case "CODE128":
    {
      JsBarcode("#brcode", document.getElementById("datacode").value,{
        format: document.getElementById("mode").value,
        ean128: document.getElementById("ean128").checked,
        width: document.getElementById("wi").value,
        height: document.getElementById("he").value,
        displayValue: document.getElementById("showtext").checked,
        background: document.getElementById("background").value,
        lineColor: document.getElementById("lineColor").value
      });
    }
      break;
      case "EAN / UPC":
    {
      JsBarcode("#brcode", document.getElementById("datacode").value,{
        format: document.getElementById("mode").value,
        flat: document.getElementById("flat").checked,
        width: document.getElementById("wi").value,
        height: document.getElementById("he").value,
        displayValue: document.getElementById("showtext").checked,
        background: document.getElementById("background").value,
        lineColor: document.getElementById("lineColor").value
      });
    }
      break;
      case "CODE39":
    {
      JsBarcode("#brcode", document.getElementById("datacode").value,{
        format: document.getElementById("format").value,
        mod43: document.getElementById("mod43").checked ,
        width: document.getElementById("wi").value,
        height: document.getElementById("he").value,
        displayValue: document.getElementById("showtext").checked,
        background: document.getElementById("background").value,
        lineColor: document.getElementById("lineColor").value
      });
    }
      break;
      case "ITF14":
    {
      JsBarcode("#brcode", document.getElementById("datacode").value,{
        format: document.getElementById("format").value,
        width: document.getElementById("wi").value,
        height: document.getElementById("he").value,
        displayValue: document.getElementById("showtext").checked,
        background: document.getElementById("background").value,
        lineColor: document.getElementById("lineColor").value
      });
    }
      break;
      case "MSI":
    {
      JsBarcode("#brcode", document.getElementById("datacode").value,{
        format: document.getElementById("mode").value,
        width: document.getElementById("wi").value,
        height: document.getElementById("he").value,
        displayValue: document.getElementById("showtext").checked,
        background: document.getElementById("background").value,
        lineColor: document.getElementById("lineColor").value
      });
    }
      break;
      case "pharmacode":
    {
      JsBarcode("#brcode", document.getElementById("datacode").value,{
        format: document.getElementById("format").value,
        width: document.getElementById("wi").value,
        height: document.getElementById("he").value,
        displayValue: document.getElementById("showtext").checked,
        background: document.getElementById("background").value,
        lineColor: document.getElementById("lineColor").value
      });
    }
      break;
      case "codabar":
    {
      JsBarcode("#brcode", document.getElementById("datacode").value,{
        format: document.getElementById("format").value,
        width: document.getElementById("wi").value,
        height: document.getElementById("he").value,
        displayValue: document.getElementById("showtext").checked,
        background: document.getElementById("background").value,
        lineColor: document.getElementById("lineColor").value
      });        
    }
      break;
  
  }

}

function savebr(linkElement) {

linkElement.href = document.getElementById("barcode").getElementsByTagName("img")[0].src;


}

function buildqr() {
  if(document.getElementById("datacode").value=="")
 { alert("Code data is empty!");
  return;}
document.getElementById("output").style.backgroundImage="none";
document.getElementById("qrcode").style.overflowX="scroll";
document.getElementById("qrcode").style.overflowY="scroll";
document.getElementById("qrcode").innerHTML=null;
document.getElementById("qrcode").style.backgroundColor="white";
document.getElementById("downloadsvg").style.visibility="visible";
document.getElementById("print").style.visibility="visible";


switch (document.getElementById("CorrectLevel").value) {
  case "H":
  {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: document.getElementById("datacode").value, 
      width : document.getElementById("wi").value, 
      height : document.getElementById("he").value,
      colorDark :  document.getElementById("background").value,
      colorLight : document.getElementById("lineColor").value,
      correctLevel : QRCode.CorrectLevel.H
      });
  }
    break;
    case "Q":
  {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: document.getElementById("datacode").value, 
      width : document.getElementById("wi").value, 
      height : document.getElementById("he").value,
      colorDark :  document.getElementById("background").value,
      colorLight : document.getElementById("lineColor").value,
      correctLevel : QRCode.CorrectLevel.Q
      });
  }
    break;
    case "M":
  {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: document.getElementById("datacode").value, 
      width : document.getElementById("wi").value, 
      height : document.getElementById("he").value,
      colorDark :  document.getElementById("background").value,
      colorLight : document.getElementById("lineColor").value,
      correctLevel : QRCode.CorrectLevel.M
      });
  }
    break;
    case "L":
  {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: document.getElementById("datacode").value, 
      width : document.getElementById("wi").value, 
      height : document.getElementById("he").value,
      colorDark :  document.getElementById("background").value,
      colorLight : document.getElementById("lineColor").value,
      correctLevel : QRCode.CorrectLevel.L
      });
  }
}


}

function saveqr(linkElement) {

linkElement.href = document.getElementById("qrcode").getElementsByTagName("img")[0].src;

}

window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("scrl_top").style.display = "block";
      } else {
        document.getElementById("scrl_top").style.display = "none";
      }
    }
    
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    function option(){
      switch (document.getElementById("format").value) {
        case "CODE128":
        {
          document.getElementById("datacode").setAttribute("type","text");
          document.getElementById("option").innerHTML='';
          document.getElementById("option").innerHTML='<label><input type="checkbox" id="ean128">Ean128</label><br><label>Mode</label><select id="mode"><option>CODE128</option><option>CODE128A</option><option>CODE128B</option><option>CODE128C</option></select>'
        }
          break;
          case "EAN / UPC":
        {
          document.getElementById("datacode").setAttribute("type","number");
          document.getElementById("option").innerHTML='';          
          document.getElementById("option").innerHTML='<label><input type="checkbox" id="flat">Flat</label><br><label>Mode</label><select id="mode"><option>EAN13</option><option>UPC</option><option>EAN8</option><option>EAN5</option><option>EAN2</option></select>'
        }
          break;
          case "CODE39":
        {
          document.getElementById("datacode").setAttribute("type","text");
          document.getElementById("option").innerHTML='';          
          document.getElementById("option").innerHTML='<label><input type="checkbox" id="mod43">Mod43</label>'
        }
          break;
          case "ITF14":
        {
          document.getElementById("datacode").setAttribute("type","number");
          document.getElementById("option").innerHTML='';
        }
          break;
          case "MSI":
        {
          document.getElementById("datacode").setAttribute("type","number");
          document.getElementById("option").innerHTML='';          
          document.getElementById("option").innerHTML='<label>Mode</label><select id="mode"><option>MSI</option><option>MSI10</option><option>MSI11</option><option>MSI1010</option><option>MSI1110</option>'
        }
          break;
          case "pharmacode":
        {
          document.getElementById("datacode").setAttribute("type","number");
          document.getElementById("option").innerHTML='';          
        }
          break;
          case "codabar":
        {
          document.getElementById("datacode").setAttribute("type","number");
          document.getElementById("option").innerHTML='';          
        }
          break;
      
      }
      
     }

     function dataType(){
      switch (document.getElementById("mode").value) {
        case "CODE128":
        {
          document.getElementById("datacode").setAttribute("type","text");
        }
          break;
          case "CODE128A":
        {
          document.getElementById("datacode").setAttribute("type","number");
        }
          break;
          case "CODE128B":
        {
          document.getElementById("datacode").setAttribute("type","text");
        }
          break;
          case "CODE128C":
        {
          document.getElementById("datacode").setAttribute("type","number");
        }
          break;      
      }
      
     }

     function toNumber(or) {
       if(or=="wi")
      document.getElementById("wi").value=document.getElementById("width").value;
      else
      document.getElementById("he").value=document.getElementById("height").value;
    }
    function toslider(or){
      if(or=="wi")
      document.getElementById("width").value=document.getElementById("wi").value;
      else
      document.getElementById("height").value=document.getElementById("he").value;
    }

function keyListenerqr(){

  var wage = document.getElementById("datacode");
    wage.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) { 
            buildqr();
        }
    });
}

function keyListenerbr(){

  var wage = document.getElementById("datacode");
    wage.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) { 
            buildbr();
        }
    });
}

    function printbrcode() { 
      let w=window.open("","_blank"); 
      w.document.body.innerHTML = "<h1 style='color:#00569c;'>qrcode-barcode.com</h1><img src='"+document.getElementById("barcode").getElementsByTagName("img")[0].src+"'>";
      w.document.title="qrcode-barcode.com"+"_"+Date.now();
      w.print(); 
      w.close();
    }

    function printqrcode() {
      let w=window.open("","_blank"); 
      w.document.body.innerHTML = "<h1 style='color:#00569c;'>qrcode-barcode.com</h1><img src='"+document.getElementById("qrcode").getElementsByTagName("img")[0].src+"'>";
      w.document.title="qrcode-barcode.com"+"_"+Date.now();
      w.print(); 
      w.close();
    }

   function switchbr(){
      if (document.getElementById("qcode").style.paddingBottom=="5px")
       {
        document.getElementById("qcode").setAttribute("style","");
        document.getElementById("qcode").setAttribute("style","border: none ;background-color: #cccccc;");
        document.getElementById("bcode").setAttribute("style","padding-bottom: 5px ;border: 2px #bb0000 solid ;border-bottom: none;background-color: rgb(240, 240, 240);");
        document.getElementById("howto").setAttribute("src","UseBRcode.html?v="+Date.now()); 
      }
     }
     function switchqr(){
      if(document.getElementById("bcode").style.paddingBottom=="5px")
      {
        document.getElementById("bcode").setAttribute("style","");
        document.getElementById("bcode").setAttribute("style","border: none ;background-color: #cccccc;");
        document.getElementById("qcode").setAttribute("style","padding-bottom: 5px ;border: 2px #bb0000 solid ;border-bottom: none;background-color: rgb(240, 240, 240);");
        document.getElementById("howto").setAttribute("src","UseQRcode.html?v="+Date.now()); 
        
      }
    }

	function forceReload()
	{
    document.getElementById("l1").firstChild.href="index.html?v="+Date.now();
    document.getElementById("l2").firstChild.href="Qrcode.html?v="+Date.now();
    document.getElementById("l3").firstChild.href="Barcode.html?v="+Date.now();
    document.getElementById("l4").firstChild.href="About.html?v="+Date.now();
    document.getElementById("l5").firstChild.href="How_to_use.html?v="+Date.now();
    document.getElementById("l6").firstChild.href="Contact-Us.html?v="+Date.now();
    document.getElementById("sc").src="scripts.js?v="+Date.now();
	}
   

