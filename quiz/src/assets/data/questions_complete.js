const data = [
    {
      category: "HTML",
      questions: [
        {
          question: "Qual tag cria um parágrafo?",
          options: ["<p>", "<h1>", "<text>", "<ul>"],
          answer: "<p>",
          tip: "É uma tag de uma letra apenas",
        },
        {
          question: "Qual atributo adiciona um link para a tag a?",
          options: ["alt", "href", "src", "link"],
          answer: "href",
          tip: "Hyperlink Reference",
        },
        {
          question: "As listas não ordenadas tem a tag de:",
          options: ["<ol>", "<ul>", "<li>", "<list>"],
          answer: "<ul>",
        },
        {
          question: "Qual atributo deixa o input obrigatório?",
          options: ["placeholder", "value", "required", "maxlength"],
          answer: "required",
        },
        {
          question: "A tag semântica indicada para rodapés é a:",
          options: ["div", "main", "section", "footer"],
          answer: "footer",
        },
      ],
    },
    {
      category: "CSS",
      questions: [
        {
          question: "Qual regra altera a cor de um elemento?",
          options: ["color", "background-color", "font-size", "transition"],
          answer: "color",
          tip: "Cor em inglês",
        },
        {
          question: "Para aumentar a fonte de um elemento utilizamos:",
          options: ["font", "text-transform", "font-size", "hover"],
          answer: "font-size",
        },
        {
          question: "A posição que deixa um elemento fixo é a:",
          options: ["static", "absolute", "fixed", "relative"],
          answer: "fixed",
        },
      ],
    },
    {
      category: "JavaScript",
      questions: [
        {
            question: "Qual meu primeiro nome?",
            options: [
              "Anna",
              "maria",
              "Karina",
              "Nenhum acima",
            ],
            answer: "Anna",
          },
          {
            question: "Qual minha idade?",
            options: ["19", "17", "18", "20"],
            answer: "18",
          },
          {
            question: "Qual minha cor favorita?",
            options: ["verde", "roxo", "branco", "preto"],
            answer: "branco",
          },
          {
            question: "Qual a cor dos meus olhos?",
            options: ["azul", "preto", "castanho escuro", "cstanho claro"],
            answer: "castanho escuro",
          },
          {
            question:
              "Qual  foi o melhor professor de TI do senai(que ja saiu)?",
            options: ["jackson", "rodrigo", "charles", "davi"],
            answer: "jackson",
          },
      ],
    },
  ];
  
  export default data;