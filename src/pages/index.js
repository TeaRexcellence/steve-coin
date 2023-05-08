import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { PrimaryContainer } from '../Templates/Primary-Container';
import { Meta } from '../modules/head/Meta';
import { GetStaticProps } from 'next';
import { About } from '../modules/Sections/About';
import { Tokenomics } from '../modules/Sections/Tokenomics';
import { Roadmap } from '../modules/Sections/Roadmap';
import { HowToBuy } from '../modules/Sections/HowToBuy';
import { Hero } from '../modules/Sections/Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <PrimaryContainer
        meta={
          <Meta
            metaTitle="The bird is the word"
            metaImg="/favicon.jpg"
            description="Steve is a community owned meme coin ready to take over the world!"
          />
        }
      >
        <Hero />
        <About />
        <Tokenomics />
        <Roadmap />
        <HowToBuy />
      </PrimaryContainer>
    </>
  );
}
