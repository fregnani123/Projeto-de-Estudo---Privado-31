function Calculadora() {
    this.display = document.querySelector('.display');

    this.copturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains("btn-num")) this.addNumDisplay(el);
            if (el.classList.contains("btn-clear")) this.clear();
            if (el.classList.contains("btn-del")) this.del(el);
            if (el.classList.contains("btn-eq")) this.realizaConta(el);
        });
    };

  this.addNumDisplay = el => this.display.value += el.innerText;
  this.clear = () => this.display.value = ""
  this.inicia = () => this.copturaCliques();
  this.del = (e) => this

  }


const calculadora = new Calculadora();
calculadora.inicia();



