import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <main>
      <div style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: "0 24px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
        color: "#fff",
      }}>
      <Link
        to="/"
        style={{
          marginBottom: 16,
          color: "#9CA3AF",
          fontSize: 14,
          textDecoration: "none",
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'start'
        }}
      >
        ← Volver al inicio
      </Link>
      {/* Header */}
      <header style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: 28, marginRight: 12 }}>📄</span>
        <h1 style={{ fontSize: 32, margin: 0 }}>Política de Privacidad</h1>
      </header>
      <div style={{display: 'flex', justifyContent: 'start'}}>
        <p style={{ color: "#9CA3AF", fontSize: 16, marginBottom: 32 }}>
          Última actualización: {new Date().toLocaleDateString()}
        </p>
      </div>


      {/* Intro */}
      <p style={{ color: "#9CA3AF", fontSize: 16, marginBottom: 24, textAlign: "justify" }}>
        En GoalFit respetamos tu privacidad y estamos comprometidos a proteger la
        información personal que compartís con nosotros. Esta Política de Privacidad
        explica cómo recopilamos, usamos y protegemos tus datos.
      </p>

      {/* Sections */}
      <Section
        title="1. Información que recopilamos"
        content="Recopilamos información básica que el usuario proporciona al registrarse o utilizar la aplicación, como correo electrónico y preferencias. También podemos recopilar información técnica del dispositivo con fines estadísticos y de mejora del servicio."
        />

      <Section
        title="2. Uso de la cámara"
        content="GoalFit puede solicitar acceso a la cámara únicamente cuando el usuario decide escanear alimentos para registrar información nutricional. La cámara no se utiliza en segundo plano ni sin el consentimiento explícito del usuario. Las imágenes no se almacenan en nuestros servidores."
        />

      <Section
        title="3. Uso de la información"
        content="La información recopilada se utiliza para brindar y mejorar las funcionalidades de la aplicación, personalizar la experiencia del usuario, garantizar la seguridad del servicio y mostrar información relevante relacionada con la salud y la nutrición."
        />

      <Section
        title="4. Suscripciones"
        content="GoalFit ofrece suscripciones mensuales y anuales gestionadas a través de Google Play y RevenueCat. Los datos de pago son procesados de forma segura por estas plataformas y no son almacenados ni gestionados directamente por GoalFit."
        />

      <Section
        title="5. Compartición de datos"
        content="No compartimos información personal con terceros, excepto cuando sea necesario para el funcionamiento del servicio, con proveedores tecnológicos que cumplen estándares de seguridad, o cuando la ley lo exija."
        />

      <Section
        title="6. Eliminación de cuenta y datos"
        content="El usuario puede solicitar la eliminación de su cuenta y de los datos personales asociados desde la configuración de la aplicación o contactándonos por correo electrónico. Al eliminar la cuenta, se eliminarán los datos personales, salvo aquellos que deban conservarse por obligaciones legales."
        />

      <Section
        title="7. Derechos del usuario"
        content="El usuario tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier momento. También puede retirar su consentimiento para el uso de determinados datos."
        />

      <Section
        title="8. Cambios en esta política"
        content="Podemos actualizar esta Política de Privacidad periódicamente. Cualquier cambio relevante será notificado a través de la aplicación o publicado en esta página."
        />

      <Section
        title="9. Contacto"
        content={
          <>
            Si tenés preguntas sobre esta Política de Privacidad o sobre la eliminación de datos,
            podés contactarnos en:
            <br />
            <strong style={{ color: "#fff" }}>goalfit.contact@gmail.com</strong>
          </>
        }
        />

      </div>
    </main>
  );
}

/* Card Section */
function Section({ title,content }: { title: string; content: React.ReactNode }) {
  return (
    <section
      style={{
        backgroundColor: "#25242e",
        padding: 20,
        borderRadius: 16,
        marginBottom: 20,
      }}
    >
      <h2 style={{ fontSize: 20, marginBottom: 12 }}>{title}</h2>
      <p style={{ color: "#9CA3AF", fontSize: 16, margin: 0, textAlign: "justify" }}>
        {content}
      </p>
    </section>
  );
}
