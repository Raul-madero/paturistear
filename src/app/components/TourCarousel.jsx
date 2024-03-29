'use client'
const { Carousel, CarouselItem, Image, CarouselCaption } = require("react-bootstrap")

const TourCarousel = () => {
    const imgURL = "https://i.ibb.co/sHT05J4/pexels-pablo-cordero-3845970.jpg"
    return (
        <Carousel className="bg-dark">
            <CarouselItem>
                <Image src={imgURL} alt="Estadio Santiago Bernabeu" width={"100%"} height={500} />
                <CarouselCaption>
                    <h3>Estadio Santiago Bernabeu</h3>
                    <p>El estadio mas emblematico del futbol español</p>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
                <Image src={imgURL} alt="" width={"100%"} height={500}/>
                <CarouselCaption>
                    <h3>Estadio Santiago Bernabeu</h3>
                    <p>El estadio mas emblematico del futbol español</p>
                </CarouselCaption>
            </CarouselItem>
        </Carousel>
    )
}

export default TourCarousel