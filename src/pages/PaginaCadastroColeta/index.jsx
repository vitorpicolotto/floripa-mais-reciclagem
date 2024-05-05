import { useForm } from "react-hook-form";
import { PageTitle, FormComponent, InputWrapper } from "./styles.js";



function PaginaCadastroColeta(){
    const {register, handleSubmit, formState:{errors}} = useForm();
    
    function sendForm(formValue){
        console.log(formValue)
    }

    return(
        <div className="container">
            <PageTitle>Cadastrar novo local de coleta</PageTitle>

            <FormComponent onSubmit={handleSubmit(sendForm)}>
                <InputWrapper>
                <label htmlFor="localColeta">Local de coleta</label>
                <input type="text" 
                {...register("localColeta",{
                    required: 'Campo obrigatório',
                    maxLength: {value: 100, message: "Máximo 100 caracteres"}
                })}
                />
                {errors?.localColeta && <p>{errors.localColeta?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                <label htmlFor="descricao">Descrição do local</label>
                <input type="text" 
                {...register("descricao",{
                    required: 'Campo obrigatório',
                    maxLength: {value: 300, message: "Máximo 300 caracteres"}
                })}
                />
                {errors?.descricao && <p>{errors.descricao?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                <label htmlFor="usuario">Usuario</label>
                <input type="text" 
                {...register("usuario",{
                    required: 'Campo obrigatório',
                    maxLength: {value: 50, message: "Máximo 50 caracteres"}
                })}
                />
                {errors?.usuario && <p>{errors.usuario?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                <label htmlFor="localizacao">Endereço</label>
                <input type="text" 
                {...register("localizacao",{
                    required: 'Campo obrigatório',
                    maxLength: {value: 200, message: "Máximo 200 caracteres"}
                })}
                />
                {errors?.localizacao && <p>{errors.localizacao?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                <label htmlFor="coordenadas">Coordenadas</label>
                <input type="number" placeholder= "Latitude"
                {...register("coordenadas",{
                    required: 'Campo obrigatório',
                    maxLength: {value: 10, message: "Máximo 10 caracteres"}
                })}
                />
                 <input type="number" placeholder= "Longitude"
                {...register("coordenadas",{
                    required: 'Campo obrigatório',
                    maxLength: {value: 10, message: "Máximo 10 caracteres"}
                })}
                />
                {errors?.coordenadas && <p>{errors.coordenadas?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                <label htmlFor="tiposResiduos">Tipos de resíduos</label>
                <select
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
                    <button type="submit">Cadastrar</button>
                </div>
            </FormComponent>

        </div>
    )
}

export default PaginaCadastroColeta;