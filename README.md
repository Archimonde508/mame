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

nano /etc/nginx/sites-available/default - edycja nginx (PAMIĘTAJ BY ZAAPLIKOWAĆ ZMIANY)

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



1. USUN WSZYSTKIE CSS
1. Daj na głównej mniejsze zdjęcie
  1. Miej te pliki w innym miejscu i za każdym razem po zbuildowaniu kopiuj disc
  2. Zautomatyzuj deploy z githuba
3. Dodaj brakujące pliki i filmiki
4. Dodaj Wersje mobilne
5. Uzupełnij prawidłowym tekstem
    6. Dlaczego główna strona tak chujowo długo się ładuje?
    - Bo zdjęcie jest duże. Sugestia: Wstawić to do public
    - ewentualnie jeszcze do head tagu
    - Reszta zdjęc oczywiście idzie do src
    - A jak to za długo się ładuje to zrób tak, że masz najpierw blura / ciemne w tle
7. Dlaczego pozostałe strony też niewłaściwie się ładują? 
8. Skontyneryzować w dockerku
  10. Na wąskich ekranach about wypierdala sie zbyt wysoko, container nie może być od góry tylko OD nav bara się zaczynać (idk czy to dobre miejsce)
    do aplikowania tego - moze daj navigation w container
11. Config nginxa też powinien być w repo? moze dlatego trzeba to kontynerozować? 


1. zrób krok #1
2. zrób krok 2

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