import PropTypes from 'prop-types';

function Header({ 
  text = 'FeedBack UI', 
  bgColor = "rgba(0,0,0,0.4)", 
  textColor = '#ff6a95' 
}) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// Prop type validation
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
