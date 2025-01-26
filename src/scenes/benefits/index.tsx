import { HomeModernIcon, UserGroupIcon, AcademicCapIcon} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitPageGraphic from "@/assets/BenefitPageGraphic.jpg";

const benefits: Array< BenefitType > = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Improved Core Strength",
        description: "Yogalates combines Pilates’ core-focused exercises with yoga's flowing movements to build a strong and stable core.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Enhanced Flexibility",
        description: "The yoga-inspired stretches help improve overall flexibility, reducing stiffness and increasing your range of motion.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Better Posture",
        description: "By strengthening the muscles that support the spine and improving body awareness, Yogalates promotes proper alignment and posture.",
    }
];

const container = {
    hidden:{},
    visible: {
        transition: {}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            { /* HEADER */ }
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}
            >
                <HText>MORE THAN JUST YOGALATES.</HText>
                <p className="my-5 text-sm">Yogalates combines the best of both worlds, blending the calming mindfulness of yoga with the core-strengthening precision of Pilates. This hybrid workout is designed to build strength, flexibility, and balance while promoting relaxation and stress relief. Whether you’re looking to tone your muscles, improve posture, or unwind from a busy day, Yogalates offers something for everyone.</p>
            </motion.div>
            { /* BENEFITS */ }
            <motion.div className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            { /* GRAPHIC AND DESCRIPTION */ }
            <div className="mt-16 items-center justify-between gap-20 md:mt-15 md:flex">
                { /* GRAPHIC */ }
                <img 
                    className="mx-auto"
                    alt="benefit-page-graphic"
                    src={BenefitPageGraphic}
                />
                { /* DESCRIPTION */ }
                <div>
                    { /* TITLE */ }
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <div>
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </div>
                        </div>
                    </div>
                    { /* DESCIPTION */ }
                    <div>
                        <p className="my-5">Discover the best of both worlds with Yogalates, a dynamic fusion of yoga’s mindful stretches and Pilates’ core-strengthening exercises. This class is designed to improve flexibility, balance, and posture while building a strong, toned body.</p>
                        <p className="my-5">Whether you're looking to enhance your fitness routine, relieve stress, or simply move with purpose, Yogalates offers a holistic workout that nurtures your mind and body. Perfect for all fitness levels, each session leaves you feeling energized, centered, and ready to take on your day.</p>
                        <p className="mb-5">Step onto your mat and experience the harmony of Yogalates today!</p>
                    </div>
                    { /* BUTTON */ }
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"></div>
                        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    </div>
                </div>
            </div>

        </motion.div>
    </section>
  )
};

export default Benefits;