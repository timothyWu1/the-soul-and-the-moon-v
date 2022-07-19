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
      <Container className="py-6 categories">
                        </Container>
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
              <h2>Transfert de données</h2>
              <p>
              Vos informations, y compris vos données personnelles, peuvent être transférées à
                — et maintenus sur — des ordinateurs situés en dehors de votre État,
                province, pays ou autre juridiction gouvernementale lorsque l'
                les lois sur la protection des données peuvent différer de celles de votre
                juridiction.
              </p>
              <p>
              Si vous êtes situé en dehors de la République tchèque et choisissez de fournir
                informations à nous, veuillez noter que nous transférons les données,
                y compris les données personnelles, à la République tchèque et les traiter là-bas.
              </p>
              <p>
              Votre consentement à cette politique de confidentialité suivi de votre soumission
                de ces informations représente votre accord à ce transfert.
              </p>
              <p>
              The soul and the moon prendra toutes les mesures raisonnablement nécessaires pour s’assurer que
                vos données sont traitées en toute sécurité et conformément à la présente
                Politique de confidentialité et aucun transfert de vos données personnelles prendra
                placer à une organisation ou à un pays à moins qu’il n’y ait suffisamment de
                les contrôles en place, y compris la sécurité de vos données et autres
                renseignements personnels.
              </p>
              <hr />
              <h2>Divulgation des données</h2>
              <h3>exigences légales</h3>
              <p>
              Varkala peut divulguer vos données personnelles de bonne foi
                qu’une telle action est nécessaire pour:
              </p>
              <ul className="list-icon">
                <li>Pour se conformer à une obligation légale</li>
                <li>Pour protéger et défendre les droits ou la propriété de Varkala</li>
                <li>
                Pour prévenir ou enquêter sur d’éventuels actes répréhensibles en lien avec
                  avec le Service
                </li>
                <li>
                Pour protéger la sécurité personnelle des utilisateurs du Service ou du
                  public
                </li>
                <li>Pour se protéger contre la responsabilité légale</li>
              </ul>
              <hr />
              <h2>Sécurité des données</h2>
              <p>
              La sécurité de vos données est importante pour nous, mais rappelez-vous que
                aucune méthode de transmission sur Internet, ou méthode de
                le stockage électronique est 100% sécurisé. Alors que nous nous efforçons d’utiliser
                moyens commercialement acceptables pour protéger vos données personnelles, nous
                ne peut garantir sa sécurité absolue.
              </p>
              <hr />
           
              <h2>Nous contacter</h2>
              <p>
              Si vous avez des questions concernant cette politique de confidentialité, veuillez
              nous contactez:
              </p>
              <ul className="list-icon">
                <li>Par email: contact@thesoulandthemoon.com </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Privacy
