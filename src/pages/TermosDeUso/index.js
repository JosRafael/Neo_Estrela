import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importe o FontAwesomeIcon
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Importe o ícone de seta para a esquerda

import backgroundImage from "../../assets/foto1.png"; // Importe sua imagem de fundo aqui

const TermosContainer = styled.div`
  /* Estilos para o contêiner dos termos de uso */
  background-image: url(${backgroundImage}); /* Use a imagem importada como background */
  background-size: cover; /* Para cobrir todo o elemento com a imagem */
  background-repeat: no-repeat; /* Para evitar que a imagem se repita */
  background-position: center; /* Para centralizar a imagem no elemento */

  /* Outras propriedades CSS para o contêiner */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #000;
  padding: 2rem 1rem;
  --swiper-theme-color: #000;
  --swiper-navigation-size: 2px;
  --swiper-pagination-bullet-size: 6px;
  --swiper-pagination-bullet-horizontal-gap: 6px;

  /*! elementor - v3.15.0 - 20-08-2023 */
  .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap {
    background-color: ${props => (props.clicked ? "#bf81be" : "#69727d")};
    color: #fff;
    h2 {
      font-size: 32px;
      margin-bottom: 20px;
 
    }
  }

  .elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap {
    color: #69727d;
    border: 3px solid;
    
    background-color: transparent;
  }

  .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap {
    margin-top: 8px;
    
  }

  .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter {
    width: 1em;
    height: 1em;
    
  }

  .elementor-widget-text-editor .elementor-drop-cap {
    float: left;
    text-align: center;
    line-height: 1;
    
    font-size: 50px;
  }

  .elementor-widget-text-editor .elementor-drop-cap-letter {
    display: inline-block;
  }

  span {
    color: #ffffff;
    
  }

  .termos-content {
    p {
      margin-top: 10px;
      font-size: 16px;
      margin-right: 20px;
      color: white;
      line-height: 1.5;
    }
    padding: 1rem;
  }
`;
const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
  }

  .arrow-icon {
    margin-right: 5px;
  }
