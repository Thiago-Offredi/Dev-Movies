import { useNavigate } from 'react-router-dom';
import { Background, Info, Poster, Container, ContainerButton } from './styles';
import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { getImages } from '../../utils/getImages';
import Modal from '../../components/Modal';
import { getMovies, getPopularActor, getPopularSeries, getTopMovies, getTopSeries } from '../../services/getData';


function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movies, setMovie] = useState()
    const [topMovies, setMovies] = useState()
    const [topSeries, setSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [popularActor, setPopularActor] = useState()
    const navigate = useNavigate()

    useEffect(() => {

        async function getAllData() {

            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getPopularActor()
            ])
                .then(([movie, topMovies, topSeries, popularSeries, popularActor]) => {
                    setMovie(movie)
                    setMovies(topMovies)
                    setSeries(topSeries)
                    setPopularSeries(popularSeries)
                    setPopularActor(popularActor)
                })
                        .catch((error) => console.error(error))


                }

    getAllData()

    }, [])

    return (
        <>
            {movies && (
                <Background img={getImages(movies.backdrop_path)}>
                    {showModal && <Modal movieId={movies.id} setShowModal={setShowModal} />}

                    <Container>
                        <Info>
                            <h1>{movies.title}</h1>
                            <p>{movies.overview}</p>
                            <ContainerButton>
                                <Button red={true} onClick={() => navigate(`/detalhe/${movies.id}`)}>Assista agora</Button>
                                <Button red={false} onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                            </ContainerButton>

                        </Info>
                        <Poster>
                            <img src={getImages(movies.poster_path)} alt="Capa-Do-Filme" />
                        </Poster>
                    </Container>
                </Background>

            )
            }
            {topMovies && <  Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <  Slider info={topSeries} title={'Top Séries'} />}
            {popularSeries && <  Slider info={popularSeries} title={'Séries Populares'} />}
            {popularActor && <  Slider info={popularActor} title={'Atores Populares'} />}
        </>
    )
}
export default Home
