import { Router } from 'express'
import {getEmployees, createEmployees, putEmployees, deleteEmployees,getEmployee} from '../controllers/employees.controllers.js'
const router = Router()

router.get("/employees",getEmployees)
router.get("/employees/:id",getEmployee)
//app.get("Ruta a la cual iremos para obtener los datos",(req "peticion", res"Devuelve")=> res.send("texto a devolver") [El res.send sirve para que devuelv aun mensaje cuando este devolviendo datos])
router.post("/employees", createEmployees)
//Lo mismo que antes, pero como es POST sirve para crear datos nuevos
router.patch("/employees/:id",putEmployees)
//Se encarga de actualizar datos
router.delete("/employees/:id",deleteEmployees)
//Se encarga de borrar datos

export default router