 // Seleciona todos os botões de reação da página
        const botoes = document.querySelectorAll("button");

        // O forEach passa por cada botão da página
        botoes.forEach(function (botao) {
            // Novidade: Cada botão ganha o seu próprio controle para saber se já foi clicado
            let curtiu = false;

            // Escuta o clique no botão atual
            botao.addEventListener("click", botaoClicado);

            function botaoClicado() {
                console.log("fui clicado");
                let texto = botao.querySelector("span");

                // Novidade: Lógica condicional (Se não curtiu, adiciona. Se já curtiu, remove)
                if (curtiu === false) {
                    texto.textContent++;  // Soma 1 ao contador
                    curtiu = true;        // Altera o estado para verdadeiro (bloqueia novos likes seguidos)
                } else {
                    texto.textContent--;  // Subtrai 1 do contador
                    curtiu = false;       // Altera o estado de volta para falso (permite curtir de novo)
                }
            }
        });