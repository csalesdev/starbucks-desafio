import { HomeStyle } from "./HomeStyle";

export default function Home() {
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
            src="src\assets\media\copinho-laranja.png"
            alt="copo laranja do Starbucks"
          />
          <img
            src="src\assets\media\copinho-vermelho.png"
            alt="copo vermelho do Starbucks"
          />
          <img
            src="src\assets\media\copinho-amarelo.png"
            alt="copo amarelo do Starbucks"
          />
        </figure>
      </section>
      <section className="section2">
        <img
          src="src\assets\media\copo-laranja.png"
          alt="copo laranja grande do Starbucks"
        />
        <img src="src\assets\media\background-verde.png" alt="fundo verde" />
      </section>
    </HomeStyle>
  );
}
