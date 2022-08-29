import React from 'react'
import { Provider } from 'react-redux'
import { MovieCard } from './components/MovieCard'
import { store } from './redux/store/store'


export const App = () => {


  return (
    <Provider store={store}>
      <MovieCard />
    </Provider>
  )
}

