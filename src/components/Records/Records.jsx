import React,{useState} from 'react';
import {Row,Col, Select, Icon, DatePicker, Card, CardTitle, Pagination} from 'react-materialize';
import style from './Records.module.css';

const Records = ({records}) => {

    const badgeClickHandler = (e)=> {
        e.currentTarget.classList.toggle(style.filterBadge_active);
    }

    return (
        <Row style={{margin:0}}>
            <Col l={4}>
                <form className={style.filterBlock}>
                    <h4 className={style.filterBlock_headlines}>Фильтры: </h4>
                    <h5 className={style.filterBlock_headlines}>Место: </h5>

                    <Select
                        className={style.filterBlock_inputs}
                        icon={<Icon>cloud</Icon>}
                        id="Select-15"
                        multiple={false}
                        label="Климат"
                        options={{
                            classes: "white-text light",
                            dropdownOptions: {
                                alignment: 'left',
                                autoTrigger: true,
                                closeOnClick: true,
                                constrainWidth: true,
                                coverTrigger: true,
                                hover: false,
                                inDuration: 150,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 250
                            }
                        }}
                        value=""
                    >
                        <option value="2">
                            Жаркий
                        </option>
                        <option value="3">
                            Холодный
                        </option>
                    </Select>

                    <Select
                        className={style.filterBlock_inputs}
                        icon={<Icon>cloud</Icon>}
                        id="Select-15"
                        multiple={false}
                        label="Страна проведения"
                        options={{
                            classes: "white-text light",
                            dropdownOptions: {
                                alignment: 'left',
                                autoTrigger: true,
                                closeOnClick: true,
                                constrainWidth: true,
                                coverTrigger: true,
                                hover: false,
                                inDuration: 150,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 250
                            }
                        }}
                        value=""
                    >
                        <option value="2">
                            Россия
                        </option>
                        <option value="3">
                            США
                        </option>
                    </Select>

                    <Select
                        className={style.filterBlock_inputs}
                        icon={<Icon>cloud</Icon>}
                        id="Select-15"
                        multiple={false}
                        label="Локация проведения"
                        options={{
                            classes: "white-text light",
                            dropdownOptions: {
                                alignment: 'left',
                                autoTrigger: true,
                                closeOnClick: true,
                                constrainWidth: true,
                                coverTrigger: true,
                                hover: false,
                                inDuration: 150,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 250
                            }
                        }}
                        value=""
                    >
                        <option value="2">
                            Тверь
                        </option>
                        <option value="3">
                            НЕВАДА
                        </option>
                    </Select>
                    <h5 className={style.filterBlock_headlines}>Период: </h5>
                    <DatePicker
                        id="DatePicker-7"
                        label="Дата начала: "
                        options={{
                            autoClose: false,
                            container: null,
                            defaultDate: null,
                            disableDayFn: null,
                            disableWeekends: false,
                            events: [],
                            firstDay: 0,
                            format: 'mmm dd, yyyy',
                            i18n: {
                                cancel: 'Cancel',
                                clear: 'Clear',
                                done: 'Ok',
                                months: [
                                    'January',
                                    'February',
                                    'March',
                                    'April',
                                    'May',
                                    'June',
                                    'July',
                                    'August',
                                    'September',
                                    'October',
                                    'November',
                                    'December'
                                ],
                                monthsShort: [
                                    'Jan',
                                    'Feb',
                                    'Mar',
                                    'Apr',
                                    'May',
                                    'Jun',
                                    'Jul',
                                    'Aug',
                                    'Sep',
                                    'Oct',
                                    'Nov',
                                    'Dec'
                                ],
                                nextMonth: '›',
                                previousMonth: '‹',
                                weekdays: [
                                    'Sunday',
                                    'Monday',
                                    'Tuesday',
                                    'Wednesday',
                                    'Thursday',
                                    'Friday',
                                    'Saturday'
                                ],
                                weekdaysAbbrev: [
                                    'S',
                                    'M',
                                    'T',
                                    'W',
                                    'T',
                                    'F',
                                    'S'
                                ],
                                weekdaysShort: [
                                    'Sun',
                                    'Mon',
                                    'Tue',
                                    'Wed',
                                    'Thu',
                                    'Fri',
                                    'Sat'
                                ]
                            },
                            isRTL: false,
                            maxDate: null,
                            minDate: null,
                            onClose: null,
                            onDraw: null,
                            onOpen: null,
                            onSelect: null,
                            parse: null,
                            setDefaultDate: false,
                            showClearBtn: false,
                            showDaysInNextAndPreviousMonths: false,
                            showMonthAfterYear: false,
                            yearRange: 10
                        }}
                    />
                    <DatePicker
                        id="DatePicker-7"
                        label="Дата конца: "
                        options={{
                            autoClose: false,
                            container: null,
                            defaultDate: null,
                            disableDayFn: null,
                            disableWeekends: false,
                            events: [],
                            firstDay: 0,
                            format: 'mmm dd, yyyy',
                            i18n: {
                                cancel: 'Cancel',
                                clear: 'Clear',
                                done: 'Ok',
                                months: [
                                    'January',
                                    'February',
                                    'March',
                                    'April',
                                    'May',
                                    'June',
                                    'July',
                                    'August',
                                    'September',
                                    'October',
                                    'November',
                                    'December'
                                ],
                                monthsShort: [
                                    'Jan',
                                    'Feb',
                                    'Mar',
                                    'Apr',
                                    'May',
                                    'Jun',
                                    'Jul',
                                    'Aug',
                                    'Sep',
                                    'Oct',
                                    'Nov',
                                    'Dec'
                                ],
                                nextMonth: '›',
                                previousMonth: '‹',
                                weekdays: [
                                    'Sunday',
                                    'Monday',
                                    'Tuesday',
                                    'Wednesday',
                                    'Thursday',
                                    'Friday',
                                    'Saturday'
                                ],
                                weekdaysAbbrev: [
                                    'S',
                                    'M',
                                    'T',
                                    'W',
                                    'T',
                                    'F',
                                    'S'
                                ],
                                weekdaysShort: [
                                    'Sun',
                                    'Mon',
                                    'Tue',
                                    'Wed',
                                    'Thu',
                                    'Fri',
                                    'Sat'
                                ]
                            },
                            isRTL: false,
                            maxDate: null,
                            minDate: null,
                            onClose: null,
                            onDraw: null,
                            onOpen: null,
                            onSelect: null,
                            parse: null,
                            setDefaultDate: false,
                            showClearBtn: false,
                            showDaysInNextAndPreviousMonths: false,
                            showMonthAfterYear: false,
                            yearRange: 10
                        }}
                    />
                </form>
            </Col>
            <Col l={8}>
                <Row>
                    <Col l={4}>
                        <div onClick={badgeClickHandler} className={`${style.filterBadge} hoverable`}>
                            Для всей семьи
                        </div>
                    </Col>
                    <Col l={4}>
                        <div onClick={badgeClickHandler} className={`${style.filterBadge} hoverable`}>
                            Эскстримальные
                        </div>
                    </Col>
                    <Col l={4}>
                        <div onClick={badgeClickHandler} className={`${style.filterBadge} hoverable`}>
                            Природные
                        </div>
                    </Col>
                </Row>
                <Col>
                    {
                        records.map(record=>{
                            return (
                                <Card
                                    key={record.id}
                                    actions={[
                                        <a key="1" href="#">Это ссылка</a>
                                    ]}
                                    closeIcon={<Icon>close</Icon>}
                                    header={<CardTitle image={record.img} />}
                                    horizontal
                                    revealIcon={<Icon>more_vert</Icon>}
                                    className={`small hoverable ${style.record}`}
                                >
                                    {record.description}
                                </Card>
                            );
                        })
                    }
                    <Pagination
                        className={style.pagination}
                        activePage={3}
                        items={5}
                        leftBtn={<Icon>chevron_left</Icon>}
                        rightBtn={<Icon>chevron_right</Icon>}
                    />
                </Col>
            </Col>
        </Row>
    );
};

export default Records;