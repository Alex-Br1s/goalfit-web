import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <div
        style={{
          maxWidth: 900,
          margin: "40px auto",
          padding: "24px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
          color: "#fff",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 32, marginBottom: 8 }}>GoalFit</h1>
          <p style={{ color: "#9CA3AF", fontSize: 16 }}>
            Aplicación de nutrición y fitness enfocada en el seguimiento
            alimentario y hábitos saludables.
          </p>
        </header>

        {/* Cards */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <NavCard
            title="📄 Política de Privacidad"
            description="Conocé cómo recopilamos, usamos y protegemos tu información personal."
            to="/privacy-policy"
          />

          <NavCard
            title="🗑️ Eliminación de cuenta"
            description="Información sobre cómo eliminar tu cuenta y los datos asociados."
            to="/delete-account"
          />
        </section>

        {/* Footer */}
        <footer style={{ marginTop: 40, textAlign: "center" }}>
          <p style={{ color: "#9CA3AF", fontSize: 14 }}>
            © {new Date().getFullYear()} GoalFit
          </p>
        </footer>
      </div>
    </main>
  );
}

/* Card */
function NavCard({
  title,
  description,
  to,
}: {
  title: string;
  description: string;
  to: string;
}) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        backgroundColor: "#25242e",
        padding: 20,
        borderRadius: 16,
        display: "block",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        color: "#fff",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <h2 style={{ fontSize: 20, marginBottom: 8 }}>{title}</h2>
      <p style={{ color: "#9CA3AF", fontSize: 15, margin: 0 }}>
        {description}
      </p>
    </Link>
  );
}
