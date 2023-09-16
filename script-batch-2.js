//force lazy loading
let listofimgs = document.getElementsByTagName("img");
let i = 0;
for (; i < listofimgs.length; ) {
  listofimgs[i].setAttribute("loading", "lazy");
  console.log(listofimgs[i]);
    i++;
} 


// Panduan jadi warna merah dan open in new tab
      document.addEventListener("click", function(e) { 
             if (e.target.tagName == "A" && e.target.innerText== "Home" &&         !e.target.hasAttribute("target")) { 
                 e.target.setAttribute("target", "_blank"); }});
      document.addEventListener("click", function(e) { 
             if (e.target.tagName == "A" && e.target.innerText== "Panduan" &&         !e.target.hasAttribute("target")) { 
                 e.target.setAttribute("target", "_blank"); }});

      document.addEventListener("mouseover", function(e) { 
             if (e.target.tagName == "A" && e.target.innerText== "Panduan" &&         !e.target.hasAttribute("target")) { 
                 e.target.setAttribute("id", "panduan"); }});


//=============================================================================
//--------------------------------------- Laporan PEER dan PDF-----------------------------------------
//=============================================================================

// this is script for Laporan PEER dan PDF supaya tiap user dapet file beda2 BUKA
 const userName1 = document.getElementById("actionmenuaction-1").textContent;
 const userName7 = document.getElementById("actionmenuaction-7").textContent;
 const tautanElemen = document.createElement("A");
var kataKataERROR = document.createTextNode("Error: Silahkan menghubungi tim Panitia. Mohon maaf Atas ketidaknyamanannya");
 const tautanElemenPDF = document.createElement("A");
 const lokasiPageBerubah = document.getElementById("lokasiPageId").className;

 //Kata-kata untuk download laporan PEER v
 var kataKata = document.createTextNode("[ Laporan PEER ]");

 //Kata-kata untuk download laporan PDF v
 var kataKataPDF = document.createTextNode("[ Gabungan Self Assessment dan Penilaian oleh PEER ]");

 const tautanBerubah = function(){
   tautanElemen.setAttribute("target", "_blank");
   tautanElemen.setAttribute("style", "color:#2a938f");
   tautanElemen.appendChild(kataKata);
   document.getElementById("lokasiTautanBerubah").appendChild(tautanElemen);
 }
const tautanBerubahPDF = function(){
   tautanElemenPDF.setAttribute("target", "_blank");
   tautanElemenPDF.setAttribute("style", "color:#2a938f");
   tautanElemenPDF.appendChild(kataKataPDF);
   document.getElementById("lokasiTautanBerubahPDF").appendChild(tautanElemenPDF);
 }

  const tautanBerubahERROR = function(){
   if (lokasiPageBerubah == "PEER"){
   tautanElemen.setAttribute("target", "_blank");
   tautanElemen.setAttribute("style", "color:#2a938f");
   tautanElemen.appendChild(kataKataERROR);
   document.getElementById("lokasiTautanBerubah").appendChild(tautanElemen);
   }
   else if (lokasiPageBerubah == "PDF"){
   tautanElemenPDF.setAttribute("target", "_blank");
   tautanElemenPDF.setAttribute("style", "color:#2a938f");
   tautanElemenPDF.appendChild(kataKataERROR);
   document.getElementById("lokasiTautanBerubahPDF").appendChild(tautanElemenPDF);
   }
 }
//PEER BUKA
if (lokasiPageBerubah == "PEER" && userName1.includes("Natalia") || userName1.includes("natalia") || userName7.includes("Natalia") || userName7.includes("natalia")) {
   tautanElemen.setAttribute("href", "https://drive.google.com/");
   tautanBerubah();
} 

else if (lokasiPageBerubah == "PEER" && userName1.includes("Penguji") || userName1.includes("penguji") || userName7.includes("Penguji") || userName7.includes("penguji")) {
   tautanElemen.setAttribute("href", "#");
   tautanBerubah();
} 

else if (lokasiPageBerubah == "PEER" && userName1.includes("onald") || userName1.includes("onald") || userName7.includes("onald") || userName7.includes("onald")) {
   tautanElemen.setAttribute("href", "https://drive.google.com/drive/folders/16yI6ynsWY_s0i9MafHT7ZWjvIZu7XIz8?usp=sharing");
   tautanBerubah();

} 

else if (lokasiPageBerubah == "PEER" && userName1.includes("Tara") || userName1.includes("tara") || userName7.includes("Tara") || userName7.includes("tara")) {
   tautanElemen.setAttribute("href", "https://drive.google.com/drive/folders/16yI6ynsWY_s0i9MafHT7ZWjvIZu7XIz8?usp=sharing");
   tautanBerubah();
}

else if (lokasiPageBerubah == "PEER" && userName1.includes("Sucipto") || userName1.includes("sucipto") || userName7.includes("Sucipto") || userName7.includes("sucipto")) {
   tautanElemen.setAttribute("href", "https://drive.google.com/drive/folders/16yI6ynsWY_s0i9MafHT7ZWjvIZu7XIz8?usp=sharing");
   tautanBerubah();
} 

