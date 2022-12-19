import Categories from './Categories';
import SliderBar from './SliderBar';
import './Home.scss';
function Home() {
    return (
        <section className="home">
            <div className="container">
                <div className="row">
                    <Categories />
                    <SliderBar />
                </div>
            </div>
        </section>
    );
}

export default Home;