import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { PedidosContext } from '../contexts/PedidosContext.jsx';
import { useNavigate } from 'react-router-dom';
import './css/solicitar.css';

export default function Novo({setModalOpen}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { incluirPedido } = useContext(PedidosContext);
  const navigate = useNavigate();

  function onSubmit(data) {
    incluirPedido(data); navigate('/solicitacoes'); setModalOpen(false);
  }
  const { meusPedidos } = useContext(PedidosContext);
  return (
    <>
      <section className='ContainerSectionSolicitar'>
      <h1>Nova Solicitação</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='formSolicitar'>
        <label for="opcoes">Departamento</label>
        <select required='true'
          defaultValue={''}
          name="opcoes"
          {...register('nome', { required: 'Campo Obrigatório!' })}
        >
          <option disabled></option>
          <option>Coordenação Curso</option>
          <option>Financeiro</option>
          <option>Secretaria Acadêmica</option>
        </select>

        <label>Mensagem</label>
        <textarea
          minLength={10}
          rows="4"
          cols="50"
          placeholder="Digite aqui..."
          {...register('msg', { required: 'Campo Obrigatório' })}
        ></textarea>
        {errors.msg && <p>{errors.msg.message}</p>}

        <button type="submit">Enviar</button>
      </form>
    </section>
    </>
  );
}

{
  /* <h2>Minhas Solicitações</h2>
      <ul>
        {meusPedidos.map((pedido, index) => (
          <li className="lista" id={index}>{pedido.nome} - {pedido.msg}
          <p>Resposta:</p></li>
        ))}
      </ul> */
}
