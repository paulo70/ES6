const article = {
  title: 'Learning template string',
  intro: 'lorem ipsum lorem ipsum lorem ipsum',
  body: 'lorem text lorem text lorem text lorem text',
  tags: ['es6', 'js', 'template-literal'],
  author:'PaulRocker'
};

function renderAuthor(name){
	return (name) ? name : 'unknow';
}

const markup = `
	<article>
		<header>
			<h1>${article.title}</h1>
		</header>
	</article>
	<section>
	 	<p>${article.intro}</p>
	</section>
	<section>
	 	<p>${article.body}</p>
	</section>
	<footer>
		<ul>
			${article.tags.map((tag)=>`<li>${tag}</li>`).join('')}
		</ul>
		<p>Author: ${renderAuthor(article.author)}</p>
	</footer>
`;
document.body.innerHTML = markup;