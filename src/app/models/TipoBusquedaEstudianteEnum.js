export const TipoBusquedaEstudianteEnum = {
    nombres: 'nombres',
    apellidos: 'apellidos',
    apellidos_nombres: 'apellidos_nombres',
    codigoCompleto: 'codigoCompleto',
    documento: 'documento'

}

export type TipoBusquedaEstudianteType = $Keys<typeof TipoBusquedaEstudianteEnum>;