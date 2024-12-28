import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Inscription = () => {
  return (
    <div>
      <Navbar />
      <section className='inscription'>
        <div className='inscription__h1'>
            <h1>Comment s'inscrire ?</h1>
        </div>
        <h2>Sélectionner l'évènement auquel vous souhaitez participer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quam incidunt laborum ducimus ea molestias qui laudantium minima? Voluptas voluptatem incidunt dignissimos, nesciunt pariatur veniam? Accusantium suscipit quasi saepe aliquam.</p>
        <h2>Remplir le formulaire, cliquer et valider</h2>
        <p>Entrez vos coordonnées et validez. La page de paiement apparait (paiement sécurisé). Il n'est pas nécéssaire d'avoir un compte Paypal,
             vous pouvez cliquer en dessous sur "Payer par carte bancaire". Une fois le paiement effectué vous recevrez un mail de notification.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero consectetur fugit odit dolore. Nostrum fugit quibusdam voluptas inventore provident voluptatem est, dicta commodi nihil amet. Incidunt quos reiciendis quisquam cum!</p>
            <p>Note : Il est possible de modifier les information d'inscription depuis votre compte personnel, dans ''mon compte''.
                 Si vous possédez déjà un compte, connectez vous en cliquant sur connexion. Ceci remplira automatiquement les renseignements à fournir
                  lorsque vous validerez votre inscription à un évènement.</p>

            <h3>Informations concernant le paiement</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo velit necessitatibus quaerat eos! Magni, dolorum dolor quod labore ab quis accusamus unde nobis cumque odit, sequi sunt repellat magnam error.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe doloribus hic modi quasi assumenda maxime vitae corporis provident, itaque reprehenderit aliquam officiis eos nam repellat cum unde obcaecati. Aut, distinctio.</p>
            <p>- par CARTE BANCAIRE. Dans ce cas, vous serez redirigés sur la page de paiement Paypal (il n'est pas nécéssaire d'avoir un compte Paypal pour payer),
                 cliquez sur le lien en bas de page pour un règlement par carte bancaire :</p>
            <p>- ou par votre compte PAYPAL si vous en possédez déjà un.</p>
      </section>
      <Footer />
    </div>
  );
};

export default Inscription;