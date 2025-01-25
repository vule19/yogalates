import React from 'react';
import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import uf from "@/assets/uf.png";
import gator from "@/assets/gator.jpg";
import fitness from "@/assets/fitness.jpg";
import useMediaQuery from '@/hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  
    return (
    <section 
        id="home"
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        {/* IMAGE AND MAIN HEADER */}
        <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
            {/* MAIN HEADER */}
            <div className="z-10 mt-52 md:basis-3/5">
                {/* HEADINGS */}
                <div className="md:-mt-20">
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img alt="home-page-text" src={HomePageText}/>
                        </div>
                    </div>

                    <p className="mt-8 text-sm">
                        Yogalates is a fitness fusion that combines the benefits of yoga and Pilates. It integrates the flexibility, balance, and mindfulness of yoga with the core strength, body conditioning, and control of Pilates. This hybrid workout aims to improve overall flexibility, strength, posture, and mental well-being.
                    </p>
                </div>
                {/* ACCTION */}
                <div className="mt-8 flex items-center gap-8">
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink
                        className="text-5m font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>
            {/* IMAGE */}
            <div className="flex basis-[25%] justify-center md:z-10
                md:ml-40 md:mt-30 md:justify-end">
                <img alt="home-pageGraphic" src={HomePageGraphic} />
            </div>
        </div>
        {/* SPONSOR */}
        {isAboveMediumScreens && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-2/6">
                    <div className="flex w-1/5 items-center justify-between gap-8">
                        <img alt="uf" src={uf} />
                        <img alt="gator" src={gator} />
                        <img alt="fitness" src={fitness} />
                    </div>
                </div>
            </div>
        )}
    </section>
    )
};

export default Home;