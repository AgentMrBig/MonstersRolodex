import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';
import styled from 'styled-components';

const StyledApp = styled.div`
  text-align: center;
`;

const TitleH1 = styled.h1`
  font-family: 'Bigelow Rules';
  font-size: 72px;
  color: #0ccac4;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <StyledApp>
        <TitleH1> Monsters Rolodex </TitleH1>
        <SearchBox
          placeholder="search monsters"
          handleChange={e => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </StyledApp>
    );
  }
}

export default App;
