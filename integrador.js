const body =  document.querySelector('body')
const barra_pesquisa = document.getElementById('barra_pesquisa')
const btn_pesquisar = document.getElementById('btn_pesquisar')

//objetos artistas
const beatit_sugestoes = document.getElementById('beatit_sugestoes')
const cicatrizes_seguestoes = document.getElementById('cicatrizes_seguestoes')
const agudo_experimente = document.getElementById('agudo_experimente')
const camisa10_experimente = document.getElementById('camisa10_experimente')
const heaven_experimente = document.getElementById('heaven_experimente')
const evidencias_experimente= document.getElementById('evidencias_experimente')
const alone = document.getElementById('alone')
const animals = document.getElementById('animals')
const fazerfalta = document.getElementById('fazerfalta')
const cheiademarra = document.getElementById('cheiademarra')
const construcao = document.getElementById('construcao')
const garotadeipanema = document.getElementById('garotadeipanema')
const amigadamulher = document.getElementById('amigadamulher')
const deixaacontecer = document.getElementById('deixaacontecer')
const bolinhas = document.getElementById('bolinhas')
const interestelar = document.getElementById('interestelar')
const nuncavaiser = document.getElementById('nuncavaiser')
const pedaçopecado = document.getElementById('pedaçopecado')
const gladeyoucame = document.getElementById('gladeyoucame')
const onedirection = document.getElementById('onedirection')
const countdown = document.getElementById('countdown')
const gunsroses = document.getElementById('gunsroses')
const noitedia = document.getElementById('noitedia')
const vcvoltar = document.getElementById('vcvoltar')
const balazul = document.getElementById('balazul')
const kalli= document.getElementById('kalli')


//elementos da janela player
const janela_player = document.getElementById('janela_player')
const img_player = document.getElementById('img_player')
const artista_player = document.getElementById('artista_player')
const titulo_player = document.getElementById('titulo_player')
const player = document.getElementById('player')
const btn_player = document.getElementById('btn_player')

