import Head from 'next/head';
import { useState } from 'react';
import Modal from '../components/Modal';

export default function Contact() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <>
      <Head>
        <title>Contact Us - Zoon Corp</title>
        <meta
          name="description"
          content="Contact Zoon Corp for business inquiries, trade opportunities, and technology solutions."
        />
      </Head>

      <main>
        <h1>Contact Zoon Corp</h1>
        <p>We look forward to hearing from you!</p>

        <h2>Contact Information</h2>
        <p><strong>Email:</strong> <a href="mailto:info@zooncpl.com">info@zooncpl.com</a></p>
        <p><strong>Phone:</strong> +91 1800 999999</p>
        <p><strong>Address:</strong> Srinagar, Kashmir, India 190017</p>

        <h2>Global Operational Regions</h2>
        <ul>
          <li>India</li>
          <li>Middle East (Saudi Arabia)</li>
          <li>GCC</li>
          <li>Asia-Pacific</li>
          <li>Europe</li>
        </ul>

        <h2>Quick Contact</h2>
        <p>Want to get in touch with us? Click the button below for more contact details.</p>
        <button onClick={toggleModal}>Contact Info</button>

        <Modal isOpen={isModalOpen} onClose={toggleModal} />
      </main>
    </>
  );
}
