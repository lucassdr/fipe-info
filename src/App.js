import React from 'react'
import { Form, Col, Row, Container } from "react-bootstrap"
import { retornarMarcas, retornarVeiculos, retornarModelos, retornarCarro } from "./service/Service"
import Card from "./components/Card"
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      marcas: [],
      veiculos: [],
      modelos: [],
      marca: "",
      veiculo: "",
      modelo: "",
      auto: null
    }
  }

  componentDidMount = async () => {
    let marcas = await retornarMarcas()
    this.setState({ marcas })
  }

  buscarVeiculos = async (veiculo) => {
    let veiculos = await retornarVeiculos(veiculo)
    this.setState({ veiculos, veiculo })
  }

  buscarModelos = async (modelo) => {
    let { veiculo } = this.state
    let modelos = await retornarModelos(veiculo, modelo)
    this.setState({ modelos, modelo })
  }

  buscarCarro = async (modeloEscolhido) => {
    let { veiculo, modelo } = this.state
    let carro = await retornarCarro(veiculo, modelo, modeloEscolhido)
    this.setState({ carro })
  }

  render() {
    let { marcas, veiculos, modelos, carro } = this.state
    return (
      <Container>
        <Row>
          <Col sm={4}>
            <Form>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Escolha a marca</Form.Label>
                <Form.Control as="select" custom onChange={e => this.buscarVeiculos(e.target.value)}>
                  <option>Escolha a marca</option>
                  {marcas.length > 0 && marcas.map((marca, i) =>
                    <option value={marca.id} key={`${++i}`}>{marca.name}</option>
                  )}
                </Form.Control>
              </Form.Group>
            </Form>
            {veiculos.length > 0 &&
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Escolha o tipo de veículo</Form.Label>
                  <Form.Control as="select" custom onChange={e => this.buscarModelos(e.target.value)}>
                    <option>Escolha o tipo de veículo</option>
                    {veiculos.length > 0 && veiculos.map((veiculo, i) =>
                      <option value={veiculo.id} key={`${++i}`}>{veiculo.name}</option>
                    )}
                  </Form.Control>
                </Form.Group>
              </Form>
            }
            {modelos.length > 0 &&
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Escolha o modelo</Form.Label>
                  <Form.Control as="select" custom onChange={e => this.buscarCarro(e.target.value)}>
                    <option>Escolha o modelo</option>
                    {modelos.length > 0 && modelos.map((modelo, i) =>
                      <option value={modelo.id} key={`${++i}`}>{modelo.name}</option>
                    )}
                  </Form.Control>
                </Form.Group>
              </Form>
            }
          </Col>
          {carro &&
            <Col sm={8}>
              <Card nome={carro.name} anoFabricacao={carro.id}
                anoModelo={carro.ano_modelo} marca={carro.marca}
                veiculo={carro.veiculo} preco={carro.preco}
                combustivel={carro.combustivel} referencia={carro.referencia}
                fipe_codigo={carro.fipe_codigo} />
            </Col>
          }
        </Row>
      </Container>
    )
  }
}