import './preco.css';

const Precos = () =>{
    return(
        <>  
         <section>
            <h1>Fixed Table header</h1>
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                    <th>Lugar</th>
                    <th>Empresa</th>
                    <th>Preço</th>
                    <th>Hotéis</th>
                    <th>Lugares para visitar</th>
                    </tr>
                </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                    <tr>
                    <td>Estados Unidos</td>
                    <td>GOL </td>
                    <td>R$ 3.799,00</td>
                    <td>Auberge du Soleil (R$ 6.061,00)</td>
                    <td>Orlando, Pier Park, St. Andrews State Park, The Galleria</td>
                    </tr>
                    <tr>
                    <td>França</td>
                    <td>Azul</td>
                    <td>R$ 2.926,00</td>
                    <td>Four Seasons Hotel George V, Paris (R$ 10.464,00)</td>
                    <td>Museu do Louvre, torre Eiffel, Catedral de Notre-Dame, Palácio de Versalhes e Arco do Triunfo</td>
                    </tr>
                    <tr>
                    <td>Itália</td>
                    <td>GOL</td>
                    <td>R$ 4.365,00</td>
                    <td>Four Seasons Hotel Firenze (R$ 3.578,00)</td>
                    <td>Roma, Milão, Veneza</td>
                    </tr>
                    <tr>
                    <td>Egito</td>
                    <td>Azul</td>
                    <td>R$ 3.871,00</td>
                    <td>Rixos Premium Magawish Suites & Villas (R$ 1.818,00)</td>
                    <td>Pirâmides de Gizé, Khan el Khalili, Biblioteca de Alexandria, Templo de Karnak,
                         Passeio de balão em Luxor, Cruzeiro pelo Rio Nilo, Vila Núbia, em Aswan, Resorts de Hurghada</td>
                    </tr>
                    <tr>
                    <td>Dubai, Emirados Unidos</td>
                    <td>Ethiopian</td>
                    <td>R$ 3.576,00</td>
                    <td>Burj Al Arab (R$ 11.060,00)</td>
                    <td>Burj Khalifa, Burj Al Arab, Dubai Mall</td>
                    </tr>

                </tbody>
                </table>
            </div>
        </section>

            <div class="made-with-love">
            Made with
            <i>♥</i> 
            <a target="_blank" href=""></a>
            </div>
        </>
    );
}

export default Precos;