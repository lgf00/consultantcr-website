import React from 'react';
import { Link } from 'react-router-dom';
import './styles/about.css'
import avatar from '../images/avatar.jpg'
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function About() {
  return (
    <div className="about">
      <HelmetProvider>
        <Helmet>
          <title>About - CONSULTANTCR</title>
          <meta name="description" content="Alonso Guzman is a Regulatory Affairs Specialist with more than 15 years of experience.  Mr. Guzman has extensive experience helping pharmaceutical companies worldwide to gain approval for their medicines in a timely and cost-effective manner
          ..."/>
        </Helmet>
      </HelmetProvider>
      <div className="banner">
        <div className="custom-shape-divider-top-1666377012">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
        </div>
        <div className="banner-text">
          <h1>CEO and Founder</h1>
          <h3>Alonso Guzmán</h3>
          <p>+1 (617) 669-3566</p>
          <p>aguzman@consultantcr</p>
          <p className='linkedin'>
            <a href="https://www.linkedin.com/in/alonsoguzman/" target={"_blank"} rel="noreferrer">
              LinkedIn 
              <span className="material-symbols-outlined">
                open_in_new
              </span>
            </a>
          </p>
        </div>
        <img src={avatar} alt="profile"/>
        <div className="custom-shape-divider-bottom-1666377087">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
        </div>
      </div>
      <div className="content about-content">
        <p>
        Alonso Guzman is a Regulatory Affairs Specialist with more than 15 years of experience.  Mr. Guzman has extensive experience helping pharmaceutical companies worldwide to gain approval for their medicines in a timely and cost-effective manner utilizing excellent organization and communication skills. Currently, he provides support to numerous clients with regulatory strategy, document preparation, archiving, quality assurance and document publishing for Regulatory submissions for ODDs, pINDs, INDs, pNDAs, NDAs, ANDAs, BLAs and MAAs and their respective lifecycle submissions in both electronic (eCTD) and hard-copy submission (CTD) to the Global health Agencies authorities. 
        </p>
        <p>
        In his career as a Regulatory Specialist, he has successfully helped many clients by converting their legacy INDs into eCTD format. Right now, Mr. Guzman is developing and overseeing the execution of regulatory strategies and regulatory submissions as well as providing regulatory operations support and guidance to various clients.  These submissions include INDs, NDAs, BLA and MAA in eCTD format to the global health agencies.  He has been part of many diverse teams that have successfully filed multiple INDs and life cycle submissions ({'>'}3000) with Oncology and other Divisions at FDA and NONE have received a clinical hold response or RTF letters from the agencies.  He has successfully worked with many departments (non clinical, clinical, quality, PV, CMC and oncology) to coordinate the development of projects and to schedule follow up submissions.  He has participated in pIND meetings with the FDA and has extensive knowledge in Extedo eCTDmanager Suite, Liquent Insight for Publishing™, Lorenz docuBridge. eCTD express publishing tools and ISI templates and has experience with Lorenz (authorBridge, docuBridge, and eValidator), ISItoolbox Pharma edition, and Adobe Acrobat software.  Experience with different EDMS software and managed, assisted, and participated in compliance activities including SOP creation/revision, regulatory departmental training exercises and weekly Project Management meetings.
        </p>
        <Link to="/contact">
          <button className='red-white-grad'>
            Get In Touch
            <span className="material-symbols-outlined">
                arrow_forward
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}
