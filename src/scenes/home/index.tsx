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
import { motion } from 'framer-motion';

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
        <motion.div 
            className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* MAIN HEADER */}
            <div className="z-10 mt-52 md:basis-3/5">
                {/* HEADINGS */}
                <motion.div 
                    className="md:-mt-20" 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                    }}
                >
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img alt="home-page-text" src={HomePageText}/>
                        </div>
                    </div>

                    <p className="mt-8 text-sm">
                        Yogalates is a fitness fusion that combines the benefits of yoga and Pilates. It integrates the flexibility, balance, and mindfulness of yoga with the core strength, body conditioning, and control of Pilates. This hybrid workout aims to improve overall flexibility, strength, posture, and mental well-being.
                    </p>
                </motion.div>
                {/* ACCTION */}
                <motion.div 
                    className="mt-8 flex items-center gap-8"
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                    }}
                >
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
                </motion.div>
            </div>
            {/* IMAGE */}
            <div className="flex basis-[25%] justify-center md:z-10
                md:ml-40 mt-10 md:justify-end">
                <img alt="home-pageGraphic" src={HomePageGraphic} />
            </div>
        </motion.div>
        {/* SPONSOR */}
        {isAboveMediumScreens && (
            <div className="my-5 h-[120px] w-full bg-primary-100 py-5">
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