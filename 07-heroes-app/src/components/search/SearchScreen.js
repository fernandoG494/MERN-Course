import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

import queryString from "query-string";

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q,
    });
    const { searchText } = formValues;
    
    const heroesFiltered = getHeroesByName(q);

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(searchText);
        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1 className="mt-4">Búsquedas</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Buscar heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            className="btn btn-outline-primary mt-1"
                            type="submit"
                        >
                            Buscar...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />

                    {
                        heroesFiltered.map(hero => ( 
                            <HeroCard
                                key={ hero.id }
                                { ...hero } 
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
  }
