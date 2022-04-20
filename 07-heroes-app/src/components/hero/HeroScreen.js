import { Navigate, useParams } from "react-router-dom";
import { getHeroesByID } from "../../selectors/getHeroesById";

export const HeroScreen = () => {

    const { heroId } = useParams();
    const hero = getHeroesByID(heroId);

    if(!hero){
        return <Navigate to='/' />
    }

    return (
        <div>
            <h1>Hero</h1>
            <p>
                { hero.superhero }
            </p>
        </div>
    )
}
