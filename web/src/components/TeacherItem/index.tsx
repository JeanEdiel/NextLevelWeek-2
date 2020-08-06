import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/22941026?s=460&u=e6f9d68d314b078f43f6b8a28a4a0347fc6d09c5&v=4" alt="Jean Mello"/>
                <div>
                    <strong>Jean Mello</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br /><br />
                Aut magnam nam iste ipsam nisi suscipit ratione eaque reprehenderit pariatur deserunt quo maxime, veniam nihil non error in autem deleniti minima?
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;