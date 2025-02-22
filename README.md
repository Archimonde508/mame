1. General Documentation
2. commands
  2. How to run
  3. How to Build
3. How pipeline is working
4. How to upload images 


Helpful commands:
  List of commands:
    scp -P 10232 "C:\Users\Archimonde\Desktop\mama zdjeica\5.PNG" "C:\Users\Archimonde\Desktop\mama zdjeica\6.PNG" root@srv10.mikr.us:/var/www/gallery/
    ssh -p 10232 root@srv10.mikr.us 
    nano /etc/nginx/sites-available/default 
    systemctl restart nginx

  Explanation:
    Send one picture to the server:
    scp -P 10232 "C:\Users\Archimonde\Desktop\mama zdjeica\5.PNG" "C:\Users\Archimonde\Desktop\mama zdjeica\6.PNG" root@srv10.mikr.us:/var/www/gallery/

    Send entire directory to the server:
    scp -P 10232 -r "C:\Users\olspa\Desktop\mame\mame\src\gallery\*" root@srv10.mikr.us:/var/www/gallery/

    Send from server to local directory:
    scp -P 10232 -r root@srv10.mikr.us:/var/www/gallery/* "C:\Users\olspa\Desktop\mame\mame\src\gallery"

    Connect to mikr.us (bez -p domyślnie łączy po porcie 22, użytkownik@server):
    ssh -p 10232 root@srv10.mikr.us 

    View / Edit nginx configuration:
    nano /etc/nginx/sites-available/default 

    Restart nginx:
    systemctl restart nginx

    Check exposed ports:
    netstat -tulnp

    Check IP Adress:		
    curl -4 ifconfig.me - 65.21.229.95
    curl -6 ifconfig.me - 2a01:4f9:6a:1c20::232r

    Check Firewall status:
    ufw status



TODO: 
1. Na wąskich monitorach (jak w pracy) chujowo to wygląda
8. ZMIEŃ PASY DO SERWERA
7. Dodaj Wersje mobilne (dlugo)
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




