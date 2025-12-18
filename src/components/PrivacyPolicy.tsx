export default function PrivacyPolicy() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: "0 24px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
        color: "#fff",
      }}
    >
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
        content="Podemos recopilar información básica proporcionada por el usuario, así como
        datos técnicos del dispositivo. GoalFit puede solicitar acceso a la cámara
        únicamente para escanear alimentos y registrar información nutricional."
      />

      <Section
        title="2. Uso de la cámara"
        content="La cámara se utiliza exclusivamente cuando el usuario decide escanear
        alimentos. No se capturan imágenes ni se accede a la cámara sin el
        consentimiento explícito del usuario."
      />

      <Section
        title="3. Suscripciones"
        content="GoalFit ofrece suscripciones mensuales y anuales gestionadas a través de
        Google Play y RevenueCat. No almacenamos ni procesamos información de pago."
      />

      <Section
        title="4. Compartición de datos"
        content="No compartimos información personal con terceros, excepto cuando sea
        necesario para el funcionamiento del servicio o cuando lo exija la ley."
      />

      <Section
        title="5. Derechos del usuario"
        content="El usuario puede solicitar acceso, modificación o eliminación de sus
        datos personales en cualquier momento contactándonos directamente."
      />

      <Section
        title="6. Contacto"
        content={
          <>
            Si tenés preguntas sobre esta política, podés contactarnos en:
            <br />
            <strong style={{ color: "#fff" }}>goalfit.contact@gmail.com</strong>
          </>
        }
      />
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
