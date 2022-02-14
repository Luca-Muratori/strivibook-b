import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'
import CommentArea from './components/CommentArea'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            {/* <WarningSign text="Watch out again!" /> */}
            {/* <MyBadge text="NEW!!" color="info" /> */}
            {/* <SingleBook book={fantasyBooks[0]} /> */}
             <Col xs={9} lg={6}>
              <BookList books={fantasyBooks} />
            </Col>
            <Col xs={3} lg={6}>
              <CommentArea />
            </Col>
          </Row>
        </Container>

      </header>
    </div>
  )
}

export default App
