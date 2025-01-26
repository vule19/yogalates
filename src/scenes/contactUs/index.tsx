import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `w-fullrounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            { /* HEEADER */}
            <motion.div
                className="mt-10 basis-3/5"
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}
            >
                <HText>
                    <span className="text-primary-500">JOIN NOW</span>
                </HText>
                <p className="my-5">
                With its emphasis on mindfulness and movement, Yogalates helps you build a stronger connection between your mind and body.
                </p>
            </motion.div>
            { /* FORM AND IMAGE */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                    className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: {opacity: 0, x: 50},
                        visible: {opacity: 1, x: 0},
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/annale19122000@gmail.com"
                        method="POST"
                    >
                        <input 
                            className={inputStyles}
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                            
                        />
                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 characters."}
                            </p>
                        )}

                        <input 
                            className={inputStyles}
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                            
                        />
                        {errors.email && (
                            <p className="mt-1 text-primary-500">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}
                        
                        <input 
                            className={inputStyles}
                            type="text"
                            placeholder="MESSAGES"
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                            
                        />
                        {errors.message && (
                            <p className="mt-1 text-primary-500">
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs;