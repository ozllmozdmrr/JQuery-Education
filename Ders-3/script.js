$(function () {
    // Jquery Kodları

    $("ul li ").css("color","red");  // tüm "li" ler kırmızı olur

    $("ul li:nth-child(2) ").css("color","blue"); // Sadece 2. mavi olur.
    $("ul li:nth-child(odd)").css("color","green"); // Tekli(odd) sayılar yeşil olur. 
    $("ul li:nth-child(even)").css("color","purple"); // Çift(even) sayılar mor olur.

    $("ul li.deneme").hide(); // classı seçerken "." kullanıyoruz. Bütün elemanti yazmaya gerek yok sadece class yeterli (".deneme").

    $("ul > a ").hide();
    
});