let musicas = [
    [
        {
            icone: 'img/eletronica/alone.icon.jpg',
            titulo: 'Alone',
            artista: 'Marshmallow',
            genero:  'Eletronica',
            mp3: 'mp3/eletronica/Alan Walker - Faded.mp3'
        },

        {
            icone: 'img/eletronica/animals.png',
            titulo: 'Animals',
            artista: 'Martin Garrix',
            genero:  'Eletronica',
            mp3: 'mp3/eletronica/Martin Garrix - Animals (Official Video).mp3'
        },

        {
            icone: 'img/eletronica/faded.icon.jpg',
            titulo: 'Faded',
            artista: 'Alan Walker',
            genero:  'Eletronica',
            mp3: 'mp3/eletronica/Alan Walker - Faded.mp3'
        },

        {
            icone: 'img/eletronica/hearmenow.png',
            titulo: 'Hear me now',
            artista: 'Alok',
            genero:  'Eletronica',
            mp3: 'mp3/eletronica/Alok, Bruno Martini feat. Zeeba - Hear Me Now (Official Music Video).mp3'
        },

        {
            icone: 'img/eletronica/spketrem.png',
            titulo: 'Shine',
            artista: 'Spektrem',
            genero:  'Eletronica',
            mp3: 'mp3/eletronica/Spektrem - Shine _ Progressive House _ NCS - Copyright Free Music.mp3'
        }

    ],

    [
        {
            icone: 'img/funk/agudo3.png',
            titulo: 'Agudo mágico 3',
            artista: 'Dj Aurélio, Mc K.K',
            genero:  'Funk',
            mp3: 'mp3/funk/AGUDO MÁGICO 3 - MC K.K e MC Lipivox (Dj Aurelio e Dj Tg Beats).mp3'

        },

        {
            icone: 'img/funk/cheiademarralivinho.png',
            titulo: 'Cheia de marra',
            artista: 'Mc Livinho',
            genero:  'Funk',
            mp3: 'mp3/funk/MC Livinho - Cheia de Marra (KondZilla) _ Official Music Video.mp3'
        },

        {
            icone: 'img/funk/fazerfalta.png',
            titulo: 'Fazer falta',
            artista: 'Mc Livinho',
            genero:  'Funk',
            mp3: 'mp3/funk/Fazer Falta.mp3'
        },

        {
            icone: 'img/funk/letsgo4.png',
            titulo: "Let's go 4",
            artista: 'Mc Ph, Mc Ig, Mc Ryan SP',
            genero:  'Funk',
            mp3: "mp3/funk/LET'S GO 4 - DJ GBR, IG, Ryan SP, PH, Davi, Luki, Don Juan, Kadu ,GH do 7, GP, TrapLaudo.mp3"
        },

        {
            icone: 'img/funk/noronha.icon.jpg',
            titulo: 'Fernando de Noronha',
            artista: 'Mc Ig, Mc Ph, Mc Ryan SP',
            genero:  'Funk',
            mp3: 'mp3/funk/FERNANDO DE NORONHA - MCs IG, Traplaudo, Dena, PH, Gabb, Ryan SP, GP, Rhamon, Bruno MS (GR6 Explode).mp3'
        }

    ],

    [
        {
            icone: 'img/MPB/cartola.png',
            titulo: 'O mundo é um moinho',
            artista: 'Cartola',
            genero:  'MPB',
            mp3: 'mp3/MPB/Cartola - O Mundo É Um Moinho (Áudio - VIVA).mp3'
        },

        {
            icone: 'img/MPB/cazuza.icon.jpg',
            titulo: 'Exagerado',
            artista: 'Cazuza',
            genero:  'MPB',
            mp3: 'mp3/MPB/Cazuza - Exagerado (Video Oficial).mp3'
        },

        {
            icone: 'img/MPB/construcao.icon.jpg',
            titulo: 'Construção',
            artista: 'Chico Buarque',
            genero:  'MPB',
            mp3: 'mp3/MPB/Construção.mp3'
        },

        {
            icone: 'img/MPB/garotadeipanema.png',
            titulo: 'Garota de Ipanema',
            artista: 'Tom Jobim',
            genero:  'MPB',
            mp3: 'mp3/MPB/Garota De Ipanema.mp3'
        },

        {
            icone: 'img/MPB/lulusantos.png',
            titulo: 'Apenas mais uma de amor',
            artista: 'Lulu Santos',
            genero:  'MPB',
            mp3: 'mp3/MPB/Lulu Santos - Apenas Mais uma de Amor (Ao Vivo).mp3'
        }
    ],

    [
        {
            icone: 'img/pagode/amidamulher.png',
            titulo: 'Amiga da minha mulher',
            artista: 'Seu Jorge',
            genero:  'Pagode',
            mp3: 'mp3/pagode/Amiga da Minha Mulher.mp3'
        },

        {
            icone: 'img/pagode/camisa10.icon.jpg',
            titulo: 'Camisa 10',
            artista: 'Turma do pagode',
            genero:  'Pagode',
            mp3: 'mp3/pagode/Turma do Pagode - Camisa 10 (Ao Vivo) ((O Som das Multidões Ao Vivo) [Clipe Oficial]).mp3'
        }, 

        {
            icone: 'img/pagode/cheiademanias.icon.jpg',
            titulo: 'Cheia de manias',
            artista: 'Raça Negra',
            genero:  'Pagode',
            mp3: 'mp3/pagode/Raça Negra - Cheia de Manias (Deezer Sessions).mp3'
        },

        {
            icone: 'img/pagode/deixaacontecer.png',
            titulo: 'Deixa acontecer',
            artista: 'Grupo Revelação',
            genero:  'Pagode',
            mp3: 'mp3/pagode/Grupo Revelação - Deixa Acontecer (Ao Vivo) (1).mp3'
        },

        {
            icone: 'img/pagode/mataopapai.png',
            titulo: 'Assim você mata o papai',
            artista: 'Sorriso Maroto',
            genero: 'Pagode',
            mp3: 'mp3/pagode/Assim Você Mata o Papai - Sorriso Maroto.mp3'
        }

    ],

    [
        {
            icone: 'img/phonk/bolinhas.png',
            titulo: 'Bolinha de queijo',
            artista: 'Dj Matheus da Sul, MC Gw',
            genero:  'Phonk',
            mp3: 'mp3/phonk/BOLINHA DE QUEIJO - DJ MATHEUS DA SUL, DJ DURAES 011, MC GW.mp3'
        },

        {
            icone: 'img/phonk/carrie.png',
            titulo: 'Carrie',
            artista: 'Ugovhb',
            genero:  'Phonk',
            mp3: 'mp3/phonk/Carrie.mp3'
        },

        {
            icone: 'img/phonk/infernal.png',
            titulo: 'The automotivo infernal 1.0',
            artista: 'Sucvixx',
            genero:  'Phonk',
            mp3: 'mp3/phonk/The Automotivo Infernal 1.0 - Purple (BRAZILIAN PHONK).mp3'
        },

        {
            icone: 'img/phonk/interestelar.png',
            titulo: 'Ritmada interestelar',
            artista: 'Dj Duarte, Dj Kayo Original',
            genero:  'Phonk',
            mp3: 'mp3/phonk/Ritmada Interestelar.mp3'
        },

        {
            icone: 'img/phonk/mario.png',
            titulo: 'Automotivo Super Mario',
            artista: 'Dj NK3, MC Gw',
            genero:  'Phonk',
            mp3: 'mp3/phonk/AUTOMOTIVO SUPER MARIO WORLD 2 (Clipe Oficial) MC GW, MC Nauan, MC Fefe Original e DJ NK3.mp3'
        }

    ],

    [
        {
            icone: 'img/piseiro/aquelascoisas.png',
            titulo: 'Aquelas coisas',
            artista: 'João Gomes',
            genero:  'Piseiro',
            mp3: 'mp3/piseiro/Aquelas Coisas.mp3'
        },
            
        {
            icone: 'img/piseiro/baroes.png',
            titulo:  'Já que me ensinou a beber',
            artista: 'Barões da pisadinha',
            genero:  'Piseiro',
            mp3: 'mp3/piseiro/Os Barões da Pisadinha - Já Que Me Ensinou a Beber (Áudio Oficial).mp3'
        },

        {
            icone: 'img/piseiro/baroes.png',
            titulo: 'Nunca vai ser eu',
            artista: 'Barões da pisadinha',
            genero:  'Piseiro',
            mp3: 'mp3/piseiro/Os Barões da Pisadinha - Nunca Vai Ser Eu (Pseudo Video).mp3'
        },

        {
            icone: 'img/piseiro/pecado.png',
            titulo: 'Meu pedaço de pecado',
            artista: 'João Gomes',
            genero: 'Piseiro',
            mp3: 'mp3/piseiro/MEU PEDAÇO DE PECADO - João Gomes (DVD Ao Vivo em Fortaleza)_H1DEczvTjgE.mp3'
        },

        {
            icone: 'img/piseiro/baroes.png',
            titulo: 'Quem me dera',
            artista: 'Barões da Pisadinha',
            genero: 'Piseiro',
            mp3: 'mp3/piseiro/Os Barões da Pisadinha - Quem Me Dera (Áudio Oficial).mp3'
        },
    ],

    [
        {
            icone: 'img/pop/beat_it.png',
            titulo: 'Beat It',
            artista: 'Michael Jackson',
            genero: 'Pop',
            mp3: 'mp3/pop/Beat It - Michael Jackson (Lyrics).mp3'
        },

        {
            icone: 'img/pop/gladyoucame.png',
            titulo: 'Glad You came',
            artista:  'The Wanted',
            genero: 'Pop',
            mp3: 'mp3/pop/The Wanted - Glad You Came.mp3'
        },

        {
            icone: 'img/pop/heaven.icon.jpg',
            titulo: 'Locked out of heaven',
            artista: 'Bruno Mars',
            genero: 'Pop',
            mp3: 'mp3/pop/Bruno Mars - Locked Out Of Heaven (Official Music Video)_e-fA-gBCkj0.mp3'
        },
        
        {
            icone: 'img/pop/onedirection.png',
            titulo: 'What make you beautiful',
            artista: 'One Direction',
            genero: 'Pop',
            mp3: 'mp3/pop/One Direction - What Makes You Beautiful (Official Video).mp3'
        },

        {
            icone: 'img/pop/shape.png',
            titulo: 'Shape of you',
            artista: 'Ed Sheeran',
            genero: 'Pop',
            mp3: 'mp3/pop/Ed Sheeran - Shape of You (Official Music Video)_JGwWNGJdvx8.mp3'
        }

    ],
     
    [
        {
            icone: 'img/rock/backinblack.png',
            titulo: 'Back in black',
            artista: 'AC DC',
            genero: 'Rock',
            mp3: 'mp3/rock/AC_DC - Back In Black (Official 4K Video).mp3'
        },

        {
            icone: 'img/rock/countdown.png',
            titulo: 'The final countdown',
            artista: 'Europe',
            genero: 'Rock',
            mp3: 'mp3/rock/The Final Countdown.mp3'
        },

        {
            icone: 'img/rock/gunsroses.png',
            titulo: "Sweet child O'mine",
            artista: "Guns N'Roses",
            genero: 'Rock',
            mp3: "mp3/rock/Guns N' Roses - Sweet Child O' Mine (Official Music Video).mp3"
        },

        {
            icone: 'img/rock/hell.png',
            titulo: 'Highway to hell',
            artista: 'AC/DC',
            genero: 'Rock',
            mp3: 'mp3/rock/AC_DC - Highway to Hell (Official Video).mp3'
        },

        {
            icone: 'img/rock/rockyou.cion.jpg',
            titulo: 'We will rock you',
            artista: 'Queen',
            genero: 'Rock',
            mp3: 'mp3/rock/Queen - We Will Rock You (Official Video).mp3'
        },
    ],

    [
        {
            icone: 'img/sertanejo/evidencias.icon.jpg',
            titulo: 'Evidências',
            artista: 'Chitãozinho & Xororó',
            genero: 'Sertanejo',
            mp3: 'mp3/sertanejo/Chitãozinho & Xororó - Evidências.mp3'
        },

        {
            icone: 'img/sertanejo/homemfamilia.png',
            titulo: 'Homem da família',
            artista: 'Gusttavo Lima',
            genero: 'Sertanejo',
            mp3: 'mp3/sertanejo/Gusttavo Lima - Homem de Família - DVD 50_50 (Vídeo Oficial).mp3'
        },

        {
            icone: 'img/sertanejo/noitedia.png',
            titulo: 'Amo noite e dia',
            artista: 'Jorge e Matheus',
            genero: 'Sertanejo',
            mp3: 'mp3/sertanejo/Jorge, Mateus - Amo Noite E Dia.mp3'
        },

        {
            icone: 'img/sertanejo/tchutcha.png',
            titulo: 'Eu quero tchu, eu quero tcha',
            artista: 'João Lucas & Marcelo',
            genero: 'Sertanejo',
            mp3: 'mp3/sertanejo/João Lucas & Marcelo - Eu quero tchu, Eu quero tcha (Videoclipe Villa Mix).mp3'
        },

        {
            icone: 'img/sertanejo/vcvoltar.png',
            titulo: 'Até você voltar',
            artista: 'Henrique e Juliano',
            genero: 'Sertanejo',
            mp3: 'mp3/sertanejo/Henrique e Juliano - Até Você Voltar (DVD Ao vivo em Brasília) [Vídeo Oficial].mp3'
        },
    ],

    [
        {
            icone: 'img/trap/balaazul.icon.jpg',
            titulo: 'Bala Azul',
            artista: 'Teto Feat. Mateca',
            genero: 'Trap',
            mp3: 'mp3/trap/Teto & Mateca - BalAzul (Áudio Oficial) + Letra.mp3'
        },

        {
            icone: 'img/trap/cicatrizes.png',
            titulo: 'Cicatrizes',
            artista: 'LetoDie Feat. FILL',
            genero: 'Trap',
            mp3: 'mp3/trap/LetoDie - Cicatrizes Feat. FILL (Prod. Liip Beats).mp3'
        },

        {
            icone: 'img/trap/goosebumps.png',
            titulo: 'Goosebumps',
            artista: 'Travis Scott',
            genero: 'Trap',
            mp3: 'mp3/trap/Travis Scott - goosebumps ft. Kendrick Lamar.mp3'
        },

        {
            icone: 'img/trap/kalli.png',
            titulo: 'Kalli Kallidade',
            artista: 'Kallidade',
            genero: 'Trap',
            mp3: 'mp3/trap/Kalli - Kallidade (Lyric Vídeo) (prod. Nabuscadoouro).mp3'
        },

        {
            icone: 'img/trap/m4.icon.jpg',
            titulo: 'M4',
            artista: 'Teto Feat. Matuê',
            genero: 'Trap',
            mp3: 'mp3/trap/Teto - M4 feat. Matuê.mp3'
        }
    ]
]

