'use client';
import Challenges from '@/components/challenges/Challenges';
import Header from '@/components/header/Header';
import { useAuth } from '@/providers/AuthProvider';

const ChallengesPage = () => {
  const { loading } = useAuth();
  if (loading) return <h2>Loading...</h2>;
  return (
    <>
      <Header
        className='header-small'
        title='Desafíos'
        text='¡Todo gran viaje comienza con un primer paso!'
        image='/assets/images/hero-challenges.svg'
      />
      <Challenges />
    </>
  );
};

export default ChallengesPage;
