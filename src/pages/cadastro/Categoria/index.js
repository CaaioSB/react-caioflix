import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastrar Categoria</h1>

      <Link to="/">
        Ir para home
        </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;