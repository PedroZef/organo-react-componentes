
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="https://twitter.com/PedroZeferinod6" target="blank">
                <img src="/imagens/twitter.png" alt="Twitter" />
                </a>
            </li>
                <li>
                    <a href="https://github.com/PedroZef" target="blank">🐱</a>
                </li> 
            <li>
                    <a href="https://www.facebook.com/pedro.zeferinodasilva" target="blank">
                    <img src="/imagens/facebook.png" alt="Facebook" />
                </a>
            </li>
                <li>
                    <a href="https://linkedin.com/in/pedro-zeferino-da-silva" target="blank">🔗</a>
                </li>
          
            <li>
                    <a href="https://instagram.com/pedrozeferinodasilva" target="blank">
                    <img src="/imagens/instagram.png" alt="Instagran" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imagens/logo.png" alt="Logo Rodapé" />
       </section>
       <section>
        <p>
                Desenvolvido por Alura &copy; Pedro Zeferino Da Silva.
        </p>
       </section>
    </footer>)
}

export default Rodape