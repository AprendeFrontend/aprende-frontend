import Challenges from '@/components/challenges/Challenges';
import Header from '@/components/header/Header';

const ChallengesPage = () => {
  return (
    <>
      <Header
        className='header-small'
        title='Desafíos'
        text='¡Todo gran viaje comienza con un primer paso!'
        // image='/assets/images/hero-challenges.svg'
      />
      <Challenges />
    </>
  );
};

export default ChallengesPage;
