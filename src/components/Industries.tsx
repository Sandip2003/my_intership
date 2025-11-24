import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Zap,
  Fuel,
  Shield,
  Trees,
  Building,
  Hammer,
  Mountain,
  Sprout,
  Home,
  Siren,
  Lightbulb,
} from "lucide-react";

const industries = [
  { icon: Zap, name: "Energy & Utilities", color: "bg-yellow-500" },
  { icon: Fuel, name: "Oil & Gas", color: "bg-orange-500" },
  { icon: Shield, name: "Defense", color: "bg-red-500" },
  { icon: Trees, name: "Forestry & Conservation", color: "bg-green-500" },
  { icon: Building, name: "Government & Public Agencies", color: "bg-blue-500" },
  { icon: Lightbulb, name: "Infrastructure & Transportation", color: "bg-purple-500" },
  { icon: Hammer, name: "Construction & Engineering", color: "bg-amber-500" },
  { icon: Mountain, name: "Mining & Aggregates", color: "bg-stone-500" },
  { icon: Sprout, name: "Precision Agriculture", color: "bg-lime-500" },
  { icon: Home, name: "Property Development", color: "bg-cyan-500" },
  { icon: Siren, name: "Public Safety", color: "bg-rose-500" },
];

const Industries = () => {
  return (
    <section className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Industries We </span>
            <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Full-scale aerial solutions across diverse industries. With experts in every field, 
            we understand unique challenges and tailor solutions specifically for your industry needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer h-full">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal/0 to-primary/0 group-hover:from-teal/10 group-hover:to-primary/10 transition-all duration-300" />
                
                <div className="p-6 flex flex-col items-center text-center space-y-4 relative z-10">
                  {/* Icon with colored background */}
                  <div className={`w-14 h-14 rounded-lg ${industry.color} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className={`w-7 h-7 ${industry.color.replace('bg-', 'text-')}`} />
                  </div>

                  {/* Name */}
                  <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-teal to-teal-bright p-8 md:p-12 text-center">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-navy-dark/80 text-lg mb-6 max-w-2xl mx-auto">
              We work across many sectors. Contact us to discuss how our aerial intelligence solutions can benefit your specific industry.
            </p>
            <button className="bg-navy-dark text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-navy transition-colors">
              Contact Our Team
            </button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
