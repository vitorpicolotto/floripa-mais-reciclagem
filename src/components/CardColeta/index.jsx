import * as PropTypes from  'prop-types';

function CardColeta({dadosColeta}){
    return(
        <div className='card'>
            <div className='card-dados'>
                <h1 className='card-titulo'>
                    {dadosColeta.localColeta}
                </h1>
                <p>Cadastrado por: {dadosColeta.usuario}</p>
                <p>Descrição: {dadosColeta.descricao}</p>

                <div className='card-localizacao'>
                    <h4>Localização: {dadosColeta.rua}, {dadosColeta.numero} - {dadosColeta.bairro}</h4>
                    <p>Coordenadas: Latitude - {dadosColeta.coordenadas[0]} S, Longitude - {dadosColeta.coordenadas[1]} W</p>
                </div>

                <div className='card-residuos'>
                    <h4>Tipos de resíduos:</h4>
                    <p>{dadosColeta.tiposResiduos}</p>
                    
                </div>

            </div>
        </div>
    )
}

CardColeta.propTypes = {
    dadosColeta: PropTypes.exact({
        id: PropTypes.string.isRequired,
        localColeta: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
        usuario: PropTypes.string.isRequired,
        cep: PropTypes.number.isRequired,
        bairro: PropTypes.string.isRequired,
        rua: PropTypes.string.isRequired,
        numero: PropTypes.number.isRequired,
        coordenadas:  PropTypes.arrayOf(PropTypes.number).isRequired,
        tiposResiduos:  PropTypes.string.isRequired
    })
}

export default CardColeta;