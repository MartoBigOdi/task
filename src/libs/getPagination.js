export const getPagination = (page, size) => {

    const limit = size ? +size : 3; //Si existe un tamaño que me viene lo convierte ese, sino es 3.

    const offset = page ? page * limit : 0;

    return { limit, offset };
    
    //El offset es para controlar y no repetir las páginas. 

};