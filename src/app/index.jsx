import React, { useCallback, useState } from 'react';
import { Table, Modal, Button as ButtonBootstrap, Form } from 'react-bootstrap';
import { FiTrash2 } from 'react-icons/fi';
import * as Yup from 'yup';

import { Container, Button } from './styles';

const App = () => {
  const [show, setShow] = useState(false);
  const [clients, setClient] = useState([]);
  const [clientData, setClientData] = useState({});
  
  const handleChange = useCallback((e) => {
    const key = e.target.name;
    const value = e.target.value;
    const newClientData = clientData;

    newClientData[key] = value;

    setClientData({...newClientData});
  }, [clientData]);

  const handleSave = useCallback(() => {
    setClient([...clients, clientData]);
    setClientData({});
    setShow(false);
  }, [clientData]);

  const handleDelete = useCallback((index) => {
    const newClients = clients;
    newClients.splice(index, 1);
    setClient([...newClients]);

  }, [clients]);

  return(
    <Container>
      <Button onClick={() => setShow(true)}> ADICIONAR CLIENTE</Button>
      <Table striped hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>CPF/CNPJ</th>
            <th>Telefone</th>
            <th>CEP</th>
            <th>Logradouro</th>
            <th>Número</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {clients.map( (client, index) => (
            <tr key={index}>
              <td>{client.nome}</td>
              <td>{client.email}</td>
              <td>{client.iden}</td>
              <td>{client.telefone}</td>
              <td>{client.cep}</td>
              <td>{client.logradouro}</td>
              <td>{client.numero}</td>
              <td>{client.bairro}</td>
              <td>{client.cidade}</td>
              <td>{client.estado}</td>
              <td onClick={() => handleDelete(index)}><FiTrash2 color='#CE0A31' size={24}/></td>
            </tr>
          ))}
        </tbody>
        
      </Table>

      <Modal
      show={show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Cadastro de Cliente
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-2'>
            <Form.Label>Nome</Form.Label>
            <Form.Control 
              placeholder="Nome do cliente" 
              value={clientData.nome}
              name='nome'
              onChange={handleChange}
            />
          </Form.Group> 

          <Form.Group className='mb-2'>
            <Form.Label>E-mail</Form.Label>
            <Form.Control 
              placeholder="E-mail" 
              type='email' 
              value={clientData.email}
              name='email'
              onChange={handleChange}  
            />
          </Form.Group>

          <Form.Group className='mb-2'>
            <Form.Label>CPF/CNPJ</Form.Label>
            <Form.Control 
              placeholder="CPF/CNPJ" 
              value={clientData.iden}
              name='iden'
              onChange={handleChange}  
            />
          </Form.Group> 

          <Form.Group className='mb-2'>
            <Form.Label>Telefone</Form.Label>
            <Form.Control 
              placeholder="Telefone" 
              value={clientData.telefone}
              name='telefone'
              onChange={handleChange}
            />
          </Form.Group> 

          <Form.Group className='mb-2'>
            <Form.Label>CEP</Form.Label>
            <Form.Control
             placeholder="CEP" 
             value={clientData.cep}
             name='cep'
             onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className='mb-2'>
            <Form.Label>Logradouro</Form.Label>
            <Form.Control 
              placeholder="Logradouro" 
              value={clientData.logadrouro}
              name='logradouro'
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className='mb-2'>
            <Form.Label>Número</Form.Label>
            <Form.Control 
              placeholder="Número" 
              value={clientData.numero}
              name='numero'
              onChange={handleChange}  
            />
          </Form.Group>

          <Form.Group className='mb-2'>
            <Form.Label>Bairro</Form.Label>
            <Form.Control 
              placeholder="Bairro" 
              value={clientData.bairro}
              name='bairro'
              onChange={handleChange}  
            />
          </Form.Group>

          <Form.Group className='mb-2'>
            <Form.Label>Cidade</Form.Label>
            <Form.Control 
              placeholder="Cidade" 
              value={clientData.cidade}
              name='cidade'
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Estado</Form.Label>
            <Form.Control 
              placeholder="Estado" 
              value={clientData.estado}
              name='estado'
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className='justify-content-center'>
        <ButtonBootstrap onClick={() => setShow(false)}>Fechar</ButtonBootstrap>
        <ButtonBootstrap onClick={handleSave}>Salvar</ButtonBootstrap>
      </Modal.Footer>
    </Modal>
    </Container>
  );
}

export default App;
