const Navlink = ({ ref, title, className, onClick }) => {
  return (
    <li>
      <a onClick={onClick} href={ref} className={className}>
        {title}
      </a>
    </li>
  );
};

export default Navlink;
