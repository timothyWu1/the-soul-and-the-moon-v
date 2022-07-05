import Link from "next/link"
import React from "react"
import { Container, Row, Col, Breadcrumb } from "react-bootstrap"

export async function getStaticProps() {
  return {
    props: {
      title: "Privacy policy",
    },
  }
}

const Privacy = () => {
  return (
    <React.Fragment>
      <section className="hero py-6">
        <Container>
          <Breadcrumb>
            <Link href="/" passHref>
              <Breadcrumb.Item>Accueil</Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item active>politique de confidentialité</Breadcrumb.Item>
          </Breadcrumb>
          <div className="hero-content">
            <h1 className="hero-heading mb-3">Politique de confidentialité</h1>
            <div>
              <p className="text-muted mb-0">
                Date d’entrée en vigueur : 05 juillet 2022
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="pb-6">
        <Container>
          <Row>
            <Col xl="10" className="text-content">
              <p>
                Cette page vous informe de nos politiques concernant la
                collecte, l’utilisation et la divulgation de données
                personnelles lorsque vous utilisez notre Service et des choix
                que vous avez associés à ces données.
              </p>
              <p>
                Nous utilisons vos données pour fournir et améliorer le Service.
                En utilisant le Service, vous acceptez la collecte et
                l’utilisation des informations conformément à la présente
                politique. Sauf définition contraire dans le présent document
                Politique de confidentialité, les termes utilisés dans cette
                politique de confidentialité ont les mêmes significations comme
                dans nos Termes et Conditions
              </p>
              <h2>Collecte et utilisation des informations</h2>
              <p>
                Nous recueillons plusieurs types d’informations pour divers afin
                de vous fournir et d’améliorer notre Service.
              </p>
              <hr />
              <h3>Types de données collectées</h3>
              <h4>Données personnelles</h4>
              <p>
                Lors de l’utilisation de notre Service, nous pouvons vous
                demander de nous fournir certaines informations personnellement
                identifiables qui peuvent être utilisées pour vous contacter ou
                vous identifier (« Données personnelles »). Les informations
                personnellement identifiables peuvent inclure, sans s’y limiter:
              </p>
              <ul className="list-icon">
                <li>Nom et prénom</li>
                <li>Adresse courriel</li>

                <li>Cookies et données d’utilisation</li>
              </ul>
              <h4>Données d’utilisation</h4>
              <p>
                Nous pouvons également collecter des informations sur la façon
                dont le Service est accédé et utilisé (« Données d’utilisation
                »). Ces données d’utilisation peuvent inclure des informations
                telles que l’adresse de protocole Internet de votre ordinateur
                (par exemple, l’adresse IP), le type de navigateur, la version
                du navigateur, les pages de notre service que vous visitez,
                l’heure et la date de votre visite, le temps passé sur ces
                pages, les identifiants uniques de l’appareil et d’autres
                données de diagnostic.
              </p>
              <h4>Données de suivi et de cookies</h4>
              <p>
                Nous utilisons des cookies et des technologies de suivi
                similaires pour suivre l’activité sur notre Service et conserver
                certaines informations.
              </p>
              <p>
                Les cookies sont des fichiers contenant une petite quantité de
                données pouvant inclure un identifiant unique anonyme. Les
                cookies sont envoyés à votre navigateur à partir d’un site Web
                et stockés sur votre appareil. Les technologies de suivi
                également utilisées sont des balises, des balises et des scripts
                pour collecter et suivre des informations et pour améliorer et
                analyser notre Service.
              </p>
              <p>
              Vous pouvez demander à votre navigateur de refuser tous les cookies ou d’indiquer quand un cookie est envoyé. Toutefois, si vous n’acceptez pas les cookies, vous ne pourrez peut-être pas utiliser certaines parties de notre Service.



 

              </p>
              <p>Exemples de cookies que nous utilisons :</p>
              <ul className="list-icon">
                <li>
                  <strong>Cookies de session. </strong> Nous utilisons des cookies de session pour faire fonctionner notre service.
                </li>
                <li>
                  <strong>Cookies de préférence.</strong>Nous utilisons des cookies de préférence pour mémoriser vos préférences et divers paramètres.
                </li>
                <li>
                  <strong>Cookies de sécurité.</strong> Nous utilisons des cookies de sécurité à des fins de sécurité.
                </li>
              </ul>
              <hr />
              <h2>Utilisation des données</h2>
              <p>The soul and the moon utilise les données collectées pour diverses buts :</p>
              <ul className="list-icon">
                <li>Pour fournir et maintenir le Service</li>
                <li>Pour vous informer des modifications apportées à notre Service</li>
                <li>
                Pour vous permettre de participer aux fonctionnalités interactives de notre Service lorsque vous choisissez de le faire
                </li>
                <li>Pour fournir un service à la clientèle et un soutien</li>
                <li>
                Pour fournir des analyses ou des informations précieuses afin que nous puissions améliorer le Service
                </li>
                <li>Pour surveiller l’utilisation du Service</li>
                <li>Détecter, prévenir et résoudre les problèmes techniques</li>
              </ul>
              <hr />
              <h2>Transfer Of Data</h2>
              <p>
                Your information, including Personal Data, may be transferred to
                — and maintained on — computers located outside of your state,
                province, country or other governmental jurisdiction where the
                data protection laws may differ than those from your
                jurisdiction.
              </p>
              <p>
                If you are located outside Czech Republic and choose to provide
                information to us, please note that we transfer the data,
                including Personal Data, to Czech Republic and process it there.
              </p>
              <p>
                Your consent to this Privacy Policy followed by your submission
                of such information represents your agreement to that transfer.
              </p>
              <p>
                Varkala will take all steps reasonably necessary to ensure that
                your data is treated securely and in accordance with this
                Privacy Policy and no transfer of your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of your data and other
                personal information.
              </p>
              <hr />
              <h2>Disclosure Of Data</h2>
              <h3>Legal Requirements</h3>
              <p>
                Varkala may disclose your Personal Data in the good faith belief
                that such action is necessary to:
              </p>
              <ul className="list-icon">
                <li>To comply with a legal obligation</li>
                <li>To protect and defend the rights or property of Varkala</li>
                <li>
                  To prevent or investigate possible wrongdoing in connection
                  with the Service
                </li>
                <li>
                  To protect the personal safety of users of the Service or the
                  public
                </li>
                <li>To protect against legal liability</li>
              </ul>
              <hr />
              <h2>Security Of Data</h2>
              <p>
                The security of your data is important to us, but remember that
                no method of transmission over the Internet, or method of
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your Personal Data, we
                cannot guarantee its absolute security.
              </p>
              <hr />
              <h2>Service Providers</h2>
              <p>
                We may employ third party companies and individuals to
                facilitate our Service ("Service Providers"), to provide the
                Service on our behalf, to perform Service-related services or to
                assist us in analyzing how our Service is used.
              </p>
              <p>
                These third parties have access to your Personal Data only to
                perform these tasks on our behalf and are obligated not to
                disclose or use it for any other purpose.
              </p>
              <hr />
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <ul className="list-icon">
                <li>By email: hello@example.com</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Privacy
