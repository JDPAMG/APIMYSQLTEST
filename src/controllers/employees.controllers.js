import {pool} from '../db.js'

export const getEmployees = async(req, res) => {
    try {
        //throw new error("Error jajasalu2")
        const [datos] = await pool.query('SELECT * FROM employee')
        res.send({datos})
    } catch (error) {
        return res.status(500).json({
            message: "Algo salio mal"
        })
    }

    }

    export const getEmployee = async(req, res) => {

       try {
        const [datos] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
        console.log(datos)
        if (datos.length <= 0) return res.status(404).json({
            message: 'Empleado no encontrado'
        })
        res.json(datos[0])
       } catch (error) {
            return res.status(500).json({
                 message: "Algo salio mal"
            })
       }

        }

export const createEmployees = async(req, res) => {

    try {
        const {nombre, Sueldo} = req.body
        const [rows] = await pool.query('INSERT INTO employee (nombre, Sueldo) VALUES (?, ?)',[nombre, Sueldo])
        console.log(req.body)

        res.send({
            id: rows.insertId,
            nombre,
            Sueldo,
    })
    } catch (error) {
        return res.status(500).json({
            message: "Algo salio mal"
        })  
    }
}

export const putEmployees = async(req, res) => {

    try {
        const {id} = req.params
        const {nombre,Sueldo} = req.body
        const [Datos] = await pool.query('UPDATE employee SET Sueldo = IFNULL(?,Sueldo), nombre = IFNULL(?,nombre) WHERE id = ?', [Sueldo,nombre,id])

        if(Datos.affectedRows <= 0) return res.status(404).json({
            message: "Empleado no encontrado"
        })
        if(Datos.changedRows <= 0) return res.json({
            message:"Los datos del empleado son iguales"
        })

        const [Mostrar] = await pool.query("SELECT * FROM employee WHERE id = ?",[id])
        console.log(Datos)
        console.log(id,nombre,Sueldo)
        res.json(Mostrar[0])
    } catch (error) {
        return res.status(500).json({
            message: "Algo salio mal"
        }) 
    }
}

export const deleteEmployees = async(req, res) => {
    
    
    try {
        const [Borrar] = await pool.query('DELETE FROM employee WHERE id = ?',[req.params.id])

        if (Borrar.affectedRows <= 0) return res.status(404).json ({
            message: 'No se pudo borrar el empleado debido a que no existe'
        })
        console.log(Borrar)
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "Algo salio mal"
        }) 
    }
}