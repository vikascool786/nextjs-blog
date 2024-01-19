import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/logo.jfif'
          alt='An image showing Max'
          width={100}
          height={100}
        />
      </div>
      <h1>Hi, I'm Vikas</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;