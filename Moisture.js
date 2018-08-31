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
