import React from 'react'
import cover from '../assets/img/image.png'

function Home() {
  return (
    <main className="home">
      <section className="sobre">
        <div className="texto">
          <h1>Sobre Nós</h1>
          <p>Nosso projeto consiste em conseguir de uma forma mais tecnologica ajudar as pessoas de mais idade a consumirem seus medicamentos nas horas certas,com isso podendo facilitar a vida de familiares, amigos e ate cuidadores.</p>
        </div>
        <img src={cover} alt="" />
      </section>
      <section className="container">
        <h1>O Produto</h1>
        <div className="recursos">
          <div className="recurso">
            <h2>Como Funciona?</h2>
            <p>O Nosso produto ele é uma espécie de 'Alexa' com atributos visuais para a medicação correta da população idosa no nosso País, tendo em base um custo acessível e de fácil controle para os idosos, como por exemplo: A tela interativa terá letras maiores e legíveis para aqueles que possuem algum tipo de visão, e para aqueles que tem problemas de audição iria piscar uma luz alertando na hora do idoso se medicar.
</p>
          </div>
          <div className="recurso">
            <h2>Como Programo?</h2>
            <p>No primeiro passo conecte o dispositivo a internet para que ele envie informações para o celular do cuidador ou do familiar e para que consiga fazer sua programação de medicação de forma normal, depois disto é so listar horários e o nome do medicamento ao dispositivo que ele ja estará pronto para uso.</p>
          </div>
          <div className="recurso">
            <h2>Quanto Custa?</h2>
            <p>Buscamos fazer um preço acessivel para vários idosos, os materias são bem simples com revestimento de plastico e compostos por arduinos, uma tela que indica o nome do medicamento e um dispertador que irá apitar na hora da medicação.</p>
          </div>
          <div className="recurso">
            <h2>A Solução</h2>
            <p>Nossa solução seria baseada em relação a melhora e o bem estar da parte idosa do país fazendo com que a expectativa de vida venha aumentando cada vez mais e mais ocasionando a possível cura de algumas doenças geradas pela idade que são controladas por remédios.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home