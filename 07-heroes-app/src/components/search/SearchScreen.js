import { useForm } from "../../hooks/useForm";

export const SearchScreen = () => {

    const [formValues, handleInputChange] = useForm({
        searchText: '',
    });

    const { searchText } = formValues;

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(searchText);
    }

    return (
        <>
            <h1>Búsquedas</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Buscar heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />
                        
                        <button
                            className="btn btn-outline-primary mt-2"
                            type="submit"
                        >
                            Buscar...
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
  }
