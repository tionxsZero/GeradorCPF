import GeraCPF from "./modules/GeraCPF";

import "./assets/css/style.css";

class InsereCPF{
    constructor(){
        this.formulario = document.querySelector('.form')
        this.eventos();
    }
    

    eventos() {
        this.formulario.addEventListener('submit', e => { 
          this.handleSubmit(e); //impedindo a execução do submit
        });
      }
  
      handleSubmit(e) {
          

            this.gerador();
           
          }
        
  gerador(){
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector(".cpf-gerado");
  cpfGerado.innerHTML = gera.geraNovoCPF();
    }

}

const novainsercao =  new InsereCPF();