btn_pesquisar.addEventListener('click', ()=>{
    const resultado_busca = document.createElement('div')
    const btn_fechar = document.createElement('button')
    resultado_busca.style.width = '100%'
    resultado_busca.style.height = '100vh'
    resultado_busca.style.position = 'absolute'
    resultado_busca.style.display = 'flex'
    resultado_busca.style.justifyContent = 'space-evenly'
    resultado_busca.style.alignItems = 'flex-start'
    resultado_busca.style.backgroundColor = 'rgb(49, 49, 49)'
    resultado_busca.style.paddingTop = '150px'
    btn_fechar.style.position = 'absolute'
    btn_fechar.innerHTML = 'X'
    btn_fechar.style.width = '150px'
    btn_fechar.style.height = '50px'
    btn_fechar.style.borderRadius = '10px'
    btn_fechar.style.border = 'none'
    btn_fechar.style.backgroundColor = 'red'
    btn_fechar.style.color = 'white'
    btn_fechar.style.fontSize = '25px'
    btn_fechar.style.marginTop = '500px'
    btn_fechar.style.boxShadow = '3px 3px black'
    body.appendChild(resultado_busca)
   
    musicas.forEach(element => {
        let pesquisa_usuario = barra_pesquisa.value
        let resultado_array = element[0]['genero']
        if (pesquisa_usuario.toUpperCase() == resultado_array.toUpperCase()) {
            element.forEach(disco => {
            const container_disco = document.createElement('div')
            const img_disco = document.createElement('img')
            const titulo_disco = document.createElement('p')
            const artista_disco = document.createElement('p')
            container_disco.style.width = '100px'
            container_disco.style.height = '150px'
            container_disco.style.display = 'flex'
            container_disco.style.flexDirection = 'column'
            container_disco.style.alignItems = 'center'
            img_disco.src=disco['icone']
            img_disco.style.width = '200px'
            img_disco.style.height = '200px'
            titulo_disco.innerHTML = disco['titulo']
            titulo_disco.style.color = 'rgb(255, 136, 77)'
            titulo_disco.style.textAlign = 'center'
            titulo_disco.style.fontSize = '30px'
            artista_disco.style.textAlign = 'center'
            artista_disco.style.color = 'rgb(0, 204, 255)'
            artista_disco.innerHTML = disco['artista']
            artista_disco.style.fontSize = '20px'
            
            container_disco.appendChild(img_disco)
            container_disco.appendChild(titulo_disco)
            container_disco.appendChild(artista_disco)
            resultado_busca.appendChild(container_disco)
           

            });
            
        }
   });
   resultado_busca.appendChild(btn_fechar)

   btn_fechar.addEventListener('click', () => {
    resultado_busca.remove()
   })
})