else if (lokasiPageBerubah == "PEER" && userName1.includes("Dian") || userName1.includes("dian") || userName7.includes("Dian") || userName7.includes("dian")) {
   tautanElemen.setAttribute("href", "https://drive.google.com/drive/folders/1orHxIZRA94ZeJcUI-tkptNvBII7z7YO0?usp=sharing");
   tautanBerubah();
} 

else if (lokasiPageBerubah == "PEER" && userName1.includes("Kennisa") || userName1.includes("kennisa") || userName7.includes("Kennisa") || userName7.includes("kennisa")) {
   tautanElemen.setAttribute("href", "https://drive.google.com/drive/folders/1orHxIZRA94ZeJcUI-tkptNvBII7z7YO0?usp=sharing");
   tautanBerubah();
} 


else if (lokasiPageBerubah == "PEER" && userName1.includes("Ade") || userName1.includes("ade") || userName7.includes("Ade") || userName7.includes("ade")) {
   tautanElemen.setAttribute("href", "https://drive.google.com/drive/folders/17wmv9uQaLG0UmzNMHr9cUWkIKFQXkFle?usp=sharing");
   tautanBerubah();
} 

else if (lokasiPageBerubah == "PEER" && userName1.includes("Zuhrotun") || userName1.includes("zuhrotun") || userName7.includes("Zuhrotun") || userName7.includes("zuhrotun")) {
   tautanElemen.setAttribute("href", "https://drive.google.com/drive/folders/17wmv9uQaLG0UmzNMHr9cUWkIKFQXkFle?usp=sharing");
   tautanBerubah();
} 


//PEER TUTUP
//======================
//PDF BUKA
//======================

else if (lokasiPageBerubah == "PDF" && userName1.includes("Natalia") || userName1.includes("natalia") || userName7.includes("Natalia") || userName7.includes("natalia")) {
   tautanElemenPDF.setAttribute("href", "https://drive.google.com/");
   tautanBerubahPDF();
} 

else if  (lokasiPageBerubah == "PDF" && userName1.includes("Penguji") || userName1.includes("penguji") || userName7.includes("Penguji") || userName7.includes("penguji")) {
   tautanElemenPDF.setAttribute("href", "#");
   tautanBerubahPDF();
} 

else if (lokasiPageBerubah == "PDF" && userName1.includes("Ronald") || userName1.includes("ronald") || userName7.includes("Ronald") || userName7.includes("ronald")) {
   tautanElemenPDF.setAttribute("href", "https://youtube.com");
   tautanBerubahPDF();

} 
else if (lokasiPageBerubah == "PDF" && userName1.includes("Tara") || userName1.includes("tara") || userName7.includes("Tara") || userName7.includes("tara")) {
   tautanElemen.setAttribute("href", "https://drive.google.com/drive/folders/16yI6ynsWY_s0i9MafHT7ZWjvIZu7XIz8?usp=sharing");
   tautanBerubah();
}

else if (lokasiPageBerubah == "PDF" && userName1.includes("Sucipto") || userName1.includes("sucipto") || userName7.includes("Sucipto") || userName7.includes("sucipto")) {
   tautanElemen.setAttribute("href", "https://drive.google.com/drive/folders/16yI6ynsWY_s0i9MafHT7ZWjvIZu7XIz8?usp=sharing");
   tautanBerubah();
} 

else if (lokasiPageBerubah == "PDF" && userName1.includes("Dian") || userName1.includes("dian") || userName7.includes("Dian") || userName7.includes("dian")) {
   tautanElemen.setAttribute("href", "https://drive.google.com/drive/folders/1orHxIZRA94ZeJcUI-tkptNvBII7z7YO0?usp=sharing");
   tautanBerubah();
} 

else if (lokasiPageBerubah == "PDF" && userName1.includes("Kennisa") || userName1.includes("kennisa") || userName7.includes("Kennisa") || userName7.includes("kennisa")) {
   tautanElemen.setAttribute("href", "https://drive.google.com/drive/folders/1orHxIZRA94ZeJcUI-tkptNvBII7z7YO0?usp=sharing");
   tautanBerubah();
} 


else if (lokasiPageBerubah == "PDF" && userName1.includes("Ade") || userName1.includes("ade") || userName7.includes("Ade") || userName7.includes("ade")) {
   tautanElemen.setAttribute("href", "https://drive.google.com/drive/folders/17wmv9uQaLG0UmzNMHr9cUWkIKFQXkFle?usp=sharing");
   tautanBerubah();
} 

else if (lokasiPageBerubah == "PDF" && userName1.includes("Zuhrotun") || userName1.includes("zuhrotun") || userName7.includes("Zuhrotun") || userName7.includes("zuhrotun")) {
   tautanElemen.setAttribute("href", "https://drive.google.com/drive/folders/17wmv9uQaLG0UmzNMHr9cUWkIKFQXkFle?usp=sharing");
   tautanBerubah();
} 
//PDF TUTUP

else{
   tautanBerubahERROR();

}
// this is script for Laporan PEER dan PDF supaya tiap user dapet file beda2 TUTUP
