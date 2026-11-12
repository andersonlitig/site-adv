const fs = require('fs');
let c = fs.readFileSync('client/src/pages/HomeV2.tsx', 'utf8');

c = c.replace(/\{ name: "Maria L\.[\s\S]*?Recomendo de olhos fechados\.", stars: 5 \},/g, 
`{ name: "Maria L.", city: "Vitória, ES", text: "Tentei dar entrada na aposentadoria sozinha e o INSS negou. O Dr. Anderson e sua equipe analisaram meu histórico a fundo, identificando o que faltava com muito rigor técnico. Atendimento rápido e muito transparente em cada etapa.", stars: 5 },
    { name: "João C.", city: "Serra, ES", text: "Estava com desconto de consignado que nunca autorizei. Fui orientado sobre meus direitos com clareza e dedicação, resolvendo tudo de forma 100% digital, sem precisar sair de casa.", stars: 5 },
    { name: "Ana R.", city: "São Paulo, SP", text: "Atendimento 100% pelo WhatsApp e videochamada. Moro em São Paulo e não precisei me deslocar. A análise detalhada do meu histórico previdenciário fez toda a diferença na compreensão dos meus direitos.", stars: 5 },
    { name: "Carlos M.", city: "Guarapari, ES", text: "Fiquei muito satisfeito com a forma minuciosa como o escritório revisou meus períodos de contribuição e me orientou no melhor caminho a seguir. Profissionalismo acima da média.", stars: 5 },
    { name: "Rosângela F.", city: "Vila Velha, ES", text: "Minha situação era complexa e eu não sabia por onde começar. O escritório teve muita paciência e técnica para me ajudar a organizar a documentação certa. Recomendo de olhos fechados pelo excelente atendimento.", stars: 5 },`);

c = c.replace(/aria-label=\{\`Ir para depoimento \$\{i \+ 1\}\`\}\n              \/>\n          \)\)\}\n        <\/div>\n      <\/div>\n    <\/section>/g,
`aria-label={\`Ir para depoimento \${i + 1}\`}
              />
          ))}
        </div>

        {/* OAB Disclaimer */}
        <div className="mt-12 text-center max-w-[800px] mx-auto px-4">
          <p className="text-[12px] md:text-[13px] text-[#767672] font-light italic">
            *Aviso Legal (Provimento 205/2021 OAB): A advocacia é uma atividade de meio e não de fim. A OAB proíbe terminantemente a promessa ou garantia de resultados. Os relatos acima refletem exclusivamente a experiência de atendimento e a diligência técnica empregada, devendo-se ressaltar que cada caso possui particularidades únicas e julgamentos independentes.
          </p>
        </div>
      </div>
    </section>`);

fs.writeFileSync('client/src/pages/HomeV2.tsx', c, 'utf8');
console.log('Updated Testimonials');
