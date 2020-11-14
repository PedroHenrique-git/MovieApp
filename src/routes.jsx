import { BrowserRouter, Route} from 'react-router-dom';
import TodoApp from './components/TodoApp';
import MovieInfo from './components/MovieInfo';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={TodoApp}/>
            <Route path="/MovieInfo" component={MovieInfo}/>
        </BrowserRouter>
    );
}