//função tocar musica
function CriarPlayer (artista){
    janela_player.style.display = 'flex'
    img_player.src = artista['icone']
    artista_player.innerHTML = artista['artista']
    titulo_player.innerHTML = artista['titulo']
    player.src = artista['mp3']
    player.play()
}


//função sugestões
beatit_sugestoes.addEventListener('click', () => {
    CriarPlayer(musicas[6][0])
})

cicatrizes_seguestoes.addEventListener('click', () => {
    CriarPlayer(musicas[9][1])
})

//função experimente
agudo_experimente.addEventListener('click', () => {
    CriarPlayer(musicas[1][0])
})

camisa10_experimente.addEventListener('click', () => {
    CriarPlayer(musicas[3][1])
})

heaven_experimente.addEventListener('click', () => {
    CriarPlayer(musicas[6][2])
})

evidencias_experimente.addEventListener('click', () => {
    CriarPlayer(musicas[8][0])
})

//função por generos
//eletronica
alone.addEventListener('click', () => {
    CriarPlayer(musicas[0][0])
})

animals.addEventListener('click', () => {
    CriarPlayer(musicas[0][1])
})

//funk
fazerfalta.addEventListener('click', () => {
    CriarPlayer(musicas[1][2])
})

cheiademarra.addEventListener('click', () => {
    CriarPlayer(musicas[1][1])
})

