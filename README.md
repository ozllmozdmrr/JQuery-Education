
## JQUERY NEDİR ?

* JQuery hafif "daha az yaz, daha fazlasını yap" mantığıyla çalışan JavaScript kütüphanesidir.
* JQuery'nin amacı , web sitenizde JavaScript'i kullanmayı çok daha kolaylaştırmaktır.
* JQuery, birçok satır JavaScript kodu gerektiren birçok görevi yerine getirir ve bunları tek bir kod satırıyla çağırabileceğiniz yöntemlere sarar.
* JQuery ayrıca, JavaScript'ten AJAX çağrıları ve DOM manipülasyonu gibi karmaşık şeylerin çoğunu da basitleştirir.

**JQuery kütüphanesi aşağıdaki özellikleri içerir:**

 *  HTML / DOM Manipülasyonu 
 *  CSS Manipülasyonu
 *  HTML olay yöntemleri
 *  Etkiler be animasyonlar
 *  AJAX
 *  Araçlar

Buna ek olarak , JQuery'nin hemen hemen her görev için eklentirleri vardır.

## NEDEN JQUERY

* Birçok başka JavaScript frameworkü var, ancak JQuery en popüler ve en genişletilebilir olarak görünmektedir.
* Web'teki büyük şirketlerin çoğu , aşağıdaki gibi JQuery kullanıyor
 1. Google
 1. Microsoft
 1. IBM
 1. Netflix

* Web sitenizde JQuery kullanmaya başlamanın birkaç yolu vardır.
> JQuery kütüphanesini jQuery.com adresinden indirin.                                                      
> Google gibi bir CDN'den jQuery'yi ekleyin.

## JQUERY DOWNLOAD 

* İndirmek için iki jQuery sürümü mevcut:                                                                                              
     - Prodüksiyon versiyonu - bu web siteniz için çünkü küçültülmüş ve sıkıştırılmıştır.                                                            
     - Geliştirme sürümü - bu test ve geliştirme içindir (sıkıştırılmamış ve okunabilir kod),
* Her iki sürüm de jQuery.com adresinden indirilebilir. 
*JQuery kütüphanesi tek bir JavaScript dosyasıdır ve HTML <script> etiketiyle kullanılır.
* <script> etiketinin <head> bölümünün içinde olması gerektiğine dikkat edin.
* <script> etiketinin içinde artol type= "text/ javascript" komutuna gerek yoktur.
* HTMl5'te bu gerekli değildir. JavaSciprt , HTML%'teki ve tüm modern tarayıcılardak, varsayılan komut dosyası dilidir.
* JQuery'i kendiniz indirmek ve barındırmak istemiyorsanız, bir CDN^'den (İçerik Dağıtım Ağı) ekleyebilirsiniz.                                  
* `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></scirpt> `   ---> (**Google**)
* `<script src="https://ajaxaspnetcdn.com/ajax/jQeury/jquery-3.6.0.min.js></script>" `    ---> (**Microsoft**)


## NEDEN CDN ?
 * Birçok kullanıcı Google veya Microsoft'tan JQuery'i indirdi. Sonuç olarak, sitenizi ziyaret ettiklerinde önbellekten yüklenir ve bu da hızlı yükleme süresi sağlar.
* Ayrıca, çoğu CDN, bir kullanıcı ondan bir dosya istediğinde, kendisine en yakın sunucudan sunulmasını ve böylece daha hızlı yüklenmesine olanak sağlar. 

## DOM NEDİR?
 
 Document Object Model (DOM) ile İlgili Temel Kavramlar
Document Object Model içeriklerini incelerken karşınıza çoğu zaman belge, nesne, ‘’çağrılmak’’gibi kavramlar çıkacak. İçeriğin en keyifli kısımlarına geçmeden önce bu kelimelerin ne anlama geldiğini netleştirelim.
 
 
 
 ![resim_2022-04-26_152306287](https://user-images.githubusercontent.com/97258275/165299009-899b65f6-083e-437e-b730-aab813b08fa0.png)

 
 
* **Belge**: Document Object Model’de belge, HTML kodu ile hazırladığınız sayfanın ta kendisidir.
* **Nesne**: Document Object Model’de nesne, HTML kodu ile hazırladığınız sayfanın içine yerleştirilen öğelerin her biridir.
* **Çağrılmak**: Bir kod parçacığında herhangi bir komutun aktif edilebilmesi için DOM ağacı içerisinde nesnelerin hiyerarşik bir sıra izlenerek çağrılması gerekir. Bu  sırada önce doküman, ardından ‘’root element’’, ardından element sırasıyla ‘’çağrılır’’. Çağrılmak, işlev göstermesi için aktif edilmek anlamına gelir.
* **DOM Düğüm Ağacı (DOM Node Tree)**: DOM yapısının hiyerarşik bir ilişki içerisinde belge ve nesneleri birbirine bağladığı yapıdır. Bu yapı içerisinde Document, DocumentType, DocumentFragment, Element, Text, ProcessingInstruction, Comment gibi nesnelerin tümü bulunur ve düğümler halinde birbirine bağlanır. Ağacın her bir düğümünde düğümün türü ve bu düğüm ile izin verilen alt öğeler bulunur. Bu da hiyerarşik yapı ile erişilebilecek alanları ayırır. DOM Düğüm Ağacı, kaynak öğenin ne olduğuna göre çeşitli isimler alabilir. Örneğin kaynak (root) öğe eğer bir Document elementi ise, ağaç ‘’Document Tree’’ olarak kavramsallaştırılır. Eğer kaynak (root) element ‘’Shadow’’ ise, ağaç ‘’Shadow Tree’’ olarak kavramsallaştırılır.
* **DOM Metotları**: DOM ile gerçekleştirebileceğiniz eylemlere metot adı verilir. Örneğin HTML öğeleri üzerinde yapabileceğiniz işlemlerin her biri birer metottur.              
  https://ozllmozdmrr.medium.com/javascript-html-dom-439c508c6018  ---> Medium' da daha açıklayıcı bir anlatım mevcut.
 
 
## jQuery'de DOM
jQuery kullanarak HTML elementlerini daha kolay manipüle edebilirsiniz. Örnek olarak JavaScript kullanarak bir elementi ID'sine göre almanın jQuery ile farkı aşağıdaki gibidir.                                                                                                           
  ` JavaScript: document.getElementById(id); `                                                               
  `jQuery: $("#id"); `
 
 Gördüğünüz gibi jQuery'de bir elementi seçmek JavaScript'te olduğundan daha kısa ve kolaydır.
