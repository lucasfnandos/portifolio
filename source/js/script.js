

document.addEventListener("DOMContentLoaded", () => {

  const projects = [
    {
      name: "Car Slider",
      desc: "Uma página web com o conceito de carrossel de um projeto anterior adaptado de forma pessoal, destacando meu interesse por carros muscle clássicos americanos. Neste projeto simples, porém envolvente, apliquei os conceitos que aprendi anteriormente para criar uma apresentação visual de cartões de carros. Cada cartão apresenta imagens marcantes e informações, com setas de navegação nas laterais para facilitar a navegação. O cartão atual fica totalmente visível, com 100% de opacidade, enquanto os demais permanecem ao fundo com 0%. Ao clicar nas setas, ocorre uma transição suave que revela o próximo cartão de forma contínua. Este projeto representa minha primeira tentativa de incorporar meus interesses ao design web, refletindo tanto minha criatividade quanto as habilidades que desenvolvi.",
      tech: "HTML, CSS, JavaScript",
      link: "https://lucasfnandos.github.io/carslider/",
      img: "./source/images/car-slider.png"
    },
    {
      name: "Info Card NLW",
      desc: "Esta página web estática foi criada durante um workshop realizado pela RocketSeat (escola online de programação e tecnologia), com foco em técnicas de CSS combinadas com HTML para desenvolver um site voltado a informações pessoais e conteúdos online favoritos relacionados a eSports. O projeto apresenta um layout visualmente agradável, que destaca bem meus interesses, utilizando diferentes estilos em CSS para melhorar a aparência geral. Com essa experiência, aprendi a unir princípios de design com elementos funcionais, criando uma página voltada à apresentação de conteúdos online com base nas minhas preferências.",
      tech: "HTML, CSS",
      link: "https://lucasfnandos.github.io/NLW/",
      img: "./source/images/info-card.png"
    },
    {
      name: "Profile",
      desc: "Como parte do curso CS50x, esta página foi criada aplicando conceitos de HTML, CSS e JavaScript com base nas aulas estudadas. Também utilizei o Bootstrap para adicionar recursos de estilização e melhorar a aparência do site. Além disso, a página desenvolvida na época tinha como objetivo apresentar o autor, reunindo informações pessoais e profissionais e, principalmente, destacar os projetos realizados na área de programação.",
      tech: "HTML, Bootstrap",
      link: "https://lucasfnandos.github.io/profile/",
      img: "./source/images/profile.png"
    },
    {
      name: "Final Project CS50x",
      desc: "Esta aplicação crie para pleitear a conclusão com certificação do curso introdutório a ciência da computação CS50x, CashFlow é um site desenvolvido para gerenciar dados financeiros de pequenas empresas. Ele permite que proprietários e administradores acompanhem de forma eficiente tanto as receitas quanto as despesas. Além disso, o CashFlow oferece funcionalidades que permitem armazenar informações importantes sobre fornecedores e funcionários. Muitas pequenas empresas enfrentam o desafio de assumir várias funções ao mesmo tempo, já que os proprietários costumam cuidar tanto das atividades operacionais quanto das tarefas administrativas. O CashFlow é uma ferramenta fácil de usar que simplifica a gestão financeira e a visualização dos dados, tornando-se uma alternativa mais prática do que planilhas pessoais complexas.",
      tech: "Python, Flask, SQLite, HTML, Bootstrap",
      link: "https://github.com/lucasfnandos/project",
      img: "./source/images/cashflow.png"
    },
    {
      name: "Página para desenvolvedor local",
      desc: "Esta é uma página minimalista com design moderno para atrair possíveis clientes, pensada para web desenvolvedores que queiram trabalhar fornecendo o serviço para pequenos negócios locais. O objetivo é fornecer aos negócios locais um serviço de atração de clientes de baixo custo e que seja direcionado, principalmente para a conversa no whatsapp onde o cliente poderá ter o primeiro atendimento, evitando deslocamento desnecessário.",
      tech: "PHP, HTML, CSS, Javascript",
      link: "https://lucasfnandos.github.io/personalpage/",
      img: "./source/images/personal-page.png"
    }
  ];

  const container = document.querySelector("#projects .container-pj");

  projects.forEach((project, index) => {
    const li = document.createElement("li");
    li.classList.add("card");

    if(index === 0){
      li.classList.add("selecionado");
    }

    li.innerHTML = `
      <img src="${project.img}" alt="${project.name}">
      
      <div class="info">
        <h3>${project.name}</h3>
        <p>${project.desc}</p>
        <p><strong>Tecnologias:</strong> ${project.tech}</p>
        <a href="${project.link}" target="_blank">Ver projeto!</a>
      </div>
    `;

    container.appendChild(li);
  });

  const cartoes = document.querySelectorAll('.card');
  const btnAvancar = document.getElementById('btn-avancar');
  const btnVoltar = document.getElementById('btn-voltar');

  let cartaoAtual = 0;

  function atualizarCarrossel(novoIndex){
    cartoes[cartaoAtual].classList.remove('selecionado');
    cartaoAtual = novoIndex;
    cartoes[cartaoAtual].classList.add('selecionado');
  }

  btnAvancar.addEventListener('click', () => {
    if(cartaoAtual < cartoes.length - 1){
      atualizarCarrossel(cartaoAtual + 1);
    }
  });

  btnVoltar.addEventListener('click', () => {
    if(cartaoAtual > 0){
      atualizarCarrossel(cartaoAtual - 1);
    }
  });

  const navMobile = document.querySelector('nav.mobile');
  const listaMenu = document.querySelector('nav.mobile ul');
  const icone = document.querySelector('.botao-menu-mobile i');

  navMobile.addEventListener('click', function () {
      listaMenu.classList.toggle('ativo');

      if (listaMenu.classList.contains('ativo')) {
          icone.classList.replace('fa-bars', 'fa-times');
      } else {
          icone.classList.replace('fa-times', 'fa-bars');
      }
  });

});