//MPB
construcao.addEventListener('click', () => {
    CriarPlayer(musicas[2][2])
})

garotadeipanema.addEventListener('click', () => {
    CriarPlayer(musicas[2][3])
})

//pagode
amigadamulher.addEventListener('click', () => {
    CriarPlayer(musicas[3][0])
})

deixaacontecer.addEventListener('click', () => {
    CriarPlayer(musicas[3][3])
})

//phonk
bolinhas.addEventListener('click', () => {
    CriarPlayer(musicas[4][0])
})

interestelar.addEventListener('click', () => {
    CriarPlayer(musicas[4][3])
})

//piseiro
nuncavaiser.addEventListener('click', () => {
    CriarPlayer(musicas[5][2])
})

pedaçopecado.addEventListener('click', () => {
    CriarPlayer(musicas[5][3])
})

//pop
gladeyoucame.addEventListener('click', () => {
    CriarPlayer(musicas[6][1])
})

onedirection.addEventListener('click', () => {
    CriarPlayer(musicas[6][3])
})

//rock
countdown.addEventListener('click', () => {
    CriarPlayer(musicas[7][1])
})

gunsroses.addEventListener('click', () => {
    CriarPlayer(musicas[7][2])
})

//sertanejo
noitedia.addEventListener('click', () => {
    CriarPlayer(musicas[8][2])
})

vcvoltar.addEventListener('click', () => {
    CriarPlayer(musicas[8][4])
})

//trap
balazul.addEventListener('click', () => {
    CriarPlayer(musicas[9][0])
})

kalli.addEventListener('click', () => {
    CriarPlayer(musicas[9][3])
})

btn_player.addEventListener('click', () => {
    janela_player.style.display = 'none'
    player.pause()
})