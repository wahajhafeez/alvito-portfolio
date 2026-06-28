import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import SectionHeading from '@/components/common/SectionHeading';

const TechSphere = lazy(() => import('@/components/three/TechSphere'));
import { SKILL_CATEGORIES } from '@/constants/skills';

const SkillsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Our Capabilities"
          subtitle="The design, marketing and engineering toolkit we use to build and grow our clients' businesses."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* 3D Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[420px] w-full"
          >
            <Canvas
              camera={{ position: [0, 0, 7], fov: 55 }}
              gl={{ antialias: true, alpha: true }}
              dpr={[1, 2]}
            >
              <Suspense fallback={null}>
                <TechSphere />
              </Suspense>
            </Canvas>
          </motion.div>

          {/* Skill Categories */}
          <div className="space-y-6">
            {SKILL_CATEGORIES.map((cat, catIdx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full"
                    style={{ background: cat.color }}
                  />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.1 + i * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      className="glass cursor-default rounded-lg px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
