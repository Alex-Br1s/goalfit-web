import { Link } from "react-router-dom";

export default function DeleteAccount() {
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
        <Link
          to="/"
          style={{
            marginBottom: 16,
            color: "#9CA3AF",
            fontSize: 14,
            textDecoration: "underline",
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'start'
          }}
          >
          Volver al inicio
        </Link>
        {/* Header */}
        <header style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
          <span style={{ fontSize: 28, marginRight: 12 }}>🗑️</span>
          <h1 style={{ fontSize: 32, margin: 0 }}>
            Eliminación de cuenta y datos
          </h1>
        </header>

        <p style={{ color: "#9CA3AF", fontSize: 16, marginBottom: 32, flexDirection: 'row', display: 'flex', justifyContent: 'start' }}>
          Última actualización: {new Date().toLocaleDateString()}
        </p>

        {/* Intro */}
        <p
          style={{
            color: "#9CA3AF",
            fontSize: 16,
            marginBottom: 24,
            textAlign: "justify",
          }}
        >
          En GoalFit respetamos tu derecho a controlar tu información personal.
          Podés solicitar la eliminación de tu cuenta y de los datos asociados
          en cualquier momento, ya sea desde la aplicación o contactándonos
          directamente.
        </p>

        {/* Sections */}
        <Section
          title="1. Cómo solicitar la eliminación"
          content="El usuario puede solicitar la eliminación de su cuenta directamente desde la configuración de la aplicación o enviando un correo electrónico al contacto indicado al final de esta página."
        />

        <Section
          title="2. Datos que se eliminan"
          content={
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              <li>Cuenta de usuario</li>
              <li>Datos personales asociados</li>
              <li>Información nutricional registrada</li>
            </ul>
          }
        />

        <Section
          title="3. Datos que se conservan"
          content="Algunos datos pueden conservarse durante el tiempo requerido por la ley o por obligaciones fiscales, de seguridad o prevención de fraudes. Estos datos no se utilizan con fines comerciales."
        />

        <Section
          title="4. Plazo de eliminación"
          content="Cuando el usuario solicita la eliminación de su cuenta desde la aplicación, la cuenta y los datos personales asociados se eliminan de forma inmediata. No existe un período de espera ni de revisión manual."
        />


        <Section
          title="5. Contacto"
          content={
            <>
              Si tenés preguntas o querés solicitar la eliminación de tu cuenta,
              podés escribirnos a:
              <br />
              <strong style={{ color: "#fff" }}>
                goalfit.contact@gmail.com
              </strong>
            </>
          }
        />
      </div>
    </main>
  );
}

/* Card Section */
function Section({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <section
      style={{
        backgroundColor: "#36353eff",
        padding: 20,
        borderRadius: 16,
        marginBottom: 20,
      }}
    >
      <h2 style={{ fontSize: 20, marginBottom: 12 }}>{title}</h2>
      <div style={{ color: "#9CA3AF", fontSize: 16, textAlign: "justify" }}>
        {content}
      </div>
    </section>
  );
}
