import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleTabs } from '../redux/actions';
import { TABS } from '../redux/actions/type';
import './Tabs.css'

export default function Tabs({currentTab}) {

    const dispatch = useDispatch();

    return (
        TABS.map((tab) => (
            <button
            className={tab === currentTab ? 'button-tabs selected' : 'button-tabs'}
            onClick={ () => dispatch(toggleTabs(tab))}
            >
                {tab}
            </button>
        ))
    )
}
