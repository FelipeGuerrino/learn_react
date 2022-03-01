import Item from './components/Item';
import Card from './components/Card';

const App = () => {
  return(
    <div>
      <h1>
        Hello World!
      </h1>
      <ul> {/* TODO: add dynamic functionality to the Item component */}
        <Item>
          Item 1
        </Item>
        <Item>
          Item 2
        </Item>
        <Item>
          Item 3
        </Item>

      </ul>
      <Card />
    </div>
  )
}

export default App;