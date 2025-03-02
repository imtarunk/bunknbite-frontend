import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Coffee,
  Compass,
  Heart,
  Utensils,
} from "lucide-react";
import { Button } from "../components/ui/button";

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("mission");
  const sectionRefs = {
    mission: useRef<HTMLDivElement>(null),
    story: useRef<HTMLDivElement>(null),
    team: useRef<HTMLDivElement>(null),
    values: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    sectionRefs[section as keyof typeof sectionRefs].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <motion.div
          className="container mx-auto px-4 text-center z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-amber-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About BunknBite
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-amber-700 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Connecting travelers with authentic local dining experiences since
            2023
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8"
              onClick={() => scrollToSection("mission")}
            >
              Our Story <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <ChevronDown className="h-8 w-8 text-amber-600 animate-bounce" />
        </motion.div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-2 md:gap-4 md:justify-center no-scrollbar">
            {["mission", "story", "team", "values"].map((section) => (
              <Button
                key={section}
                variant={activeSection === section ? "default" : "outline"}
                className={`whitespace-nowrap px-6 rounded-full ${
                  activeSection === section
                    ? "bg-amber-600 hover:bg-amber-700 text-white"
                    : "text-amber-900 hover:text-amber-700 border-amber-200"
                }`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section
        ref={sectionRefs.mission}
        className="py-20 bg-white"
        id="mission"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              At BunknBite, we're on a mission to transform how travelers
              experience food culture around the world. We believe that
              authentic local cuisine is the gateway to truly understanding a
              destination's culture, history, and people.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                className="bg-amber-50 p-6 rounded-xl shadow-sm"
                variants={fadeIn}
              >
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">
                  Authentic Cuisine
                </h3>
                <p className="text-slate-600">
                  We connect travelers with genuine local dining experiences
                  that can't be found in tourist guides.
                </p>
              </motion.div>
              <motion.div
                className="bg-amber-50 p-6 rounded-xl shadow-sm"
                variants={fadeIn}
              >
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">
                  Cultural Exchange
                </h3>
                <p className="text-slate-600">
                  We facilitate meaningful connections between travelers and
                  local hosts through shared meals.
                </p>
              </motion.div>
              <motion.div
                className="bg-amber-50 p-6 rounded-xl shadow-sm"
                variants={fadeIn}
              >
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">
                  Community Support
                </h3>
                <p className="text-slate-600">
                  We empower local food entrepreneurs and contribute to
                  sustainable tourism practices.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        ref={sectionRefs.story}
        className="py-20 bg-gradient-to-r from-amber-50 to-orange-50"
        id="story"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="md:w-1/2" variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-slate-700 mb-4">
                BunknBite was born from a simple yet powerful experience: a
                shared meal with locals in a small village in Thailand that
                became the highlight of our founder's journey.
              </p>
              <p className="text-lg text-slate-700 mb-4">
                In 2023, after years of traveling and experiencing the
                transformative power of food in connecting cultures, our team of
                food enthusiasts and tech innovators came together to create a
                platform that would make these authentic culinary experiences
                accessible to all travelers.
              </p>
              <p className="text-lg text-slate-700">
                What started as a small community in Southeast Asia has now
                grown into a global network of food lovers, home cooks, and
                culinary guides across 30+ countries.
              </p>
            </motion.div>
            <motion.div className="md:w-1/2 relative" variants={fadeIn}>
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=800&width=600"
                  alt="BunknBite founders sharing a meal"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <p className="text-amber-800 font-medium">
                  First BunknBite experience, Thailand 2023
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-24 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="md:flex">
              <div className="md:shrink-0">
                <div className="h-48 w-full md:h-full md:w-48 relative">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="BunknBite founder"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="text-amber-600 font-semibold">
                  FROM OUR FOUNDER
                </div>
                <blockquote className="mt-4 italic text-slate-700">
                  "Food is the universal language that brings people together
                  regardless of background or culture. At BunknBite, we're not
                  just creating a service; we're building a global community
                  connected through the joy of sharing authentic meals and
                  stories."
                </blockquote>
                <div className="mt-4 text-amber-900 font-medium">
                  - Sarah Chen, Founder & CEO
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={sectionRefs.team} className="py-20 bg-white" id="team">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-700">
              Our diverse team of food enthusiasts, tech innovators, and
              cultural ambassadors is united by a shared passion for connecting
              people through authentic culinary experiences.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Sarah Chen",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Miguel Rodriguez",
                role: "Chief Technology Officer",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Aisha Patel",
                role: "Head of Community",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "David Kim",
                role: "Chief Culinary Officer",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-amber-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                variants={fadeIn}
              >
                <div className="h-64 relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900">
                    {member.name}
                  </h3>
                  <p className="text-amber-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <a href="/careers">
              <Button
                variant="outline"
                className="border-amber-200 text-amber-900 hover:bg-amber-100"
              >
                Join Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={sectionRefs.values}
        className="py-20 bg-gradient-to-r from-amber-50 to-orange-50"
        id="values"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-slate-700">
              These core principles guide everything we do at BunknBite, from
              product development to community building.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Authenticity",
                description:
                  "We celebrate genuine culinary traditions and create space for real cultural exchange.",
                icon: <Coffee className="h-6 w-6 text-amber-600" />,
              },
              {
                title: "Community",
                description:
                  "We build meaningful connections between travelers and locals through shared food experiences.",
                icon: <Heart className="h-6 w-6 text-amber-600" />,
              },
              {
                title: "Sustainability",
                description:
                  "We promote responsible tourism practices that benefit local communities and environments.",
                icon: <Compass className="h-6 w-6 text-amber-600" />,
              },
              {
                title: "Innovation",
                description:
                  "We continuously improve our platform to make authentic food experiences more accessible.",
                icon: <Utensils className="h-6 w-6 text-amber-600" />,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm flex gap-4"
                variants={fadeIn}
              >
                <div className="shrink-0 mt-1">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to taste the world differently?
            </h2>
            <p className="text-xl mb-8 text-amber-100">
              Join thousands of travelers discovering authentic local cuisine
              around the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-amber-900 hover:bg-amber-100 rounded-full px-8"
              >
                Download App
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-amber-700 rounded-full px-8"
              >
                Become a Host
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
