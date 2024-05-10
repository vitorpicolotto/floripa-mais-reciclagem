import { useForm } from "react-hook-form";
import { PageTitle, InputWrapper, FormComponent } from "./styles";
import "./style.css"
import React, {useContext} from "react";
import { UsuariosContext } from "../../context/UsuariosContext";
import { Link } from "react-router-dom";
        

function PaginaCadastroUsuario(){
    const {register, handleSubmit, setValue, getValues,  formState:{errors}} = useForm();
    const current = new Date().toISOString().split("T")[0] //pega data atual
    const { cadastrarUsuario} = useContext(UsuariosContext)

    const onSubmit = (data) => {
        cadastrarUsuario(data);
    }

    //viaCep API

    const buscarCep = () =>{
        let cep = getValues('cep')

        if(!!cep && cep.length==8){
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then(data => {
                setValue('endereco', data.logradouro)
                setValue('bairro', data.bairro)
                setValue('cidade', data.localidade)
                setValue('estado', data.uf)
            })
            .catch((error) => console.error("Erro na API viaCep", error))
        }
    }


    return(
        <div className="container">
            <PageTitle>Cadastro de usuário</PageTitle>
            <h3 className="form-texto">Já tem uma conta? Faça seu
            <Link className="form-link" to="/login"> login!</Link>
             </h3>
            
            <FormComponent onSubmit={handleSubmit(onSubmit)}> 
                <InputWrapper>
                    <label htmlFor="nome">Nome Completo</label>
                    <input
                        className="form-input"
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
                    className="form-input"
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
                    className="form-input"
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
                    type='date' max={current} className="form-input"
                        {...register("data_nasc",{
                        required: 'Campo obrigatório'
                        })}
                    />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="sexo">Sexo</label>
                    <select
                    className="form-input"
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
                    <input type="email" id="email" className="form-input"
                        {...register("email",{
                        required: 'Campo obrigatório',
                        maxLength: {value: 50, message: "Máximo 50 caracteres"}
                        })}
                    />
                {errors?.email && <p>{errors.email?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" className="form-input"
                        {...register("senha",{
                        required: 'Campo obrigatório',
                        maxLength: {value: 20, message: "Máximo 20 caracteres"}
                        })}
                    />
                {errors?.senha && <p>{errors.senha?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label>CEP</label>
                    <input
                    type="number" className="form-input"
                    name="cep"
                        {...register("cep",{
                        required: true,
                        onBlur: () => buscarCep()
                        })}
                    />
                {errors?.cep && <p>{errors.cep?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="logradouro">Endereço</label>
                    <input
                    type="text"
                    name="endereco" className="form-input"
                        {...register("endereco",{
                        required: 'Campo obrigatório'
                        })}
                    />
                {errors?.endereco && <p>{errors.endereco?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="numero">Número da residência</label>
                    <input
                    type="number"
                    name="numero" className="form-input"
                        {...register("numero",{
                        required: 'Campo obrigatório'
                        })}
                    />
                {errors?.numero && <p>{errors.numero?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="bairro">Bairro</label>
                    <input
                    type="text"
                    name="bairro" className="form-input"
                        {...register("bairro",{
                        required: 'Campo obrigatório'
                        })}
                    />
                {errors?.bairro && <p>{errors.bairro?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="cidade">Cidade</label>
                    <input
                    type="text"
                    name="cidade" className="form-input"
                        {...register("cidade",{
                        required: 'Campo obrigatório'
                        })}
                    />
                {errors?.cidade && <p>{errors.cidade?.message}</p>}
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="estado">Estado</label>
                    <input
                    type="text"
                    name="estado" className="form-input"
                        {...register("estado",{
                        required: 'Campo obrigatório'
                        })}
                    />
                {errors?.estado && <p>{errors.estado?.message}</p>}
                </InputWrapper>

                <div className="form-btn">
                    <button className="btn" type="submit">Cadastrar Usuário</button>
                </div>

            </FormComponent>

            
        </div>
    )
}

export default PaginaCadastroUsuario;