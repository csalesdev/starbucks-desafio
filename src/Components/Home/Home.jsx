import { HomeStyle } from "./HomeStyle";
import { useState } from "react";

export default function Home() {
  const [copoSelecionado, setCopoSelecionado] = useState("laranja");

  const trocarCopo = (cor) => {
    setCopoSelecionado(cor);
  };

  return (
    <HomeStyle>
      <section>
        <h1>Mais que Café,</h1>
        <h2>
          Isso é <span>Starbucks</span>
        </h2>
        <p>
          A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
          dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
          Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas
          quentes e frias, doces diferenciados e sanduíches.
        </p>
        <button>SAIBA MAIS</button>
        <figure>
          <img
            onMouseOver=""
            onClick={() => trocarCopo("laranja")}
            src="./media/copinho-laranja.png"
            alt="copo laranja do Starbucks"
            className="copinho-laranja"
          />
          <img
            onMouseOver=""
            onClick={() => trocarCopo("amarelo")}
            src="./media/copinho-amarelo.png"
            alt="copo amarelo do Starbucks"
            className="copinho-amarelo"
          />
          <img
            onMouseOver=""
            onClick={() => trocarCopo("vermelho")}
            src="./media/copinho-vermelho.png"
            alt="copo vermelho do Starbucks"
            className="copinho-vermelho"
          />
        </figure>
      </section>
      <section className="section2">
        <img
          src={`./media/copo-${copoSelecionado}.png`}
          alt={`copo ${copoSelecionado} grande do Starbucks`}
        />
        <img
          src={
            copoSelecionado === "laranja"
              ? "./media/background-verde.png"
              : `./media/background-${copoSelecionado}.png`
          }
          alt={`fundo do copo ${copoSelecionado}`}
        />
      </section>
    </HomeStyle>
  );
}
