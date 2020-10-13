import React, { Component } from 'react';

import { 
    Table,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

import { Link } from "react-router-dom";

import api from '../../api';

class FormVendedor extends Component {

    state = {model: {
        id: 0,
        name: '',
        email: ''
    }}

    setValues = (e, field) => {
        const { model } = this.state;
        model[field] = e.target.value;
        this.setState({ model });
    }

    create = () => {
        let data = {
            id: parseInt(this.state.model.id),
            name: this.state.model.name,
            email: this.state.model.email,
        };
        this.props.vendedorCreate(data);
    }

    render(){
        return(
            <Form>
                <FormGroup>
                    <Label for="name">Nome:</Label>
                    <Input id="name" type="text" value={this.state.model.name} onChange={e => this.setValues(e, 'name')} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input id="email" type="email" value={this.state.model.email} onChange={e => this.setValues(e, 'email')} />
                </FormGroup>
                <Button color="info" block onClick={this.create}>Cadastrar</Button>
            </Form>
        );
    }
}

class ListVendedor extends Component{


    render(){
        const { vendedores } = this.props;
        return(
            <Table className="table-bordered text-center">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Venda</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vendedores.map( vendedor => (
                            <tr key={vendedor.id}>
                                <td>{vendedor.id}</td>
                                <td>{vendedor.name}</td>
                                <td>{vendedor.email}</td>
                                <td>
                                    <Link to='/venda/?sort=vendedor.id'><Button color="info" size="sm">Venda</Button></Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        );
    }
}

export default class BoxVendedor extends Component{

    state = {
        vendedores: []
    }

    async componentDidMount(){
        const response = await api.get('');
         

        this.setState({ vendedores: response.data})
    }

    create = (vendedor) => {
        api.post('',vendedor)
        .then((newVendedor) => {
            let {vendedores} = this.state;
            vendedores.push(newVendedor);
            this.setState({vendedores});
        })
        .catch(e => console.log(e));
    }

    render(){
        return(
            <div className='row'> 
                <div className='col-md-6'>
                    <h2> Cadastro de Vendedores </h2>
                    <FormVendedor vendedorCreate={this.create} />
                </div>
                <div className='col-md-6'>
                    <h2> Vendedores Cadastrados </h2>
                    <ListVendedor vendedores={this.state.vendedores} />
                </div>
            </div>
        );
    }
}