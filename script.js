// Script para feed dinâmico nerd
document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.querySelector('.posts');
    const loadMoreBtn = document.getElementById('load-more-btn');

    // Array de posts adicionais
    const additionalPosts = [
        {
            img: 'https://via.placeholder.com/400x400?text=Jogo+2',
            alt: 'Post sobre jogo 2',
            text: '🎮 Batalha épica no novo RPG! Quem venceu? #GamerNerd'
        },
        {
            img: 'https://via.placeholder.com/400x400?text=Filme+2',
            alt: 'Post sobre filme 2',
            text: '🍿 Filme de super-heróis incrível! Heróis nerds salvando o dia. #FilmeNerd'
        },
        {
            img: 'https://via.placeholder.com/400x400?text=Quadrinho+2',
            alt: 'Post sobre quadrinho 2',
            text: '📚 Coleção de quadrinhos raros! Meu tesouro nerd. #QuadrinhosNerd'
        },
        {
            img: 'https://via.placeholder.com/400x400?text=Tech+2',
            alt: 'Post sobre tecnologia 2',
            text: '🤖 Robôs e IA: o futuro é agora! #TechNerd'
        },
        {
            img: 'https://via.placeholder.com/400x400?text=Jogo+3',
            alt: 'Post sobre jogo 3',
            text: '🎮 Modding no meu jogo favorito! Comunidade nerd unida. #GamerNerd'
        },
        {
            img: 'https://via.placeholder.com/400x400?text=Filme+3',
            alt: 'Post sobre filme 3',
            text: '🍿 Maratona de filmes de ficção! Qual o próximo? #FilmeNerd'
        }
    ];

    let currentIndex = 0;

    // Função para adicionar posts
    function addPosts() {
        const postsToAdd = additionalPosts.slice(currentIndex, currentIndex + 2); // Adiciona 2 por vez
        postsToAdd.forEach(postData => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            const img = document.createElement('img');
            img.src = postData.img;
            img.alt = postData.alt;

            const p = document.createElement('p');
            p.textContent = postData.text;

            const likeBtn = document.createElement('button');
            likeBtn.textContent = '👍 Curtir';
            likeBtn.classList.add('like-btn');
            likeBtn.addEventListener('click', function() {
                this.textContent = this.textContent === '👍 Curtir' ? '❤️ Curtido!' : '👍 Curtir';
            });

            postDiv.appendChild(img);
            postDiv.appendChild(p);
            postDiv.appendChild(likeBtn);

            postsContainer.appendChild(postDiv);
        });

        currentIndex += 2;

        if (currentIndex >= additionalPosts.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    // Adicionar botões de curtir aos posts iniciais
    const initialPosts = document.querySelectorAll('.post');
    initialPosts.forEach(post => {
        const likeBtn = document.createElement('button');
        likeBtn.textContent = '👍 Curtir';
        likeBtn.classList.add('like-btn');
        likeBtn.addEventListener('click', function() {
            this.textContent = this.textContent === '👍 Curtir' ? '❤️ Curtido!' : '👍 Curtir';
        });
        post.appendChild(likeBtn);
    });

    // Evento para carregar mais posts
    loadMoreBtn.addEventListener('click', addPosts);
});

// Estilo inline para o botão
const style = document.createElement('style');
style.textContent = `
    .like-btn {
        background-color: #3897f0;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        margin: 10px;
    }
    .like-btn:hover {
        background-color: #2d7bb8;
    }
`;
document.head.appendChild(style);
`;
document.head.appendChild(style);