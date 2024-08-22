function nombreResolucion(ancho, alto) {
    if (ancho < 1280 || alto < 720) {
        return false;
    } else if (ancho >=7680 && alto >= 4320) {
        return '8K';
    } else if (ancho >=3840 && alto >= 2160) {
        return '4k';
    } else if (ancho >=2560 && alto >= 1440) {
        return 'WQHD';
    } else if (ancho >=1920 && alto >= 1080) {
        return 'FHD';
    } else if (ancho >=1280 && alto >= 720) {
        return 'HD';
    }
        
}

let nombre = nombreResolucion(3840, 2160);
console.log(nombre);