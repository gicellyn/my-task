import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/Home.css';
function Home() {
    return (
        <main className= "home container mt-5">
            <Card style={{ width: '300px' }}>
                <Card.Img className='' src="https://artia.com/wp-content/uploads/2016/11/Management-Project-Online.png" />
                <Card.Body className='c-body'>
                    <Card.Title>Trabalho em equipe</Card.Title>
                    <Card.Text>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem Ipsum has been the industry's. Various versions have evolved over the years, sometimes by accident. 
                    </Card.Text>
                    <Button variant="outline-success">Ver artigo completo</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '300px' }}>
                <Card.Img src="https://blog.portalpos.com.br/app/uploads/2021/10/como-ter-mais-organizacao-no-trabalho-1024x683.jpg" />
                <Card.Body className='c-body'>
                    <Card.Title>Como organizar meus compromissos?</Card.Title>
                    <Card.Text>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Card.Text>
                    <Button variant="outline-primary">Ver artigo completo</Button>
                </Card.Body>
            </Card>
            <Card  style={{ width: '300px' }}>
                <Card.Img src="https://wbweb.com.br/images/blog/como-definir-prioridades.jpg" />
                <Card.Body className='c-body'>
                    <Card.Title>Como estabeleço prioridades?</Card.Title>
                    <Card.Text>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Card.Text>
                    <Button variant="outline-warning">Ver artigo completo</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '300px' }}>
                <Card.Img className='' src="https://artia.com/wp-content/uploads/2016/11/Management-Project-Online.png" />
                <Card.Body className='c-body'>
                    <Card.Title>Trabalho em equipe</Card.Title>
                    <Card.Text>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem Ipsum has been the industry's. Various versions have evolved over the years, sometimes by accident. 
                    </Card.Text>
                    <Button variant="outline-success">Ver artigo completo</Button>
                </Card.Body>
            </Card>
            
            
        </main>
    );
}

export default Home;