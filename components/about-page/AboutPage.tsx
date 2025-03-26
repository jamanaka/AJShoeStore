"use client";
import {
  Rocket,
  Handshake,
  Award,
  ShieldCheck,
  Factory,
  Users,
  Globe,
  Heart,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const values = [
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "Pushing boundaries with cutting-edge footwear technology and designs that set industry standards.",
  },
  {
    icon: Handshake,
    title: "Customer First",
    description:
      "Your satisfaction drives every decision we make, from design to delivery.",
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "Handcrafted by skilled artisans using only the finest premium materials.",
  },
  {
    icon: ShieldCheck,
    title: "Sustainability",
    description:
      "Eco-conscious manufacturing with 85% recycled materials in every collection.",
  },
];

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "8", label: "Years in Business" },
  { value: "100%", label: "Satisfaction Guarantee" },
  { value: "5", label: "Countries Served" },
];

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    bio: "Sneakerhead turned entrepreneur with 15+ years in footwear design.",
  },
  {
    name: "Jamie Chen",
    role: "Lead Designer",
    bio: "Combines avant-garde aesthetics with everyday wearability.",
  },
  {
    name: "Taylor Wright",
    role: "Sustainability Officer",
    bio: "Ensures every step of our process meets eco-standards.",
  },
];

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Enhanced Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center mt-16 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l to-blue-900 from-green-900 z-10" />
        <div className="absolute inset-0 bg-[url(&apos;/shoe-factory.jpg&apos;)] bg-cover bg-center" />

        <motion.div
          className="relative z-20 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Step Into <span className="text-primary">Our World</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Where passion for footwear meets uncompromising quality and
            sustainable innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" className="px-8 bg-blue-600 text-lg">
              Discover Our Collections
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full transition-all hover:shadow-xl hover:border-primary group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-secondary/10 rounded-3xl my-12">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-col lg:flex-row gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold">Our Footwear Revolution</h2>
              <p className="text-lg text-muted-foreground">
                What began in a small Milan workshop in 2015 has blossomed into
                an international movement redefining what shoes can be. Our
                founder&apos;s vision was simple: create footwear that doesn&apos;t force
                you to choose between style and comfort.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, each collection reflects our Italian heritage fused with
                modern technology. We&apos;ve pioneered 12 patented comfort
                technologies while maintaining artisanal craftsmanship
                standards.
              </p>
              <div className="flex gap-4 pt-4">
                <Button variant="outline" className="gap-2">
                  <Factory className="w-4 h-4" /> Our Factories
                </Button>
                <Button variant="outline" className="gap-2">
                  <Globe className="w-4 h-4" /> Global Impact
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div
                className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Replace with your actual image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-green-900 flex items-center justify-center">
                  <span className="text-white text-xl">
                    Our Design Studio
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            The Minds Behind The Magic
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our diverse team of designers, engineers, and craftspeople share one
            common passion: extraordinary footwear.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto w-32 h-32 rounded-full bg-primary/10 mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary/50" />
                  </div>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <p className="text-primary">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg">
                    {member.bio}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl my-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-5xl font-bold text-primary mb-3">
                  {stat.value}
                </p>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20">
        <motion.div
          className="bg-primary/10 rounded-3xl p-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join our community of footwear enthusiasts who refuse to compromise
            on quality, comfort, or style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 text-lg gap-2">
              <Heart className="w-5 h-5" /> Shop Best Sellers
            </Button>
            <Button variant="outline" size="lg" className="px-8 text-lg">
              Book a Fitting
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;