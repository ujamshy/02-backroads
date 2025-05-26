const Navicon = ({ ref, iconName, className }) => {
  return (
    <li>
      <a href={ref} target="_blank" rel="noreferrer" className={className}>
        <i className={iconName}></i>
      </a>
    </li>
  );
};

export default Navicon;
