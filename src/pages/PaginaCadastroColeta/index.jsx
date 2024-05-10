import { useForm } from "react-hook-form";
import { PageTitle, FormComponent, InputWrapper } from "./styles.js";
import "./styles.css"
import React, {useContext} from "react";
import { ColetasContext } from "../../context/ColetasContext.jsx";



function PaginaCadastroColeta(){
    const {register, handleSubmit, setValue, getValues, formState:{errors}} = useForm();
    const {cadastrarColeta} = useContext(ColetasContext)
    
    const onSubmit= (data)=> {
        cadastrarColeta(data)
    }

    //viaCep API

    const buscarCep = () =>{
        let cep = getValues('cep')

        if(!!cep && cep.length==8){
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then(data => {
                setValue('rua', data.logradouro)
                setValue('bairro', data.bairro)
            })
            .catch((error) => console.error("Erro na API viaCep", error))
        }
    }


    return(
        <div className="container">
            <PageTitle>Cadastrar novo local de coleta</PageTitle>

            <FormComponent onSubmit={handleSubmit(onSubmit)}>
                <InputWrapper>
                <label htmlFor="localColeta">Nome do ponto</label>
                <input type="text" className="form-input"
                {...register("localColeta",{
                    required: 'Campo obrigatório',
                    maxLength: {value: 100, message: "Máximo 100 caracteres"}
                })}
                />
                {errors?.localColeta && <p>{errors.localColeta?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                <label htmlFor="descricao">Descrição do local</label>
                <input type="text" className="form-input"
                {...register("descricao",{
                    required: 'Campo obrigatório',
                    maxLength: {value: 300, message: "Máximo 300 caracteres"}
                })}
                />
                {errors?.descricao && <p>{errors.descricao?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                <label htmlFor="usuario">Usuario</label>
                <input type="text" className="form-input"
                {...register("usuario",{
                    required: 'Campo obrigatório',
                    maxLength: {value: 50, message: "Máximo 50 caracteres"}
                })}
                />
                {errors?.usuario && <p>{errors.usuario?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                <label >CEP</label>
                <input type="number" className="form-input"
                name="cep"
                {...register("cep",{
                    required: true,
                    onBlur: () => buscarCep()
                })}
                />
                {errors?.cep && <p>{errors.cep?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                <label >Endereço</label>
                <input type="text" className="form-input"
                name="rua"
                {...register("rua",{
                    required: 'Campo obrigatório'
                })}
                />
                {errors?.rua && <p>{errors.rua?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                <label >Número</label>
                <input type="text" className="form-input"
                name="numero"
                {...register("numero",{
                    required: 'Campo obrigatório'
                })}
                />
                {errors?.numero && <p>{errors.numero?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                <label >Bairro</label>
                <input type="text" className="form-input"
                name="bairro"
                {...register("bairro",{
                    required: 'Campo obrigatório'
                })}
                />
                {errors?.bairro && <p>{errors.bairro?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                <label htmlFor="coordenadas">Coordenadas</label>
                <input type="number" placeholder= "Latitude" className="form-input"
                {...register("coordenadas",{
                    required: 'Campo obrigatório',
                    maxLength: {value: 10, message: "Máximo 10 caracteres"}
                })}
                />
                 <input type="number" placeholder= "Longitude" className="form-input"
                {...register("coordenadas",{
                    required: 'Campo obrigatório',
                    maxLength: {value: 10, message: "Máximo 10 caracteres"}
                })}
                />
                {errors?.coordenadas && <p>{errors.coordenadas?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                <label htmlFor="tiposResiduos">Tipos de resíduos</label>
                <select className="form-input"
                {...register("tipoResiduos", {
                    required:"Campo obrigatório",
                })}>
                <option value="">Qual o tipo de resíduo?</option>
                <option value="Baterias">Baterias</option>
                <option value="Eletrônicos">Eletrônicos</option>
                <option value="Entulho">Entulho</option>
                <option value="Metal">Metal</option>
                <option value="Óleo">Óleo</option>
                <option value="Plástico">Plástico</option>
                <option value="Vidro">Vidro</option>
                <option value="Todos">Todos</option>
                </select>
                </InputWrapper>

                <div>
                    <button className="btn" type="submit">Cadastrar</button>
                </div>
            </FormComponent>

        </div>
    )
}

export default PaginaCadastroColeta;