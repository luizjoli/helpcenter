const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = { 
  "title":"WhatsApp no BLiP",
  "subtitle":"Melhore o relacionamento com o seu cliente através do Whatsapp!  ",
  "img":"/img/illustrations/whatsapp-logo.svg",
  "from":"BLiP Help Center >",
  "session": "Canais",
  "session_url": "/channels",
  "here":"WhatsApp no BLiP",
  "intro":"Com a abertura da API oficial do WhatsApp (início de Agosto de 2018), tornou-se possível utilizar este canal para melhorar a comunicação entre clientes e empresas. Uma das soluções possíveis, neste cenário, é utilizar o BLiP para organizar e escalar o atendimento humano de uma empresa.",
  "cards":[  
     {  
        "title":"Visão geral do canal WhatsApp",
        "type": "text",
        "url": "#", 
        "abstract":"O aplicativo WhatsApp ajuda na conexão e no compartilhamento de informações entre mais de 1 bilhão de pessoas em todo o mundo.",
        "text":"Ver mais!"
     },
     {  
        "title":"Arquitetura do canal WhatsApp no BLiP",
        "type": "text",
        "url": "#",
        "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
        "text":"Ver mais!"
     },
     {  
      "title":"Funcionalidades do canal WhatsApp",
      "type": "text",
      "url": "#",
      "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
      "text":"Ver mais!"
    },
    {  
      "title":"Tipos de conteúdo suportados",
      "type": "text",
      "url": "#",
      "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
      "text":"Ver mais!"
    },
    {  
      "title":"Como publicar seu Chatbot no WhatsApp",
      "type": "text",
      "url": "#",
      "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
      "text":"Ver mais!"
   },
   {  
    "title":"Como interagir com os usuários",
    "type": "text",
    "url": "#",
    "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
    "text":"Ver mais!"
  }, 
  {  
    "title":"Acessando outras funcionalidades do canal através da API do BLiP",
    "type": "text",
    "url": "#",
    "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
    "text":"Ver mais!"
  }, 
  ]
};
//BLiP Icon for SVGs
const defs = '/img/defs.svg';
class BlipIcon extends React.Component {
  render() {
    const className = 'blip-icon' + (this.props.className ? (' ' + this.props.className) : '')
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      width="1em" height="1em"
    >
      <use xlinkHref={`${defs}#${this.props.name}`}/>
    </svg>
    );
  }
}


class WhatsApp extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
        return(
           
            <div>

            {/* Topo */}
              <div>
                <div className="pages-top">
                  <div className="main">
                    <p className="title">{data.title}</p>
                    <p className="subtitle">{data.subtitle}</p>
                  </div>
                  <div className="image">
                    <img className="img-channel" src={data.img} />
                  </div>
                </div>
              </div>

              {/* Conteudo */}
              <div className="pages-content">
                <div className="navigation">
                  <p className="from">{data.from}</p>
                  <p className="from"><a className="link-from" href={data.session_url}>{data.session}</a> ></p>
                  <p className="here">{data.here}</p>
                </div>
                <div className="info">
                  <p className="intro">O aplicativo WhatsApp ajuda na conexão e no compartilhamento de informações entre mais de 1 bilhão de 
                    pessoas em todo o mundo. O WhatsApp Business API é a maneira segura, confiável e escalável para que as empresas possam se conectar, 
                    de forma efetiva, com seus clientes dentro deste canal.</p>

                  <p className="intro">Esta categoria apresenta vários artigos sobre a integração entre o BLiP e o canal WhatsApp Business API. 
                    Nestes artigos você aprenderá como funciona este canal, quais seus principais benefícios e como criar sua primeira experiência 
                    oficial de mensagens através do BLiP e da API oficial do WhatsApp.</p>

                  <p className="intro">Se você ainda não tem acesso à API e gostaria de utilizá-la em sua empresa, entre em contato conosco
                    <a href="https://take.net/fale-conosco/"> através do link.</a></p>

                  <p className="intro"><em>Caso nunca tenha trabalhado com este canal clique no primeiro link abaixo.</em></p>
                </div>


                {/* Cards */}
                <div className="cards">
                  {data.cards.map((c, index) => ( 
                  <a href={c.url} className="card" key={index}>
                   
                      { c.type === "video" ? 
                      <div className="title-with-icon">
                        <BlipIcon name="tutorials" className="bp-fs-3 bp-fill-watermelon"></BlipIcon>
                        <p className="title-video">{c.title}</p>
                      </div>
                      :
                      <div className="title-with-icon">
                        <BlipIcon name="txt-file" className="bp-fs-3 bp-fill-sea"></BlipIcon>
                        <p className="title">{c.title}</p>
                      </div>
                      }
                   
                    <p className="abstract">{c.abstract}</p>
                    <div className="seeMore">
                      <p className="text">{c.text}</p>
                      <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                    </div>
                  </a>
                  ))}

                </div>
              </div>
          </div>
        );
    }
}

WhatsApp.title = 'WhatsApp no BLiP';
module.exports = WhatsApp; 