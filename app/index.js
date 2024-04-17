import express from "express";
import cookieParser from "cookie-parser";
import { methods as autenthication } from "./controllers/authentication.controller.js";
import cors from 'cors'; //sirve para  que haya una transmicion de datos entre backend-frontend =COMUNICACION DE PUERTOS

//servidor
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("servidor corriendo en puerto", app.get("port")); //abre el puerto

//configuracion
app.use(express.json()); //permite mirar los datos mandados en el registro
app.use(cookieParser());
app.use(cors());

//rutas
app.post("/api/register", autenthication.register);
app.post("/api/login", autenthication.login);
// Ruta para cerrar sesión
app.get("/api/logout", autenthication.logout);