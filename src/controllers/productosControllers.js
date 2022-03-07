const HotelWaikiki = {
    idHo: 'c6_01',
    zoneHo : 'comuna6',
    title: 'Hotel Waikiki',
    direccionHo: [
    'Acceso: Querandies 4486 - Caballito',
    'Garage: Rio de Janeiro 271 - Caballito'
],
    webHo: 'https://www.hotelwaikiki.com.ar/contacto.html',
    telefonoHo: '4982-4721',
    emailHo: 'consoltas@hottelwaikikii.com.ar',
    tipoTurno: [
    '4 horas (2 Personas)- Lunes a Domingo - Horario 6-12hs',
    '3 horas(2 Personas) - Lunes a Domingo - a Partir de las 12 horas',
    '2 horas(2 Personas)- Viernes, Sábado, Víspera y Feriados - Entre 8hs y 23hs'
],
    rangoTurno: '2000-3200',
    precioTurno: '',
    roomsHo: [
    {
        const HotelWaikiki01 = {
            idRoom: 'c6_01room01',
            nameRoom: 'Suite Junior',
            turnoRoom: '2000 pesos ARG - 2 Personas',
            pernocteRoom: '2400 pesosARG - 2 Personas',
            atributosRoom: {
                roomService: true,
                sexShox: true,
                aire: true,
                wifi: true,
                musica: true,
                hidro: false
            }
        }
    },
    {
        const HotelWaikiki02: = {
            idRoom: 'c6_01room02',
            nameRoom: 'Suite Confort',
            turnoRoom: '2200 pesos ARG - 2 Personas',
            pernocteRoom: '2600 pesosARG - 2 Personas',
            atributosRoom: {
                roomService: true,
                sexShox: true,
                aire: true,
                wifi: true,
                musica: true,
                hidro: false
            }
        }
    },
    {
        const HotelWaikiki03 = {
            idRoom: 'c6_01room03',
            nameRoom: 'Suite Spa',
            turnoRoom: '2400 pesos ARG - 2 Personas',
            pernocteRoom: '2800 pesosARG - 2 Personas',
            atributosRoom: {
                roomService: true,
                sexShox: true,
                aire: true,
                wifi: true,
                musica: true,
                hidro: false
            }
        }
    },
    {
        const HotelWaikiki04 = {
            idRoom: 'c6_01room04',
            nameRoom: 'Suite Hidro Spa',
            turnoRoom: '2600 pesos ARG - 2 Personas',
            pernocteRoom: '3000 pesosARG - 2 Personas',
            atributosRoom: {
                roomService: true,
                sexShox: true,
                aire: true,
                wifi: true,
                musica: true,
                hidro: false
            }
        }
    },
    {
        const HotelWaikiki05 = {
            idRoom: 'c6_01room05',
            nameRoom: 'Suite Hidro Dance',
            turnoRoom: '2800 pesos ARG - 2 Personas',
            pernocteRoom: '3800 pesosARG - 2 Personas',
            atributosRoom: {
                roomService: true,
                sexShox: true,
                aire: true,
                wifi: true,
                musica: true,
                hidro: false
            }
        }
    },
    {
        const HotelWaikiki06 = {
            idRoom: 'c6_01room06',
            nameRoom: 'Suite Apart Spa',
            turnoRoom: '3000 pesos ARG - 2 Personas',
            pernocteRoom: '4000 pesosARG - 2 Personas',
            atributosRoom: {
                roomService: true,
                sexShox: true,
                aire: true,
                wifi: true,
                musica: true,
                hidro: false
            }
        }
    },
    {
        const HotelWaikiki07 = {
            idRoom: 'c6_01room06',
            nameRoom: 'Suite Apart Spa',
            turnoRoom: '3200 pesos ARG - 2 Personas',
            pernocteRoom: '4200 pesosARG - 2 Personas',
            atributosRoom: {
                roomService: true,
                sexShox: true,
                aire: true,
                wifi: true,
                musica: true,
                hidro: false
            }
        }
    }
]
}
const controller = {
    productosHome: (req, res) => {
        res.render("home");
    },
    buscarProducto: (req, res) =>{
    res.render("productos/buscar")
    },
    buscar01: (req, res) =>{
        res.render("productos/buscarP")
    },
    buscar02: (req, res) =>{
        res.render("productos/buscarProducto")
    },
   detalles01: (req , res) => {
       res.render("productos/detalleProducto"), {producto:title
   },
    detalles02: (req, res) =>{
        res.render("productos/detallesProducto")
    },
    reserve: (req, res) =>{
        res.render("productos/reservas")
    }
}
module.exports = controller;