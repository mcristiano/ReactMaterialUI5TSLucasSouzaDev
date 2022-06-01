
// import { Api } from '../axios-config';

import { Environment } from '../../../environment';
import { Api } from '../../axios-config';


interface IListagemPessoa {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}

interface IDetalhePessoa {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}

type TPessoasComTotalCount = {
  data: IListagemPessoa[];
  totalCount: number;  
}

interface IPessoasComTotalCount {
    data: IListagemPessoa[];
    totalCount: number;
  }
  

const getAll = async (page = 1, filter = ''): Promise<IPessoasComTotalCount | Error> => {
  try {
    const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
      };
    }

    return new Error('Erro ao listar os registros.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
  }
};

const getById = async ( id: number ): Promise<IPessoasComTotalCount | Error> => {
  try {
    const { data } = await Api.get(`/pessoa/${id}`);
    
    if (data) {
      return data ;
    }
    
    return new Error('Erro ao consultar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao consultar o registro.');
  }    

};

const create = async ( dados: Omit<IDetalhePessoa, 'id' > ) : Promise<number | Error> => {
  try {
    const { data } = await Api.post<IDetalhePessoa>('/pessoa', dados );
        
    if (data) {
      return data.id ;
    }
        
    return new Error('Erro ao criar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao criar o registro.');
  }
};

const updateById = async (id: number, dados: Omit<IDetalhePessoa, 'id' > ): Promise<void | Error> => {
  try {
    const { data } = await Api.put<IDetalhePessoa>(`/pessoa/${id}`, dados );
            
    return new Error('Erro ao atualizar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao atualizar o registro.');
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    const { data } = await Api.delete(`/pessoa/${id}` );
           
    return new Error('Erro ao apagar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao apagar o registro.');
  }

};

export const PessoasService = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};