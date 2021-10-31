import React,{useState, useEffect} from 'react';
import {Col, Row} from "react-materialize";
import style from './Persons.module.css';
import Person from "../Person/Person";



const Persons = ({persons}) => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [activePerson, setActivePerson] = useState({});
    const [orderedPersons, setOrderedPerson] = useState([]);


    const clickHandler = (e)=>{
        if(e.target.closest('div').hasAttribute('data-id')){
            let index = e.target.closest('div').dataset.id;
            setActiveIndex(index);
        }
    }


    useEffect(()=>{
        let currentPerson = persons.filter((person, index)=>index == activeIndex)
        currentPerson = currentPerson[0]
        setActivePerson(currentPerson);
        setOrderedPerson(getOrderedList(persons))
    }, [activeIndex])

    const getOrderedList = (persons)=>{
        const orderedList = persons.map((person,index)=>{
            //TODO алгоритм раздачки порядка (написать)

            // let order = 0;
            // if(index != activeIndex){
            //     order = Math.round(Math.random())
            // }
            // person.order = order;
            return person;
        })
        return orderedList;

    }




    return (
        <Col className={style.persons}>
            <div className={style.personsRow}>
                {
                    orderedPersons.map((person,index)=><Person key={index} isActive={index == activeIndex} clickHandler={clickHandler} {...person} />)
                }
            </div>
            <Row>
                <Col offset={'l3'} l={6} className={`${style.activePersonTextContent} `}>
                    <h3>{activePerson.firstname} {activePerson.surname}</h3>
                    <h4>{activePerson.profession}</h4>
                    <p>{activePerson.description}</p>
                </Col>
            </Row>
        </Col>
    );
};

export default Persons;