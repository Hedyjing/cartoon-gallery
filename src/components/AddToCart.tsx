import React, { useContext } from "react";
import { setStateContext } from "../AppState";
import { CartoonProps } from "./Cartoon";

export const withAddToCart = (ChildComponent: React.ComponentType<CartoonProps>) => {

  // 返回一个匿名的函数式组件
  return (props: {id:number, name: string, email: string}) => {
    const setState = useContext(setStateContext);
    const addToCart = (id: number, name: string) => {
      if (setState) {
        setState((state) => {
          return {
            ...state,
            shoppingCart: { items: [...state.shoppingCart.items, { id: id, name: name }] }
          }
        })
      }
    }

    return <ChildComponent {...props} addToCart={addToCart}/>
  }
}