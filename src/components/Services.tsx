import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Camera, Radar, Plane, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Camera,
    title: "Drone Inspections",
    description: "High-quality, cost-effective drone-based images, video, and data for analysis, surveying, mapping, and more.",
    color: "from-teal to-teal-bright",
  },
  {
    icon: Radar,
    title: "LiDAR Services",
    description: "Latest aerial, terrestrial, bathymetric, and subsurface data collection technology for precise measurements.",
    color: "from-primary to-teal",
  },
  {
    icon: Plane,
    title: "Aviation",
    description: "Fixed-wing and rotary surveillance operations, ensuring your assets are protected and monitored with precision.",
    color: "from-gold to-accent",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Services We </span>
            <span className="text-gradient">Provide</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Diverse range of drone and fixed-wing services tailored to meet your exact needs. 
            Each service is designed to optimize efficiency, accuracy, and safety.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 h-full">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="p-8 relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-navy-dark" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-teal-bright hover:bg-primary/10 p-0 group/btn"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
