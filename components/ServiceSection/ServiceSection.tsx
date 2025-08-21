"use client";

type Prop = {
  title: string;
  description: string;
};

function ServiceSection({ services }: { services: Prop[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="service-card border border-white/20 p-6 rounded-lg hover:border-white/40 hover:scale-105 transition-all duration-300"
        >
          <h3 className="text-xl font-medium mb-4">{service.title}</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}
export default ServiceSection;
