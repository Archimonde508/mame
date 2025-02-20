1. General Documentation
2. commands
  2. How to run
  3. How to Build
3. How pipeline is working
4. How to upload images 

scp -P 10232 "C:\Users\Archimonde\Desktop\mama zdjeica\5.PNG" "C:\Users\Archimonde\Desktop\mama zdjeica\6.PNG" root@srv10.mikr.us:/var/www/gallery/
scp -P 10232 -r root@srv10.mikr.us:/var/www/gallery/* "C:\Users\olspa\Desktop\mame\mame\src\gallery"


Najważniejsze:
ssh -p 10232 root@srv10.mikr.us 
skurwysyny 123 xJaHfEzZk7
nano /etc/nginx/sites-available/default 
systemctl restart nginx

Dane:
VPS: h232
login: root
haslo: xJaHfEzZk7 (zmień po pierwszym zalogowaniu!)
serwer: srv10.mikr.us
port SSH: 10232 (to ważne!)
adres IPv6: 2a01:4f9:6a:1c20::232

Co to znaczy?
VPS - 
login -
haslo - 
serwer -
port -
adres - 

--------------------------------------------------

Komendy:

Łączenie na serwer: 
ssh -p 10232 root@srv10.mikr.us 
		-p 10232 - nie używaj domyślnego portu 22 tylko wskazany
		- root@host -> użytkownik + host
		potem podajemy hasło
	
Sprawdzenie wystawianych portów
netstat -tulnp
		-t - porty TCP
		-u - porty UDP
		-l - tylko nasłuchujące
		-n - numery portów zamiast nazw usług
		-p - pokazuje proces który uzywa portu

Adress ip		
curl -4 ifconfig.me - 65.21.229.95
curl -6 ifconfig.me - 2a01:4f9:6a:1c20::232r

systemctl status nginx - czy nginx działa?
systemctl restart nginx - aplikowanie zmian
		
ufw status - stan fierwalla

nano /etc/nginx/sites-available/default - edycja nginx (PAMIĘTAJ BY ZAAPLIKOWAĆ ZMIANY)\

Jak wstawić plik

--------------------------------------------------

Teoria:

netstat zwraca nam:
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      1382/nginx: master
tcp        0      0 127.0.0.53:53           0.0.0.0:*               LISTEN      112/systemd-resolve

tcp - porotokół
recv/send - kolejka odbiorcza / nadawcza (ile oczekuje pakietów na wysłanie)
Local Address - na czym nasłuchujemy u siebiwe - na każdym adresie IP na porcie 80 (http).
	Jeśli zdefiniujemy jakieś ip np. 127.0.0.53:53 to nasłuchujemy na tym adresie
	od  P O T E N C J A L N I E każdego klienta, ale tylko z tego samerweego serwera
	bo działa na localhoście. Innymi słowy to ze foreign address jest jaki jest nie ma znaczenia
Foreign Address - jakie adresy PRZYCHODZĄCE akceptujemy (* - wszystkie)
State (Listen) - socket state, oznacza, że oczekuje na przychodzące 
PID - pokazuje PID procesu i nazwe jego, np. nginx nas interesuje tutaj




--------------------------------------------------
Wszystko o stronie:

wejście na:
65.21.229.95:80 - pojawia się mikrus info 
2a01:4f9:6a:1c20 - niemożliwe jest z przeglądarki uwu
modelkadojrzala.pl - OVHcloud - site under construction


Cloudflare: (przekierowanie adresów IPv4 na IPv6) i użycie własnej domeny

mamy domenę modelkadojrzala.pl


Ale uwaga
po usunięciu w Cloudflare DNS wpisu A (zostawiłem AAAA) i wejście na :
modelkadojrzala.pl 
sprawia ze mam WEB SERVER IS DOWN

Może rzeczywiscie mój serwer nie nasluchuje na ip6?
W tym celu dostosowaliśmy nginx aby obsługiwał adresy ip6 
(zmiana pliku nginx) na listen [::]:80 default_server;

i rzeczywiscie działa, tylko mam 403 forbidden

Bo nieprawidłowo w konfiguracji strony była ta, która ma być dlatego serwera źródłem

podaję prawidłowa stronę mamy (root/mame)
i wciąz jest kurwa problem, bo nginx nie ma dostępu i pluje 404
mozemy PRZENIESC cały folder (do miejsca gdzie ma uprawnienia)albo nadać uprawnienia, najpierw

nadajmy uprawnienia na folder root/mame

chown -R www-data:www-data /root/mame
chmod -R 755 /root/mame

pierwsza zmienia wlasciciela katalogu i plików oraz nadaje uprawieninia 

ale to nie jest dobra praktyka i powinien zostac jednak przeniesiony


Jak react app użyć?


npm install
npm run build

i w dist (jesli uzywasz vite) sa resulty

ponadto:

server {
    listen [::]:80 default_server;
    server_name modelkadojrzala.pl;

    root /var/www/mame/dist;
    index index.html index.htm;

    location / {
        try_files $uri /index.html;
    }

    # Ensure correct MIME types for static assets
    location ~* \.(js|mjs|json|css|html|woff2?|ttf|otf|eot|svg)$ {
        types {
            application/javascript js mjs;
            text/css css;
            text/html html;
            application/json json;
        }
    }

    # Remove TypeScript (.tsx) from being served incorrectly
    location ~* \.(tsx?)$ {
        return 403;  # Block .tsx files from being served
    }

    # Enable gzip compression for faster loading
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}

tak powinien wyglądać config
- types definiuje się w mginx.conf nie w server {}
- tsx ma nie być serwowany jako js, ma zwracać 403 (? czemu)
- usuń ten header - add_header Content-Type application/javascript; - bo wtedy nawet html bedzie interpretowany jako js

NIE UZYWAC COLOR SHEME BO CIE ZMIECIE Z PLANSZY XD

1 No ale tu też jest problem bo to zdjęcie musi mieć loadera!!! (20min)

2a. Na waskiej wersji:
   (la praca to chujowo wyglada):
      1. Home
      2. Aktorstwo
      3. Orientalna
      4. Charisma
      5. About
  Lapek mamy:
    1. Home
      2. Aktorstwo
      3. Orientalna
      4. Charisma
      5. About
2b. Aktorstwo chyba chujowo zrobione bo na wąskim ekranie jest w stanie wypchnąć navbara - dodałem padding-top i działa ale to takie se
  
3. dodaj Pozostałe strony (5 min)
  4.1 Orient - wymiary stron
  4.2 Aktorstwo
  5. Pokaż mamie jak się to wypełnia




7. Dodaj Wersje mobilne (dlugo)

8. ZMIEŃ PASY DO SERWERA
  6. Navbar? Tak się go robi?
9. FAVICON
10. subdomena (to się tak w ogóle nazywa)
11. Przetestuj wydajność
  wejście na urode orientalną blokuje stronę
    3.2 lazy loading dziala na tej galeri? Chuj wie jak to zrobić
1. Skontyneryzować w dockerku (1h)

Mama:
5. Uzupełnij prawidłowym tekstem
2. Daj na głównej mniejsze zdjęcie
3. Dodaj brakujące pliki i filmiki

  1. Miej te pliki w innym miejscu i za każdym razem po zbuildowaniu kopiuj disc
  2. Zautomatyzuj deploy z githuba
    6. Dlaczego główna strona tak chujowo długo się ładuje?
    - Bo zdjęcie jest duże. Sugestia: Wstawić to do public
    - ewentualnie jeszcze do head tagu
    - Reszta zdjęc oczywiście idzie do src
    - A jak to za długo się ładuje to zrób tak, że masz najpierw blura / ciemne w tle
  10. Na wąskich ekranach about wypierdala sie zbyt wysoko, container nie może być od góry tylko OD nav bara się zaczynać (idk czy to dobre miejsce)
    do aplikowania tego - moze daj navigation w container
  12. jak kurwa działają te inline styles - defaultowe są chujowe bo nie działają
   te tagi before edc, dlatego użyjemy emotion/react, który już na to pozwoli
  1. Dlaczego trzeba dać emotion.d.ts???? -> to moduł który nadpisuje defaultowe theme


Github pipeline
1. tworzymy repo gita na serwerze

2. Generujemy klucze ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

id_rsa - prywatny
  długi, wielolinijkowe losowe znaki rozpoczete od <---- Your Private Key ---->

id_rsa.pub - publiczny
  krótszy, jednolinjkowy zaczynajacy od ssh-rsa (ale dalej dość długi)


Na serwerze musi być id_rsa.pub dodany do AUTHORIZED_KEYS (pliku jako tekst)
a github musi używać sekretu PRIVATE KEY aby móc się połączyć

No i następnie trzeba przesłac te wszystkie pliki (z ignorem na foldery których nie lubimy)

i potem dać npm install npm build i przekopiowac do folderu wynikowego i działa

Pytanie jak to skonteneryzować


Co zrobić żeby zamienić CSS na inlineStyles: 

Okej, niezbędne będzie tysiąc helperów, żeby zaczęło to działać, ale
da się to zrobić


: używane do pseudoklas - hover, focus, active, nth-child
:: pseudo-elements - cześć elementu - before, after, first-letter, first-line


W NOTATKACH CAŁEGO PIPELINE PRZEPISZ KROK PO KROKU