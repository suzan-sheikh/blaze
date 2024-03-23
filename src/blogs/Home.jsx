import Hero from "../components/Hero";

import wave from '../assets/wave.svg'

const Home = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <Hero/>
      <img className="w-full bottom-0 absolute" src={wave} alt="" />
    </div>
  );
};

export default Home;