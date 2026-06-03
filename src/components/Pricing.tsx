import { motion, animate } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    title: "Landing Page",
    price: "$170",
    features: [
      "Modern Responsive Design",
      "Single Page Website",
      "Fast Loading Performance",
      "Contact Form Integration",
      "SEO-Friendly Structure",
      "Deployment Included (Hosting & Domain Not Included)",
    ],
    popular: false,
  },
  {
    title: "Business Website",
    price: "$300",
    features: [
      "Multi-Page Website",
      "Responsive Design",
      "Modern UI/UX",
      "Contact Forms",
      "SEO Optimization",
      "Smooth Animations",
      "Deployment Included (Hosting & Domain Not Included)",
    ],
    popular: true,
  },
  {
    title: "Full Web Application",
    price: "$500",
    features: [
      "Authentication System",
      "Admin Dashboard",
      "Database Integration",
      "CRUD Operations",
      "User Management",
      "API Integration",
      "Deployment Included (Hosting & Domain Not Included)",
    ],
    popular: false,
  },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;

    animate(window.scrollY, targetPosition, {
      duration: 1.2,
      ease: [0.45, 0, 0.55, 1],
      onUpdate: (value) => window.scrollTo(0, value),
    });
  }
};

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h2>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Choose the package that best fits your project needs.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
            }}
            className={`relative rounded-3xl border backdrop-blur-sm p-8 transition-all duration-300
            ${
              plan.popular
                ? "border-primary shadow-lg shadow-primary/20 scale-105"
                : "border-border"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-sm px-4 py-2 rounded-full font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>

            <div className="mb-6">
              {plan.title === "Landing Page" ? (
                <>
                  <p className="text-muted-foreground line-through text-lg">
                    $200
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="text-5xl font-bold">$170</span>

                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      Save $30
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mt-2">
                    Starting At
                  </p>
                </>
              ) : (
                <>
                  <span className="text-5xl font-bold">{plan.price}</span>

                  <p className="text-sm text-muted-foreground mt-2">
                    Starting At
                  </p>
                </>
              )}
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-sm text-muted-foreground mt-12"
      >
        Final pricing depends on project requirements and complexity.
      </motion.p>
    </section>
  );
};