`;

const TermosDeUso = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <TermosContainer clicked={clicked}>
      <div className="termos-content">
      <BackButton to="/login">
          <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
          Voltar para a página de login
        </BackButton>
        <br />
        <h2 onClick={handleClick}>
          <span style={{ fontSize: "32px" }}>Política Privacidade</span>
        </h2>
        <p>
          A sua privacidade é importante para nós. É política da Neobet respeitar a sua privacidade em
          relação a qualquer informação sua que possamos coletar no site Neobet
          e outros sites que possuímos e operamos. Solicitamos informações pessoais apenas quando realmente
          precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu
          conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado.
          Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar
          perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados. Não
          compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando
          exigido por lei. O nosso site pode ter links para sites externos que não são operados por nós. Esteja
          ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar
          responsabilidade por suas respectivas políticas de privacidade
          Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não
          possamos fornecer alguns dos serviços desejados. O uso continuado de nosso site será considerado
          como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver
          alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato
          conosco.
        </p>
        <p>
          • O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para
          veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado
          anúncio é exibido para você.
          <br></br><br></br>
          • Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do
          Google AdSense.
          <br></br><br></br>
          • Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer
          financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados
          por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre
          que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que
          possam ser do seu interesse.
          <br></br><br></br>
          • Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados
          simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de
          nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que
          nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma
          compra.
        </p>
        <br></br>
        <h2 onClick={handleClick}>
          <span style={{ fontSize: "27px" }}>Compromisso do Usuário</span>

          <p>
            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a Neobet
            oferece no site e com caráter enunciativo, mas não limitativo:<br></br>
            <br></br>
            A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;<br></br><br></br>
            B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar,
            qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;<br></br><br></br>
            C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da Neobet, de
            seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer
            outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente
            mencionados.
          </p>
        </h2>
        <br></br>
        <h2 onClick={handleClick}>
          <span style={{ fontSize: "32px" }}>Mais informações</span>
        </h2>
        <p>
          Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem
          certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um
          dos recursos que você usa em nosso site. Esta política é efetiva a partir de 01 de Janeiro de 2023 00:00
        </p>
        <br></br>
        <h2 onClick={handleClick}>
          <span style={{ fontSize: "32px" }}>1. Termos</span>
        </h2>

        <p>
          Ao acessar o site Neobet, concorda em cumprir estes termos de serviço, todas as leis e
          regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais
          aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
          Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais
          aplicáveis.
        </p>
        <br></br>
        <h2 onClick={handleClick}>
          <span style={{ fontSize: "32px" }}>2. Uso de Licença</span>
        </h2>
        <p>
          É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou
          software) no site Neobet, apenas para visualização transitória pessoal e não comercial. Esta é a
          concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
          <br></br><br></br> 1. modificar ou copiar os materiais; <br></br><br></br>
          2. usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não
          comercial); <br></br><br></br>
          3. tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Neobet; <br></br><br></br>
          4. remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou <br></br><br></br>
          5. transferir os materiais para outra pessoa ou ‘espelhe’ os materiais em qualquer outro servidor.
          Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser
          rescindida por Neobet a qualquer momento. Ao encerrar a visualização desses materiais ou após o
          término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato
          eletrónico ou impresso.

        </p>
        <br></br>
        <h2 onClick={handleClick}>
          <span style={{ fontSize: "32px" }}>3. Isenção de responsabilidade</span>
        </h2>
        <p>
          1. Os materiais no site da Neobet são fornecidos ‘como estão’. Neobet não oferece
          garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias,
          incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um
          fim específico ou não violação de propriedade intelectual ou outra violação de direitos.<br></br><br></br>
          2. Além disso, a Neobet não garante ou faz qualquer representação relativa à precisão, aos
          resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma
          relacionado a esses materiais ou em sites vinculados a este site.<br></br><br></br>
          3. Aposte com responsabilidade! Ao utilizar a Neobet você é o único responsável pelos seus
          ganhos/perdas. Não recomendamos que você invista um dinheiro que não possa ser
          comprometido. Siga o gerenciamento de banca que ensinamos no nosso curso e bons lucros!<br></br><br></br>
        </p>
        <br></br>
        <h2 onClick={handleClick}>
          <span style={{ fontSize: "32px" }}>4. Limitações</span>
        </h2>
        <p>
          Em nenhum caso a Neobet ou seus fornecedores serão responsáveis por quaisquer danos
          (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios)
          decorrentes do uso ou da incapacidade de usar os materiais em Neobet, mesmo que Neobet
          ou um representante autorizado da Neobet tenha sido notificado oralmente ou por escrito da
          possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas,
          ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não
          se aplicar a você.

        </p>
        <br></br>
        <h2 onClick={handleClick}>
          <span style={{ fontSize: "32px" }}>5. Precisão dos materiais</span>
        </h2>
        <p>
          Os materiais exibidos no site da Neobet podem incluir erros técnicos, tipográficos ou fotográficos.
          Neobet não garante que qualquer material em seu site seja preciso, completo ou atual. Neobet
          pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No
          entanto, Neobet não se compromete a atualizar os materiais.

        </p>
        <br></br>
        <h2 onClick={handleClick}>
          <span style={{ fontSize: "32px" }}>6. Links</span>
        </h2>
        <p>
          A Neobet não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de
          nenhum site vinculado. A inclusão de qualquer link não implica endosso por Neobet do site. O uso
          de qualquer site vinculado é por conta e risco do usuário
        </p>
        <br></br>
        <h2 onClick={handleClick}>
          <span style={{ fontSize: "32px" }}>Modificações </span>
        </h2>
        <p>
          A Neobet pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao
          usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço
        </p>
        <br></br>
        <h2 onClick={handleClick}>
          <span style={{ fontSize: "32px" }}>Lei aplicável</span>
        </h2>
        <p>
          Estes termos e condições são regidos e interpretados de acordo com as leis da Neobet e você se
          submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
        </p>
        <br></br> <br></br> <br></br> <br></br>
      </div>
    </TermosContainer>
  );
};

export default TermosDeUso;