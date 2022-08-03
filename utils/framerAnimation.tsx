import { motion } from "framer-motion";

const topToBottomVariant = {
    hidden: { opacity: 0, x: 0, y: -200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
};

const opacityVariant = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
};

const bottomToTopVariant = {
    hidden: { opacity: 0, x: 0, y: 200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
};

const config = {
    initial: "hidden",
    animate: "enter",
    exit: "exit",
};

export const TopToBottomFramer = ({ children }: any) => (
    <motion.main variants={topToBottomVariant} transition={{ type: "spring", duration: 0.5 }} {...config}>
        {children}
    </motion.main>
);

export const OpacityFramer = ({ children }: any) => (
    <motion.main variants={opacityVariant} transition={{ type: "linear", duration: 0.5 }} {...config}>
        {children}
    </motion.main>
);

export const BottomToTopFramer = ({ children }: any) => (
    <motion.main variants={bottomToTopVariant} transition={{ type: "spring", duration: 0.5 }} {...config}>
        {children}
    </motion.main>
);

export const ScrollBottomToTop = ({ children }: any) => (
    <motion.div
        initial={{ opacity: 0, x: 0, y: 80 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ type: "linear", duration: 0.3 }}
        viewport={{ once: true }}
    >
        {children}
    </motion.div>
);

export const HoverScaleFramer = ({ children }: any) => (
    <motion.div
        initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        whileTap={{ opacity: 1, x: 0, y: 0, scale: 0.85 }}
        transition={{ type: "tween", duration: 0.3 }}
        viewport={{ once: true }}
    >
        {children}
    </motion.div>
);
