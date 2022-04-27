
// Öznitelik Seçiciler

//    ^=   ,  $=  ,   *=   ,   ~=

//    ^=  Öznitelik değeri başlangıcını sınar , denetler varsa seçer.
//    $=  Öznitelik değeri belirttiğimiz karakterlerle bitiyorsa seçmeye yarar.
//    *=  Herhangi bir karakteri içeriyorsa anlamına gelir.
//    ~=  Özniteliği değerler arasında boşluk varsa kullanılan bir özelliktir.


$(function (){
    // $("h1[id=header]").css("backgroundColor","purple");
    $("h1[id^=h]").css("backgroundColor","purple");    // ilk harf

    $("h1[id$=m]").css("backgroundColor","green");     // son harf

    $("h1[id*=e]").css("backgroundColor","red");       // Herhangi bir harfden birden fazla varsa hepsini etkiler.

    $("h1[class~=ozlem]").css("backgroundColor","blue");    // boşluk var mı yok mu denetle demek.
});