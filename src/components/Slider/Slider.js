import React from 'react';
import SliderComponent from '../Common/SliderComponent';



const Slider = ({data,setData}) => {
    const bank_limit = 10000; 
    return (
        <div>
            <SliderComponent
                defaultValue={data.homeValue}
                min={1000}
                max={bank_limit}
                step={100}
                value={data.homeValue}
                label={"Home Value"}
                unit={"$"}
                amount={data.homeValue}
                onChange={(e,value) =>setData({
                    ...data,
                    homeValue :value ,
                    downPayment : value * 0.2,
                    loanAmount : value * 0.8,
                }) }
            ></SliderComponent>
            <SliderComponent
                defaultValue={data.downPayment}
                min={0}
                max={data.homeValue}
                value={data.downPayment}
                step={100}
                label={"Down Payment"}
                unit={"$"}
                amount={data.downPayment}
                onChange={(e,value) =>setData({
                    ...data,
                    downPayment :value ,
                    loanAmount : data.homeValue - value
                }) }
            ></SliderComponent>
            <SliderComponent
                defaultValue={data.loanAmount}
                min={0}
                max={data.homeValue}
                value={data.loanAmount}
                step={50}
                label={"Loan Amount"}
                unit={"$"}
                amount={data.loanAmount}
                onChange={(e,value) =>setData({
                    ...data,
                    loanAmount :value ,
                    downPayment :  data.homeValue - value
                }) }
            ></SliderComponent>
            <SliderComponent
                defaultValue={data.interest}
                min={2}
                max={18}
                value={data.interest}
                step={0.5}
                label={"Interest Rate"}
                unit={"%"}
                amount={data.interest}
                onChange={(e,value) =>setData({
                    ...data,
                    interest :value 
                }) }
            ></SliderComponent>
        </div>
    );
};

export default Slider;