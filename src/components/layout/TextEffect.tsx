import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <div className='text-lg md:text-[2rem] font-bold uppercase mt-2'>
      <span className='text-white'>And I&apos;m </span>
      <TypeAnimation
        sequence={[
          'Web Developer',
          1500,
          'UX/UI Designer',
          1500,
          'Frontend Developer',
          1500,
          'Programmer',
          1500,
          'Coder',
          1500,
        ]}
        speed={50}
        className='text-cyan-500'
        repeat={Infinity}
      />
    </div>
  );
};

export default TextEffect;