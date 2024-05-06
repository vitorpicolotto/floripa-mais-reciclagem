import { useForm } from "react-hook-form";
import { PageTitle, InputWrapper, FormComponent } from "./styles";
import React, {useContext} from "react";
import { UsuariosContext } from "../../context/UsuariosContext";

//falta usar API viaCep para coletar as informações do endereço da pessoa que está cadastrando.
        

function PaginaCadastroUsuario(){
    const {register, handleSubmit,  formState:{errors}} = useForm();
    const current = new Date().toISOString().split("T")[0] //pega data atual
    const { cadastrarUsuario} = useContext(UsuariosContext)

    const onSubmit = (data) => {
        cadastrarUsuario(data);
    }


    return(
        <div className="container">
            <PageTitle>Cadastrar Usuário</PageTitle>
            
            <FormComponent onSubmit={handleSubmit(onSubmit)}> 
                <InputWrapper>
                    <label htmlFor="nome">Nome Completo</label>
                    <input
                        {...register("nome",{
                        required: 'Campo obrigatório',
                        maxLength: {value: 50, message: "Máximo 50 caracteres"}
                        })}
                    />
                {errors?.nome && <p>{errors.nome?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="idade">Idade</label>
                    <input
                        {...register("idade",{
                        required: 'Campo obrigatório',
                        maxLength: {value: 2, message: "Máximo 02 caracteres"}
                        })}
                    />
                {errors?.idade && <p>{errors.idade?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="cpf">CPF (apenas números)</label>
                    <input
                        {...register("cpf",{
                        required: 'Campo obrigatório',
                        maxLength: {value: 11, message: "Máximo 11 caracteres"}
                        })}
                    />
                {errors?.cpf && <p>{errors.cpf?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="data_nasc">Data de Nascimento</label>
                    <input
                    type='date' max={current}
                        {...register("data_nasc",{
                        required: 'Campo obrigatório'
                        })}
                    />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="sexo">Sexo</label>
                    <select
                        {...register("sexo",{
                        required: 'Campo obrigatório'
                        })}>
                    <option value="">Selecionar...</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Outro">Outro</option>
                    </select>
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email"
                        {...register("email",{
                        required: 'Campo obrigatório',
                        maxLength: {value: 50, message: "Máximo 50 caracteres"}
                        })}
                    />
                {errors?.email && <p>{errors.email?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="senha">Senha</label>
                    <input type="password"
                        {...register("senha",{
                        required: 'Campo obrigatório',
                        maxLength: {value: 20, message: "Máximo 20 caracteres"}
                        })}
                    />
                {errors?.senha && <p>{errors.senha?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="cep">CEP</label>
                    <input
                        {...register("cep",{
                        required: 'Campo obrigatório',
                        maxLength: {value: 8, message: "Máximo 8 caracteres"}
                        })}
                    />
                {errors?.cep && <p>{errors.cep?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="endereco">Endereço</label>
                    <input
                        {...register("endereco",{
                        required: 'Campo obrigatório',
                        maxLength: {value: 30, message: "Máximo 30 caracteres"}
                        })}
                    />
                {errors?.endereco && <p>{errors.endereco?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="numero">Número da residência</label>
                    <input
                        {...register("numero",{
                        required: 'Campo obrigatório',
                        maxLength: {value: 5, message: "Máximo 5 caracteres"}
                        })}
                    />
                {errors?.numero && <p>{errors.numero?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="bairro">Bairro</label>
                    <input
                        {...register("bairro",{
                        required: 'Campo obrigatório',
                        maxLength: {value: 20, message: "Máximo 20 caracteres"}
                        })}
                    />
                {errors?.bairro && <p>{errors.bairro?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="cidade">Cidade</label>
                    <input
                        {...register("cidade",{
                        required: 'Campo obrigatório',
                        maxLength: {value: 20, message: "Máximo 20 caracteres"}
                        })}
                    />
                {errors?.cidade && <p>{errors.cidade?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="estado">Estado (Sigla)</label>
                    <input
                        {...register("estado",{
                        required: 'Campo obrigatório',
                        maxLength: {value: 2, message: "Máximo 2 caracteres"}
                        })}
                    />
                {errors?.estado && <p>{errors.estado?.message}</p>}
                </InputWrapper>

                <div>
                    <button type="submit">Cadastrar Usuário</button>
                </div>

            </FormComponent>
        </div>
    )
}

export default PaginaCadastroUsuario;