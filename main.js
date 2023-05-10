import fetch from 'node-fetch';

async function buscarRepositorios(termo) {
  const url = `https://api.github.com/search/repositories?q=${termo}&sort=stars&order=desc`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      const repositorios = data.items;

      for (const repositorio of repositorios) {
        const nome = repositorio.name;
        const descricao = repositorio.description;
        const autor = repositorio.owner.login;
        const linguagem = repositorio.language;
        const estrelas = repositorio.stargazers_count;
        const forks = repositorio.forks_count;
        const ultimaAtualizacao = repositorio.updated_at;

        console.log("Nome do repositório:", nome);
        console.log("Descrição do Repositório:", descricao);
        console.log("Nome do autor:", autor);
        console.log("Linguagem do Repositório:", linguagem);
        console.log("Número de Stars:", estrelas);
        console.log("Número de Forks:", forks);
        console.log("Data da última atualização:", ultimaAtualizacao);
        console.log();
      }
    } else {
      console.log("Falha ao realizar a busca dos repositórios");
    }
  } catch (error) {
    console.log("Ocorreu um erro:", error);
  }
}

// Lê o termo de busca
//const termoDeConsulta = prompt("Digite o termo de busca: ");
buscarRepositorios('algoritmos e grafos');
