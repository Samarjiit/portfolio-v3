import SongCard from './SongCard';
import { songs, SongProps } from './songDetails';
import '../animations/animate.css';
import { monaSans } from '../fonts/monaSans';
import AnimatedBody from '../animations/AnimatedBody';
import AnimatedWords2 from '../animations/AnimatedWords2';

const SongCarousel = () => {
  return (
    <>
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        {' '}
        <AnimatedWords2
          title={'PODCAST'}
          style={`flex max-w-[500px] flex-col items-start text-left text-[126px] ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[160px] md:text-[190px] lg:text-center lg:text-[215.04px]`}
        />
        <AnimatedBody
          text="The Samar Show, a podcast series exploring the stories, interview experience, processes & projects of interesting and upcoming designers, developers, programmers and product folks."
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
        <br></br>
      </div>
      <div className="animate absolute bottom-5 flex w-[1100%] border-[1px] border-[#0E1016] sm:w-[680%] md:w-[710%] lg:w-[600%] xl:w-[400%]">
        <div className="mx-auto flex w-[50%] justify-around gap-1  lg:my-[1px]">
          {songs.map((song: SongProps, index) => (
            <SongCard
              key={index}
              title={song.title}
              artist={song.artist}
              image={song.image}
              link={song.link}
            />
          ))}
        </div>
        <div className="mx-auto flex w-[50%] justify-around gap-1  lg:my-[1px]">
          {songs.map((song: SongProps, index) => (
            <SongCard
              key={index}
              title={song.title}
              artist={song.artist}
              image={song.image}
              link={song.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SongCarousel;
