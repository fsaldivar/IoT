msg.topic = "Temperature";
var Temp = { payload: msg.payload.temperature };
var Temp1 = parseFloat(msg.payload.temperature);
if (Temp1 >= 35) {
msg.payload = "Tengo mucho calor, la temperatura en este momento es: " + msg.payload.temperature + " °C, por favor avisente a @fermax, para mas informacion consulta http://iot.fernandosaldivar.com:1880/ui/#/2 "}
else {
if (Temp1 <= 5) {
msg.payload = "Tengo frio estoy a: " + msg.payload.temperature + " °C, por favor avisente a @fermax que me meta, para mas informacion consulta http://iot.fernandosaldivar.com:1880/ui/#/2 "}
else { msg.payload = "La temperatura es agradable para mi en estos momentos, estoy a : " + msg.payload.temperature + " °C, para mas información consulta http://iot.fernandosaldivar.com:1880/ui/#/2 " }}
return msg;


msg.topic = "moisture";
var Hum = { payload: msg.payload.moisture };
var Hum1 = parseFloat(msg.payload.moisture);
if (Hum1 >= 50) {
msg.payload = "Creo que esta lloviendo, hay mucha humedad por aqui: " + msg.payload.moisture + " %, por favor avisente a @fermax "}
else {
if (Hum1 <= 7) {
msg.payload = "Me estoy secando " + msg.payload.moisture + " %, por favor avisente a @fermax que de perdido me eche una cerveza"}
else { msg.payload = "La Humedad es ideal para mis condiciones : " + msg.payload.moisture + " %" }}
return msg;


msg.topic = "Sunlight";
var Sun = { payload: msg.payload.sunlight };
var Sun1 = parseFloat(msg.payload.sunlight);
if (Sun1 >= 85000) {
msg.payload = "Me esta dando mucha luz solar: " + msg.payload.sunlight + " lux, por favor avisente a @fermax que me ponga en la sombrita "}
else {
if (Sun1 <= 3500) {
msg.payload = "Creo que es de noche, detecto muy poca luz: " + msg.payload.sunlight + " lux"}
else { msg.payload = "La iluminación es perfecta : " + msg.payload.sunlight + " lux," }}
return msg;

msg.topic = "fertility";
var Fer = { payload: msg.payload.fertility };
var Fer1 = parseFloat(msg.payload.fertility);
if (Fer1 >= 1000) {
msg.payload = "Se pasaron de tueste ando muy fertil: " + msg.payload.fertility + " uS/cm, por favor avisente a @fermax "}
else {
if (Fer1 <= 300) {
msg.payload = "Ando muy baja de fertilidad " + msg.payload.fertility + " uS/cm, por favor avisente a @fermax que me ponga nutrientes"}
else { msg.payload = "No tengo problemas de fertilidad, mi tierra es muy conductora : " + msg.payload.fertility + " uS/cm" }}
return msg;


msg.topic = "battery";
var Bat = { payload: msg.payload.battery };
Bat = parseFloat(Bat);
if (Bat >= 100) {
msg.payload = "La bateria que me alimenta esta en excelntes condiciones: " + Bat + " % "}
else {
if (Bat <= 10) {
msg.payload = "La bateria que me alimenta se esta agotando " + Bat + " %, por favor avisente a @fermax que me la cambie"}
else {  }}
return msg;
