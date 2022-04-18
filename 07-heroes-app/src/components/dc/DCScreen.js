import { HeroList } from "../hero/HeroList"

export const DCScreen = () => {
    
    const publisher = 'DC Comics';

    return (
        <div>
            <h1>DC Screen</h1>
            <HeroList publisher={publisher} />
        </div>
    )
}
