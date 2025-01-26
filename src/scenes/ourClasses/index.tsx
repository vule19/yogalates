import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Core Classes",
        description: "Join us for a session that nurtures your mind and body, leaving you feeling refreshed, revitalized, and centered. Perfect for beginners and experienced practitioners alike, Yogalates is your pathway to a stronger, healthier you!",
        image: image1,
    },
    {
        name: "Weight Tranining Classes",
        description: "Join us for a session that nurtures your mind and body, leaving you feeling refreshed, revitalized, and centered. Perfect for beginners and experienced practitioners alike, Yogalates is your pathway to a stronger, healthier you!",
        image: image2,
    },
    {
        name: "Ab Classes",
        image: image3,
    },
    {
        name: "Core Classes",
        description: "Join us for a session that nurtures your mind and body, leaving you feeling refreshed, revitalized, and centered. Perfect for beginners and experienced practitioners alike, Yogalates is your pathway to a stronger, healthier you!",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description: "Join us for a session that nurtures your mind and body, leaving you feeling refreshed, revitalized, and centered. Perfect for beginners and experienced practitioners alike, Yogalates is your pathway to a stronger, healthier you!",
        image: image5,
    },
    {
        name: "Tranining Classes",
        description: "Join us for a session that nurtures your mind and body, leaving you feeling refreshed, revitalized, and centered. Perfect for beginners and experienced practitioners alike, Yogalates is your pathway to a stronger, healthier you!",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}
            >
                <div className="w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">
                    Join us for a session that nurtures your mind and body, leaving you feeling refreshed, revitalized, and centered. Perfect for beginners and experienced practitioners alike, Yogalates is your pathway to a stronger, healthier you!
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses;