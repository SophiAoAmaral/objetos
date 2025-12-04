function Carro(marca, preco){
    this.marca = marca;
    this.preco = preco;
}

const bmw = new Carro();
bmw.marca = 'BMW';
bmw.preço = 150000

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 20000

const ferrari = new Carro('Ferrari', 300000);

function Carro2(marca, precoInical){
    const taxa = 1.2;
    const precoFinal = precoInical * taxa
    this.marca = marca;
    this.preco = precoFinal;
}

const honda = new Carro2('Honda', 30000)
