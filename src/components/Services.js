import Title from './Title';

const services = [
  {
    id: 1,
    iconClass: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    iconClass: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    iconClass: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
];

const Service = ({ iconClass, title, text }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={iconClass}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
};

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title part1="our" part2="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          return (
            <Service
              key={service.id}
              iconClass={service.iconClass}
              title={service.title}
              text={service.text}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
