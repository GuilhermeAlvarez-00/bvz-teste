import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import './Demandas.css'

function Demandas() {
    function doacao() {
        alert('Doação concluida!')
    }

    return(
        <section className="section-demandas">
            <Container>
                <h2>Veja abaixo a lista de demandas</h2>

                <div className="container-cad-demandas">
                    <h2>Clique no botão para fazer uma nova demanda</h2>
                    <a as={Link} href="/cadastrar-demanda" to="/cadastrar-demanda" className="button">Cadastrar Demanda</a>
                </div>

                <div className="container-demandas">
                    <h2>Demandas</h2>
                    <hr />
                    <div className="demandas">
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Nome Morador</Card.Title>
                                <Card.Text>
                                Demandas
                                </Card.Text>
                                <a className="button" onClick={doacao}>Doar</a>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Demandas;