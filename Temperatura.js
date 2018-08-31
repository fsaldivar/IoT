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
