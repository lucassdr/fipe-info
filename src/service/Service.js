import Axios from "axios"

const baseURL = "http://fipeapi.appspot.com/api/1"

export const retornarMarcas = async () => {
    return await Axios.get(`${baseURL}/carros/marcas.json`)
        .then(res => {
            return res.data
        })
        .catch(err => console.log("errRetornarMarcas", err))
}

export const retornarVeiculos = async (veiculo) => {
    return await Axios.get(`${baseURL}/carros/veiculos/${veiculo}.json`)
        .then(res => {
            return res.data
        })
        .catch(err => console.log("errRetornarMarcas", err))
}

export const retornarModelos = async (veiculo, modelo) => {
    return await Axios.get(`${baseURL}/carros/veiculo/${veiculo}/${modelo}.json`)
        .then(res => {
            return res.data
        })
        .catch(err => console.log("errRetornarMarcas", err))
}

export const retornarCarro = async (veiculo, modelo, carro) => {
    return await Axios.get(`${baseURL}/carros/veiculo/${veiculo}/${modelo}/${carro}.json`)
        .then(res => {
            return res.data
        })
        .catch(err => console.log("errRetornarMarcas", err))
}