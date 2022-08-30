import React from 'react'
import { Provider } from 'react-redux'
import { MovieCard } from './components/card/MovieCard'
import { Header } from './components/header/Header';
import { store } from './redux/store/store'
import { Container } from './views/Container'
import { ContainerList } from './views/ContainerList';

export const App = () => {

  return (
    <Provider store={store}>
      <Container>
        <Header />
        <ContainerList />
      </Container>
    </Provider>
  )
}

