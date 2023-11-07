import alyxpng from '../images/alyx.png';
import diselpng from '../images/disel.png';
import jacketpng from '../images/jacket.png';
import stoneypng from '../images/stoney.png';
import supreme from '../images/supreme.png';

export function getData(){
    return[
        {title: "Alyx puffer", price: 12.990, image: alyxpng, id:1},
        {title: "Disel jacket", price: 9.990, image: diselpng, id:2},
        {title: "Stone island", price: 13.990, image: jacketpng, id:3},
        {title: "Zip hodie", price: 11.990, image: stoneypng, id:1},
        {title: "Supreme x dickies", price: 12.990, image: supreme}
    ]
}