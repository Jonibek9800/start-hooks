import React from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const divRef = React.createRef();
    const handleChangeDiv = () => {
        divRef.current.style.width = "150px";
        divRef.current.style.height = "80px";
        divRef.current.textContent = "text";
    };
    const clearHandleChangeDiv = () => {
        divRef.current.style.width = "60px";
        divRef.current.style.height = "40px";
        divRef.current.textContent = "Блок";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-5">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={divRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-primary mt-3" onClick={handleChangeDiv}>Изменить блок</button>
            <button className="btn btn-primary mx-3 mt-3" onClick={clearHandleChangeDiv}>Сбросить изменения</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
