import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-light pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Drone Icon Animation */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-teal/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Plane size={200} />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-foreground">The Sky Is Not</span>
              <br />
              <span className="text-foreground">the Limit.</span>
              <br />
              <span className="text-gradient">IT'S WHERE WE BEGIN...</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Your trusted partner for aerial intelligence solutions. Cutting-edge technology meets specialized expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-navy-dark font-bold text-lg px-8 py-6 group"
            >
              GET IN TOUCH
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-navy-dark font-semibold text-lg px-8 py-6"
            >
              LEARN MORE
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="text-4xl font-bold text-gradient">11</div>
              <div className="text-sm text-muted-foreground mt-1">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Support Available</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
