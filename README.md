# State Management POC

Esse projeto basicamente compara como diferentes abordagens de gerenciamento de estado no React impactam as re-renderizações dos componentes. O objetivo é ajudar desenvolvedores a entender como useState, Context API e Zustand se comportam em termos de performance e quando é mais apropriado usar cada um.

### 🚀 Propósito

Este repositório foi criado para:
	•	Demonstrar como o gerenciamento de estado no React afeta as re-renderizações;
	•	Comparar useState, Context API e Zustand;
	•	Servir como um guia prático para ajudar desenvolvedores a decidir qual abordagem escolher para diferentes casos de uso;

---------

### 📁 Estrutura do Projeto

O repositório contém quatro exemplos, cada um focado em uma abordagem específica de gerenciamento de estado:
1.	`useState`
Mostra o comportamento básico do useState e como ele lida com o estado local;
2.	`useState & React.memo`
Mesma abordagem anterior mas com um plus de como otimizar o uso do `useState`;
3.	`createContext`
Demonstra como a Context API gerencia o estado global e como isso afeta as re-renderizações dos componentes filhos;
4.	`zustand`
Explora o comportamento do Zustand, destacando sua granularidade e eficiência na notificação de mudanças;

---------

### 📦 Instalação

Siga os passos abaixo para rodar o projeto localmente:
1.	Clone o repositório:
```bash
git clone https://github.com/lucasca2/state-poc.git
cd state-poc
```
	
2.	Instale as dependências:
```bash
npm install
```

3.	Rode o projeto:
```bash
npm run dev
```

4.	Acesse no navegador: http://localhost:3000

---------

### 📚 Recursos Adicionais

Links úteis sobre gerenciamento de estado no React:
- [Documentação oficial do React - State e Lifecycle](https://react.dev/learn/state-a-component-s-memory)
- [Documentação oficial da Context API](https://react.dev/learn/passing-data-deeply-with-context)
- [Documentação do Zustand](https://zustand-demo.pmnd.rs/docs/getting-started)

---------

### 💡 Autor

Criado por [Lucas Costa Amaral](https://lucas.amaral.dev.br).
Se você achou útil, não esqueça de dar uma ⭐ no repositório e compartilhar com outros devs!
