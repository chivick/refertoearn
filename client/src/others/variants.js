// Variants for Framer Motion Library

export const mobileNavVariants = {
    initial: {
        height: 0, opacity: 0 
    },
    animate: {
        height: "auto", opacity: 1,
        transition: {
            type: 'spring', stiffness: 120
        }
    }
}

export const usersInfoVariants = {
    initial: {
        x: 1000,
    },
    animate: {
        x: 0,
        transition: {
            delay: 0.5
        }
    }
}

export const joinButtonVariants = {
    initial: {
        scale: 1
    },
    animate: {
        scale: 1.1,
        transition: {
            yoyo: 10,
            duration: 0.2
        }
    }
}