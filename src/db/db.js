import alyxpng from '../images/alyx.png';
import diselpng from '../images/disel.png';
import jacketpng from '../images/jacket.png';
import stoneypng from '../images/stoney.png';
import supreme from '../images/supreme.png';

export function getData(){
    return[
        {title: "Alyx puffer", price: 12990, Image: alyxpng, id:1},
        {title: "Disel jacket", price: 9990, Image: diselpng, id:2},
        {title: "Stone island", price: 13990, Image: jacketpng, id:3},
        {title: "Zip hodie", price: 11990, Image: stoneypng, id:4},
        {title: "Supreme", price: 12990, Image: supreme, id:5}
    ]
}