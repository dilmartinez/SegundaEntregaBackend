import { promises as fs } from "fs";
import config from "../config.js";

class ContenedorArchivo {

  constructor(ruta) {
    this.ruta = `${config.fileSystem.path}/${ruta}`;
  }

  async listar(id) {
    try {
      const read = await fs.readFile(this.ruta, "utf-8");
      const data = JSON.parse(read);
      const element = data.find((element) => id === element.id);

      if (!element) {
        return null;
      }
      return element;
    } catch (error) {
      console.log(error);
    }
  }

  async listarAll() {
    try {
      const read = await fs.readFile(this.ruta, "utf-8");
      return JSON.parse(read);
    } catch (error) {
      console.log(error);
    }
  }

  async guardar(element) {
    try {
      const read = await fs.readFile(this.ruta, "utf-8");
      const data = JSON.parse(read);

      const arrayOfIds = data.map((element) => element.id);
      const maxId = arrayOfIds.length === 0 ? 0 : Math.max(...arrayOfIds);
      const id = maxId + 1;
      const newElement = { id, ...element };
      data.push(newElement);

      await fs.writeFile(this.ruta, JSON.stringify(element, null, 2), "utf-8");

      return newElement;
    } catch (error) {
      console.log(error);
    }
  }

  async actualizar(element, id) {
    try {
      const read = await this.listarAll();
      const data = JSON.parse(read);

      const filteredElements = data.filter((element) => element.id !== id);
      const newElement = { id, ...element };
      data = [...filteredElements, newElement];

      await fs.writeFile(this.ruta, JSON.stringify(element, null, 2), "utf-8");

      return newElement;
    } catch (error) {
      console.log(error);
    }
  }

  async borrar(id) {
    const read = await this.listarAll()
    const newData = read.findIndex(o => o.id == id)
    if (newData == -1) {
        throw new Error(`Error al borrar: no se encontró el id ${id}`)
    }

    read.splice(newData, 1)
    try {
        await fs.writeFile(this.ruta, JSON.stringify(read, null, 2))
    } catch (error) {
        throw new Error(`Error al borrar: ${error}`)
    }
}

async borrarAll() {
  try {
    await fs.writeFile(this.ruta, JSON.stringify([], null, 2), "utf-8");
    return await fs.readFile(this.ruta, "utf-8");
  } catch (error) {
    console.log(error);
  }
}
}

export default ContenedorArchivo;
