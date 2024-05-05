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
                    <h4>Localização: {dadosColeta.localizacao}</h4>
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
        localColeta: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
        usuario: PropTypes.string.isRequired,
        localizacao: PropTypes.string.isRequired,
        coordenadas:  PropTypes.shape({"latitude":PropTypes.number,"longitude":PropTypes.number}).isRequired,
        tiposResiduos:  PropTypes.arrayOf(PropTypes.string).isRequired
    })
}

export default CardColeta;