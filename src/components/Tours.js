import Title from './Title';

import img1 from '../images/tour-1.jpeg';
import img2 from '../images/tour-2.jpeg';
import img3 from '../images/tour-3.jpeg';
import img4 from '../images/tour-4.jpeg';

const tours = [
  {
    id: 1,
    image: img1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'china',
    duration: '6 days',
    price: 'from $2100',
  },
  {
    id: 2,
    image: img2,
    date: 'october 1th, 2020',
    title: 'best of java',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'indonesia',
    duration: '11 days',
    price: 'from $1400',
  },
  {
    id: 3,
    image: img3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'hong kong',
    duration: '8 days',
    price: 'from $5000',
  },
  {
    id: 4,
    image: img4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'kenya',
    duration: '20 days',
    price: 'from $3300',
  },
];

const Tour = ({ img, date, title, text, country, duration, price }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{' '}
            {country}
          </p>
          <p>{duration}</p>
          <p>{price}</p>
        </div>
      </div>
    </article>
  );
};

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title part1="featured" part2="tours" />

      <div className="section-center featured-center">
        {/* const Toor = ({ img, date, title, text, country, duration, price }) => { */}
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              img={tour.image}
              date={tour.date}
              title={tour.title}
              text={tour.text}
              country={tour.country}
              duration={tour.duration}
              price={tour.price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
