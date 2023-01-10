import knex from "knex";
import config from "../src/config.js";

// SQL: SQLite3



crearTablasProductos(knex(config.sqlite3));
crearTablasCarritos(knex(config.sqlite3));

//------------------------------------------

async function crearTablasProductos(sqlClient) {
    try {
        //si existe la table se borra
        console.log("-----> Borro si existe la tabla");
        await sqlClient.schema.dropTableIfExists("productos")

        console.log("----> Creamos la tabla");
        await sqlClient.schema.createTable("productos", table =>{ 
        table.increments("id").primary();
        table.string("title", 25).notNullable();
        table.float("price").notNullable();
        table.string("description", 80).notNullable();
        table.string("thumbnail", 1024)
        table.integer("stock").notNullable();

        })
        console.log("tabla de productsos creada con exito");

    }catch (error) {
        console.log("error al crear tabla de productos");
    }finally {
        sqlClient.destroy();
    }
    
}

//------------------------------------------

async function crearTablasCarritos(sqlClient) {
    try {
        //si existe la table se borra
        console.log("-----> Borro si existe la tabla");
        await sqlClient.schema.dropTableIfExists("carritos")

        console.log("----> Creamos la tabla");
        await sqlClient.schema.createTable("carritos", table =>{ 
        table.increments("id").primary();
        table.integer("idCarrito").notNullable;
        table.float("timestamp");
        table.string("creationDate");
        table.string("usuario", 30).notNullable();
        table.boolean("deleted").default(false);
        
        })

        await sqlClient.schema.createTable("prodsEnCarritos", table => {
            table.increments("id").primary();
            table.integer("idCarrito").notNullable();
            table.string("title", 25).notNullable();
            table.float("price").notNullable();
            table.string("descripcion", 80).notNullable();
            table.string("thumbnail", 1024)
            table.integer("stock").notNullable();
        })
        console.log("tabla de carritos creada con exito");

    }catch (error) {
        console.log("error al crear tabla de ");
    }finally {
        sqlClient.destroy();
    }
    
}