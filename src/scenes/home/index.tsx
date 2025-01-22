import React from 'react';
import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.jpg";
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
        <div>
            {/* MAIN HEADER */}
            <div>
                {/* HEADINGS */}
                <div>
                    <div>
                        <div>
                            <img alt="home-page-text" src={HomePageText}/>
                        </div>
                    </div>

                    <p>
                        Yogalates is a fitness fusion that combines the benefits of yoga and Pilates. It integrates the flexibility, balance, and mindfulness of yoga with the core strength, body conditioning, and control of Pilates. This hybrid workout aims to improve overall flexibility, strength, posture, and mental well-being.
                    </p>
                </div>
                {/* ACCTION */}
                <div>
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
            <div>
                <img alt="home-pageGraphic" src={HomePageGraphic} />
            </div>
        </div>
        {/* SPONSOR */}
    </section>
    )
};

export default Home;