exports.seed = async function seed(knex) {
  await knex("favorites").del();
  await knex("templates").del();

  await knex("templates").insert([
    {
      name: "Modern Landing Page",
      description: "Clean, conversion-focused SaaS landing page with sections.",
      thumbnail_url:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop",
      category: "Landing",
    },
    {
      name: "Analytics Dashboard",
      description: "Admin dashboard layout with cards, charts, and tables.",
      thumbnail_url:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      category: "Dashboard",
    },
    {
      name: "Portfolio Template",
      description: "Minimal portfolio for designers and developers.",
      thumbnail_url:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
      category: "Portfolio",
    },
    {
      name: "E-commerce Product Page",
      description: "Product detail template with gallery, specs, and reviews.",
      thumbnail_url:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop",
      category: "E-commerce",
    },
    {
      name: "Appointment Booking",
      description: "Booking page UI with calendar and time slot selection.",
      thumbnail_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
      category: "Booking",
    },
  ]);
};

