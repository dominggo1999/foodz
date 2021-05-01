import { AiFillStar } from 'react-icons/ai';

const PrintStars = () => {
  const printStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      stars.push(<AiFillStar key={i} />);
    }

    return stars;
  };

  return (
    <>
      {printStars()}
    </>
  );
};

export default PrintStars;
