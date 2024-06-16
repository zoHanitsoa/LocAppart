import React from 'react'
import './About.css';
import DescriptionPanel from '../components/DescriptionPanel';
import '../components/Banner.css'
import logoBanner from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash2.png";

function About() {
  const Respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  const Fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
  const Service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  const Securite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  return (
    <>
      <div className='imageAboutClass'> 
        <img src={logoBanner} alt='banner' className='imageAbout' /> 
        <div className='opacity'></div>
      </div>
      
      <div className='about_container'>
      <DescriptionPanel title="Fiabilité" content={Fiabilite} />
      <DescriptionPanel title="Respect" content={Respect} />
      <DescriptionPanel title="Service" content={Service} />
      <DescriptionPanel title="Sécurité" content={Securite} />
      </div>
    </>
  )
}

export default About;