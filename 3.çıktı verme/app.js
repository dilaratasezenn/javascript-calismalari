//document write ile çıktı verme
document.write("Merhaba Dünya <br>"); // <br> ile alt satıra geçme çıktıda br tagı görünmez
document.write("dilara taşezen <br>");
document.write(5.5);//sayısal değerlerde tırnak kullanılmaz






//console.log ile çıktı verme
console.log("Merhaba Dünya");
//sayfada gözükmez sayfada görmek için f12 console kısmına bakmak gerekli buraya herşey yazılabılır
//console.clear();//console kısmındaki yazıları temizler

//let a=5;
//let b=3;
//console.log("iki sayının toplamı:",a+b);//console da toplama işlemi de yapılabilir
//console.log("iki sayının farkı:"+(a-b));
//console da sayısal ve metinsel işlemler yapılabilir üstte virgül ile ayırdık altta artı işareti ve parantez ile ayırdık ikisi aynı şeyi yapar göstetrim farkı var





console.log(window);//window objesi site içindeki tüm objeleri gösterir üst kısmıdaki sekme  dahil tüm objeleri gösterir
//document objeside window objesinin içerisindeki sayfanın tüm objelerini gösterir
//window içerisinde birsürü obje vardır ve şöyle window içerisindeki bir objeyi kullanıcağımız zaman direk obje ismini yazabiliriz başına window yazmamıza gerek yoktur
//window tüm bir sekmeyi barındırırken document window içerisindeki bir objedir ve sekmedeki sayfayı barındırır iç içe bir hiyerarşi vardır tabi bunların içerisinde de farklı objeler bulunur ama en tepe window objeidir bu yüzden bir şey yazarken başına window yazmasakta olur
//mesela console objesi de window objesinin içerisindeki bir objedir console içinde de farklı objeler bulunur
console.log(document.location.host);//sayfanın hostunu gösterir

console.clear();

//alert (uyarı) popup ile çıktı verme
//alert("Merhaba Dünya");
//alert ile popup uyarı verir mesaj popup yani sayfada mesaj kutusu şeklinde gözükür

//let a=20;
//let b=10;
//alert("iki sayının toplamı:"+(a+b));//matematiksel işlem yapılabilir

alert("F5 tuşuna basmayınız");
//şeklinde popup ile uyarı verilebilir kısaca alert bilgilendirmek ve uyarı için kullanılablir

