const fs = require("fs");
const nombreArchivo = "info.json";
const nombreArchivoPackage = "package.json";

const operacion = async () => {
    const archivoPackageJson = await fs.promises.readFile(nombreArchivoPackage, "utf-8");
    //console.log(archivoPackageJson);
    const info = {
        contenidoStr:archivoPackageJson,
        contenidoObj:JSON.parse(archivoPackageJson),
        size:(await fs.promises.statfs(nombreArchivoPackage)).bsize
    }
    //console.log(info);
    await fs.promises.writeFile(nombreArchivo, JSON.stringify(info));
    const contenido = JSON.parse(await fs.promises.readFile(nombreArchivo, "utf-8"));
    console.log(contenido);
}

operacion();