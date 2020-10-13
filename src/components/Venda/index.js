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



export default class ListVendas extends Component{

    state = {
        vendas: []
    }

    async componentDidMount(vendedorId){
        const response = await api.get(vendedorId +'/venda');
         

        this.setState({ vendas: response.data})
    };


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
                                <td>1</td>
                                <td>Antonio</td>
                                <td>Antonio@gmail.com</td>
                                <td>
                                    <Link to="/venda"><Button color="info" size="sm">Venda</Button></Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        );
    }
}
