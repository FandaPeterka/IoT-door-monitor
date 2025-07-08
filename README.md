# BIOT-Team-001

## 📌 O projektu

**SimpleGuard** je aplikace určená pro monitorování objektů pomocí IoT technologie. Systém je postaven na mikrokontroléru **HARDWARIO Core Module** s akcelerometrem připevněným ke dveřím, který detekuje neoprávněné manipulace.

## 🛠 Použité technologie

- **Backend:** Node.js (Express.js), MongoDB  
- **Frontend:** React.js  
- **Hardware:** HARDWARIO Core Module  
- **Komunikace:** MQTT / HTTPS  

## 🚀 Hlavní vlastnosti

- 📡 **Sběr dat** z akcelerometru umístěného na dveřích  
- 🔔 **Detekce neoprávněných pohybů** a odesílání upozornění  
- 🌐 **Zpracování a vizualizace dat** v cloudové aplikaci  
- 🛠 **Možnost rozšíření** o další senzory HARDWARIO  

## 🏗 Architektura řešení

```plaintext
IoT node (Core Module) →→MQTT→→ Gateway (Radio Dongle) →→HTTP→→ Backend (Node.js) →→HTTP→→ Frontend (Next.js)
```

## 🔗 Dokumentace

| **Sekce**               | **Popis**                                       |
|-------------------------|------------------------------------------------|
| <a href="https://uuapp.plus4u.net/uu-managementkit-maing02/38744216cb324edca986789798259ba9/document?oid=67c7641212501e7e1b9ec04e&pageOid=67c7641b68cbf80542ebd682" target="_blank">**Business Requests**</a>   | Popsání klíčových User Stories                 |
| <a href="https://uuapp.plus4u.net/uu-managementkit-maing02/38744216cb324edca986789798259ba9/document?oid=67c74c4f12501e7e1b9e53bc&pageOid=67c74c5868cbf80542eb6b19" target="_blank">**Business Model**</a>         | Popis aktérů, produktů a klíčových BUCs        |
| <a href="https://uuapp.plus4u.net/uu-managementkit-maing02/38744216cb324edca986789798259ba9/document?oid=67c74c4468cbf80542eb6987&pageOid=67c74c4b12501e7e1b9e533f" target="_blank">**Application Model**</a>   | Návrh backendu a frontendu       |
