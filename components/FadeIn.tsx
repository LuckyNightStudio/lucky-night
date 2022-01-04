import {motion} from "framer-motion";

export const FadeInWhenVisible = ({ children }: {children: JSX.Element}) =>  {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={{
                visible: { opacity: 1, y: 0},
                hidden: { opacity: 0, y: 40 }
            }}
        >
            {children}
        </motion.div>
    );
}
