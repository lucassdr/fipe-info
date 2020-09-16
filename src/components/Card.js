import React from "react"
import { Card, Button } from "react-bootstrap"

export default class CardComponent extends React.Component {
    render() {
        const { nome, anoFabricacao, anoModelo, marca, veiculo, preco, combustivel, referencia, fipe_codigo } = this.props
        return (
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{marca} {nome}</Card.Title>
                    <Card.Text>{preco}</Card.Text>
                    <Card.Text>Info: {veiculo}</Card.Text>
                    <Card.Text>Ano de fabricação: {anoFabricacao}</Card.Text>
                    <Card.Text>Ano do modelo: {anoModelo}</Card.Text>
                    <Card.Text>Combustível: {combustivel}</Card.Text>
                    <Card.Text>Data da avaliação: {referencia}</Card.Text>
                    <Card.Text>Código FIPE: {fipe_codigo}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}