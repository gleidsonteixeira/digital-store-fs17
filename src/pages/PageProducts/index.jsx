import { styled } from "styled-components";

import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { useEffect, useState } from "react";
        
        

const PageProductsContainer = styled.div`
    padding: 40px 100px;
    background-color: #f9f8fe;
    & h6{
        font-size: 16px;
    }
    & .content{
        margin-top: 40px;
    }
    
`;

const PageProducts = () => {
    const [ordenacao, setOrdenacao] = useState(1);
    const tiposDeOrdenacao = [
        {
            name: 'mais relevantes',
            value: 1
        },
        {
            name: 'menor valor',
            value: 2
        },
        {
            name: 'maior valor',
            value: 3
        }
    ];
    const [brands, setBrands] = useState([]);
    
    function getBrands(){
        fetch('http://localhost:8000/brands')
        .then(res => res.json())
        .then(res => {
            setBrands(res);
        })
    }

    useEffect(() => {
        getBrands();
    }, []);

    return (
        <PageProductsContainer>
            <div className="flex justify-content-between align-items-center">
                <h6 className="font-normal">
                    <b>Resultados para "Tenis"</b> - 389 produtos
                </h6>
                <div>
                    <h6 className="p-3 border-1 border-round">
                        <b>Ordenar por mais relevantes:</b>
                        <Dropdown 
                            value={ordenacao}
                            options={tiposDeOrdenacao}
                            optionLabel="name"
                            optionValue="value"
                            onChange={e => setOrdenacao(e.value)}
                            className="border-0 bg-transparent"
                        />
                    </h6>
                </div>
            </div>
            <div className="content flex gap-3">
                <div className="w-3">
                    <div className="bg-white p-4 border-round">
                        <h4 className="mb-3">Filtrar por:</h4>
                        <hr className="mb-3" />
                        <h6 className="mb-2">Marca</h6>
                        <ul className="list-style-none">
                            {
                                brands.map((marca) => (
                                    <li className="flex gap-3 mb-2">
                                        <Checkbox id={marca.brand_name}/>
                                        <label htmlFor={marca.brand_name}>{marca.brand_name}</label>
                                    </li>
                                ))
                            }
                        </ul>
                        <h6 className="mb-2 mt-3">Categoria</h6>
                        <ul className="list-style-none">
                            <li className="flex gap-3 mb-2">
                                <Checkbox id="categoria1"/>
                                <label htmlFor="categoria1">Categoria 1</label>
                            </li>
                            <li className="flex gap-3 mb-2">
                                <Checkbox id="categoria2"/>
                                <label htmlFor="categoria2">Categoria 2</label>
                            </li>
                            <li className="flex gap-3 mb-2">
                                <Checkbox id="categoria3"/>
                                <label htmlFor="categoria3">Categoria 3</label>
                            </li>
                            <li className="flex gap-3 mb-2">
                                <Checkbox id="categoria4"/>
                                <label htmlFor="categoria4">Categoria 4</label>
                            </li>
                        </ul>
                        <h6 className="mb-2 mt-3">Gênero</h6>
                        <ul className="list-style-none">
                            <li className="flex gap-3 mb-2">
                                <Checkbox id="genero1"/>
                                <label htmlFor="genero1">Gênero 1</label>
                            </li>
                            <li className="flex gap-3 mb-2">
                                <Checkbox id="genero2"/>
                                <label htmlFor="genero2">Gênero 2</label>
                            </li>
                            <li className="flex gap-3 mb-2">
                                <Checkbox id="genero3"/>
                                <label htmlFor="genero3">Gênero 3</label>
                            </li>
                        </ul>
                        <h6 className="mb-2 mt-3">Estado</h6>
                        <ul className="list-style-none">
                            <li className="flex gap-3 mb-2">
                                <RadioButton id="novo" checked/>
                                <label htmlFor="novo">Novo</label>
                            </li>
                            <li className="flex gap-3 mb-2">
                                <RadioButton id="usado"/>
                                <label htmlFor="usado">Usado</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-9">Cards</div>
            </div>
        </PageProductsContainer>
    );
}

export default PageProducts;