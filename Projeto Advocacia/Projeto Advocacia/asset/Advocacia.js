
function gerarPeticao(){

  const cliente = document.getElementById('cliente').value
  const tipoAcao = document.getElementById('tipoAcao').value
  const descricao = document.getElementById('descricao').value

  const resultado = document.getElementById('peticaoResultado')

  if(cliente === '' || tipoAcao === '' || descricao === ''){

    resultado.innerHTML = `
      ⚠️ Preencha todos os campos para gerar a petição.
    `
    return
  }

  resultado.innerHTML = `

    <h3>EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO</h3>

    <br>

    <strong>Parte Autora:</strong> ${cliente}

    <br><br>

    A presente demanda refere-se à ação de natureza
    <strong>${tipoAcao}</strong>,
    fundamentada nos princípios constitucionais do contraditório,
    ampla defesa e dignidade da pessoa humana.

    <br><br>

    <strong>Descrição do Caso:</strong>

    <br><br>

    ${descricao}

    <br><br>

    <strong>Fundamentos Jurídicos:</strong>

    <br><br>

    Art. 5º da Constituição Federal.
    <br>
    Código Civil Brasileiro.
    <br>
    Código de Processo Civil.
    <br>
    Jurisprudência consolidada do STJ e STF.

    <br><br>

    <strong>Jurisprudência Aplicável:</strong>

    <br><br>

    “A responsabilidade civil decorre da violação de direito
    e dano comprovado.” — STJ.

    <br><br>

    <strong>Pedidos:</strong>

    <br><br>

    • Procedência da ação
    <br>
    • Condenação da parte ré
    <br>
    • Produção de provas
    <br>
    • Honorários advocatícios

    <br><br>

    Nestes termos,
    <br>
    Pede deferimento.

  `
}

