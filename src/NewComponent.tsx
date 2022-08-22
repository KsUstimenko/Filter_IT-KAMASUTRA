import React from "react";
import {FilterType} from "./App";

type NewCurrentMoney = {
    money: currentMoney[]
    callback: (nameButton:FilterType) => void
    }

type currentMoney = {
    banknote: string
    nominal: number
    number: string
}

function NewComponent (props: NewCurrentMoney) {
    return (
          <div>
              <ul>
                  {props.money.map((objFromMoneyArr, index) => {
                      return (
                          <li key={index}>
                              <span> {objFromMoneyArr.banknote}</span>
                              <span> {objFromMoneyArr.nominal}</span>
                              <span> {objFromMoneyArr.number}</span>
                          </li>
                      )
                  })}
              </ul>
              <div style={{marginLeft: '35px'}}>
                  <button onClick={() => props.callback('all')}>all</button>
                  <button onClick={() => props.callback('ruble')}>rubles</button>
                  <button onClick={() => props.callback('dollar')}>dollars</button>
              </div>
          </div>
    );
}

export {NewComponent}