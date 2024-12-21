import { ContextPOC } from "./components/ContextPOC/ContextPOC";
import { StatePOC } from "./components/StatePOC/StatePOC";

import styles from "./Home.module.scss";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";
import { StateWithMemoPOC } from "./components/StateWithMemoPOC/StateWithMemoPOC";
import {
  contextPOC,
  contextPOCProvider,
  contextPOCSwitcher,
  contextPOCTitle,
  statePOC,
  statePOCTitleWithMemo,
  zustandPOC,
  zustandPOCStore,
  zustandPOCSwitcher,
  zustandPOCTitle,
} from "./constants";
import { ZustandPOC } from "./components/ZustandPOC/ZustandPOC";
import React from "react";
import { StressGroup } from "./components/_StressTest/StressGroup";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <h1>
        Gerenciamento de estado no <code>React.js</code>
      </h1>
      <p>
        Primeiramente, vamos pensar em um cenário simples onde temos que
        gerenciar um estado que será compartilhado entre dois componentes.
        <br />
        Então teremos um componente pai, que irá renderizar dois componentes
        filhos, e esses componentes filhos precisam compartilhar o mesmo estado.
        <br />
        Um deles vai receber apenas um texto (que poderia vir de uma API) e o
        outro vai ser um <code>Switcher</code> que vai servir apenas pra
        conseguir simular essa mudança de estado.
      </p>

      <h2>
        Usando <code>useState</code>;
      </h2>
      <p>
        Acredito que a primeira coisa que vem à mente é usar o{" "}
        <code>useState</code> para gerenciar o estado no componente pai e passar
        os valores e funções para os componentes filhos, que é a abordagem mais
        comum de gerenciamento de estados.
        <br />
        Algo mais ou menos assim:
      </p>
      <CodeBlock code={statePOC} />
      <StatePOC />
      <p>
        Se notar nessa abordagem, cada vez que o state do{" "}
        <code>switcherValue</code> muda, todos os componentes são
        re-renderizados novamente, até mesmo o <code>Title</code> que não tem
        nada a ver com isso!
      </p>
      <p>
        Isso acontece por que toda vez que um estado muda, o componente que o
        contém é re-renderizado, e como o <code>App</code> é o componente pai de
        todos os outros, todos eles são re-renderizados juntos.
      </p>
      <p>
        Existe uma forma de otimizar isso utilizando o <code>React.memo</code>,
        que basicamente faz com que um componente só seja re-renderizado se
        alguma propriedade que ele recebe for alterada.
        <br />
        Algo mais ou menos assim:
      </p>
      <CodeBlock code={statePOCTitleWithMemo} />
      <p>
        Com essa simples abordagem, ele já resolve o problema de re-renderizar o{" "}
        <code>Title</code> toda vez que o <code>switcherValue</code> muda.
      </p>
      <StateWithMemoPOC />
      <p>
        Porém note que o <code>App</code> continua re-renderizando toda vez que
        o <code>switcherValue</code> muda... Isso é um problema? não
        necessariamente, por que nesse caso o unico componente que vai ter
        impacto de fato é o <code>Container</code>, que é o esperado. O{" "}
        <code>App</code> é re-renderizado, mas ele só vai causar o re-render do{" "}
        <code>Container</code> que realmente deve ser re-renderizado, já que seu
        estado mudou, enquanto o <code>Title</code> vai continuar lá intacto por
        conta do <code>React.memo</code>.
      </p>

      <h2>
        Usando <code>createContext</code>;
      </h2>
      <p>
        Um problema que temos quando começamos a usar a abordagem de{" "}
        <code>useState</code> é que a medida que a aplicação cresce, a
        quantidade de props que precisamos passar para os componentes filhos
        também cresce, e isso pode se tornar um problema a longo prazo.
      </p>
      <p>
        E então é que surge a brilhante ideia de resolver isso utilizando um{" "}
        <code>Context</code> do React, que basicamente é um objeto que vai ser
        compartilhado entre todos os componentes que estão dentro dele.
      </p>
      <p>
        Mas ao mesmo tempo que o código fica muito mais “limpo“ e organizado,
        ele também é muito perigoso e pode ser um inimigo pra performance da sua
        aplicação.
      </p>
      <p>
        Vamos pegar e passar toda essa lógica do state e colocar dentro de um{" "}
        <code>Context</code> então pra ver como ele se comporta.
      </p>
      <CodeBlock code={contextPOCProvider} />
      <CodeBlock code={contextPOC} />
      <p>
        Então, como podemos ver, o código realmente fica visualmente mais limpo,
        por que não precisamos mais passar as props para os componentes filhos.
        <br />
        Dentro de cada componente filho a gente simplesmente chamaria o contexto
        e pegaria o estado que a gente precisa.
      </p>
      <CodeBlock code={contextPOCTitle} />
      <CodeBlock code={contextPOCSwitcher} />
      <p>
        Muito mais organizado, mas vamos ver na prática como isso se comporta?
      </p>
      <ContextPOC />
      <p>
        Note que o <code>App</code> realmente parou de re-renderizar, ok! Mas o{" "}
        <code>Title</code> está re-renderizando toda vez que o{" "}
        <code>switcherValue</code> muda, e isso é um problema.
      </p>
      <p>
        Isso acontece por que o <code>React</code> não consegue identificar qual
        estado do contexto aquele componente depende, então ele re-renderiza
        toda vez que o estado do contexto muda. E não há <code>React.memo</code>{" "}
        que resolva, por que nesse caso não tem nenhuma propriedade que muda, o
        que muda é o estado do contexto.
      </p>
      <p>Como resolver isso então? Bom, a resposta é: Depende...</p>
      <p>
        Em alguns casos a gente pode dividir o contexto em vários contextos
        menores, e assim a gente consegue controlar melhor o que cada componente
        depende. Mas essa abordagem não é muito escalável, por que se o estado é
        muito complexo, acaba que é necessário criar diversos contextos e acaba
        deixando o código muito complexo e confuso.
        <br />
        Então geralmente o <code>Context</code> é mais recomendado para estados
        que são mais simples ou para estados que não são alterados
        frequentemente como um tema(light/dark) por exemplo.
      </p>
      <h2>
        Usando <code>Zustand</code>;
      </h2>
      <p>
        Se usar <code>useState</code>, fica muito verboso, se usar{" "}
        <code>createContext</code>, não fica performático, o que usar então?
      </p>
      <p>
        Nesses casos, a gente pode optar por usar um gerenciador de estados mais
        robusto, como por exemplo um Redux, Zustand, etc...{" "}
      </p>
      <p>
        A diferença entre esses gerenciadores de estados robustos e o{" "}
        <code>Context</code> é que a gente consegue observar apenas um pedaço do
        estado invés de sempre observar o estado inteiro.
      </p>
      <p>Nesse exemplo vou usar o Zustand pela facilidade da implementação:</p>
      <CodeBlock code={zustandPOCStore} />
      <CodeBlock code={zustandPOC} />
      <p>
        Note que até mesmo nosso arquivo principal fica mais limpo e organizado,
        por que ele não precisa saber sobre os estados dos componentes filhos.
      </p>
      <CodeBlock code={zustandPOCTitle} />
      <CodeBlock code={zustandPOCSwitcher} />
      <p>
        Dessa forma, o componente <code>Title</code> vai re-renderizar apenas se
        o estado <code>title</code> for alterado, por que agora ele não está
        mais observando o restante dos estados
      </p>
      <p>
        O mesmo vale pro <code>Container</code>, se por alguma razão o estado{" "}
        <code>title</code> fosse alterado, isso não o afetaria em nada.
      </p>
      <p>Mas vamos ver na prática como isso fica:</p>
      <ZustandPOC />
      <p>
        Usando um gerenciador mais robusto, a gente até consegue evitar o uso do{" "}
        <code>React.memo</code> por que não é mais necessário já que o
        componente pai não está mais sendo re-renderizado desnecessariamente
        (como acontece usando o <code>useState</code>)
      </p>
      <h2>Considerações finais</h2>
      <p>
        Na maioria das vezes, um simples <code>useState</code> é o suficiente
        pra resolver os problemas simples do dia a dia, se souber trabalhar bem
        com ele, ele é tão performático quanto qualquer outro gerenciador de
        estados.
      </p>
      <p>
        Porém usar <code>React.memo</code> demais não é muito legal, por que ele
        também tem um custo de performance, então é sempre bom usar com
        moderação.
      </p>
      <p>
        Do mesmo jeito também que não é legal usar um Redux/Zustand/etc.. pra
        qualquer estado simples da nossa aplicação, a gente estaria adicionando
        uma complexidade desnecessária.
      </p>
      <p>
        Mas que custo é esse? falar é fácil, então vamos fazer um teste de
        stress e ver na prática!
      </p>
      <h2>Componentes pequenos</h2>
      <StressGroup countOfChildren={20} />

      <h2>Componentes gigantes</h2>
      <StressGroup countOfChildren={10000} />

      <p>
        Em resumo, a melhor abordagem vai depender do seu caso de uso, se você
        tem um estado simples, use um <code>useState</code>, se você tem um
        estado mais complexo, use um gerenciador de estados mais robusto. Se
        você tem um estado interno e quer usar um <code>useState</code> de uma
        forma mais limpa, use um <code>Context</code>.
      </p>
      <p>
        Na maioria das vezes o <code>useState</code> é o suficiente, se você
        notar que seu código está começando a ficar muito complexo e confuso, aí
        sim é hora de pensar em usar um gerenciador de estados mais robusto.
      </p>
      <p>
        Mas tome cuidado com re-renderizações desnecessárias antes que vire uma
        bola de neve e você não consiga mais controlar.
      </p>
      <p>
        Fique a vontade pra instalar o{" "}
        <a href="https://github.com/lucasca2/state-poc">repositório</a> e fazer mais testes por
        conta própria!
      </p>
      <Footer />
    </div>
  );
};
