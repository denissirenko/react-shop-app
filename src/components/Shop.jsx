import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from '../config';

import {ShopContext} from '../context';

import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Card } from './Card';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

export const Shop = () => {
    const {loading, order, isBasketShow, alertName, setGoods} = useContext(ShopContext);

    useEffect( function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.featured);
            });
            // eslint-disable-next-line
    }, []);

    return (
        <div className='container content'>
            <Card quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList />}
            {isBasketShow && (
                <BasketList />
            )}
            {alertName && <Alert />}
        </div>
    )
}
