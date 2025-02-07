"use client";

import { useState } from "react";

export const FAQSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="impressum" className="container md:w-[700px] py-24 sm:py-32 mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          IMPRESSUM
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Rechtliche Informationen
        </h2>
      </div>

      <div className="text-left space-y-4">
        <p><strong>Angaben gemäß § 5 TMG</strong></p>
        <p><strong>VK Logistiks GmbH</strong></p>
        <p>Breslauer Str. 62</p>
        <p>97318 Kitzingen</p>

        {/* Wenn die Anzeige nicht erweitert ist, zeigen wir nur bis zur Adresse */}
        {isExpanded && (
          <>
            <p><strong>Handelsregister:</strong> HRB 16753</p>
            <p><strong>Registergericht:</strong> Amtsgericht Würzburg</p>

            <p><strong>Vertreten durch:</strong> Andreas Kolb</p>

            <p><strong>Kontakt</strong></p>
            <p><strong>Telefon:</strong> 09321925110</p>
            <p><strong>E-Mail:</strong> info@vk-logistiks.de</p>

            <p><strong>Umsatzsteuer-ID</strong></p>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p>DE299400721</p>

            <p><strong>Angaben zur Berufs­haftpflicht­versicherung</strong></p>
            <p><strong>Name und Sitz des Versicherers:</strong></p>
            <p>Mannheimer Versicherung AG</p>
            <p>Augustaanlage 66</p>
            <p>68165 Mannheim</p>
            <p><strong>Geltungsraum der Versicherung:</strong> Deutschland</p>

            <p><strong>Redaktionell verantwortlich</strong></p>
            <p>Andreas Kolb</p>
            <p>Breslauer Straße 62</p>
            <p>D-97318 Kitzingen</p>

            <p><strong>EU-Streitschlichtung</strong></p>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-500 underline">https://ec.europa.eu/consumers/odr/</a>.</p>
            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

            <p><strong>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</strong></p>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </>
        )}

        {/* Button zum Ein- und Ausklappen */}
        <div className="text-center">
          <button
            onClick={toggleExpand}
            className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-green-600 transition-all"
          >
            {isExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
          </button>
        </div>
      </div>
    </section>
  );
};